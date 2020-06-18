# 7. SciPy 笔记

## 1. 滤波器（signal）

- [参考链接](https://www.jb51.net/article/160925.htm)

    ```python
    from scipy import signal

    def flt(data):
        """
        低通滤波
        :param data: data need to be filtered
        :return: filtered data
        """
        b, a = signal.butter(8, 0.2, 'lowpass')
        out = signal.filtfilt(b, a, data)
        return out
    ```
