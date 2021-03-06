from typing import Any
import pandas as pd
from .indicator import Indicator


class ParabolicSARAnalysis(Indicator):

    def get_result(self, history: pd.DataFrame, args: Any):
        iaf = args.get("iaf", default=0.02, type=float)
        maxaf = args.get("maxaf", default=0.2, type=float)
        length = len(history)
        dates = list(history.index)
        high = list(history['High'])
        low = list(history['Low'])
        close = list(history['Close'])
        psar = close[0:len(close)]
        psarbull = [None] * length
        psarbear = [None] * length
        bull = True
        af = iaf
        ep = low[0]
        hp = high[0]
        lp = low[0]
        for i in range(2,length):
            if bull:
                psar[i] = psar[i - 1] + af * (hp - psar[i - 1])
            else:
                psar[i] = psar[i - 1] + af * (lp - psar[i - 1])
            reverse = False
            if bull:
                if low[i] < psar[i]:
                    bull = False
                    reverse = True
                    psar[i] = hp
                    lp = low[i]
                    af = iaf
            else:
                if high[i] > psar[i]:
                    bull = True
                    reverse = True
                    psar[i] = lp
                    hp = high[i]
                    af = iaf
            if not reverse:
                if bull:
                    if high[i] > hp:
                        hp = high[i]
                        af = min(af + iaf, maxaf)
                    if low[i - 1] < psar[i]:
                        psar[i] = low[i - 1]
                    if low[i - 2] < psar[i]:
                        psar[i] = low[i - 2]
                else:
                    if low[i] < lp:
                        lp = low[i]
                        af = min(af + iaf, maxaf)
                    if high[i - 1] > psar[i]:
                        psar[i] = high[i - 1]
                    if high[i - 2] > psar[i]:
                        psar[i] = high[i - 2]
            if bull:
                psarbull[i] = psar[i]
            else:
                psarbear[i] = psar[i]
        data = {"date":dates, "psar":psar, "psarbear":psarbear, "psarbull":psarbull}
        return pd.DataFrame(data, columns=['date', 'psar', 'psarbear', 'psarbull'])