# 2. 数据类型

## 1. 数字

### 1.1. 定义

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

### 1.2. 计算

1. 整数相除

    ```cpp
    int a = 5;
    int b = 4;
    int c = a / b;  // 1
    double d = ((double)a / b); // 1.25
    float e = ((float)a / b);   // 1.25
    ```

2. 浮点相除

    ```cpp
    #include "math.h"

    float a = 3.2;
    float b = 17.2;
    // 浮点取整
    int c = b / a;  // 5
    // 浮点取余
    float d = fmod(b, a);   // 1.2
    // 浮点相除
    float e = b / a;    // 5.375
    ```

3. 取整

    ```cpp
    #include "math.h"

    // 向下取整
    floor(10.3) // 10
    floor(10.7) // 10
    floor(-2.6) // -3
    // 向上取整
    ceil(10.3)  // 11
    ceil(-2.6)  // -2
    // 四舍五入
    round(10.3) // 10
    round(10.7) // 11
    ```

4. 求绝对值

    ```cpp
    #include "math.h"

    // 整型
    int abs(int i);
    // 复数
    double cabs(struct complex znum);
    // 浮点/双精度浮点
    double fabs(double x);
    // 长整型
    long labs(long n);
    ```

## 2. 数组

### 2.1. 数组定义

```cpp
int num[] = {1, 2, 3};
int num[3] = {1, 2, 3};
float temperature[10];

sizeof(num)/sizeof(num[0]);  //数组长度
```

### 2.2. 改查

1. 改

    ```cpp
    // 修改元素
    num[0] = 10;
    ```

2. 查

    ```cpp
    // 单个查询
    cout << num[0] << endl;
    // 遍历
    for (int i : num) {
        cout << i << endl;
    }

    // 查询数组中的最大最小值
    #include <algorithm>

    int max = *max_element(num, num + sizeof(num)/sizeof(num[0]));   // 最大值
    int max_p = max_element(num, num + sizeof(num)/sizeof(num[0])) - num;  // 最大值所在位置
    ```

### 2.3. 计算

## 3. Array

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

## 4. Vector

### 4.1. 创建Vector

1. 创建vecotr: 是一种动态数组, 使用new和delete来管理内存, 但这种工作是自动完成的.

    ```cpp
    #include <vector>

    using namespace std;

    vector<int> v1;         // 创建空vector
    vector<int> v2(5);      // 创建长度为5
    vector<int> v3(5, 0);   // 创建长度为5,值全部为0的vector
    vector<int> v4(v3);     // 创建v3的副本v4
    ```

2. 属性

    | 属性     | 内容     |
    | -------- | -------- |
    | .size()  | 获取长度 |
    | .begin() | 初始位置 |
    | .end()   | 终止位置 |

### 4.2. 增删改查

1. 增

    ```cpp
    // 末尾增加
    vec.push_back(4);
    // 指定位置插入
    vec.insert(vec.begin(), 10);      // 在初始位置插入10
    vec.insert(vec.begin() + 2, 10);  // 在位置2插入10
    ```

2. 删

    ```cpp
    // 删除并返回最后一位
    vec.pop_back();
    // 删除指定位置的元素
    vec.erase(vec.begin() + 3); // 删除第3个元素
    // 删除所有元素
    vec.clear();
    ```

3. 改
4. 查

    ```cpp
    // 遍历: 普通方法
    for (size_t i = 0; i < vec.size(); i++) {
        cout << vec[i] << endl;
        // 注意: 即便i>vec.size(), vec[i]也是可以访问的
    }
    // 遍历: 指针
    for (size_t it = vec.begin(); it != vec.end(); it++){
        cout << *it << endl;
    }

    // 查询最大最小值及其位置
    #include <algorithm>
    float min = *min_element(vec.begin(), vec.end());   // 最小值
    int min_position = min_element(vec.begin(), vec.end()) - vec.begin();   // 最小值所在位置
    ```

## 5. 字符串 Char & String

### 5.1. 创建字符串

1. Char

     ```cpp
     char c1[] = "abc";
     char c2[4] = "abc"; // 结尾有'\0', 所以占4字节
     char *c3 = "abc";
     ```

2. String

     ```cpp
     // 头文件
     #include <string>
     using namespace std;

     string s1 = "what is your name"
     string s2 = "is"
     ```

### 5.2. 访问

1. 访问

    ```cpp
    // 访问
    cout << s1[1] << endl;  // char类型
    ```

2. 遍历

### 5.3. 增删改查

1. 增

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
    strncpy(c1, c2+3, 5);   // 截取c2第3个字符后的5个字符到c1中
    #include <string.h>
    strcpy(s1, s2)  // 把s2拷贝到s1中
    ```

2. 删

    ```cpp
    // 擦除
    s1.erase(int a, int b)  // 删除a之后的b个字符
    ```

3. 改

    ```cpp
    // 替换
    s1.replace(int num1, int num2, string s)  // 用s替换num1后面的num2-1个字符
    s1.replace(int num1, int num2, string s, int num3, int num4)  // 用s的第num3后面的num4-1个字符替换num1后面的num2-1个字符

    // 字符串截取
    strncpy(c1, c2 + 3, 5);   // 截取c2第3个字符后的5个字符到c1中
    s2 = s1.substr(int a, int b)  // 起始位a，长度b
    s2 = s1.substr(int a)  // 截取第a个之后的字符串
    ```

4. 查

    ```cpp
    // 查找
    s1.find(s2);     // 返回起始位置或-1，大小写敏感
    if (s1.find(s2) != string::npos){   // string::npos 常用作没有匹配到内容的判定结果
        cout << "Can't find " << s2 << endl;
    }
    s1.rfind(s2);    // 从后往前查找，其他同上

    s1.find_first_of(s2);      // 查找s2第一次出现的位置
    s1.find_last_of(s2);       // 查找s2最后一次出现的位置
    s1.find_first_not_of(s2);  // 在s1中查找第一个不再s2中的字符
    s1.find_last_not_of(s2);   // 与上面相似

    p = strchr(s1, s2); // 查找s2在s1中第一次出现的位置

    // string 长度
    strlen(c1);
    s1.length();

    ```

### 5.4. 其他操作

1. 比较

    ```cpp
    // 比较
    s1.compare(s2)  // 大于：1；小于：-1；等于：0
    strcmp(s1, s2)  // 同上

    // 比较两个字符串的前n个字符
    strncmp(c1, c2, n);
    ```

2. 分割 split [参考](https://www.zhihu.com/question/36642771/answer/865135551)

    ```cpp
    /* c++11以前没有通用的字符串分割程序 */
    // 字符串分割函数: 要分割的字符串s_in, 分割结果s_out, 分隔符delimiter
    void split(const string &s_in, vector<string> &s_out, const string &delimiter = " ") {
        string::size_type lastPos = s_in.find_first_not_of(delimiter, 0);
        string::size_type pos = s_in.find_first_of(delimiter, lastPos);
        while (string::npos != pos || string::npos != lastPos) {
            s_out.push_back(s_in.substr(lastPos, pos - lastPos));
            lastPos = s_in.find_first_not_of(delimiter, pos);
            pos = s_in.find_first_of(delimiter, lastPos);
        }
    }
    ```

## 6. 日期时间

### 6.1. 时间格式

1. time_t: 本质为长整型(long)

    ```cpp
    #include <time.h>   // 或 ctime
    time_t now = time(0);   // 获取系统当前时间, 0或NULL
    ```

2. tm 结构

    ```cpp
    struct tm {
        int tm_sec;   // 秒，正常范围从 0 到 59，但允许至 61
        int tm_min;   // 分，范围从 0 到 59
        int tm_hour;  // 小时，范围从 0 到 23
        int tm_mday;  // 一月中的第几天，范围从 1 到 31
        int tm_mon;   // 月，范围从 0 到 11
        int tm_year;  // 自 1900 年起的年数
        int tm_wday;  // 一周中的第几天，范围从 0 到 6，从星期日算起
        int tm_yday;  // 一年中的第几天，范围从 0 到 365，从 1 月 1 日算起
        int tm_isdst; // 夏令时
    }
    ```

### 6.2. 时间转换

1. time_t <-> tm

    ```cpp
    // time_t 转 tm
    tm *ltm = localtime(&t);

    // tm 转 time_t
    time_t t = mktime(&tm1);
    ```

2. string 转 time_t

    ```cpp
    #include <string>
    #include <ctime>

    // string 转 time_t
    time_t str_to_time(const string &str) {
        char *c = (char *)str.data();  // string转char*
        tm tm1;
        int year, month, day, hour, minute, second;
        sscanf(c, "%d-%d-%d %d:%d:%d", &year, &month, &day, &hour, &minute, &second);
        tm1.tm_year = year - 1900;  // 年份, 从1900年开始
        tm1.tm_mon = month - 1;     // 月份, 范围0-11
        tm1.tm_mday = day;
        tm1.tm_hour = hour;
        tm1.tm_min = minute;
        tm1.tm_sec = second;
        tm1.tm_isdst = 0;
        time_t t = mktime(&tm1);
        return t;
    }
    ```

3. time_t 转 string

    ```cpp
    // time_t 转 string
    string time_to_string(const time_t t) {
        tm *ltm = localtime(&t);
        char c[256];
        sprintf(c, "%04d-%02d-%02d %02d:%02d:%02d", ltm->tm_year + 1900, ltm->tm_mon + 1, ltm->tm_mday, ltm->tm_hour,
                ltm->tm_min, ltm->tm_sec);
        string str = c;
        return str;
    }
    ```

## 7. 类型转换

### 7.1. 数字 -> 字符串

1. `to_string(i)` (c++11)
2. `sprintf`

     ```cpp
     char c[256];
     float pi = 3.14;
     sprintf(c, "Pi = %f", pi);  // 格式化字符串
     ```

3. 常用

### 7.2. 字符串 -> 数字

1. `stoi`和`stof` (c++11)

    ```cpp
    // c++ 11 以上限定
    int i = stoi(str);
    float f = stof(str);
    ```

2. `atoi`和`atof`

    ```cpp
    // c++11 以下
    string s1 = "123";
    char *c1 = "123.45";
    int i = atoi(s1.c_str());
    int j = atof(c1);
    ```

### 7.3. char <-> string

```cpp
// char -> string
char *c1 = "abc";
string str1 = c1;
// string ->char
char *c1 = str1.c_str();
// string -> char*
char *c1 = (char*)str1.data();
```

### 7.4. string <-> time_t

1. str_to_time, [参考](https://blog.csdn.net/qq_34645629/article/details/84783092)

    ```cpp
    #include <string>
    #include <ctime>

    // string -> time_t
    time_t str_to_time(string &str) {
        char *c = (char *)str.data();  // string转char*
        tm tm1;
        int year, month, day, hour, minute, second;
        sscanf(c, "%d-%d-%d %d:%d:%d", &year, &month, &day, &hour, &minute, &second);
        tm1.tm_year = year - 1900;  // 年份, 从1900年开始
        tm1.tm_mon = month - 1;     // 月份, 范围0-11
        tm1.tm_mday = day;
        tm1.tm_hour = hour;
        tm1.tm_min = minute;
        tm1.tm_sec = second;
        tm1.tm_isdst = 0;
        time_t t = mktime(&tm1);
        return t;
    }
    ```

2. time_to_str

    ```cpp
    string time_to_string(const time_t t) {
        tm *ltm = localtime(&t);
        char *c;
        sprintf(c, "%04d-%02d-%02d %02d:%02d:%02d", ltm->tm_year + 1900, ltm->tm_mon + 1, ltm->tm_mday,
                ltm->tm_hour, ltm->tm_min, ltm->tm_sec);
        string str = c;
        return str;
    }
    ```

- [参考链接](https://blog.csdn.net/tengfei461807914/article/details/52203202)

### 7.5. ASCII码转换

1. 字符 <-> int

    ```cpp
    string s = (char) (n + 64);
    int n = (int)('a')
    ```

## 8. 修饰符

### 8.1. extern

1. 声明extern关键字的全局变量和函数可以使得它们能够跨文件被访问
2. extern "C": 在C++中使用C语言

    ```cpp
    extern "C"
    {
        #include "cExample.h" //C++中使用C的函数和变量
    }
    ```

### 8.2. const

### 8.3. static
