# 5. Pandas

## 1. Pandas 数据处理

### 1.1. pandas数据结构

| 维数 | 名称      | 描述                               |
| ---- | --------- | ---------------------------------- |
| 1    | Series    | 可以看作有标签的一维数组           |
| 2    | DataFrame | 一般是二维标签，尺寸可变的表格结构 |

1. DataFrame信息

     ```python
     df.info()  # 信息
     len(df)  # 行数
     len(df.columns)  # 列数

     # 设置index标题
     df3.index.name = 'index_name'

     # 列重命名
     df.columns = ['new_col1', 'new_col2']
     df.rename(columns={str1: str2}, inplace=True)

     # 调整列的顺序
     df[['new_col2', 'new_col1']]

     # 重置index，让index变成0，1，2....
     df.reset_index(drop=True, inplace=True)
     ```

2. Series信息

     ```python
     len(s)  # 长度
     print(s.iloc[3])  # 访问第4条数据
     ```

3. 创建DataFrame

    ```python
    # 创建DataFrame
    title = ['a', 'b', 'c']  # 列名
    index = [1, 2, 3, 4]  # 行名
    df = pd.DataFrame(index=index, columns=title)

    # 设置IndexName
    df.index.name = 'num'

    # 增加一行数据
    df.loc['0'] = [1, 2, 3]
    df = df.append({'a': 1, 'b': 2, 'c':3}, ignore_index=True)

    # 增加一列数据
    df['d'] = [1, 2, 3]
    ```

4. 检测数据是否有空值(Nan)

   ```python
   # 含空数据返回true，不含空数据返回false
   df.isnull().any()
   # 判断数据是否为nan，不能用==
   if df[] is np.nan
   ```

### 1.2. 数据格式转换

   1. astype 转换成其他类型：数据格式不对可能会造成多种问题，比如计算、绘图(这些操作均不会改变原数据)

        ```python
        # 由其他类型转换成float
        a = df.iloc[:, 0].astype('float')
        ```

   2. to_numeric 转换成数字

        ```python
        s = pd.Series(['1.0', '2', -3])
        s = pd.to_numeric(s)
        ```

   3. to_datetime 转换成日期

        ```python
        tm = pd.to_datetime(df.iloc[:, 0])
        ```

   4. to_timedelta 相对日期
   5. tolist() Series转list(DataFram)

        ```python
        list1 = Series.tolist()
        ```

### 1.3. 查看数据

```python
df.head()  # 顶部数据，个数可选，默认5行
df.tail()  # 尾部数据，个数可选
df.index  # 显示索引、列和底层numpy数据
df.info()  # 显示数据的类型

df.describe()  # 显示数据的快速统计摘要
df.T  # 转置数据
new_df = df.sort_index(axis=1, ascending=False)  # 按轴排序，降序

# 按值排序，注意这个函数不操作自身
new_df = df.sort_values(by='B')
# 除非使用inplace
df.sort_values(by='B', inplace=True)

```

### 1.4. 选择、查询数据

```python
# 获取
df['A']  # 获取A列数据
df.A  # 同上
df['20130102':'20130104']  # 通过[]选择，对行切片

# 按位置索引
df.iloc[3]  # 显示第四行数据
df.iloc[0:3, 1:]  # 类似numpy
df.iloc[[1, 2, 4], [0, 2]]  # 类似numpy

# loc通过标签访问，iloc通过行列号访问
# 获取a，b列的数据
new_df = df.loc[:, ['a', 'b']]  # DataFrame
# 获取第1列的数
new_df = df.iloc[:, 1]  # Series
# 还可以直接访问列标签
new_df = df['a'][0:3000]  # Series

# 布尔索引
df[df.A > 0]
new_df = df[df['tm1'] >= '2018-01-01 00:00:00']
# 选择并选取指定行
df.loc[df['tm1'] >= '2019-01-01 00:00:00', ['tm1', 'hv']]
df[df.tm1 >= '2019-01-01 00:00:00']['tm1', 'hv']
# 多条件筛选
df[(df['a'] >= 10) & (df['b'] >= 10)]  # 与
df[(df.a >= 10) | (df.b >= 10)]  # 或

# 根据条件筛选多行数据
list1 = ['a', 'b', 'c']
df2 = df[df['name'].isin(list1)]  # 选择name列=a,b,c的数据
df2 = df[~df['name'].isin(list1)]  # 选择name列非a,b,c的数据

# 筛选含有指定字段的数据
df2 = df[df['name'].str.contains('a')]  # 选择name列包含字符a的数据
```

### 1.5. 生成数据

1. date_range：生成等间隔时间序列

     ```python
     pd.date_range(start, end, pediods)
     ```

2. 部分参数
   1. start：开始日期
   2. end：结束日期
   3. periods：生成日期数量
   4. freq：日期间隔
3. 转换成list

     ```python
     # 从start开始生成7个间隔为4小时的日期list
     pd.date_range(start, periods=7, freq='4H').strftime("%Y-%m-%d %H:%M:%S").tolist()
     ```

### 1.6. 删除数据

1. 清理无效数据

     ```python
     df[df.notnull()]
     df.dropna()
     ```

2. 删除指定的行/列

     ```python
     # 删除行
     df.drop([0, 1])  # 删除第0，1行

     # 删除列
     df.drop(['col1'], axis=1)  # 删除‘col1’列

     ```

### 1.7. 数据计算

   1. 求平均值

        ```python
        df = pd.read_csv(path, dtype=float)
        # 求列平均值
        df['A'].mean()  # 求A列平均值
        df.mean()  # 求每一列的平均值
        # 求行平均值
        df.mean(1)

        ```

   2. 求标准差

        ```python
        # 计算每列数据标准差
        df.std()
        # 计算单列数据标准差
        df['a'].std()
        ```

### 1.8. 数据排序

1. Series排序

     ```python
     # 升序排列，替换原Series
     sr = Series.sort_values(inplace=True)
     ```

2. DataFrame排序

     ```python
     # 降序排列
     df = DataFrame.sort_values(by=['col1'], ascending=False)  
     ```

### 1.9. 数据合并

1. merge：列合并

     ```python
     # 数据左右合并，合并依据为key
     # how = inner, outer, left, right 默认inner
     # 需要注意，有时合并数据会造成意外的重复
     df3 = pd.merge(df1, df2, how='left', on='key1')  # 单个key
     df3 = pd.merge(df1, df2, how='left', on=['key1','key2'])  # 多key
     ```

2. concat：行拼接

     ```python
     # 数据拼接，列不变，行叠加
     df3 = pd.concat([df1, df2])
     ```

### 1.10. 分组统计

1. 分组 groupby

     ```python
     import pandas as pd

     df = pd.DataFrame({
     '姓名': ['小明', '小红', '小刚', '小强', '张三', '李四'],
     '年级': [1, 1, 1, 1, 2, 2],
     '班级': ['a', 'a', 'b', 'b', 'a', 'b'],
     '语文': [85, 93, 79, 97, 80, 75],
     '数学': [94, 92, 84, 84, 90, 66],
     '英语': [90, 91, 90, 96, 80, 69]
     })

     # 分类统计，单个key
     group1 = df.groupby('年级')
     # 分类统计，多个key
     group1 = df.groupby(['年级', '班级'])

     # 统计
     group1.max()
     group1.mean()
     ```

2. 聚合 aggregation

   可以使用聚合函数：mean/sum/size/count/std/var/sem/describe/first/last/nth/min/max
   也可以使用自定义函数

     ```python
     print(group1['语文'].agg(['mean', 'max']))
     #            mean  max
     #  年级 班级
     #  1  a     89   93
     #     b     88   97
     #  2  a     80   80
     #     b     75   75

     print(group1.agg({'数学': ['mean', 'max']}))
     #       数学
     #         mean max
     #  年级 班级
     #  1  a    93  94
     #     b    84  84
     #  2  a    90  90
     #     b    66  66
     ```

3. 过滤 filteration

     ```python

     ```

4. 变换 transformation
5. 综合 apply

### 1.11. 画图

1. df.plot

     ```python
     import pandas as pd
     import matplotlib.pyplot as plt

     df.plot()
     plt.show()
     ```

2. 其他线形：bar, hist, box, kde, area, scatter, hexbin

     ```python
     # 比如散点图
     df.plot.scatter(x='a', y='b', title='scatter')
     # 或
     df.plot(x='tm', y='p', kind='scatter', title='scatter')
     ```

3. 大部分matplotlib的设置都可以做为df.plot()的参数

## 2. pandas 读写文件

### 2.1. 读文件

1. read_csv & read_excel

     ```python
     # header:告诉pandas那些是数据的列名，没有则设为None
     # encoding='gbk'防止出现乱码

     # 读取csv文件，表头为第0行，文件gbk编码，指定字段的数据类型
     df = pd.read_csv('filename.csv', header=0, encoding='gbk', dtype={'id': int, 'name': string})

     # 读取excel文件，表头第0行，表sheet1，选择第0，1列数据
     # 依赖xlrd，需要安装
     # 读取‘sheet1’用 sheet_name=0 也可
     df1 = pd.read_excel('filename.xlsx', header=0, sheet_name='Sheet1', usecols=[0, 1])

     ```

2. 读取设置，[官方文档](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html)

   | 关键字                   | 功能                             |
   | ------------------------ | -------------------------------- |
   | na_values=[5]            | 5和5.0会被认为是NaN              |
   | na_valuede=["Na","0"]    | Na和0会被认为是NaN               |
   | true_values=["yes"]      | yes被认为True                    |
   | false_value=["no"]       | no被认为False                    |
   | skiprows=[0,3]           | 跳过第0行和第3行                 |
   | nrows                    | 读取的行数                       |
   | index_col=False          | 目录列，'False'表示没有目录      |
   | MultiIndex               | 支持双列目录                     |
   | sep=':'                  | 支持':'等符号作为分隔符的数据    |
   | chunksize=4              | 每4行数据为一组                  |
   | skip_blank_lines=True    | 是否跳过空行，默认True           |
   | usecols=['col1', 'col2'] | 选择要读取的列                   |
   | engine='python'          | 默认'c'，c更快，python功能更完善 |
   | parse_dates=['tm']       | 将'tm'列读取成datetime格式       |

3. 使用设置

     ```python
     # 跳过多行，但保留第一行表头
     df = pd.read_csv(file, skiprows=range(1, 100))

     # 多空格分割：去除字符串数据中两侧的空格
     df = pd.read_csv('filename.csv', sep='\\s+')

     ```

### 2.2. 写文件

1. to_csv 用法

     ```python
     # 将df存储为csv，index表示是否显示行名
     df.to_csv('name.csv', index=False, sep=',', float_format='%.3f', columns=['col1', 'col2'])
     # 会给数据添加引号，尽量不要用
     df.to_csv('name.csv', index=False, delimiter=',')
     ```

2. to_csv 部分配置

     | 关键字       | 功能                                            |
     | ------------ | ----------------------------------------------- |
     | sep          | 分隔符，默认','                                 |
     | na_rep       | 缺失数据表示，默认空                            |
     | float_format | 浮点格式，保留小数位，比如：float_format='%.3f' |
     | columns      | 选择写入的列，比如：columns=['col1', 'col2']    |
     | header       | 是否写入列名，默认'True'                        |
     | index        | 是否写入目录，默认'True'                        |

## 3. Pandas 其他

1. [pandas类SQL查询](https://juejin.im/post/5b5e5b2ee51d4517df1510c7)

## 4. Pandas 错误处理

1. [`read_csv mixed types`问题](https://www.jianshu.com/p/a70554726f26)
2. `cannot convert the series to <class 'float'>`问题
   1. 原因：可能是某处变量调用忘了加限定，比如a[i]写成了a
