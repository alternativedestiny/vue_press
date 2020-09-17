# 2. 数据类型

## 1. 数字 & 数组

### 1.1. 数字

1. 整型

    | 整型      | 长度            |
    | --------- | --------------- |
    | short     | 至少16位        |
    | int       | 至少与short一样 |
    | long      | 至少32位        |
    | long long | 至少64位        |
    | unsigned  | 无符号整数      |
    | const     | 静态变量        |

    ```cpp
    // 获取当前系统变量长度
    #include <iostream>
    #include <climits>

    using namespace std;

    int main() {
        short n_short = SHRT_MAX;
        int n_int = INT_MAX;
        long n_long = LONG_MAX;
        long long n_ll = LONG_LONG_MAX;
        cout << "Short is " << sizeof(n_short) << " bytes. " << "Range in [" << SHRT_MIN << ", " << SHRT_MAX << "]" << endl;
        cout << "Int is " << sizeof(n_int) << " bytes. " << "Range in [" << INT_MIN << ", " << INT_MAX << "]" << endl;
        cout << "Long is " << sizeof(n_long) << " bytes. " << "Range in [" << LONG_MIN << ", " << LONG_MAX << "]" << endl;
        cout << "Long Long is " << sizeof(n_long) << " bytes. " << "Range in [" << LONG_LONG_MIN << ", " << LONG_LONG_MAX << "]" << endl;

        return 0;
    }

    // 输出
    Short is 2 bytes. Range in [-32768, 32767]
    Int is 4 bytes. Range in [-2147483648, 2147483647]
    Long is 4 bytes. Range in [-2147483648, 2147483647]
    Long Long is 4 bytes. Range in [-9223372036854775808, 9223372036854775807]
    ```

2. 浮点数

    | 浮点        | 位数          |
    | ----------- | ------------- |
    | float       | 至少32位      |
    | double      | 至少64位      |
    | long double | 80, 96或128位 |

### 1.2. 数组

1. 数组定义

    ```cpp
    int num[] = {1, 2, 3};
    int num[3] = {1, 2, 3};
    float temperature[10];
    ```

2. 数组操作

    ```cpp
    // 单个查询
    cout << num[0] << endl;
    // 遍历
    for (int i : num) {
        cout << i << endl;
    }

    // 修改元素
    num[0] = 10;
    ```

## 2. Array

1. array(c++11新增)：与数组一样，array对象的长度也是固定的，也是用栈（静态内存分配），而不是自由存储区，因此其效率与数组相同，但更方便，更安全。
2. 创建array: `array<typeName, number> name = {};`

    ```cpp
    #include <array>

    using namespace std;

    array<int, 5> num_list{};
    // 或
    array<int, 5> num_list = {0, 1, 2, 3, 4};

    // 遍历
    for (int i:num_list) {
        cout << i << endl;
    }
    ```

## 3. vector

1. vector是一种动态数组, 使用new和delete来管理内存, 但这种工作是自动完成的.
2. 创建vecotr

    ```cpp
    #include <vector>

    using namespace std;

    vector<int> v1;         // 创建空vector
    vector<int> v2(5);      // 创建长度为5
    vector<int> v3(5, 0);   // 创建长度为5,值全部为0的vector
    vector<int> v4(v3);     // 创建v3的副本v4
    ```

3. 属性

    | 属性     | 内容     |
    | -------- | -------- |
    | .size()  | 获取长度 |
    | .begin() | 初始位置 |
    | .end()   | 终止位置 |

4. 操作vector

    ```cpp
    // 末尾增加
    v2.push_back(4);

    // 删除最后一位
    v2.pop_back();

    // 指定位置插入
    v2.insert(v2.begin(), 10);      // 在初始位置插入10
    v2.insert(v2.begin() + 2, 10);  // 在位置2插入10
    ```

## 4. 字符串 String & Char

1. 创建字符串

    ```cpp
    // 头文件
    #include <string>

    string s1 = "what is your name"
    string s2 = "is"
    ```

2. 增

    ```cpp
    // 插入
    s1.insert(int num, string s)  // 在num位置插入s

    // 追加
    s1.append(string s)  // 追加字符串
    s1.append(int n, char c)  // 追加n个c字符

    // 拼接
    int i = 5;
    string s = "station: " + to_string(i);

    // 拷贝
    #include <string.h>
    strcpy(s1, s2)  // 把s2拷贝到s1中
    ```

3. 删

    ```cpp
    // 擦除
    s1.erase(int a, int b)  // 删除a之后的b个字符
    ```

4. 改

    ```cpp
    // 替换
    s1.replace(int num1, int num2, string s)  // 用s替换num1后面的num2-1个字符
    s1.replace(int num1, int num2, string s, int num3, int num4)  // 用s的第num3后面的num4-1个字符替换num1后面的num2-1个字符

    // 字符串截取
    s1.substr(int a, int b)  // 起始位a，长度b
    s1.substr(int a)  // 截取第a个之后的字符串
    ```

5. 查

    ```cpp
    // 查找
    s1.find(s2)     // 返回起始位置或-1，大小写敏感
    s1.rfind(s2)    // 从后往前查找，其他同上

    s1.find_first_of(s2)    // 查找s2第一次出现的位置
    s1.find_last_of(s2)     // 查找s2最后一次出现的位置
    s1.find_first_not_of(s2)    // 在s1中查找第一个不再s2中的字符
    s1.find_last_not_of(s2) // 与上面相似

    p = strchr(s1, s2); // 查找s2在s1中第一次出现的位置

    ```

6. 比较

    ```cpp
    // 比较
    s1.compare(s2)  // 大于：1；小于：-1；等于：0
    strcmp(s1, s2)  // 同上
    ```

- [参考链接](https://blog.csdn.net/tengfei461807914/article/details/52203202)

## 5. 日期时间

1. 创建时间格式

    ```cpp
    #include <time.h>
    time_t now = time(NULL);    // 获取系统当前时间
    ```

## 6. 变量转换

1. String
   1. String->Int: `stoi(s)`
2. Int
   1. Int->Sting: `to_string(i)`

## 7. 获取长度

1. 总览

    ```cpp
    #include<iostream>
    #include<string>

    using namespace std;

    xx.size()
    xx.length()
    sizeof(xx)  // 运算符，返回所占空间的字节数
    strlen(xx)  // 函数，返回字符数组或字符串所占的字节数
    ```

2. 获取数组长度

    ```cpp
    int a[] = {1, 2, 3, 4}; // 数组
    sizeof(a)/sizeof(a[0]);  //数组长度
    ```

3. 获取字符串长度

- [参考链接](https://blog.csdn.net/z_qifa/article/details/77744482)
