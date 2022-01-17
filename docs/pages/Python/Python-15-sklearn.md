# 15. Scikit-learn

## 1. 简介

1. Scikit-learn（曾叫做 scikits.learn 还叫做 sklearn）是用于 Python 编程语言的自由软件机器学习库。它的特征是具有各种分类、回归和聚类算法，包括支持向量机、随机森林、梯度提升、k-平均聚类和 DBSCAN，它被设计协同于 Python 数值和科学库 NumPy 和 SciPy。
2. 安装

    ```bash
    pip install sklearn
    ```

## 2. 归一化

1. 归一化

    ```python
    from sklearn.preprocessing import MinMaxScaler
    import numpy as np

    # 归一化范围 0~1
    data = np.array([1, 2, 3, 4, 5])    # [1 2 3 4 5]
    scaler = MinMaxScaler(feature_range=(0, 1)) # 创建缩放器，范围 0~1
    data = np.reshape(data, (-1, 1))  # 数据变成 n*1 [[1], [2], [3], [4], [5]]
    data = scaler.fit_transform(data)  # [[0.  ], [0.25], [0.5 ], [0.75], [1.  ]]
    ```

2. 归一化还原

    ```python
    # 接续上述代码
    data = scaler.inverse_transform(data)   # [[1.], [2.], [3.], [4.], [5.]]
    ```

## 3. 聚类 Cluster

### 3.1. 层次聚类 AgglomerativeClustering

1. 聚类

    ```python
    from sklearn.cluster import AgglomerativeClustering

    zones = 10  # 聚类个数，即聚成几类
    data = pd.read_csv()    # 聚类数据，比如 Pearson 相关性系数
    
    # 聚类器（聚类个数，聚类方法）
    sk = AgglomerativeClustering(zones, linkage='ward')
    # 聚类
    sk.fit(data)

    # 输出结果
    out = sk.labels_    # 每个数据的类别编号
    ```

2. 参数

    | linkage  | 中文名 | 说明     |
    | -------- | ------ | -------- |
    | ward     | 单链接 | 最小距离 |
    | complete | 全链接 | 最大距离 |
    | average  | 均链接 | 平均距离 |

### 3.2. k 均值聚类 k-means