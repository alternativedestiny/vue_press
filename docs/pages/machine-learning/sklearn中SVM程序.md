# 使用sklearn编写SVM程序

## 1. 环境

- python 3.7.2
- sklearn（python机器学习库）
- numpy（矩阵处理库）
- matplotlib（绘图库）

## 2. 程序1

1. 程序1说明

   1. 程序主要功能为二维数据分成两类
   2. 数据类型：x坐标，y坐标，标签

       ``` csv
       data_x,data_y,1
       data_x,data_y,-1
       ```

   3. 输出：分类准确率，支持向量个数

2. 程序1代码

    ```python
    # 用sklearn svm 训练rbf
    import os
    from sklearn.svm import SVC
    import matplotlib.pyplot as plt
    import numpy as np
    import csv
    from sklearn.model_selection import train_test_split, GridSearchCV
    path1 = os.path.abspath('.')


    # 加载数据
    def load(name):
        file = np.loadtxt(open(name, 'rb'), delimiter=',')
        x = file[:, [0, 1]]
        y = file[:, 2]
        return x, y


    if __name__ == "__main__":
        # 读取数据,针对二维线性不可分数据
        data, label = load('./data/train.csv')
        # 交叉验证4:1
        x_train, x_test, y_train, y_test = train_test_split(data, label, test_size=.2, random_state=0)
        # 设置参数
        c = 5000  # 惩罚参数
        g = 0.5  # 核函数参数
        # 初始化模型参数
        clf = SVC(cache_size=200, class_weight=None, coef0=0.0, C=c, decision_function_shape='ovr',
                degree=3, gamma=g, kernel='rbf', max_iter=-1, probability=False,
                random_state=None, shrinking=True, tol=0.001, verbose=False)
        clf.fit(x_train, y_train)
        # 预测data
        predict_list = clf.predict(x_test)
        # 预测精度
        precision = clf.score(x_test, y_test)
        print('第', i+1, '次 precision is : ', precision*100, "%")
        # 获取模型返回值
        n_Support_vector = clf.n_support_  # 支持向量个数
        print("支持向量个数为： ", n_Support_vector)
        Support_vector_index = clf.support_  # 支持向量索引

    ```

## 3. 程序2

1. 程序2说明

   1. 在程序1的基础上添加了画图功能

2. 程序2代码

    ```python
    # 用sklearn svm 训练，画图
    import os
    from sklearn.svm import SVC
    import matplotlib.pyplot as plt
    import numpy as np
    import csv
    from sklearn.model_selection import train_test_split
    path1 = os.path.abspath('.')


    # 加载数据
    def load(name):
        file = np.loadtxt(open(name, 'rb'), delimiter=',')
        x = file[:, [0, 1]]
        y = file[:, 2]
        return x, y


    # 用返回的参数绘制超平面
    def plot_point(data, label, Support_vector_index, clf, title):
        for i in range(np.shape(data)[0]):
            if label[i] == 1:
                plt.scatter(data[i][0], data[i][1], c='b', s=20)
            else:
                plt.scatter(data[i][0], data[i][1], c='y', s=20)
        for j in Support_vector_index:
            plt.scatter(data[j][0], data[j][1], s=100, c='', alpha=0.5, linewidth=1, edgecolor='g')
        # 画超平面
        x_min, x_max = data[:, 0].min() - 0.01, data[:, 0].max() + 0.01
        y_min, y_max = data[:, 1].min() - 0.01, data[:, 1].max() + 0.01
        h = 0.001
        xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))
        plt.xlim(xx.min(), xx.max())
        plt.ylim(yy.min(), yy.max())
        plt.xticks(())
        plt.yticks(())
        z = clf.predict(np.c_[xx.ravel(), yy.ravel()])  # SVM的分割超平面
        # Put the result into a color plot
        z = z.reshape(xx.shape)
        plt.contourf(xx, yy, z, cmap='hot', alpha=0.3)
        plt.title(title)
        plt.show()


    if __name__ == "__main__":
        # 读取数据,针对二维线性不可分数据
        data, label = load('./data/train.csv')
        # 交叉验证
        x_train, x_test, y_train, y_test = train_test_split(data, label, test_size=.2, random_state=0)
        # 参数设置
        c = 1000
        g = 0.1
        # 初始化模型参数
        clf = SVC(cache_size=200, class_weight=None, coef0=0.0, C=c, decision_function_shape='ovr',
                degree=3, gamma=g, kernel='rbf', max_iter=-1, probability=False,
                random_state=None, shrinking=True, tol=0.001, verbose=False)
        clf.fit(x_train, y_train)
        # 预测data
        predict_list = clf.predict(x_test)
        # 预测精度
        precision = clf.score(x_test, y_test)
        print('第', i+1, '次 precision is : ', precision*100, "%")
        # 获取模型返回值
        n_Support_vector = clf.n_support_  # 支持向量个数
        print("支持向量个数为： ", n_Support_vector)
        Support_vector_index = clf.support_  # 支持向量索引
        title = 'C=' + str(c) + ', gamma=' + str(g)
        # 画图
        plot_point(data, label, Support_vector_index, clf, title)

    ```
