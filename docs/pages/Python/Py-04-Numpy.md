# 4. Numpy 矩阵运算

## 1. 数据类型

### 1.1. 数组

1. 引用

    ```python
    import numpy as np
    ```

2. array & list

    ```python
    # 创建一维 ndarray，默认 int 格式
    x = np.array([1, 2, 3, 4, 5])  # ndarray [1 2 3 4 5]

    # 用 list 的写法
    x = [t for t in range(5)]  # [0 1 2 3 4]

    # 从数值范围创建数组：起始值，截止值，值的个数
    x = np.linspace(0, 1, 3)  # ndarray [0, 0.5, 1]

    # 创建全 0/1 数组
    x = np.zeros(3)  # ndarray [0, 0, 0]
    x = np.ones(3)  # ndarray [1.000, 1.000, 1.000]
    # 用 list 的写法
    x = [0] * 3  # [0, 0, 0]
    x = [1] * 3  # [1, 1, 1]
    ```

    ```python
    # 创建多维 ndarray, 注意是两层括号
    x = np.zeros((3, 3))    # [[0. 0. 0.] [0. 0. 0.] [0. 0. 0.]]
    
    ```

3. arange

    ```python
    # 起始值（默认 0, 包含，间隔为 1 时可以省略）
    # 截止值（不包含）
    # 间隔（默认 1, 可以省略）
    x = np.arange(0, 5, 1)  # ndarray [0 1 2 3 4]
    # 也可以简写为
    x = np.arange(5)

    # 间隔可以为负数
    x = np.arange(5, 2, -1) # ndarray [5 4 3]
    ```

4. 随机数

    ```python
    from numpy import random

    # 生成 10 个 0-1 的随机数
    x = random.random(10)

    # 生成 0-100 以内的 5 个随机整数
    x = random.randint(100, size=(5))

    # 生成 10 个服从正态分布的随机数
    x = random.randn(10)
    ```

### 1.2. 读取数组

1. 读取文件

    ```python
    file = open("filename.csv", "rb")
    # 读取 csv 文件，以逗号为间隔，跳过第一行
    data = np.loadtxt(file, delimiter=",", skiprows=1)
    a = data[行起始：终止，列起始：终止]
    ```

### 1.3. 增删改查

1. 定义数据

    ```python
    import numpy as np
    x = np.array([1, 2, 3, 4, 5])
    # 以下操作均在此 x 上操作
    ```

2. 增

    ```python
    # 在尾部增加元素 6
    x = np.append(x, 6)  # [1 2 3 4 5 6]
    # 在位置 idx=1 处增加元素 2
    x = np.insert(x, 1, [2])  # [1 2 2 3 4 5]
    ```

3. 删

    ```python
    # 删掉 idx=2 的元素
    x = np.delete(x, 2)  # [1 2 4 5]
    # 删除 idx=2 和 4 的元素
    x = np.delete(x, [1, 3])  # [1 3 5]

    # 删除一列
    x = np.delete(x, 1, axis=1) # 删除第 2 列
    # 删除多列
    x = np.delete(x, [0,-1], axis=1) # 删除第一列和最后一列

    # 删除一行
    x = np.delete(x, 1, axis=0)  # 删除第二行，axis 不能省略
    ```

4. 改

    ```python
    # 转换 ndarray 转 list
    x = x.tolist()  # [1, 2, 3, 4, 5]
    # 转换 list 转 ndarray
    x = np.array(list1)

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

8. [参考🔗](https://blog.csdn.net/Tyro_java/article/details/81052638)

### 1.4. 拼接

1. 水平拼接：行不变，列增加

    ```python
    np.hstack((a, b))   # 水平拼接 a,b
    np.concatenate((a, b), axis=1)  # 同上
    ```

2. 垂直拼接：行增加，列不变

    ```python
    np.vstack((a, b))   # 垂直拼接 a,b
    np.concatenate((a, b), axis=0)  # 同上
    ```

### 1.5. 行列变换

1. 行列变换

    ```python
    import numpy as np

    z = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])    # [[1 2 3 4], [5 6 7 8]]

    # 变成一行
    z = np.reshape(z, (-1))    # [1 2 3 4 5 6 7 8]

    # 变成 n*1, -1 表示任意值
    z = np.reshape(z, (-1, 1))  # [[1], [2], [3], [4], [5], [6], [7], [8]]

    # 变成 4*n
    z = np.reshape(z, (4, -1))  # [[1 2], [3 4], [5 6], [7 8]]

    # 转置
    z = z.T
    ```

## 2. 函数

### 2.1. 算数函数

1. 加 add

    ```python
    a = np.array([1, 2, 3])
    b = np.array(4)
    print(np.add(a, b)) # [5 6 7]

    b = np.array([4, 2, 3])
    print(np.add(a, b)) # [5 4 6]
    ```

### 2.2. 统计函数

### 2.3. 逻辑函数

1. where

    ```python
    # 条件，满足条件输出 x, 不满足输出 y
    y = np.where(condition, x, y)
    ```

    ```python
    x = np.arange(-2, 2)    # [-2 -1 0 1]
    y = np.where(x < 0, -x, x)  # [2 1 0 1]
    ```

### 2.4. 排序

1. 根据某一列排序

    ```python
    # 根据第 0 列排序，升序
    data = numpy.sort(data, axis=0)
    ```

## 3. 拟合

1. 多项式拟合

    ```python
    # 对数据 x, y 进行拟合，最高次为 3
    z = np.polyfit(x, y, 3)
    # 多项式
    p = np.poly1d(z)
    # 利用拟合的多项式进行计算
    y1 = p(x1)
    ```

    - [参考🔗](https://blog.csdn.net/qq_38410730/article/details/105093434)
