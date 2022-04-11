# 15. Scikit-learn

## 1. 简介

1. Scikit-learn（曾叫做 scikits.learn 还叫做 sklearn）是用于 Python 编程语言的自由软件机器学习库。它的特征是具有各种分类、回归和聚类算法，包括支持向量机、随机森林、梯度提升、k-平均聚类和 DBSCAN，它被设计协同于 Python 数值和科学库 NumPy 和 SciPy。
2. 安装

    ```bash
    pip install sklearn
    ```

3. 官方 [中文文档](https://sklearn.apachecn.org/#/)

## 2. 常用函数

### 2.1. 归一化

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

### 2.2. 分配训练集和测试集

1. train_test_split

    ```python
    from sklearn.model_selection import train_test_split

    x_train, x_test, y_train, y_test = train_test_split(x_data, y_data, test_size=0.1, random_state=42)
    # x_data: 要划分的样本特征集
    # y_data: 要划分的样本结果
    # test_size: 样本占比，如果是整数的话就是样本的数量
    # random_state: 随机数的种子
    ```

## 3. 聚类 Clustering

### 3.1. 层次聚类 Hierarchical clustering

1. 使用 sklearn 中的 AgglomerativeClustering，其过程为
   1. 将每一个元素定为一类
   2. 每一轮都合并指定距离最小的一类
   3. 直到所有的元素都归为同一类

2. 聚类参数

    | 参数               | 默认值    | 简介               |
    | ------------------ | --------- | ------------------ |
    | n_clusters         | 2         | 聚类个数           |
    | affinity           | euclidean | 距离的类型         |
    | memory             | none      | 用于缓存输出的结果 |
    | connectivity       | none      | 连接矩阵           |
    | compute_full_tree  | auto      | 是否生成完整的树   |
    | linkage            | ward      | 指定距离           |
    | distance_threshold | none      | 距离阈值           |

   1. compute_full_tree：为`auto`时在满足 n_clusters 时训练停止，为`true`时会继续训练从而生成一颗完整的树
   2. 指定距离：
      - ward：最小化正在合并的集群的方差
      - complete：使用两个集合的每个观测距离的平均值。
      - average：使用两个集合的所有观测值之间的最大距离。
      - single：两个集合的所有观测值之间的距离的最小值。
   3. distance_threshold：链接距离阈值，超过该阈值，集群将不被合并。如果该值不为 0，n_clusters 必须为 0，compute_full_tree 必须为 true

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

3. 参数

    | linkage  | 中文名 | 说明     |
    | -------- | ------ | -------- |
    | ward     | 单链接 | 最小距离 |
    | complete | 全链接 | 最大距离 |
    | average  | 均链接 | 平均距离 |

4. 示例：以相关性系数作为聚类依据，其数据格式如下

    | Pear | a    | b    | c    | d    |
    | ---- | ---- | ---- | ---- | ---- |
    | a    | 1    | 0.53 | 0.67 | 0.98 |
    | b    | 0.53 | 1    | 0.89 | 0.21 |
    | c    | 0.67 | 0.89 | 1    | 0.74 |
    | d    | 0.98 | 0.21 | 0.74 | 1    |

    ```python
    import pandas as pd
    from sklearn.cluster import AgglomerativeClustering

    data = pd.DataFrame({'a': [1.0, 0.53, 0.67, 0.98],
                        'b': [0.53, 1.0, 0.89, 0.21],
                        'c': [0.67, 0.89, 1.0, 0.74],
                        'd': [0.98, 0.21, 0.74, 1.0]},
                        index=list('abcd'))

    # linkage：ward-单链接（最小距离），complete-全链接（最大距离），average-均链接（平均距离）
    sk = AgglomerativeClustering(2, linkage='ward')  # 分 2 个类
    sk.fit(data)
    index = data.index  # [a,b,c,d]
    # 分类结果
    out = sk.labels_  # [1 0 0 1]
    ```

    > 对应的结果：两个区域分别为 [a, d] 和 [b, c]

## 4. 参考

- [Agglomerative 层次聚类](https://blog.csdn.net/Haiyang_Duan/article/details/77995665)

### 4.1. k 均值聚类 k-means

## 5. 随机森林 Random Forest

### 5.1. 简介

1. 简介

    > 随机森林是由很多决策树构成的，不同决策树之间没有关联。当我们进行分类任务时，新的输入样本进入，就让森林中的每一棵决策树分别进行判断和分类，每个决策树会得到一个自己的分类结果，决策树的分类结果中哪一个分类最多，那么随机森林就会把这个结果当做最终的结果。

2. 介绍参考 [随机森林](https://easyai.tech/ai-definition/random-forest/)
3. 应用场景：分类，回归，聚类，异常检测
