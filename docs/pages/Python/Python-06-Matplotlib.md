# 6. Matplotlib 绘图

## 1. 绘图种类

1. plot 基本图形
   1. plot绘图

        ```python
        import matplotlib.pyplot as plt

        plt.figure()
        plt.plot(x1, y1, x2, y2)
        plt.show()
        ```

   2. plot设置，更多设置参考[官方文档](https://matplotlib.org/3.2.0/api/_as_gen/matplotlib.pyplot.plot.html)

        ```python
        plt.plot([1, 2, 3], [1, 1, 1], 'b-', label='line 1', linewidth=2)  # 蓝色直线
        plt.plot([1, 2, 3], [2, 2, 2], 'g--', label='line 2', linewidth=2)  # 绿色虚线
        plt.plot([1, 2, 3], [3, 3, 3], 'ro-.', label='line 3', linewidth=2)  # 红色带圈点划线
        plt.plot([1, 2, 3], [4, 4, 4], 'cv:', label='line 4', linewidth=2)  # 蓝绿色倒三角点线
        plt.plot([1, 2, 3], [5, 5, 5], 'm^', label='line 5', linewidth=2)  # 紫红色正三角
        plt.plot([1, 2, 3], [6, 6, 6], 'y<', label='line 5', linewidth=2)  # 黄色左三角
        plt.plot([1, 2, 3], [7, 7, 7], 'k>', label='line 5', linewidth=2)  # 黑色右三角
        ```

        ![plot](../images/plot.png)

2. scatter 散点图
   1. 带颜色区分的散点图

3. bar 柱状图

## 2. 图片设置

1. 坐标轴反向

    ```py
    ax.invert_xaxis()  # x坐标轴反向
    ```

2. 设置坐标值

    ```python
    # 按照需求设置坐标，坐标一定要有对应的数据
    x_axis = ['2018-09-01', '2018-10-01', '2018-11-01', '2018-12-01', '2018-12-31']
    plt.xticks(x_axis, rotation=15)  # 刻度倾斜
    # 还可以对坐标重命名，并顺时针旋转坐标15°
    x_axis = ['2018-01-01 00:01:00', '2018-01-02 00:00:00', '2018-01-03 00:00:00']
    plt.xticks(x_axis, ('a', 'b', 'c'), rotation=-15)  # 将横坐标值重命名为a,b,c
    ```

    ```python
    # 按照等间隔数值设置坐标
    plt.xticks(np.arange(0, 25, 4))  # 范围0-25，分度值4

    # 不显示坐标
    plt.xticks([])
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
    plt.xlabel("x")
    plt.ylabel("y")
    ```

5. 坐标轴坐标倾斜

    ```python
    plt.xticks(x_axis, rotation=15)  # 刻度倾斜
    ```

6. 设置图例
   1. plt.legend

        ```python
        # 设置图例
        plt.plot(x1, y1, label='a')
        plt.plot(x2, y2, label='b')
        plt.legend()
        ```

   2. legend参数，更多配置参考[官方文档](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.legend.html)
      1. 位置 `loc=string or code`

            | 位置string     | 位置code | 位置           |
            | -------------- | -------- | -------------- |
            | 'best'         | 0        | 自适应         |
            | 'upper right'  | 1        | 右上↗          |
            | 'upper left'   | 2        | 左上↖          |
            | 'lower left'   | 3        | 左下↙          |
            | 'lower right'  | 4        | 右下↘          |
            | 'right'        | 5        | 右→            |
            | 'center left'  | 6        | 左←            |
            | 'center right' | 7        | 右→（同rigth） |
            | 'lower center' | 8        | 下↓            |
            | 'upper center' | 9        | 上↑            |
            | 'cneter'       | 10       | 中心           |

      2. 标题 `title='图例'`
      3. 标题大小 `title_fontsize='12'`

## 3. 图片显示/输出设置

1. 中文编码问题

    ```python
    plt.rcParams['font.sans-serif'] = ['SimHei']  # 解决plt中文乱码
    plt.rcParams['axes.unicode_minus'] = False  # 用来正常显示坐标轴负号
    ```

2. 图片大小设置

    ```python
    plt.rcParams['figure.figsize'] = (12, 8)
    ```

3. 图片保存

    ```python
    # 放在plt.show()前面，不支持jpg
    plt.savefig("Picture.png")
    ```
