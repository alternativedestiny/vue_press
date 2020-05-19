# 2. 数据类型

## 1. 数字(Number)

1. 保留4位小数位

    ```python
    # 百分号
    print('%.4' % num)
    # round
    num = round(num, 4)
    ```

## 2. 字符串(String)

1. 类型转换：`str2 = str(str1)`
2. 字符串拼接：`str3 = str1 + str2`

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
    # 或者用r'[]'，不需要用‘|’隔开
    str2 = re.split(r'[,!]', str1)
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

## 3. 列表(List)

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

## 4. 元组(Tupple)

## 5. 集合(Set)

## 6. 字典(Dictionary)

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

## 7. 日期处理 (datetime & arrow)

### 7.1. datetime

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

### 7.2. Arrow (pip)

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
