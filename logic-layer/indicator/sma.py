from typing import Any
import pandas as pd
from .indicator import Indicator

class SimpleMovingAverageAnalysis(Indicator):

    def get_result(self, history: pd.Series, args: Any):
        past_duration = args.get("duration", default=200, type=int)
        history = history['Close']
        if(len(history) < 201):
            return None
        SMA=pd.Series()
        for i in range(past_duration,len(history)):
            index = history.index[i]
            SMA = SMA.append(pd.Series([history[i-past_duration:i].sum()/past_duration], index=[index]))
        SMA[0:past_duration]=SMA[past_duration+1]
        return pd.DataFrame({'date':SMA.index, 'sma':SMA.values})