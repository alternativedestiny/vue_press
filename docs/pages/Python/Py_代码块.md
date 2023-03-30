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

    ```bash
    pip install pwlf
    ```

2. [官方文档🔗](https://jekel.me/piecewise_linear_fit_py/)
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

## 7. 排序算法

### 7.1. 算法复杂度

| 算法     | 最优时间复杂度 | 平均时间复杂度 | 最差时间复杂度 | 最坏空间复杂度 |
| -------- | -------------- | -------------- | -------------- | -------------- |
| 快速排序 | O(n log n)     | O(n log n)     | O(n²)          | 不定           |
| 冒泡排序 | O(n)           | O(n²)          | O(n²)          | O(n)           |
| 归并排序 | O(n log n)     | O(n log n)     | O(n log n)     | O(n)           |

### 7.2. 快速排序 (python)

```python
def quick_sort(nums):
    if len(nums) <= 1:
        return nums

    left = []
    right = []
    base = nums.pop()
    for x in nums:
        if x < base:
            left.append(x)
        else:
            right.append(x)

    return quick_sort(left) + [base] + quick_sort(right)
```

### 7.3. 冒泡排序 (python)

```python
def bubble_sort(nums):
    for j in range(len(nums) - 1):
        for i in range(len(nums) - 1):
            if nums[i] > nums[i+1]:
                nums[i], nums[i+1] = nums[i+1], nums[i]
    return nums

```

## 8. 智能问答

1. 简介：通过 Transformers 模型使用别人预训练好的模型
2. 安装

    ```python
    pip install transformers
    ```

3. QA 模型：第一次运行需要下载预训练模型，所以运行较慢

    ```python
    from transformers import pipeline

    # 英文 QA
    # qa = pipeline("question-answering")
    # 中文 QA
    qa = pipeline("question-answering", model="mrm8488/bert-multi-cased-finetuned-xquadv1",
                tokenizer="mrm8488/bert-multi-cased-finetuned-xquadv1")

    question = "机器学习是什么的分支？"
    context = """机器学习是一个很热门的专业，是人工智能的一个部分，图像识别是机器学习的一个部分。"""
    result = qa(question=question, context=context)

    print("Answer:", result['answer'])  # Answer: 人工智能
    print("Score:", result['score'])    # Score: 0.9555357098579407
    ```

4. 参考 [用 PyTorch 和预训练的 Transformers 创建问答系统🔗](https://blog.csdn.net/deephub/article/details/112857017)

## 9. Python 脚本传入参数

1. sys.argv

    ```python
    # test.py
    import sys

    if __name__ == '__main__':
        v = sys.argv
        print(v)
    ```

    运行结果

    ```bash
    # 命令
    python test.py 1 2
    # 运行结果
    ['test.py', '1', '2']
    ```

2. argparse 可以用于显示 help

    ```python
    # test.py
    import argparse

    if __name__ == '__main__':
        parser = argparse.ArgumentParser(description='This is a test program')
        # 参数名，类型，默认值，help
        parser.add_argument('--a', type=str, default=None, help='String type parameter')
        args = parser.parse_args()
        print(f'Para a = {args.a}')
    ```

    运行结果

    ```bash
    # 命令：带参数 a 运行
    python test.py --a 1
    # 运行结果
    Para a = 1

    # 命令：显示 help
    python test.py -h
    # 运行结果
    usage: test.py [-h] [--a A]

    This is a test program

    optional arguments:
    -h, --help  show this help message and exit
    --a A       String type parameter
    ```

3. 参考连接 [命令行运行 Python 脚本时传入参数的三种方式🔗](https://blog.csdn.net/weixin_35653315/article/details/72886718)
