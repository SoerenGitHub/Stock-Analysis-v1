import re
from .indicator import Indicator
from .ema import ExpotentialMovingAverageAnalysis
from .sma import SimpleMovingAverageAnalysis
from .psar import ParabolicSARAnalysis

class IndicatorFactory:
    def create(self, indicator: str) -> Indicator:
        if indicator == 'ema':
           return ExpotentialMovingAverageAnalysis()
        elif indicator == 'sma':
            return SimpleMovingAverageAnalysis()
        elif indicator == 'psar':
            return ParabolicSARAnalysis()
        else:
            return None