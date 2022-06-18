from typing import Any
from pandas import Series


class Indicator:
    def get_result(self, history: Series, args: Any) -> Series:
        raise NotImplementedError("Please Implement this method")