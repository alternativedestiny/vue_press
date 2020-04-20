# 5. Pandas

## 1. Pandas 数据处理

1. pandas数据结构

   | 维数 | 名称      | 描述                                                           |
   | ---- | --------- | -------------------------------------------------------------- |
   | 1    | Series    | 可以看作有标签的一维数组，是scalars的集合，也是DataFrame的元素 |
   | 2    | DataFrame | 一般是二维标签，尺寸可变的表格结构，具有潜在的异质型列         |

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

2. 数据格式转换：数据格式不对可能会造成多种问题，比如计算、绘图(这些操作均不会改变原数据)
   1. astype 转换成其他类型

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

3. 检测数据是否有空值(Nan)

   ```python
   # 含空数据返回true，不含空数据返回false
   df.isnull().any()
   # 判断数据是否为nan，不能用==
   if df[] is np.nan
   ```

4. 创建DataFrame

    ```python
    # 创建DataFrame
    title = ['a', 'b', 'c']  # 列名
    index = [1, 2, 3, 4]  # 行名
    df = pd.DataFrame(index=index, columns=title)

    # 创建IndexName
    df.index.name = 'num'

    # 增加一行数据
    df.loc['0'] = [1, 2, 3]
    df = df.append({'a': 1, 'b': 2, 'c':3}, ignore_index=True)

    # 增加一列数据
    df['d'] = [1, 2, 3]
    ```

5. 查看数据

    ```python
    df.head()  # 顶部数据，个数可选，默认5行
    df.tail()  # 尾部数据，个数可选
    df.index  # 显示索引、列和底层numpy数据
    df.info()  # 显示数据的类型

    df.describe()  # 显示数据的快速统计摘要
    df.T  # 转置数据
    df.sort_index(axis=1, ascending=False)  # 按轴排序，降序
    df.sort_values(by='B')  # 按值排序

   ```

6. 选择、查询数据(数据截取)

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

    # 筛选含有指定字段的数据
    df2 = df[df['name'].str.contains('a')]  # 选择name列包含字符a的数据
    ```

7. 生成数据
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

8. 数据计算
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

9. 数据排序
   1. Series排序

        ```python
        Series.sort_values(inplace=True)  # 升序排列，替换原Series
        ```

   2. DataFrame排序

        ```python
        DataFrame.sort_values(sub[i], ascending=False)  # 降序排列
        ```

10. DataFrame合并(merge, concat)

    ```python
    # 数据左右合并，合并依据为key
    # how = inner, outer, left, right 默认inner
    # 需要注意，有时合并数据会造成意外的重复
    df3 = pd.merge(df1, df2, how='left', on='key1')  # 单个key
    df3 = pd.merge(df1, df2, how='left', on=['key1','key2'])  # 多key

    # 数据拼接，列不变，行叠加
    df3 = pd.concat([df1, df2])
    ```

## 2. pandas 读写文件

1. 读文件
   1. read_csv & read_excel

        ```python
        # header:告诉pandas那些是数据的列名，没有则设为None
        # encoding='gbk'防止出现乱码

        # 读取csv文件，表头第0行，文件gbk编码，指定字段的数据类型
        df = pd.read_csv('filename.csv', header=0, encoding='gbk', dtype={'id': int, 'name': string})

        # 读取excel文件，表头第0行，表sheet1，选择第0，1列数据
        # 依赖xlrd，需要安装
        # 读取‘sheet1’用 sheet_name=0 也可
        df1 = pd.read_excel('filename.xlsx', header=0, sheet_name='Sheet1', usecols=[0, 1])

        ```

   2. 读取设置，[官方文档](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html)
      | 关键字                   | 功能                          |
      | ------------------------ | ----------------------------- |
      | na_values=[5]            | 5和5.0会被认为是NaN           |
      | na_valuede=["Na","0"]    | Na和0会被认为是NaN            |
      | true_values=["yes"]      | yes被认为True                 |
      | false_value=["no"]       | no被认为False                 |
      | skiprows=[0,3]           | 跳过第0行和第3行              |
      | nrows                    | 读取的行数                    |
      | MultiIndex               | 支持双列目录                  |
      | sep=':'                  | 支持':'等符号作为分隔符的数据 |
      | chunksize=4              | 每4行数据为一组               |
      | skip_blank_lines=True    | 是否跳过空行，默认True        |
      | usecols=['col1', 'col2'] | 选择要读取的列                |

   3. 使用设置

        ```python
        # 跳过多行，但保留第一行表头
        df = pd.read_csv(file, skiprows=range(1, 100))

        ```

2. 输出CSV文件
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