# 6. Matplotlib 绘图

## 1. 绘图种类

### 1.1. plot 折线绘图

1. 代码

    ```python
    import matplotlib.pyplot as plt

    plt.figure()
    plt.plot(x1, y1, x2, y2)
    plt.show()
    ```

2. plot 设置，更多设置参考 [官方文档](https://matplotlib.org/3.2.0/api/_as_gen/matplotlib.pyplot.plot.html)

    ```python
    plt.plot([1, 2, 3], [1, 1, 1], 'b-', label='line 1', linewidth=2)  # 蓝色直线
    plt.plot([1, 2, 3], [2, 2, 2], 'g--', label='line 2', linewidth=2)  # 绿色虚线
    plt.plot([1, 2, 3], [3, 3, 3], 'ro-.', label='line 3', linewidth=2)  # 红色带圈点划线
    plt.plot([1, 2, 3], [4, 4, 4], 'cv:', label='line 4', linewidth=2)  # 蓝绿色倒三角点线
    plt.plot([1, 2, 3], [5, 5, 5], 'm^', label='line 5', linewidth=2)  # 紫红色正三角
    plt.plot([1, 2, 3], [6, 6, 6], 'y<', label='line 5', linewidth=2)  # 黄色左三角
    plt.plot([1, 2, 3], [7, 7, 7], 'k>', label='line 5', linewidth=2)  # 黑色右三角
    ```

    <img src='../images/plot.png' width=600>

### 1.2. scatter 散点图

1. 带颜色区分的散点图

### 1.3. bar 柱状图

1. 基础柱状图

    ```python
    import matplotlib.pyplot as plt

    x = list('abcd')
    y = [1, 2, 3, 4]

    plt.figure()
    plt.bar(x, y)
    plt.show()
    ```

    <img src='../images/2021-08-12_15.png' width=600>

2. 参数

    ```python
    bar(x, height, width=0.8, bottom=None, ***, align='center', data=None, **kwargs)
    ```

    | 参数   | 功能                                         |
    | ------ | -------------------------------------------- |
    | x      | x 坐标                                       |
    | height | 高度，即 y 值                                |
    | width  | 柱宽，取值在 0-1 之间，默认 0.8              |
    | bottom | 柱状图的起始位置                             |
    | align  | 柱状图的中心位置，'edge'左边缘，'center'中心 |

3. 动态柱宽

    > 有时需要根据数据设置柱状图列宽和偏移量，下面给出推荐设置

    ```python
    def plot(x, y):
        # 要求是等间距 x 坐标
        delta = x[1] - x[0]

        # 图像向右偏移半个坐标（柱状图位于两个坐标正中）
        # 动态柱宽 0.9 * delta 比较好看，可以根据需求适当调整
        plt.bar(np.array(x) + 0.5 * delta, y, width=0.9 * delta)
    ```

### 1.4. pie 饼图

1. 代码

    ```python
    import matplotlib.pyplot as plt

    labels = 'a', 'b', 'c', 'd'
    sizes = [15, 30, 45, 10]
    explode = (0, 0.1, 0, 0)

    plt.subplots()
    # explode: 每个楔子偏离的距离
    # autopct: 自动显示饼图百分比
    plt.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%', shadow=True, startangle=90)
    plt.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

    plt.show()
    ```

    <img src='../images/plt_pie.png' width=512>

2. step 阶梯图

## 2. 图片设置

### 2.1. 坐标轴

1. 坐标轴反向

    ```python
    ax.invert_xaxis()  # x 坐标轴反向
    ```

2. 设置坐标值

    ```python
    # 按照需求设置坐标，坐标一定要有对应的数据
    x_axis = ['2018-09-01', '2018-10-01', '2018-11-01', '2018-12-01', '2018-12-31']
    plt.xticks(x_axis, rotation=15)  # 刻度倾斜
    # 还可以对坐标重命名，并顺时针旋转坐标 15°
    x_axis = ['2018-01-01 00:01:00', '2018-01-02 00:00:00', '2018-01-03 00:00:00']
    plt.xticks(x_axis, ('a', 'b', 'c'), rotation=-15)  # 将横坐标值重命名为 a,b,c
    ```

    ```python
    # 按照等间隔数值设置坐标
    plt.xticks(np.arange(0, 25, 4))  # 范围 0-25，分度值 4

    # 不显示坐标
    plt.xticks([])  # 不显示 x 轴坐标
    plt.yticks([])  # 不显示 y 轴坐标
    ```

3. 设置坐标限位

    ```python
    # 数值型
    plt.xlim(0, 24)
    plt.ylim(0, 10)

    # 日期型
    plt.xlim(datetime.strptime('2019-05-12', '%Y-%m-%d'), datetime.strptime('2019-05-15', '%Y-%m-%d'))
    ```

4. 设置轴标签

    ```python
    plt.figure()
    plt.xlabel("x")
    plt.ylabel("y")

    # 或
    fig, ax = plt.subplots()
    ax.set_xlabel('x')
    ax.set_ylabel('y')
    ```

5. 坐标轴字体大小

    ```python
    plt.figure()
    plt.tick_params(labelsize=14)

    # 或
    fig, ax = plt.subplots()
    ax.tick_params(labelsize=14)
    ```

6. 坐标轴坐标倾斜

    ```python
    plt.xticks(x_axis, rotation=15)  # 刻度倾斜
    ```

7. 坐标轴偏移

    ```python
    import numpy as np

    # 以柱状图为例，+图像右移，-图像左移
    plt.bar(np.array(x_list) +- 偏移量，y)
    ```

### 2.2. 图例 & 标题

1. plt.legend

    ```python
    # 设置图例
    plt.plot(x1, y1, label='a')
    plt.plot(x2, y2, label='b')
    plt.legend()
    ```

2. 位置 `loc=string or code`

    | 位置 string    | 位置 code | 位置            |
    | -------------- | --------- | --------------- |
    | 'best'         | 0         | 自适应          |
    | 'upper right'  | 1         | 右上↗           |
    | 'upper left'   | 2         | 左上↖           |
    | 'lower left'   | 3         | 左下↙           |
    | 'lower right'  | 4         | 右下↘           |
    | 'right'        | 5         | 右→             |
    | 'center left'  | 6         | 左←             |
    | 'center right' | 7         | 右→（同 rigth） |
    | 'lower center' | 8         | 下↓             |
    | 'upper center' | 9         | 上↑             |
    | 'cneter'       | 10        | 中心            |

3. 标题

    ```python
    plt.title('图例', size=16)
    ```

4. 设置图例的显示方式

    ```python
    # 图例显示位置 1, 6 列
    plt.legend(loc=1, ncol=6)

    # 图例显示到图外：loc 此时表示定位点，bbox_to_anchor 表示定位点的位置
    # 定位点为图例左上角，偏移位置 x=1.05,y=1.0
    plt.legend(loc=2, bbox_to_anchor=(1.05, 1.0), borderaxespad=0.)
    ```

5. legend 参数，更多配置参考 [官方文档](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html)

### 2.3. 多图设置

1. subplot(nrows, ncols, index, **kwargs)

    ```python
    plt.subplot(2, 2, 1)  # 或 plt.subplot(221)
    plt.plot(x1, y1)
    plt.subplot(2, 2, 2)  # 或 plt.subplot(222)
    plt.plot(x2, y2)
    plt.subplot(2, 2, 3)  # 或 plt.subplot(223)
    plt.plot(x2, y2)
    plt.subplot(2, 2, 4)  # 或 plt.subplot(224)
    plt.plot(x2, y2)
    ```

2. subplots

    ```python
    # 1. 类似 subplot 的分图功能
    # 1xn 类型
    fig, ax = plt.subplots(1, 2)
    ax[0].plot(x1, y1)
    ax[1].plot(x2, y2)

    # 2x2 以上
    fig, ax = plt.subplots(2, 2)
    ax[0, 0].plot(x1, y1)
    ax[1, 0].plot(x2, y2)
    ```

### 2.4. 多坐标轴

1. 副坐标轴功能

    ```python
    import matplotlib.pyplot as plt

    x1 = list('abcd')
    x2 = x1
    y1 = [1, 2, 3, 4]
    y2 = [4, 3, 2, 1]

    fig, ax1 = plt.subplots()

    ax1.plot(x1, y1, label='a')
    # 设置 ax2 与 ax1 公用横坐标
    ax2 = ax1.twinx()
    # 第二条线必须指定其他颜色，不然都会显示成蓝色
    ax2.plot(x2, y2, c='r', label='b')

    plt.title('abc')
    plt.show()
    ```

2. 图例融合

    ```python
    import matplotlib.pyplot as plt

    x1 = list('abcd')
    x2 = x1
    y1 = [1, 2, 3, 4]
    y2 = [4, 3, 2, 1]

    fig, ax1 = plt.subplots()

    l1 = ax1.plot(x1, y1, label='a')
    # 设置 ax2 与 ax1 公用横坐标
    ax2 = ax1.twinx()
    l2 = ax2.plot(x2, y2, c='r', label='b')

    # 图例融合
    lns = l1 + l2
    labs = [ln.get_label() for ln in lns]
    ax1.legend(lns, labs, loc=9)

    plt.title('abc')
    plt.show()
    ```

    <img src='../images/2021-08-13_70.png' width=600>

### 2.5. 辅助线

1. 水平线

    ```python
    # 水平虚线，高度为 y，从 (xmin,y) 到 (xmax,y)
    plt.hlines(y, xmin, xmax, linestyle=':')
    ```

2. 竖直线

    ```python
    # 垂直虚线，从 (x,ymin) 到 (x,ymax)
    plt.vlines(x, ymin, ymax, linestyle=':')
    ```

## 3. 图片显示/输出设置

1. 中文编码问题

    ```python
    plt.rcParams['font.sans-serif'] = ['SimHei']  # 解决 plt 中文乱码
    plt.rcParams['axes.unicode_minus'] = False  # 用来正常显示坐标轴负号
    ```

2. 图片大小设置

    ```python
    plt.rcParams['figure.figsize'] = (12, 8)
    ```

3. 图片保存

    ```python
    # 放在 plt.show() 前面，不支持 jpg
    plt.savefig("Picture.png")
    # 批量保存图片为防止大量图片占用内存，需要关闭图片
    plt.close()
    ```

## 4. 动态图

1. Animation

    ```python
    import matplotlib.animation as ani

    ```
