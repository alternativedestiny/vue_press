# 5. Pandas 数据处理

- [Pandas 官方文档🔗](https://pandas.pydata.org/pandas-docs/stable/reference/index.html)

## 1. Pandas 数据结构

### 1.1. 数据结构

1. pandas 对象

    | 名称      | 维数 | 描述                               |
    | --------- | ---- | ---------------------------------- |
    | Series    | 1    | 可以看作有标签的一维数组           |
    | DataFrame | 2    | 一般是二维标签，尺寸可变的表格结构 |

2. pandas 数据类型

    | 类型           | 简介             |
    | -------------- | ---------------- |
    | float64        | 64 位浮点数      |
    | float32        | 32 位浮点数      |
    | int32          | 32 为整数        |
    | datetime64[ns] | 日期时间格式     |
    | category       | 分类             |
    | object         | 对象，无明确类型 |

### 1.2. 生成数据

1. 生成数据

    ```python
    import pandas as pd

    df = pd.DataFrame({'a': [1.0, 0.53, 0.67, 0.98],
                        'b': [0.53, 1.0, 0.89, 0.21],
                        'c': [0.67, 0.89, 1.0, 0.74],
                        'd': [0.98, 0.21, 0.74, 1.0]},
                        index=list('abcd'))

    # 得到的数据表格为：
    |     | a    | b    | c    | d    |
    | --- | ---- | ---- | ---- | ---- |
    | a   | 1    | 0.53 | 0.67 | 0.98 |
    | b   | 0.53 | 1    | 0.89 | 0.21 |
    | c   | 0.67 | 0.89 | 1    | 0.74 |
    | d   | 0.98 | 0.21 | 0.74 | 1    |
    ```

2. 生成 DataFrame 空结构

    ```python
    # 创建一个空 DataFrame，默认 utf-8 编码
    cols = ['a', 'b', 'c']  # 列名
    index = [1, 2, 3, 4]  # 行名
    df = pd.DataFrame(index=index, columns=cols)

    # 得到的数据表格为：
    |     | a   | b   | c   |
    | --- | --- | --- | --- |
    | 1   | nan | nan | nan |
    | 2   | nan | nan | nan |
    | 3   | nan | nan | nan |
    | 4   | nan | nan | nan |

    # 先生成空的 df 再赋值行列名是错误的做法
    df = pd.DataFrame()
    df.columns = cols   # 错误
    df.index = index    # 错误
    ```

3. date_range：生成等间隔时间序列，[官方文档🔗](https://pandas.pydata.org/docs/reference/api/pandas.date_range.html)

    函数：`pd.date_range(start, end, pediods, freq)`

    | 参数    | 简介         |
    | ------- | ------------ |
    | start   | 开始日期     |
    | end     | 结束日期     |
    | periods | 生成日期数量 |
    | freq    | 日期间隔     |

    ```python
    import pandas as pd

    start = '2020-01-01'
    data = pd.date_range(start, periods=3, freq='4H')
    print(data)

    # 输出
    DatetimeIndex(['2020-01-01 00:00:00', '2020-01-01 04:00:00',
                    '2020-01-01 08:00:00'],
                    dtype='datetime64[ns]', freq='4H')

    # 也可以通过开始和结束时间生成时间序列，间隔 1day
    date = pd.date_range('2020-01-01 12:00:00', '2022-12-31 12:00:00', freq='1D')
    ```

### 1.3. 数据格式转换

1. astype 转换成其他类型：数据格式不对可能会造成多种问题，比如计算、绘图（这些操作均不会改变原数据）

    ```python
    # 由其他类型转换成 float
    a = df.iloc[:, 0].astype('float')

    # 将一列数据格式设为 datetime
    m_df['tm'] = m_df['tm'].astype('datetime64[ns]')
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
5. tolist() Series 转 list(DataFrame)

    ```python
    list1 = Series.tolist()
    ```

6. pandas 的 datetime 格式转 python datetime

    ```python
    # 不能对 Series 操作
    moment = data['时间'][0].to_pydatetime()
    ```

7. pandas 转 numpy

    ```python
    np_data = df_data.values
    ```

### 1.4. 行/列操作

1. 行操作

    ```python
    # 行数
    len(df)
    # index
    index = data.index

    # 设置 index 标题
    df.index.name = 'index_name'

    # 添加/替换 index
    df.index = list('abcd')  # 将 index 设置成 [a,b,c,d]

    # 将现有数据设置成 index
    data.set_index('a', inplace=True)  # 将 a 列设成 index
    ```

2. 列操作

    ```python
    # 列数
    len(df.columns)
    # 列名
    columns = df.columns.to_list()  

    # 列重命名
    df.columns = ['new_col1', 'new_col2']   # 重命名所有列
    df.rename(columns={'a': 'A', 'b': 'B'}, inplace=True)   # a 重命名为 A, b 重命名为 B

    # 调整列的顺序
    df[['new_col2', 'new_col1']]

    # 重置 index，让 index 变成 0，1，2....
    # drop=True: 避免在 dataframe 中插入 index 列
    # inplace=True: 用修改后的 df 替换掉原本的 df
    df.reset_index(drop=True, inplace=True)
    ```

3. index-column 互相转换

    ```python
    # index->column
    df.reset_index(level=0, inplace=True)

    # column->index
    df.set_index('col', inplace=True)

    # 转置（行列转换）
    df = df.T
    ```

4. MultiIndex 多索引

    ```python
    # 创建多索引

    ```

## 2. Pandas 数据处理

### 2.1. 增

1. 增加一行、列数据

    ```python
    # 增加一行数据
    df.loc['0'] = [1, 2, 3]
    df.loc[len(df.index)] = [1, 2, 3]   # 最后一行增加新数据，推荐用法
    df = df.append({'a': 1, 'b': 2, 'c':3}, ignore_index=True)
    df['col'] = 'abc'    # 增加一列完全相同的值

    # 增加一列数据
    df['d'] = [1, 2, 3]
    ```

2. merge：合并，列增加

    ```python
    # 数据左右合并，合并依据为 key
    # how = inner, outer, left, right 默认 inner
    # 需要注意，有时合并数据会造成意外的重复
    df3 = pd.merge(df1, df2, how='left', on='key1')  # 单个 key
    df3 = pd.merge(df1, df2, how='left', on=['key1','key2'])  # 多 key
    ```

3. concat：拼接

    ```python
    # 数据拼接，列不变，行叠加
    df3 = pd.concat([df1, df2]).reset_index(drop=True)
    # 去掉重复行
    df = df.drop_duplicates()

    # 数据拼接，列增加，行不变
    df4 = pd.concat([df1, df2, df3], axis=1)
    ```

4. copy 拷贝，复制

    ```python
    # 浅拷贝，df1 和 df2 同步改变
    df2 = df1
    df2 = df1.copy(deep=False)

    # 深拷贝，deep 默认为 True
    df2 = df1.copy(deep=True)
    ```

### 2.2. 删

1. 清理无效数据

    ```python
    df[df.notnull()]
    df.dropna()
    ```

2. 删除指定的行/列

    ```python
    # 删除行，axis=0 默认删除行
    df = df.drop([0, 1])  # 删除第 0，1 行

    # 删除列
    df = df.drop(['col1'], axis=1)  # 删除'col1'列

    ```

3. 删除重复行

    ```python
    # 去掉重复行
    df = df.drop_duplicates(subset=None, keep='first', inplace=False, ignore_index=False)
    # 或
    df.drop_duplicates(subset=['col1'], inplace=True)
    ```

    | 参数         | 简介                                                              |
    | ------------ | ----------------------------------------------------------------- |
    | subset       | 根据列判断重复，默认所有列                                        |
    | keep         | 'first'保留重复的首行，'last'保留重复的末行，False 删除所有重复行 |
    | inplace      | True 直接修改源数据                                               |
    | ignore_index | True 去重后重排 index                                             |

4. 删除全 0 行

    ```python
    df = df.loc[~(df == 0).all(axis=1)]
    ```

### 2.3. 改

1. 排序

    ```python
    # 升序排列，并替换原 Series
    sr = Series.sort_values(inplace=True)

    # 降序排列，不替换原 df，替换可以增加 inplace 参数
    df = df.sort_values(by=['col1'], ascending=False)  
    ```

2. replace: 替换

    ```python
    import numpy as np

    # 将数据中的 0 替换为 nan, 这样在进行统计计算时会自动忽略这些值
    df = df.replace(0, np.NaN)
    # 或
    df.replace(0, np.NaN, inplace=True)

    # 将 nan 替换为其他值
    df = df.replace(np.nan, 0)  # 将 na 修改为 0
    df = df.fillna(0)           # 同上
    df.fillna(0, inplace=True)  # 同上

    ```

3. 修改值

    ```python
    df['col1'][i] = 0   # ×, 会出现警告：A value is trying to be set on a copy of a slice from a DataFrame
    df.loc[i, 'col1'] = 0   # √
    ```

4. 保留小数位

    ```python
    # round-四舍五入，decimals 保留小数位
    m_df = m_df.round(decimals=3)
    ```

### 2.4. 查

1. 检测数据是否有空值 (Nan)

    ```python
    # 含空数据返回 true，不含空数据返回 false
    df.isnull().any()
    # 判断数据是否为 nan，不能用==
    if df[] is np.nan

    # 查询 nan 所在位置
    na_idx = np.where(np.isnan(df))
    for i, j in zip(na_idx[0], na_idx[1]):
        print(i, j) # 行，列
    ```

2. 查看数据

    ```python
    df.head()  # 顶部数据，个数可选，默认 5 行
    df.tail()  # 尾部数据，个数可选
    df.index  # 显示索引、列和底层 numpy 数据
    df.info()  # 显示数据的类型

    df.describe()  # 显示数据的快速统计摘要
    df.T  # 转置数据
    new_df = df.sort_index(axis=1, ascending=False)  # 按轴排序，降序

    # 按值排序，注意这个函数不操作自身
    new_df = df.sort_values(by='B')
    # 除非使用 inplace
    df.sort_values(by='B', inplace=True)

    ```

3. 选择/查询数据

    ```python
    # 获取
    df['A']     # 获取 A 列数据
    df.A        # 同上
    df[0]       # 若 A 为第 1 列，则同上
    df['20130102':'20130104']  # 通过 [] 选择，对行切片

    # 按位置索引
    df.iloc[3]  # 显示第四行数据
    df.iloc[0:3, 1:]  # 类似 numpy
    df.iloc[[1, 2, 4], [0, 2]]  # 类似 numpy

    # loc 通过标签访问，iloc 通过行列号访问
    # 获取 a，b 列的数据
    new_df = df.loc[:, ['a', 'b']]  # DataFrame, 注意两层方括号
    # 获取第 1 列的数
    new_df = df.iloc[:, 1]  # Series
    # 还可以直接访问列标签
    new_df = df['a'][0:3000]  # Series

    ```

4. 条件筛选数据

    ```python
    # 布尔索引
    df[df.A > 0]
    new_df = df[df['tm1'] >= '2018-01-01 00:00:00']
    # 选择并选取指定行
    new_df = df.loc[df['tm1'] >= '2019-01-01 00:00:00', ['tm1', 'hv']]
    new_df = df[df.tm1 >= '2019-01-01 00:00:00'][['tm1', 'hv']] # 列号单引号出错的话可以用双引号
    
    # 根据具体时间筛选数据
    new_df = df[df['time'].dt.hour == 10]   # 筛选所有 10 点钟的数据
    new_df = df[df['time'].dt.date == tm.date()]    # 按照日期筛选数据（年月日）
    new_df = df[df['time'].dt.time == tm.time()]    # 按照时间筛选数据（时分秒）

    
    # 多条件筛选，小括号不能缺
    df[(df['a'] >= 10) & (df['b'] >= 10)]  # 与
    df[(df.a == 10) | (df.b > 20)]  # 或
    # 还可以进行范围筛选
    new_df = df[df['date'].dt.date.between(start.date(), end.date())] # 日期范围
    new_df = df[df['date'].dt.time.between(start.time(), end.time())] # 时间范围
    new_df = df[(df['tm'] >= start) & (df['tm'] < end)] # 日期时间范围
    new_df = df[df.a.between(10, 20)]   # 值范围

    # 根据条件筛选多行数据
    keys = ['a', 'b', 'c']
    df = df[df['name'].isin(keys)]  # 选择 name 列=a,b,c 的数据
    df = df[~df['name'].isin(keys)]  # 选择 name 列非 a,b,c 的数据

    # 筛选含有指定字段的数据，支持正则（模糊匹配）
    df = df[df['name'].str.contains('a')]   # 选择 name 列包含字符 a 的数据
    df = df[df['name'].str.contains('a|b')] # 选择 name 列包含字符 a 或 b 的数据
    df = df[df['name'].str.contains('a') | df['name'].str.contains('b')]    # 等同于上面

    # 根据值查询元素所在位置
    x = 1
    df_x = df[df[0] == x]  # 查找 df 第 0 列值为 x 的元素
    ```

5. 查询列名中包含特定字符的列

    ```python
    df = df.filter(regex='a')   # 查询列名包含 a 的列
    ```

6. 查询索引

    ```python
    # 获取所在行数
    idx = df[df['name'].str.contains('a')].index.to_list()
    # 如果 df 中有空行，需要指定空行的返回值
    idx = df[df['name'].str.contains('a', na=False)].index.to_list()
    # 根据值查询元素所在位置
    x = 1
    x_idx = df[df[0] == x].index.to_list()  # 查找 df 第 0 列值为 x 的元素位置
    ```

### 2.5. 数据计算

1. 求和

    ```python
    # 行求和
    df['row_sum'] = df.apply(lambda x: x.sum(), axis=1)
    # 部分行求和（前两列）
    df['row_sum'] = df.iloc[:, :2].apply(lambda x: x.sum(), axis=1)
    # 也可以直接用列名
    df['row_sum'] = df['a'] + df['b']

    # 列求和
    df.sum()    # 所有列求和
    df['col_sum'] = df.apply(lambda x: x.sum(), axis=0)
    ```

2. 乘除

    ```python
    df['val'] = df['val'].map(lambda x: x / num)    # 除法
    ```

3. 最大最小值

    ```python
    # 最小值
    min_val = df[0].min()  # 第 1 列最小值
    min_val = df.iloc[:, 0].min()   # 同上

    # 最大值
    max_val = df.iloc[0, :].max()   # 第 1 行最大值
    ```

4. 求平均值

    ```python
    df = pd.read_csv(path, dtype=float)
    # 求列平均值
    df['A'].mean()  # 求 A 列平均值
    df.mean()  # 求每一列的平均值
    # 求行平均值
    df.mean(1)
    ```

5. 求标准差

    ```python
    # 计算每列数据标准差
    df.std()
    # 计算单列数据标准差
    df['a'].std()
    ```

### 2.6. 分组统计

1. 分组 groupby
    1. groupby 基础应用

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

        # 分类统计，单个 key
        group1 = df.groupby('年级')
        # 分类统计，多个 key
        group1 = df.groupby(['年级', '班级'])

        # 统计
        group1.max()
        group1.mean()
        ```

    2. 根据 group 将一个 dataframe 分成多个 df

        ```python
        groups = df.groupby('年级')
        for name, group in groups:
             print(name)    # 组名
             print(group)   # 组内数据
        ```

    3. 时间分组

        > 如果有一列数据为 datetime 格式，可以按照时间进行分组

        ```python
        # 比如按照小时分组
        groups = df.groupby(df['time'].dt.hour)
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
6. 保存结果

    ```python
    df = pd.DataFrame(group1.agg({'数学': ['mean', 'max']}))
    df.to_csv(path)
    ```

### 2.7. 日期时间处理

1. 读取数据

    ```python
    import pandas as pd

    df = pd.read_csv(path, parse_dates=['time'])    # time 列数据读取成 Timestep 格式
    ```

2. 根据具体时间筛选数据

    ```python
    from datetime import datetime, timedelta
    # 筛选 1 天的数据
    date = datetime(2020, 1, 1)
    tomorrow = date + timedelta(days=1)
    data = df[(df['time'] >= date.date()) & (df['time'] < tomorrow)]

    # 方法 2
    data = df[(df['time'].dt.month == date.month) & (df['time'].dt.day == date.day)]
    ```

### 2.8. 画图

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

3. 大部分 matplotlib 的设置都可以做为 df.plot() 的参数

## 3. pandas 读写文件

### 3.1. 读文件

1. read_csv & read_excel

    ```python
    # header: 告诉 pandas 那些是数据的列名，没有则设为 None
    # encoding='gbk'防止出现乱码

    # 读取 csv 文件，表头为第 0 行，文件 gbk 编码，指定字段的数据类型
    df = pd.read_csv('filename.csv', header=0, encoding='gbk', dtype={'id': int, 'name': str})

    # 读取 excel 文件，表头第 0 行，表 sheet1，选择第 0，1 列数据
    # 依赖 openpyxl, pip install openpyxl
    # 读取 sheet1 用 sheet_name=0 也可
    df1 = pd.read_excel('filename.xlsx', header=0, sheet_name='Sheet1', usecols=[0, 1])

    # 读取 excel 还有一种方法
    data = pd.ExcelFile('filename.xlsx')
    df2 = pd.read_excel(data, sheet_name=0, parse_cols=[0], skiprows=[0], names=['Country'])
    ```

2. 读取设置，[官方文档🔗](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html)

    | 常用关键字                | 功能                                                                         |
    | ------------------------- | ---------------------------------------------------------------------------- |
    | chunksize=4               | 每 4 行数据为一组                                                            |
    | comment='<'               | 如果行首字符为`<`, 则跳过该行                                                |
    | delim_whitespacebool=True | 将单个或多个空格视为分隔符，等同于 `sep='\s+'` , 默认 False                  |
    | dtype = {'col' : str}     | 修改 col 类型到 str                                                          |
    | engine='python'           | 默认'c'，c 更快，python 功能更完善                                           |
    | false_value=["no"]        | no 被认为 False                                                              |
    | hearder=0                 | 默认第 0 行为 header, 没有则设为 None                                        |
    | index_col=False           | 目录列，'False'表示没有目录                                                  |
    | MultiIndex                | 支持双列目录                                                                 |
    | na_values=[5]             | 5 和 5.0 会被认为是 NaN                                                      |
    | na_valuede=["Na","0"]     | Na 和 0 会被认为是 NaN                                                       |
    | nrows                     | 读取的行数                                                                   |
    | parse_dates=['tm']        | 将'tm'列读取成 datetime 格式，也可以用列号                                   |
    | sep=':'                   | 分隔符，支持`':'`等符号，默认为`','`，多空格或 Tab 用`'\\s+'`, 多种分隔符用` | `隔开 |
    | skiprows=[0,3]            | 跳过第 0 行和第 3 行                                                         |
    | skipfooter=2              | 跳过最后两行，只支持 int 型，默认 0                                          |
    | skip_blank_lines=True     | 是否跳过空行，默认 True                                                      |
    | true_values=["yes"]       | yes 被认为 True                                                              |
    | usecols=['col1', 'col2']  | 选择要读取的列，列名列号都可以                                               |

3. 使用设置

    ```python
    # 跳过多行，但保留第一行表头
    df = pd.read_csv(file, skiprows=range(1, 100))

    # 多空格分割：去除字符串数据中两侧的空格
    df = pd.read_csv('filename.csv', sep='\\s+')

    ```

### 3.2. 写文件

1. to_csv 用法

    ```python
    # 将 df 存储为 csv，index 表示是否显示行名
    df.to_csv('name.csv', index=False, sep=',', float_format='%.3f', columns=['col1', 'col2'])
    # 会给数据添加引号，尽量不要用
    df.to_csv('name.csv', index=False, delimiter=',')

    # 遇到 float_format 不起作用是因为数据格式问题，转换方法如下：
    df = pd.DataFrame(df, dtype='float')    # 数据格式转换成 float
    ```

2. to_csv 部分配置

    | 关键字       | 功能                                            |
    | ------------ | ----------------------------------------------- |
    | sep          | 分隔符，默认','                                 |
    | na_rep       | 缺失数据表示，默认空，比如：na_rep='0'          |
    | float_format | 浮点格式，保留小数位，比如：float_format='%.3f' |
    | columns      | 选择写入的列，比如：columns=['col1', 'col2']    |
    | header       | 是否写入列名，默认'True'                        |
    | index        | 是否写入目录，默认'True'                        |
    | mode         | 写入模式，'a'追加，'w'写入，默认'w'             |
    | encoding     | 文件编码，默认'utf-8'                           |

3. to_excel 用法

    ```python
    df.to_excel('name.excel', sheet_name='Sheet1')
    ```

## 4. PandasGUI

1. 简介：Pandasgui 是一个开源的 python 模块，它为 pandas 创建了一个 GUI 界面，我们可以在其中使用 pandas 的功能分析数据和使用不同的功能，以便可视化和分析数据，并执行探索性数据分析。
2. 安装

    ```bash
    pip install pandasgui
    ```

3. 使用

    ```python
    import pandas as pd
    from pandasgui import show

    df = pd.read_csv('')    # 打开一个数据集
    show(df)    # 打开 pandasGUI 界面
    ```

## 5. Pandas 错误处理

1. [`read_csv mixed types`问题🔗](https://www.jianshu.com/p/a70554726f26)
2. `cannot convert the series to <class 'float'>`问题
   1. 原因：可能是某处变量调用忘了加限定，比如 a[i] 写成了 a

## 6. 参考

1. [pandas 类 SQL 查询🔗](https://juejin.im/post/5b5e5b2ee51d4517df1510c7)
2. [Pandas 分组🔗](https://www.yiibai.com/pandas/python_pandas_groupby.html)
