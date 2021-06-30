# 2. 数据类型

## 1. Python 命名规则

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

## 2. 数字 (Number)

1. 保留 4 位小数位

    ```python
    # 百分号
    print('%.4' % num)
    # round
    num = round(num, 4)
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
        ```

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
        str1.strip('a')
        # 去处字符串头尾 \r,\t,\n, 空格 等字符
        str1.strip()
        # 去除字符串开头处指定字符
        str1.lstrip()
        # 去除字符串结尾处指定字符
        str1.rstrip()

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
        str2 = str1.split(',')

        # 多个空格分隔
        str2 = str1.split()

        # 多个分隔符分割，不同分隔符用‘|’隔开
        import re
        str2 = re.split(',|!', str1)
        # 或者用 r'[]'，不需要用‘|’隔开
        str2 = re.split(r'[,!]', str1)
        # 多字符匹配可以使用正则，比如多空格分割
        str2 = re.split(' *', str1)
        ```

   3. 字符串截取：

        ```python
        str4 = str1[m:n]  # 负号表示从后算起
        ```

5. 查
   1. 查询字符位置

        ```python
        str1.find('a')  # 返回 a 所在位置
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

1. 特殊字符，[参考链接](https://docs.python.org/zh-cn/3.8/library/re.html)

    | 字符     | 匹配项                             |
    | -------- | ---------------------------------- |
    | .        | 匹配除了换行的任意字符             |
    | ^        | 匹配字符串的开头                   |
    | $        | 匹配字符串尾或着换行符的前一个字符 |
    | *        | 对他前面的正则式匹配 0 到任意次    |
    | +        | 对他前面的正则式匹配 1 到任意次    |
    | ?        | 对他前面的正则式匹配 0 到 1 次     |
    | *? +? ?? | ‘非贪婪’方式                       |
    | {m}      | 对他前面的正则式指定匹配 m 个重复  |
    | {m,n}    | 对正则式进行 m 到 n 次匹配         |
    | \        | 转义字符                           |
    | []       | 用于表示一个字符集                 |

2. 使用
   1. re.match(pattern, string, flags=0)：起始位置匹配

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

   2. re.search(pattern, string, flags=0)：匹配整个字符串

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

## 5. 列表 (List)

1. 创建列表

    ```python
    # 创建列表
    list1 = ['apple', 'banana', 123, 456]
    
    # 创建空列表
    list2 = []
    
    # 创建全 0 列表
    import numpy as np
    list1 = np.zeros(25, dtype=int)  # ndarray
    # 用 list 的写法
    list1 = [0 for t in range(3)]  # [0, 0, 0]
    # 也可以
    list1 = [0] * 5     # [0, 0, 0, 0, 0]

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
    ```

4. 删

    ```python
    list1.pop()  # 移除列表中的一个元素，默认最后一个
    list1.remove('banana')  # 移除列表中第一个匹配项
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
    ```

7. 枚举：同时遍历索引和元素

    ```python
    for i, item in enumerate(list1):
        print(i, item)
    ```

8. 转换

    ```python
    # list 转 string
    str1 = ",".join(list1)  # list1 转字符串，中间用','隔开，也可使用空格等其他字符
    ```

## 6. 元组 (Tupple)

1. 元组与列表类似，但是其中的元素不能修改
2. 创建元组

```python

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

3. 应用
   1. 判断key值是否存在

        ```python
        if key in dict:
            # true or false
        ```

## 9. 日期时间处理

### 9.1. datetime 库

1. 日期类型 datetime
   1. datetime.date——日期，属性：year，month，day
   2. datetime.time——时间，属性：hour，minute，second，microsecond，tzinfo
   3. datetime.datetime——日期时间
   4. datetime.timedelta——时间间隔，精确到微秒
   5. datetime.tzinfo——时区信息对象的抽象基类。 datetime 和 time 类使用它们来提供可自定义的时间调整概念（例如，考虑时区和/或夏时制）
   6. datetime.timezone——一个实现了 tzinfo 抽象基类的子类，用于表示相对于 世界标准时间（UTC）的偏移量。

2. 创建日期

    批量生成日期数据参考 pandas 笔记

    ```python
    # 导入 datetime 包
    from datetime import datetime

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

3. 日期增减：timedelta & dateutil
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

### 9.2. Arrow (pip)

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

## 10. JSON 处理

1. JSON数据格式

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

2. 读取JSON文件

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

3. 写入JSON
