# 2. Python 数据类型

## 1. Python 变量

1. 命名约定
   1. 所谓“内部 (Internal)”表示仅模块内可用，或者，在类内是保护或私有的。
   2. 用单下划线 (_) 开头表示模块变量或函数是 protected 的（使用 from module import *时不会包含）.
   3. 用双下划线 (__) 开头的实例变量或方法表示类内私有。
   4. 将相关的类和顶级函数放在同一个模块里。不像 Java, 没必要限制一个类一个模块。
   5. 对类名使用大写字母开头的单词（如 CapWords, 即 Pascal 风格）, 但是模块名应该用小写加下划线的方式（如 lower_with_under.py). 尽管已经有很多现存的模块使用类似于 CapWords.py 这样的命名，但现在已经不鼓励这样做，因为如果模块名碰巧和类名一致，这会让人困扰。

2. 应避免的命名
   1. 单字符名称，除了计数器和迭代器。
   2. 包/模块名中的连字符 (-)
   3. 双下划线开头并结尾的名称 (Python 保留，例如__init__)

3. 类型注解

    ```python
    from typing import List, Dict, Any

    # 变量类型
    a: int
    b: float
    c: list
    d: bool
    e = List[int]
    f = Dict[str, int]
    g: Any  # 任何类型

    # 多类型定义

    # 函数：返回值为 int
    def sum(x: int, y: int) -> int:
        return x + y
    ```

## 2. 数字 (Number)

### 2.1. 保留有效数字

1. 保留 4 位小数位

    ```python
    # 百分号
    print('%.4' % num)
    # round
    num = round(num, 4)
    ```

### 2.2. 算数运算

1. 加

    ```python
    # 加
    a = 1
    b = 2
    c = a + b   # c = 3
    a += b  # a = 3

    # 自增
    i += 1  # python 没有++的用法 
    ```

2. 减

    ```python
    a = 1
    b = 2
    c = a - b   # c = -1
    a -= b  # a = -1
    ```

3. 乘

    ```python
    a = 3
    b = 2
    c = a * b   # c = 6

    # 乘方
    c = a ** b  # c = 9
    ```

4. 除

    ```python
    a = 3
    b = 2
    c = a / b   # c = 1.5

    # 取整
    c = a // b  # c = 1
    
    # 取余
    c = a % b   # c = 1
    ```

5. 开方

    ```python
    # math 是 python 内置库，无需安装
    from math import sqrt

    a = sqrt(4)  # 2.0
    ```

### 2.3. 逻辑运算

### 2.4. 随机数 random

1. 生成随机数

    ```python
    import random

    # 生成整数随机数
    random.randint(-10, 10) # 在-10 到 10 的范围内生成一个随机整数

    # 生成随机浮点数
    random.random() # 生成 0-1 之间的随机浮点数
    random.uniform(1.1, 2.2)    # 生成 1.1-2.2 之间的随机浮点数

    # 生成随机字符
    random.choice('jdldjfglkjalsherhbgdnfbs')   # 字符也可以换成数组之类的
    ```

2. 生成随机数组

    ```python
    random.sample(range(0, 20), 12) # 生成 0-20 之间的 12 个不重复随机整数
    ```

3. 分布随机数

    ```python
    random.gauss(6, 1)  # 均值为 6, 标准差为 1
    ```

## 3. 字符串 (String)

1. 类型转换：`str2 = str(str1)`
2. 增
   1. 字符串拼接

        ```python
        # 推荐的字符串拼接方法
        x = a + b
        x = '%s, %s!' % (imperative, expletive)
        x = '{}, {}!'.format(imperative, expletive)
        x = 'name: %s; score: %d' % (name, n)
        x = 'name: {}; score: {}'.format(name, n)

        # 不推荐的方法
        x = '%s%s' % (a, b)  # use + in this case
        x = '{}{}'.format(a, b)  # use + in this case
        x = imperative + ', ' + expletive + '!'
        x = 'name: ' + name + '; score: ' + str(n)
        ```

   2. f 字符串 (python3.6 或更高）

        ```python
        name = 'tom'
        age = 13
        print(f'{name} is {age} years old.')  # tom is 13 years old.

        a = 1
        b = 2
        print(f'{a} + {b} = {a + b}')  # 1 + 2 = 3

        # 设置格式
        print(f'pi={pi:.4f}')   # 保留 4 位小数
        print(f'pi={pi:02}')    # 显示 2 位，不足补 0
        ```

        - 参考：[Python 格式化字符串 f-string 概览🔗](https://blog.csdn.net/sunxb10/article/details/81036693)
        - 参考：[Python 格式化字符串🔗](https://www.cnblogs.com/insane-Mr-Li/p/12973941.html)

   3. python 字符串没有插入 (insert) 功能，可以通过字符串拼接实现

        ```python
        str1 = 'abc123'
        str2 = f'{str1[:3]} | {str1[3:]}'
        print(str2)     # abc | 123
        ```

3. 删
   1. 删除字符串指定字符

        ```python
        # strip 方法
        str1 = str1.strip('a')
        # 去处字符串头尾 \r,\t,\n, 空格 等字符
        str1 = str1.strip()
        # 去除字符串开头处指定字符
        str1 = str1.lstrip()
        # 去除字符串结尾处指定字符
        str1 = str1.rstrip()

        # replace 方法
        str1.replace('a', '')
        ```

   2. 多字符删除（正则方法）

        ```python
        import re
        # 删除{大括号}[中括号]"双引号"和空格
        str1 = re.sub(r'[{}\[\]" ]', '', str1)
        ```

4. 改
   1. 字符串替换

        ```python
        str1.replace('a', 'b')  # 用'b'替换'a'
        ```

   2. 字符串分割

        ```python
        # 根据指定字符分割，比如','
        list1 = str1.split(',')

        # 多个空格分隔
        list1 = str1.split()

        # 多个分隔符分割，不同分隔符用‘|’隔开
        import re
        list1 = re.split(',|!', str1)
        # 或者用 r'[]'，不需要用‘|’隔开
        list1 = re.split(r'[,!]', str1)
        # 多字符匹配可以使用正则，比如多空格分割
        list1 = re.split('\\s+', line)  # 多个空格分隔
        list1 = re.split(' *', str1)    # 全字符分割
        ```

   3. 字符串截取：

        ```python
        str4 = str1[m:n]  # 负号表示从后算起
        ```

5. 查
   1. 查询字符位置

        ```python
        # 返回 a 所在位置，找不到返回-1
        str1.find('a')
        ```

   2. 查询字符出现个数

        ```python
        str1.count('a') # 返回字符 a 出现的个数
        ```

6. 字符串转代码

    ```python
    str1 = "print('hello')"
    eval(str1)  # hello
    ```

## 4. 正则表达式（Regular Expression）

1. 特殊字符，[参考链接🔗](https://docs.python.org/zh-cn/3.8/library/re.html)

    | 字符     | 匹配项                                   |
    | -------- | ---------------------------------------- |
    | .        | 匹配除了换行的任意字符                   |
    | ^        | 匹配字符串的开头                         |
    | $        | 匹配字符串尾或着换行符的前一个字符       |
    | *        | 对他前面的正则式匹配 0 到任意次          |
    | +        | 对他前面的正则式匹配 1 到任意次          |
    | ?        | 对他前面的正则式匹配 0 到 1 次           |
    | *? +? ?? | ‘非贪婪’方式                             |
    | {m}      | 对他前面的正则式指定匹配 m 个重复        |
    | {m,n}    | 对正则式进行 m 到 n 次匹配               |
    | []       | 用于表示一个字符集                       |
    | \        | 转义字符                                 |
    | \A       | 只匹配字符串开始                         |
    | \b       | 匹配空字符串，但只在单词开始或结尾的位置 |
    | \B       | 匹配空字符串，但 不 能在词的开头或者结尾 |
    | \d       | 匹配任何 Unicode 十进制数                |
    | \D       | 匹配任何非十进制数字的字符               |
    | \s       | 匹配任何 Unicode 空白字符                |
    | \S       | 匹配任何非空白字符                       |

2. re.match(pattern, string, flags=0)：起始位置匹配

    | 参数    | 描述                       |
    | ------- | -------------------------- |
    | pattern | 正则表达式                 |
    | string  | 要匹配的字符串             |
    | flags   | 标志位，大小写、多行匹配等 |

    ```python
    import re

    # <re.Match object; span=(0, 2), match='ab'>
    re.match(r'ab+', 'abc')

    # <re.Match object; span=(0, 3), match='abb'>
    re.match(r'ab+', 'abbc')

    # None
    re.match(r'ab+', 'acbab')
    ```

3. re.search(pattern, string, flags=0)：匹配整个字符串

    ```python
    import re

    # <re.Match object; span=(0, 2), match='ab'>
    re.search(r'ab+', 'abc')

    # <re.Match object; span=(0, 3), match='abb'>
    re.search(r'ab+', 'abbc')

    # <re.Match object; span=(3, 5), match='ab'>
    re.search(r'ab+', 'acbab')

    # 输出 span
    re.search(r'ab+', 'acbab').span()
    # 输出 match
    re.search(r'ab+', 'acbab').group()

    ```

4. 格式化输入

    ```python
    import re

    s = "时间：2021-11-12 12:06:56, 数值：3.1415926, 标志：1"

    pattern = re.compile(r"时间：(\d+-\d+-\d+ \d+:\d+:\d+), 数值：(\d+.\d+)?, 标志：(\d)")
    match = pattern.match(s)

    print(match.groups())   # ('2021-11-12 12:06:56', '3.1415926', '1')

    ```

## 5. 列表 (List)

### 5.1. List 使用

1. 创建列表

    ```python
    # 创建列表
    list1 = ['apple', 'banana', 123, 456]
    
    # 创建空列表
    list2 = []
    list3 = list()
    
    # 创建全 0 列表
    import numpy as np
    list1 = np.zeros(25, dtype=int)  # ndarray
    # 用 list 的写法
    list1 = [0 for t in range(5)]  # list:5 [0, 0, 0, 0, 0]
    # 也可以
    list1 = [0] * 5     # list:5 [0, 0, 0, 0, 0]

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
    sum(list1)  # 求和
    list(seq)  # 将元组转换成列表
    ```

3. 增

    ```python
    list1.append('apple')  # 添加元素
    list1.count('apple')  # 统计某个元素出现次数
    list1.insert(1, 'cherry')  # 在位置 1 插入

    # 两个 list 拼接
    list3 = list1.extend(list2)
    list3 = list1 + list2
    ```

4. 删

    ```python
    list1.pop()  # 移除列表中的一个元素，默认最后一个
    list1.remove('banana')  # 移除列表中第一个匹配项
    list1.clear()   # 清空列表
    ```

5. 改

    ```python
    list1.reverse()  # 反转列表
    list1.sort(cmp, key, reverse)  # 排序
    list1 += list2  # 拼接
    ```

6. 查

    ```python
    print(list1[2])  # 第三个元素
    print(list1[-1])  # 最后一个元素
    print(list1[0:2])  # [0,2) 的元素
    print(list1[1:])  # 第 2 个及以后元素
    print(list1.index('banana'))  # 查询列表元素位置
    

    # 判断字符传中是否包含列表中的某个元素
    list1 = ['a', 'b', 'c']
    str1 = 'apple'
    str2 = 'phone'
    print(any(x in str1 for x in list1))  # True
    print(any(x in str2 for x in list1))  # False

    # 判断字符传中是否包含列表中的所有元素
    list1 = ['a', 'b', 'c']
    str1 = 'apple'
    str2 = 'abc'
    print(all(x in str1 for x in list1))  # False
    print(all(x in str2 for x in list1))  # True

    # 筛选出列表中包含某个元素
    out = [f for f in f_list if f.__contains__(str("abc"))]     # 筛选出 f_list 中包含 abc 的元素
    
    ```

7. 枚举：同时遍历索引和元素

    ```python
    for i, item in enumerate(list1):
        print(i, item)
    ```

### 5.2. 转换

1. list 转 string

    ```python
    # list 转 string
    str1 = ",".join(list1)  # list1 转字符串，中间用','隔开，也可使用空格等其他字符

    # 如果 list 是数组
    str1 = ','.join(str(x) for x in list1)
    ```

2. list（字符串） 转 list（数字）

    ```python
    # 字符串列表
    list1 = ['1', '2', '3']
    list1 = list(map(float, list1))

    # 列表字符串
    str1 = "[0, 1, 2, 3, 4, 5, 6, 7, 8]"
    list2 = [int(x) for x in str1.strip('[]').split(', ')]
    ```

## 6. 元组 (Tupple)

1. 元组与列表类似，但是其中的元素不能修改
2. 创建元组

    ```python
    # 元组用小括号，列表用方括号
    tup1 = ('a', 'b', 'c', 1, 2, 3)

    # 空元组
    tup2 = ()

    # 元组中只包含一个元素时，需要在元素后面添加逗号
    tup3 = (1,)
    ```

3. 访问

    ```python
    print(tup1[1])      # b
    print(tup1[2:4])    # ('c', 1)
    ```

4. 操作

    ```python
    # 拼接
    tup3 = tup1 + tup2

    # 删除
    del tup
    ```

5. 转换

    ```python
    # tuple 转 list
    l1 = list(tup1)

    # list 转 tuple
    tup1 = tuple(l1)
    ```

## 7. 集合 (Set)

## 8. 字典 (Dictionary)

1. 类似 c++中的 map，键唯一，值不唯一，如果出现相同的键，后面的会覆盖掉前面的

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

3. 判断 key 值是否存在

    ```python
    if key in dict:
        # true or false
    ```

4. Dict 复制

    ```python
    # dict 是一个 object, 使用 list.append(dict) 时，list 中的值依旧会随着 dict 的改变而改变
    list1.append(dict1)
    dict2 = dict1.copy()    # dict 拷贝
    list2.append(dict2)
    dict1[key] = val    # list1 会变化，list2 不变
    ```

## 9. 日期时间处理

### 9.1. time 库

1. time 结构
   1. time.time: long 型时间戳，1970-01-01 00:00:00 至今的秒数

2. 应用

    ```python
    import time

    print(time.time())  # 当前时刻
    ```

3. 时间戳 (time) 转 时间 (datetime)

    ```python
    from datetime import datetime

    now = time.time()   # 时间戳 time
    tm = datetime.fromtimestamp(now) # 时间 datetime
    ```

### 9.2. datetime 库

1. datetime 结构
   1. datetime.date: 日期，属性：year，month，day
   2. datetime.time: 时间，属性：hour，minute，second，microsecond，tzinfo
   3. datetime.datetime: 日期时间
   4. datetime.timedelta: 时间间隔，精确到微秒
   5. datetime.tzinfo: 时区信息对象的抽象基类。 datetime 和 time 类使用它们来提供可自定义的时间调整概念（例如，考虑时区和/或夏时制）
   6. datetime.timezone: 一个实现了 tzinfo 抽象基类的子类，用于表示相对于 世界标准时间（UTC）的偏移量。

2. 创建日期

    > 批量生成日期数据参考 [pandas 笔记](Python-05-Pandas.md###-1.2.-生成数据)

    ```python
    # 导入 datetime 包
    from datetime import datetime

    now = datetime.now()    # 当前时刻

    date1 = datetime(2016, 2, 28, 0, 0, 0)
    # 时间为 00:00:00 时，可以省略时间，即
    print(datetime(2016, 2, 28))  # 2016-02-28 00:00:00

    print(date1)  # 2016-02-28 00:00:00
    print(date1.date())  # 2016-02-28
    print(date1.time())  # 00:00:00
    print(date1.day)  # 28

    # 字符串转日期，注意是 strptime，不是 strftime，p/f 区分
    str1 = '2020-01-01 10:10:10'
    t = datetime.strptime(str1, '%Y-%m-%d %H:%M:%S')

    # 日期格式化用 strftime
    day1 = datetime(2020, 6, 5)  # 2020-06-05 00:00:00
    str2 = datetime.strftime(day1, '%H:%M:%S %m/%d/%Y')  # 00:00:00 06/05/2020
    # 或
    str2 = day1.strftime('%H:%M:%S %m/%d/%Y')  # 00:00:00 06/05/2020

    ```

3. 修改日期

    ```python
    str1 = '2020-01-01 10:10:10'
    t = datetime.strptime(str1, '%Y-%m-%d %H:%M:%S')
    # 修改秒数
    t = t.replace(second=30)    # 2020-01-01 10:10:30
    # 去除小数点
    t = t.replace(microsecond=0)
    ```

4. 日期增减：timedelta & dateutil
   1. datetime.timedelta
      1. 参数：weeks, days, hours, minutes, seconds

        ```python
        # 导入 timedelta 模块
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

### 9.3. Arrow (pip)

1. 创建日期

    ```python
    import arrow

    # 方法 1：直接创建日期格式
    a = arrow.Arrow(2019, 1, 1)
    print(a)  # 2019-01-01T00:00:00+00:00
    print(a.date(), a.time())  # 2019-01-01 00:00:00

    # 方法 2：字符串转日期
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
    print(t)            # 2020-01-13T10:21:26.240147+08:00
    print(t.timestamp)  # 1578882086
    print(t.format('YYYY-MM-DD HH:mm:ss'))  # 2020-01-13 10:21:26

    # 修改日期
    t = t.replace(year=2019)        # 2019-01-13T10:26:26.484236+08:00
    t = t.shift(months=1, days=-5)  # 2019-02-08T10:28:29.095138+08:00

    # 日期相减
    t1 = arrow.Arrow(2020, 3, 5)
    t2 = arrow.Arrow(2020, 1, 10)
    print(t1 - t2)          # 55 days, 0:00:00
    print((t1 - t2).days)   # 55

    ```

## 10. 容器数据类型 (Collections)

1. 引用

    ```python
    from collections import namedtuple
    ```

2. 容器种类

    | 名字         | 功能                                                               |
    | ------------ | ------------------------------------------------------------------ |
    | namedtuple() | 创建命名元组子类的工厂函数                                         |
    | deque        | 类似列表 (list) 的容器，实现了在两端快速添加 (append) 和弹出 (pop) |
    | ChainMap     | 类似字典 (dict) 的容器类，将多个映射集合到一个视图里面             |
    | Counter      | 字典的子类，提供了可哈希对象的计数功能                             |
    | OrderedDict  | 字典的子类，保存了他们被添加的顺序                                 |
    | defaultdict  | 字典的子类，提供了一个工厂函数，为字典查询提供一个默认值           |
    | UserDict     | 封装了字典对象，简化了字典子类化                                   |
    | UserList     | 封装了列表对象，简化了列表子类化                                   |
    | UserString   | 封装了字符串对象，简化了字符串子类化                               |

### 10.1. 命名元组 namedtuple

1. 使用

    ```python
    Data = namedtuple('Data', ['x', 'y'])   # 创建数据结构
    data = Data(1, 2)   # 创建数据
    ```

### 10.2. 双向队列 deque

1. 定义

    ```python
    class collections.deque([iterable[, maxlen]])
    ```

    - Deque 支持线程安全，内存高效添加 (append) 和弹出 (pop)，从两端都可以，两个方向的大概开销都是 O(1) 复杂度。
    - 如果 maxlen 没有指定或者是 None ，deques 可以增长到任意长度。否则，deque 就限定到指定最大长度。一旦限定长度的 deque 满了，当新项加入时，同样数量的项就从另一端弹出。

2. 操作

    ```python
    # 新建一个最大长度为 100 的队列
    dq = collections.deque(maxlen=100)

    # 增加
    dq.append(data)
    ```

## 11. JSON

1. JSON 数据格式

    ```json
    [
        {
            "name": "tom",
            "age": 13,
            "hobby": [
                {
                    "sport": "football",
                    "art": "dance"
                }
            ]
        },
        {
            "name": "jerry",
            "age": 12,
            "hobby": {
                "sport": "tennis",
                "art": "sing"
            }
        }
    ]
    ```

2. 读取 JSON 文件

    ```python
    import json

    with open('test.json') as f:
        data = json.load(f)
        print(data[0]['name'])  # tom
        print(data[0]['hobby'])  # [{'sport': 'football', 'art': 'dance'}]
        print(data[0]['hobby'][0]['sport']) # football
        print(data[1]['name'])  # jerry
        print(data[1]['hobby']['art'])  # sing
    ```

3. 写入 JSON

## 12. 未完待续

- 最新笔记参考通过我的 [github 个人主页🔗](https://alternativedestiny.github.io/) 或 [gitee 个人主页🔗](https://hoppou.gitee.io/) 来查看
