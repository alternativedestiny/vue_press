# 7. SciPy 笔记

## 1. 滤波器（signal）

1. 巴特沃斯滤波器
   1. 函数

        ```python
        scipy.signal.butter(N, Wn, btype='low', analog=False, output='ba', fs=None)
        ```

   2. 参数
      1. 滤波器阶数 N
      2. 归一化截至频率 Wn=2 *截止频率/采样频率
      3. 滤波器类别 btype（可选）: 'lowpass' 'highpass' 'bandpass' 'bandstop'
      4. 模拟/数字信号 analog（可选）: True / False(default)

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

    - [参考链接🔗](https://www.jb51.net/article/160925.htm)

## 2. 相关性分析

1. 相关性系数：其范围（-1，1），正值表示正相关，负值表示负相关，0 表示不相关
2. Pearson 皮尔逊

    > 两个变量中的任意一个不能一成不变，即标准差为 0

    ```python
    from scipy.stats import pearsonr
    # pear：pearson 相关系数
    # p：p 值越小，表示相关系数越显著，一般 p 值在 500 个样本以上时有较高的可靠性
    pear, p = pearsonr(x, y)
    ```

3. Spearman 斯皮尔曼

    > 没有数据条件要求，使用较广

    ```python
    from scipy.stats import spearmanr
    rho, p = spearmanr(x, y)
    ```

4. Kendall 肯德尔

    > 计算对象是分类变量

    ```python
    from scipy.stats import kendalltau
    tau, p = kendalltau(x, y)
    ```

5. 参考 [统计学之三大相关性系数🔗](https://blog.csdn.net/t15600624671/article/details/77247822)
