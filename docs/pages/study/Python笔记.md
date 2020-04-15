# Python 笔记

## 1. 数据处理

### 1.1. 数字(Number)

1. 保留4位小数位

    ```python
    # 百分号
    print('%.4' % num)
    # round
    num = round(num, 4)
    ```

### 1.2. 字符串(String)

1. 类型转换：`str2 = str(str1)`
2. 字符串拼接：`str3 = str1 + str2`
3. 字符串截取：`str4 = str1[m:n]  # 负号表示从后算起`
4. 字符串分割

    ```python
    # 根据指定字符分割，比如','
    str2 = str1.split(',')

    # 多个空格分隔
    str2 = str1.split()

    # 多个分隔符分割，不同分隔符用‘|’隔开
    import re
    str2 = re.split(',|!', str1)
    ```

5. 字符串转代码

    ```python
    str1 = "print('hello')"
    eval(str1)  # hello
    ```

6. 字符串替换

    ```python
    str1.replace('a', 'b')  # 用'b'替换'a'
    ```

7. 查询字符位置

    ```python
    str1.find('a')  # 返回a所在位置
    ```

8. f字符串（python3.6或更高）

    ```python
    name = 'tom'
    age = 13
    print(f'{name} is {age} years old.')  # tom is 13 years old.

    a = 1
    b = 2
    print(f'{a} + {b} = {a + b}')  # 1 + 2 = 3
    ```

### 1.3. 列表(List)

1. 创建列表

    ```python
    # 创建列表
    list1 = ['apple', 'banana', 123, 456]
    # 创建空列表
    list2 = []
    # 创建全0列表
    import numpy as np
    list1 = np.zeros(25, dtype=int)
    # 创建序列数组：5,6,7,8,9
    list2 = [x for x in np.arange(5, 10, 1)]

    # 创建二维列表
    list3 = [[] for x in range(3)]  # [[], [], []]
    list3[1].append(3)  # [[], [3], []]
    ```

2. 计算

    ```python
    len(list1)  # 4
    max(list1)  # 列表中最大值，仅限数字
    min(list1)  # 列表中最小值，仅限数字
    list(seq)  # 将元组转换成列表
    ```

3. 增删改查

    ```python
    # 增
    list1.append('apple')  # 添加元素
    list1.count('apple')  # 统计某个元素出现次数
    list1.insert(1, 'cherry')  # 在位置1插入

    # 删
    list1.pop()  # 移除列表中的一个元素，默认最后一个
    list1.remove('banana')  # 移除列表中第一个匹配项

    # 改
    list1.reverse()  # 反转列表
    list1.sort(cmp, key, reverse)  # 排序
    list1 += list2  # 拼接

    # 查
    print(list1[2])  # 第三个元素
    print(list1[-1])  # 最后一个元素
    print(list1[0:2])  # [0,2)的元素
    print(list1[1:])  # 第2个及以后元素
    print(list1.index('banana'))  # 查询列表元素位置
    ```

### 1.4. 元组(Tupple)

### 1.5. 集合(Set)

### 1.6. 字典(Dictionary)

1. 类似c++中的map，键唯一，值不唯一，如果出现相同的键，后面的会覆盖掉前面的

    ```python
    d = {key1: value1, key2: value2}
    ```

2. 创建字典&增删改查

    ```python
    # 创建
    d = {'apple': 1, 'banana': 2}
    # 增
    d['cherry'] = 3
    # 删
    pop('banana')
    # 改
    d['apple'] = 5
    # 查
    d['cherry']
    ```

### 1.7. 日期处理 (datetime & arrow)

#### 1.7.1. datetime

1. 日期类型datetime
   1. datetime.date——日期，属性：year，month，day
   2. datetime.time——时间，属性：hour，minute，second，microsecond，tzinfo
   3. datetime.datetime——日期时间
   4. datetime.timedelta——时间间隔，精确到微秒
   5. datetime.tzinfo——时区信息对象的抽象基类。 datetime和time类使用它们来提供可自定义的时间调整概念（例如，考虑时区和/或夏时制）
   6. datetime.timezone——一个实现了 tzinfo 抽象基类的子类，用于表示相对于 世界标准时间（UTC）的偏移量。
2. 创建日期

    批量生成日期数据参考pandas

    ```python
    # 导入datetime包
    from datetime import datetime

    date1 = datetime(2016, 2, 28, 0, 0, 0)
    # 时间为00:00:00时，可以省略时间，即
    print(datetime(2016, 2, 28))  # 2016-02-28 00:00:00

    print(date1)  # 2016-02-28 00:00:00
    print(date1.date())  # 2016-02-28
    print(date1.time())  # 00:00:00
    print(date1.day)  # 28

    # 字符串转日期
    str1 = '2020-01-01 10:10:10'
    t = datetime.strptime(str1, '%Y-%m-%d %H:%M:%S')

    ```

3. 日期增减：timedelta & dateutil
   1. datetime.timedelta
      1. 参数：weeks, days, hours, minutes, seconds

        ```python
        # 导入timedelta模块
        from datetime import timedelta

        date1 = datetime(2016, 2, 28, 0, 0, 0)

        # 日期增加
        print(date1 + timedelta(days=1))  # 2016-02-29 00:00:00
        print(date1 + timedelta(days=2))  # 2016-03-01 00:00:00
        # 日期减小
        print(date1 + timedelta(days=-1))  # 2016-02-27 00:00:00
        print(date1 - timedelta(days=1))  # 2016-02-27 00:00:00
        ```

   2. dateutil.relativedelta
      1. 参数（绝对值，直接改变日期值）：year, month, day, hour, minute, second, microsecond
      2. 参数（相对值，日期增减）years, months, weeks, days, hours, minutes, seconds, microseconds

        ```python
        from datetime import datetime
        from dateutil.relativedelta import relativedelta

        day1 = datetime(2019, 2, 1)
        # 修改
        print(day1 + relativedelta(month=10))  # 2019-10-01 00:00:00
        # 加减
        print(day1 + relativedelta(months=10))  # 2019-12-01 00:00:00
        ```

   3. 计算日期差值

        ```python
        day1 = datetime(2019, 2, 1)
        day2 = datetime(2019, 5, 1)
        print((day2-day1).days)  # 89

        day1 = datetime(2019, 2, 1, 0, 0, 0)
        day2 = datetime(2019, 2, 2, 1, 0, 0)
        print((day2 - day1).seconds)  # 3600，与日期无关
        ```

#### 1.7.2. Arrow (pip)

1. 创建日期

    ```python
    import arrow

    # 方法1：直接创建日期格式
    a = arrow.Arrow(2019, 1, 1)
    print(a)  # 2019-01-01T00:00:00+00:00
    print(a.date(), a.time())  # 2019-01-01 00:00:00

    # 方法2：字符串转日期
    t = '2019-01-01'
    a = arrow.get(t)
    print(a)  # 2019-01-01T00:00:00+00:00
    print(a.date(), a.time())  # 2019-01-01 00:00:00
    ```

2. 日期处理

    ```python
    import arrow

    # 日期格式化
    t = arrow.now()
    print(t)  # 2020-01-13T10:21:26.240147+08:00
    print(t.timestamp)  # 1578882086
    print(t.format('YYYY-MM-DD HH:mm:ss'))  # 2020-01-13 10:21:26

    # 修改日期
    t = t.replace(year=2019)  # 2019-01-13T10:26:26.484236+08:00
    t = t.shift(months=1, days=-5)  # 2019-02-08T10:28:29.095138+08:00

    # 日期相减
    t1 = arrow.Arrow(2020, 3, 5)
    t2 = arrow.Arrow(2020, 1, 10)
    print(t1 - t2)  # 55 days, 0:00:00
    print((t1 - t2).days)  # 55

    ```

## 2. OS

### 2.1. 文件处理

```python
import os

# 获取文件列表
sources_path = "./substation"  # 路径
file_name = os.listdir(sources_path)  # 所有文件名

# 创建文件夹/文件目录
path = 'abc/'
# 检测文件夹/文件是否存在，不存在就创建该文件夹
if not os.path.exists(path):
    print('folder not exist')
    os.makedirs(path)
else:
    print('folder exist')

# 重命名文件
os.rename(old_name, new_name)
```

## 3. 文件读写

### 3.1. csv 文件

1. 读取csv文件的两种写法

    ```python
    with open('filename.csv', 'w', newline='') as file:
    ```

    ```python
    file = open('filename.csv', 'rb')
    ```

2. 用numpy处理csv数据的方法
   1. 读取数据

    ```python
    file = open("filename.csv", "rb")
    # 读取csv文件，以逗号为间隔，跳过第一行
    data = np.loadtxt(file, delimiter=",", skiprows=1)
    a = data[行起始:终止, 列起始:终止]
    ```

3. 用pandas读写csv文件

4. 备注

- w：以写方式打开
- a：以追加模式打开 (从 EOF 开始, 必要时创建新文件)
- r+：以读写模式打开
- w+：以读写模式打开 (参见 w )
- a+：以读写模式打开 (参见 a )
- rb：以二进制读模式打开
- wb：以二进制写模式打开 (参见 w )
- ab：以二进制追加模式打开 (参见 a )
- rb+：以二进制读写模式打开 (参见 r+ )
- wb+：以二进制读写模式打开 (参见 w+ )
- ab+：以二进制读写模式打开 (参见 a+ )

### 3.2. Excel(xls/xlsx) 文件读写

1. 使用 xlrd/xlwt

   1. 安装库文件

       ```bash
       pip install xlrd
       pip install xlwt
       ```

   2. 读取文件

       ```python
       import xlrd

       # 打开文件
       data = xlrd.open_workbook('filename.xlsx')
       # 获取第一个工作表
       table = data.sheets()[0]
       # 行列数
       rows = table.nrows
       cols = table.ncols
       # 行列值
       table.row_values(i)
       table.row_values(i)[0]
       table.col_values(i)
       table.col_values(i)[0]
       # 单元格
       table.cell(x,y).value
       ```

   3. 日期处理

       ```python
       import xlrd
       from xlrd import xldate_as_datetime
       from xlrd import xldate_as_tuple

       xldate_as_datetime(table.row_values(i)[0], 0)  # 2019-06-01 00:00:00
       *xldate_as_tuple(table.row_values(i + 1)[0], 0)  # 2019 6 1 0 0 0
       ```

   - 参考[Python操作excel的几种方式--xlrd、xlwt、openpyxl](http://wenqiang-china.github.io/2016/05/13/python-opetating-excel/)
   - 参考[python xlrd模块处理excel日期变成浮点型的解决方法](https://my.oschina.net/zhangyangyang/blog/737072)
   - 参考[用python读写excel（xlrd、xlwt）](https://www.cnblogs.com/MrLJC/p/3715783.html)

2. 使用 openpyxl

   1. 安装库文件

       ```bash
       pip install openpyxl
       ```

   2. 读取文件

       ```python
       import openpyxl
       # 打开文件
       wb = openpyxl.load_workbook("file_name.xlsx")
       # 以只读方式打开
       wb = openpyxl.load_workbook("file_name.xlsx", read_only=True)

       # 读取sheet页
       sheet = wb['sheetname']
       # or
       sheet = wb.worksheets[0]

       # 行列数
       sheet.max_column
       sheet.max_row
       # 行列值
       sheet.cell(x, y).value
       ```

   - 参考[Python 玩转 Excel](https://mp.weixin.qq.com/s?__biz=MjM5NjMyMjUzNg==&mid=2448130701&idx=1&sn=10919f10f4006a18579d6bbc13a3f15c&chksm=b2f42f0a8583a61c9421711b7a542f2a1c8cfe114ace3ea1ba8cefc26bdde8eb36755a7404ae&scene=0#rd)

## 4. Numpy

### 4.1. ndarray

1. 创建数组

    ```python
    import numpy as np
    # 创建一维ndarray，默认int格式
    x = np.array([1, 2, 3, 4, 5])  # [1 2 3 4 5]

    # 从数值范围创建数组
    x = np.arange(0, 5, 1)  # [0 1 2 3 4]
    ```

2. 增删改查，[参考](https://blog.csdn.net/Tyro_java/article/details/81052638)

    ```python
    import numpy as np
    x = np.array([1, 2, 3, 4, 5])

    # 访问
    print(x[1], x[-1])  # 2 5
    print(x[:3], x[3:])  # [1 2 3] [4 5]

    # 增
    x = np.append(x, 6)  # [1 2 3 4 5 6]
    x = np.insert(x, 1, [2])  # [1 2 2 3 4 5]

    # 删
    x = np.delete(x, 2)  # [1 2 4 5]
    x = np.delete(x, [1, 3])  # [1 3 5]

    # 改
    x[2] = 20  # [ 1  2 20  4  5]

    # 查
    x = np.array([1, 2, 3, 4, 4, 5])
    # 统计元素个数
    c = np.sum(x == 4)  # 2
    # 定位元素
    c = np.where(x == 4)  # (array([3, 4], dtype=int64),)

    # 转换
    x = x.tolist()  # [1, 2, 3, 4, 5]

    ```

3. Numpy math

    ```python
    import numpy as np

    np.pi  # pi
    np.sin()  # sin
    ```

## 5. Pandas

### 5.1. Pandas 数据处理

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

### 5.2. pandas 读写文件

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

### 5.3. Pandas 其他

1. [pandas类SQL查询](https://juejin.im/post/5b5e5b2ee51d4517df1510c7)

### 5.4. Pandas 错误处理

1. [`read_csv mixed types`问题](https://www.jianshu.com/p/a70554726f26)
2. `cannot convert the series to <class 'float'>`问题
   1. 原因：可能是某处变量调用忘了加限定，比如a[i]写成了a

## 6. Matplotlib 绘图

### 6.1. 绘图种类

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

### 6.2. 图片设置

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

### 6.3. 图片显示/输出设置

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

## 7. Seaborn 数据可视化（待续）

## 8. Keras & Tensorflow

### 8.1. Tensorflow 安装

#### 8.1.1. Miniconda环境（Windows）

1. 进入cmd命令行
2. 创建一个虚拟环境 `conda create`
3. 激活虚拟环境 `conda activate`
4. 安装Tensorflow `pip install tensorflow`
5. 测试

    ```python
    import tensorflow as tf
    print(tf.__version__)  # 2.0.0
    ```

## 9. python 多线程

1. 多线程：适用于IO密集型，不适用于CPU密集型。
2. 代码

    ```python
    import threading

    # 创建多线程函数：target目标函数（线程内执行的函数），args目标函数参数
    th = threading.Thread(target=check, args=(a, b, c))
    # 开线程
    th.start()
    ```

## 10. SQL 使用 (MySQL)

1. 读取数据

    ```python
    import pymysql

    # host, user, password, database
    database = pymysql.connect("localhost", "root", "123456", "test1")

    # 创建游标
    cursor = database.cursor()

    # sql语句：从table中抽取10组a，b，按a的降序排列
    sql = "select a,b from table order by a desc limit 10"

    # 执行sql语句
    cursor.execute(sql)

    # 获取数据
    data = cursor.fetchone()  # 获取单条数据
    data = cursor.fetchall()  # 获取全部数据

    # 关闭数据库连接
    database.close()
    ```

2. 写入数据

    ```python
    sql = "insert into table(col1, col2) values (%s, %s) % (num1, num2)"
    cursor.excute(sql)

    # 提交到数据库执行，多数据插入只用执行一次commit
    database.commit()
    ```

3. 更多内容查看MySQL笔记

## 11. Python 命名规则

### 11.1. 命名约定

1. 所谓”内部(Internal)”表示仅模块内可用, 或者, 在类内是保护或私有的.
2. 用单下划线(_)开头表示模块变量或函数是protected的(使用from module import *时不会包含).
3. 用双下划线(__)开头的实例变量或方法表示类内私有.
4. 将相关的类和顶级函数放在同一个模块里. 不像Java, 没必要限制一个类一个模块.
5. 对类名使用大写字母开头的单词(如CapWords, 即Pascal风格), 但是模块名应该用小写加下划线的方式(如lower_with_under.py). 尽管已经有很多现存的模块使用类似于CapWords.py这样的命名, 但现在已经不鼓励这样做, 因为如果模块名碰巧和类名一致, 这会让人困扰.

### 11.2. 应避免的命名

1. 单字符名称, 除了计数器和迭代器.
2. 包/模块名中的连字符(-)
3. 双下划线开头并结尾的名称(Python保留, 例如__init__)

## 12. Python小技巧

1. 可变进度百分比

    ```python
    import time
    import sys

    # 输出进度百分比 rate_of_process
    # r:当前步数，p:总步数，s:文本
    def rop(r, p, s='rate of process'):
        # \r 退格到行首
        str1 = s + ': ' + str(round((r / p) * 100, 2)) + '%'
        sys.stdout.write('\r%s' % str1)
        sys.stdout.flush()
        if r == p:
            sys.stdout.write('\n')
    ```

2. 程序计时

    ```python
    from time import process_time, perf_counter
    # 不会计算sleep()时间
    print(process_time())
    # 会计算sleep()时间
    print(perf_counter())
    ```
