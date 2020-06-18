# Python 代码块

## 1. 通用型

### 1.1. 可变进度百分比

```python
import time
import sys

# 输出进度百分比 rate_of_process
# r:当前步数，p:总步数，s:文本
def rop(r, p, s='rate of process'):
    # \r 退格到行首
    str1 = s + ': ' + str(round((r / p) * 100, 2)) + '%'
    sys.stdout.write('\r%s' % str1)
    sys.stdout.flush()
    if r == p:
        sys.stdout.write('\n')
```

### 1.2. 程序计时

```python
from time import process_time, perf_counter
# 不会计算sleep()时间
print(process_time())
# 会计算sleep()时间
print(perf_counter())
```

## 2. 非通用型

### 2.1. 分段线性拟合 piecewise linear fit

1. 使用到的包`pwlf`
2. [官方文档](https://jekel.me/piecewise_linear_fit_py/)
3. 代码

    ```python
    import pwlf
    import matplotlib.pyplot as plt
    # 对数据 x,y 进行分段拟合
    my_pwlf = pwlf.PiecewiseLinFit(x, y)
    # 转折点，segments为分段数
    breaks = my_pwlf.fit(segments)
    # 拟合的结果值
    y_hat = my_pwlf.predict(x)

    # 显示结果
    plt.plot(x, y)  # 原始数据
    plt.plot(x, y_hat)  # 拟合后的多段直线
    ```
