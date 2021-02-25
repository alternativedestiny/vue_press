# Python 代码块

## 1. 可变进度百分比

```python
import sys

# 输出进度百分比 rate_of_process
# r: 当前步数，p: 总步数，s: 文本
def rop(r, p, s='rate of process'):
    # \r 退格到行首
    str1 = s + ': ' + str(round((r / p) * 100, 2)) + '%'
    sys.stdout.write('\r%s' % str1)
    sys.stdout.flush()
    if r == p:
        sys.stdout.write('\n')
```

## 2. 程序计时

```python
from time import process_time, perf_counter
# 不会计算 sleep() 时间
print(process_time())
# 会计算 sleep() 时间
print(perf_counter())
```

## 3. 分段线性拟合 piecewise linear fit

1. 使用到的包`pwlf`
2. [官方文档](https://jekel.me/piecewise_linear_fit_py/)
3. 代码

    ```python
    import pwlf
    import matplotlib.pyplot as plt
    # 对数据 x,y 进行分段拟合
    my_pwlf = pwlf.PiecewiseLinFit(x, y)
    # 转折点，segments 为分段数
    breaks = my_pwlf.fit(segments)
    # 拟合的结果值
    y_hat = my_pwlf.predict(x)

    # 显示结果
    plt.plot(x, y)  # 原始数据
    plt.plot(x, y_hat)  # 拟合后的多段直线
    ```

## 4. crc 校验

1. 代码

    ```python
    def crc16(x):
        x = x.split()  # 将数据按照空格分开
        a = 0xFFFF  # 初始值
        b = 0xA001  # 校验码
        for byte in x:
            a ^= int(byte, 16)
            for i in range(8):
                last = a % 2
                a >>= 1
                if last == 1:
                    a ^= b
        s = hex(a).upper()

        return s[2:6]

    if __name__ == "__main__":
        m = input()
        print(crc16(m))

    ```

2. 备注
   1. 输入 16 进制数据，输出为两个字节的校验码
    比如输入“55 66”，输出校验码“CABE”，输入每个字节用空格分开

## 5. 多线程

1. 多线程：适用于 IO 密集型，不适用于 CPU 密集型。
2. 代码

    ```python
    import threading

    # 创建多线程函数：target 目标函数（线程内执行的函数），args 目标函数参数
    th = threading.Thread(target=check, args=(a, b, c))
    # 开线程
    th.start()
    ```

## 6. 系统识别

1. 分辨系统为 Windows 或 linux

```python
import platform

sys = platform.system()

if sys == "Windows":
    # ...
elif sys == "Linux":
    # ...
else:
    # ...

print(f"Using {sys} platform.")
```
