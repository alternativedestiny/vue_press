# PHP读取数据库方法

## 前言

## 环境

- Windows 10
- phpstrom

## 方法

1. 连接数据库

    ```php
    $servername = localhost;  // 数据库IP
    $username = "abcd";  // 用户名
    $passworld = "xxxxxx";  // 密码
    $dbname = "data";  // 表名

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 检查连接php
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
    ```

2. 从数据库选择数据

    ```php
    SELECT 列名 FROM 表名
    ```

    顺便还可以选出最新更新的数据

    ```php
    SELECT 列名 FROM 表名 ORDER BY time DESC LIMIT 1
    ```

    DESC表示按降序排列，LIMIT表示选中多少行数据，用此方法可以查找出最新的数据
3. 获取数据

    ```php
    $result = $conn->query($sql);
    ```

4. 显示数据

    ```php
    if ($result->num_rows > 0) {
        // 输出数据
        while($row = $result->fetch_assoc()) {
            echo "列名:" . $row["列名"];
        }
    } else {
        echo "0 结果";
    }
    ```

5. 关闭连接

    ```php
    $conn->close();
    ```

## 备注
