import pandas as pd

class SimpleMovingAverageAnalysis:

    def __init__(self, history, trigger_zone, past_duration, current_price) -> None:
        self.__history = pd.Series(history['Close'])
        self.__past_duration = past_duration
        self.__trigger_zone = (current_price / 100) * trigger_zone
        self.__current_price = current_price

    def sma(self):
        if(len(self.__history) < 201):
            return None
        SMA=pd.Series()
        for i in range(self.__past_duration,len(self.__history)):
            index = self.__history.index[i]
            SMA = SMA.append(pd.Series([self.__history[i-self.__past_duration:i].sum()/self.__past_duration], index=[index]))
        SMA[0:self.__past_duration]=SMA[self.__past_duration+1]
        if(
            (SMA.values[-1] <= self.__current_price+self.__trigger_zone) &
            (SMA.values[-1] >= self.__current_price-self.__trigger_zone)
        ):
            return SMA
        else:
            return None