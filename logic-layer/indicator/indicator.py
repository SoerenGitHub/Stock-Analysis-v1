from typing import Any
from pandas import DataFrame


class Indicator:
    def get_result(self, history: DataFrame, args: Any) -> DataFrame:
        raise NotImplementedError("Please Implement this method")