# 4. Numpy

## 1. 数据类型 ndarray

1. 创建数组

    ```python
    import numpy as np
    # 创建一维ndarray，默认int格式
    x = np.array([1, 2, 3, 4, 5])  # ndarray [1 2 3 4 5]

    # 从数值范围创建数组：起始值，截止值，间隔
    x = np.arange(0, 5, 1)  # ndarray [0 1 2 3 4]
    # 用list的写法
    x = [t for t in range(5)]  # [0 1 2 3 4]

    # 从数值范围创建数组：起始值，截止值，值的个数
    x = np.linspace(0, 1, 3)  # ndarray [0, 0.5, 1]

    # 创建全0/1数组
    x = np.zeros(3)  # ndarray [0, 0, 0]
    x = np.ones(3)  # ndarray [1.000, 1.000, 1.000]
    # 用list的写法
    x = [0 for t in range(3)]  # [0, 0, 0]
    x = [1 for t in range(3)]  # [1, 1, 1]
    ```

2. 增删改查，[参考](https://blog.csdn.net/Tyro_java/article/details/81052638)

    ```python
    import numpy as np
    x = np.array([1, 2, 3, 4, 5])

    # 访问
    print(x[1], x[-1])  # 2 5
    print(x[:3], x[3:])  # [1 2 3] [4 5]

    # 增
    x = np.append(x, 6)  # [1 2 3 4 5 6]
    x = np.insert(x, 1, [2])  # [1 2 2 3 4 5]

    # 删
    x = np.delete(x, 2)  # [1 2 4 5]
    x = np.delete(x, [1, 3])  # [1 3 5]

    # 改
    x[2] = 20  # [ 1  2 20  4  5]

    # 查
    x = np.array([1, 2, 3, 4, 4, 5])
    # 统计元素个数
    c = np.sum(x == 4)  # 2
    # 定位元素
    c = np.where(x == 4)  # (array([3, 4], dtype=int64),)

    # 转换
    x = x.tolist()  # [1, 2, 3, 4, 5]

    ```

3. Numpy math

    ```python
    import numpy as np

    np.pi  # pi
    np.sin()  # sin
    ```

## 2. 拟合

1. 多项式拟合

    ```python
    # 对数据 x, y 进行拟合，最高次为3
    z = np.polyfit(x, y, 3)
    # 多项式
    p = np.poly1d(z)
    # 利用拟合的多项式进行计算
    y1 = p(x1)
    ```

    - [参考](https://blog.csdn.net/qq_38410730/article/details/105093434)
