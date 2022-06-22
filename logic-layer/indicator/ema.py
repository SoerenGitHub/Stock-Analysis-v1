from typing import Any
import pandas as pd

from .indicator import Indicator

class ExpotentialMovingAverageAnalysis(Indicator):

    def get_result(self, history: pd.DataFrame, args: Any) -> pd.DataFrame:
        history = history['Close']
        past_duration = args.get("duration", default=200, type=int)
        if(len(history) < 201):
            return None
            
        SF=2./(past_duration+1)
            
        EMA=pd.Series()
        EMA = EMA.append(history.first(offset='3D'))
        for i in range(1,len(history)):
            index = history.index[i]
            EMA = EMA.append(pd.Series([EMA[i-1]+SF*(history[i]-EMA[i-1])], index=[index]))
        return pd.DataFrame({'date':EMA.index, 'ema':EMA.values})