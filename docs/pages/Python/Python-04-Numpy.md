# 4. Numpy

## 1. 数据类型 ndarray

### 1.1. 创建数组

1. 头文件

    ```python
    import numpy as np
    ```

2. ndarray & list

    ```python
    # 创建一维 ndarray，默认 int 格式
    x = np.array([1, 2, 3, 4, 5])  # ndarray [1 2 3 4 5]

    # 从数值范围创建数组：起始值，截止值，间隔
    x = np.arange(0, 5, 1)  # ndarray [0 1 2 3 4]
    # 用 list 的写法
    x = [t for t in range(5)]  # [0 1 2 3 4]

    # 从数值范围创建数组：起始值，截止值，值的个数
    x = np.linspace(0, 1, 3)  # ndarray [0, 0.5, 1]

    # 创建全 0/1 数组
    x = np.zeros(3)  # ndarray [0, 0, 0]
    x = np.ones(3)  # ndarray [1.000, 1.000, 1.000]
    # 用 list 的写法
    x = [0 for t in range(3)]  # [0, 0, 0]
    x = [1 for t in range(3)]  # [1, 1, 1]
    ```

3. 随机数

    ```python
    from numpy import random

    # 生成 0-100 以内的 5 个随机整数
    x = random.randint(100, size=(5))
    ```

### 1.2. 读取数组

1. 读取文件

    ```python
    file = open("filename.csv", "rb")
    # 读取 csv 文件，以逗号为间隔，跳过第一行
    data = np.loadtxt(file, delimiter=",", skiprows=1)
    a = data[行起始：终止，列起始：终止]
    ```

### 1.3. 增删改查，[参考](https://blog.csdn.net/Tyro_java/article/details/81052638)

1. 定义数据

    ```python
    import numpy as np
    x = np.array([1, 2, 3, 4, 5])
    ```

2. 增

    ```python
    # 增
    x = np.append(x, 6)  # [1 2 3 4 5 6]
    x = np.insert(x, 1, [2])  # [1 2 2 3 4 5]
    ```

3. 删

    ```python
    # 删
    x = np.delete(x, 2)  # [1 2 4 5]
    x = np.delete(x, [1, 3])  # [1 3 5]
    ```

4. 改

    ```python
    # 转换
    x = x.tolist()  # [1, 2, 3, 4, 5]

    # 修改值
    x[2] = 20  # [ 1  2 20  4  5]
    ```

5. 查

    ```python
    # 访问
    print(x[1], x[-1])  # 2 5
    print(x[:3], x[3:])  # [1 2 3] [4 5]

    # 查
    x = np.array([1, 2, 3, 4, 4, 5])
    # 统计元素个数
    c = np.sum(x == 4)  # 2
    # 定位元素
    c = np.where(x == 4)  # (array([3, 4], dtype=int64),)
    ```

6. Clip

    ```python
    # 限制数据的最大最小值
    ```

7. Numpy math

    ```python
    import numpy as np

    np.pi  # pi
    np.sin()  # sin
    ```

## 2. 拟合

1. 多项式拟合

    ```python
    # 对数据 x, y 进行拟合，最高次为 3
    z = np.polyfit(x, y, 3)
    # 多项式
    p = np.poly1d(z)
    # 利用拟合的多项式进行计算
    y1 = p(x1)
    ```

    - [参考](https://blog.csdn.net/qq_38410730/article/details/105093434)
