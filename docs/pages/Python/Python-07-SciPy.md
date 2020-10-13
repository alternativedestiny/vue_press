# 7. SciPy 笔记

## 1. 滤波器（signal）

1. 巴特沃斯滤波器
   1. 函数

        ```python
        scipy.signal.butter(N, Wn, btype='low', analog=False, output='ba', fs=None)
        ```

   2. 参数
      1. 滤波器阶数N
      2. 归一化截至频率Wn=2*截止频率/采样频率
      3. 滤波器类别btype(可选): 'lowpass' 'highpass' 'bandpass' 'bandstop'
      4. 模拟/数字信号analog(可选): True / False(default)

   3. 代码

        ```python
        from scipy import signal

        def flt(data):
            """
            低通滤波
            :param data: data need to be filtered
            :return: filtered data
            """
            # noinspection PyTupleAssignmentBalance
            b, a = signal.butter(8, 0.2, 'lowpass')
            out = signal.filtfilt(b, a, data)
            return out
        ```

    - [参考链接](https://www.jb51.net/article/160925.htm)
