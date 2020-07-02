# 9. SQL 使用 (MySQL)

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
