import re
from .indicator import Indicator
from .ema import ExpotentialMovingAverageAnalysis
from .sma import SimpleMovingAverageAnalysis

class IndicatorFactory:
    def create(self, indicator: str) -> Indicator:
        if indicator == 'ema':
           return ExpotentialMovingAverageAnalysis()
        elif indicator == 'sma':
            return SimpleMovingAverageAnalysis()
        else:
            return None