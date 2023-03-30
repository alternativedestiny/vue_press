# libsvm学习笔记

## 1. libsvm安装

1. 下载安装包，根据自己的系统和Python版本选择[下载链接🔗](https://www.lfd.uci.edu/~gohlke/pythonlibs/#libsvm)
2. 安装包

    ```bash
    pip install 安装包名
    ```

3. 测试

    ```python
    from svmutil import *
    from svm import *
    y, x = [1, -1], [{1: 1, 2: 1}, {1: -1, 2: -1}]
    prob = svm_problem(y, x)
    param = svm_parameter('-t 0 -c 4 -b 1')
    model = svm_train(prob, param)
    yt = [1]
    xt = [{1: 1, 2: 1}]
    p_label, p_acc, p_val = svm_predict(yt, xt, model)
    print(p_label)
    ```

4. 能正常运行不报错就是安装成功

## 2. libsvm训练结果参数

- #iter 迭代次数
- nu 核函数类型的参数
- obj SVM文件转换为的二次规划求解得到的最小值
- rho 判决函数的偏置项b
- nsv 标准支持向量个数(0<a[i]<c)
- nbsv 边界上的支持向量个数(a[i]=c)
- total nsv 支持向量总个数
- accuracy 预测正确率

## 3. libsvm模型参数

- svm_type svm模式
- kernel_type 核函数
- gamma RBF核函数的参数
- nr_class 类别数
- total_sv 支持向量总个数
- rho 判决函数的偏置项b
- label 原始文件中的类别标识
- nr_sv 每个类的数据个数

## 4. 参考资料

[libsvm for python 安装🔗](https://blog.csdn.net/he99774/article/details/80388612)
