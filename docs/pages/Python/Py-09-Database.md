# 9. Database

## 1. SQLite

### 安装

1. SQLite 是 python 内置数据库，无需安装

### 使用

1. 连接数据库

    ```python
    import sqlite3

    connection = sqlite3.connect('')
    ```

## 2. MySQL

1. 安装 MySQL 数据库的 python 包

    ```bash
    pip install pymysql
    ```

2. 读取数据

    ```python
    import pymysql

    # host, user, password, database
    database = pymysql.connect("localhost", "root", "123456", "test1")

    # 创建游标
    cursor = database.cursor()

    # sql 语句：从 table 中抽取 10 组 a，b，按 a 的降序排列
    sql = "select a,b from table order by a desc limit 10"

    # 执行 sql 语句
    cursor.execute(sql)

    # 获取数据
    data = cursor.fetchone()  # 获取单条数据
    data = cursor.fetchall()  # 获取全部数据

    # 关闭数据库连接
    database.close()
    ```

3. 写入数据

    ```python
    sql = "insert into table(col1, col2) values (%s, %s) % (num1, num2)"
    cursor.excute(sql)

    # 提交到数据库执行，多数据插入只用执行一次 commit
    database.commit()
    ```

4. 更多内容查看 MySQL 笔记
