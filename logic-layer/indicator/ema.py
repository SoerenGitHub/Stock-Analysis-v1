import pandas as pd

class ExpotentialMovingAverageAnalysis:

    def __init__(self, history, trigger_zone, past_duration, current_price) -> None:
        self.__history = pd.Series(history['Close'])
        self.__past_duration = past_duration
        self.__trigger_zone = (current_price / 100) * trigger_zone
        self.__current_price = current_price

    def ema(self):
        if(len(self.__history) < 201):
            return None
            
        SF=2./(self.__past_duration+1)
            
        EMA=pd.Series()
        EMA = EMA.append(self.__history.first(offset='3D'))
        for i in range(1,len(self.__history)):
            index = self.__history.index[i]
            EMA = EMA.append(pd.Series([EMA[i-1]+SF*(self.__history[i]-EMA[i-1])], index=[index]))
        if(
            (EMA.values[-1] <= self.__current_price+self.__trigger_zone) &
            (EMA.values[-1] >= self.__current_price-self.__trigger_zone)
        ):
            return EMA
        else:
            return None