# 2. 数据类型 DataType

## 1. 数字

### 1.1. 定义

1. 整型

    | 整型      | 长度              |
    | --------- | ----------------- |
    | short     | 至少 16 位        |
    | int       | 至少与 short 一样 |
    | long      | 至少 32 位        |
    | long long | 至少 64 位        |
    | unsigned  | 无符号整数        |
    | const     | 静态变量          |

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

    | 浮点        | 位数             |
    | ----------- | ---------------- |
    | float       | 至少 32 位       |
    | double      | 至少 64 位       |
    | long double | 80, 96 或 128 位 |

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

### 1.3. 位操作&逻辑运算

### 1.4. 枚举 ENUM

1. 语法

    ```cpp
    enum <类型名> {<枚举常量表>};
    ```

2. 示例

    ```cpp
    enum week {
        sun=10, // 不设的话默认 0
        mon,
        tue
    };

    int main(int argc, char const *argv[]) {
        printf("%d\n", sun);    // 10
        printf("%d\n", mon);    // 11
        printf("%d\n", tue);    // 12

        return 0;
    }

    ```

## 2. 数组

### 2.1. 数组定义

```cpp
// 创建数组
int num[] = {1, 2, 3};
int num[3] = {1, 2, 3};
float temperature[10];

sizeof(num)/sizeof(num[0]);  //数组长度

// 字符串数组
char *str_list[] = {"abc", "def"};
cout << str_list[0] << endl;    // abc

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

1. array(c++11 新增）：与数组一样，array 对象的长度也是固定的，也是用栈（静态内存分配），而不是自由存储区，因此其效率与数组相同，但更方便，更安全。
2. 创建 array: `array<typeName, number> name = {};`

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

### 4.1. 创建 Vector

1. 创建 vecotr: 是一种动态数组，使用 new 和 delete 来管理内存，但这种工作是自动完成的。

    ```cpp
    #include <vector>

    using namespace std;

    vector<int> v1;         // 创建空 vector
    vector<int> v2(5);      // 创建长度为 5
    vector<int> v3(5, 0);   // 创建长度为 5, 值全部为 0 的 vector
    vector<int> v4(v3);     // 创建 v3 的副本 v4
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
    vec.insert(vec.begin(), 10);      // 在初始位置插入 10
    vec.insert(vec.begin() + 2, 10);  // 在位置 2 插入 10

    // vector 拼接
    vec.insert(vec.end(), vec2.begin(), vec2.end());
    ```

2. 删

    ```cpp
    // 删除并返回最后一位
    vec.pop_back();
    // 删除指定位置的元素
    vec.erase(vec.begin() + 3); // 删除第 3 个元素
    // 删除所有元素
    vec.clear();
    ```

3. 改
4. 查

    ```cpp
    // 遍历：普通方法
    for (size_t i = 0; i < vec.size(); i++) {
        cout << vec[i] << endl;
        // 注意：即便 i>vec.size(), vec[i] 也是可以访问的
    }
    // 遍历：指针
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
    char c2[4] = "abc"; // 结尾有'\0', 所以占 4 字节
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
    cout << s1[1] << endl;  // char 类型
    ```

2. 遍历

### 5.3. 增

1. 插入

    ```cpp
    s1.insert(int num, string s)  // 在 num 位置插入 s
    ```

2. 追加

    ```cpp
    s1.append(string s)  // 追加字符串
    s1.append(int n, char c)  // 追加 n 个 c 字符

    // strcat
    char a[10] = "abc";
    char b[5] = "fbs";
    strcat(a, b);   // a = "abcfbs"
    ```

3. 拼接

    ```cpp
    int i = 5;
    string s = "station: " + to_string(i);
    ```

4. 拷贝

    ```cpp
    strncpy(c1, c2+3, 5);   // 截取 c2 第 3 个字符后的 5 个字符到 c1 中
    #include <string.h>
    strcpy(s1, s2)  // 把 s2 拷贝到 s1 中
    ```

### 5.4. 删

1. 删除

    ```cpp
    s1.erase(int a, int b)  // 删除 a 之后的 b 个字符
    ```

### 5.5. 改

1. 替换

    ```cpp
    s1.replace(int num1, int num2, string s)  // 用 s 替换 num1 后面的 num2-1 个字符
    s1.replace(int num1, int num2, string s, int num3, int num4)  // 用 s 的第 num3 后面的 num4-1 个字符替换 num1 后面的 num2-1 个字符
    ```

2. 截取

    ```cpp
    strncpy(c1, c2 + 3, 5);         // 截取 c2 第 3 个字符后的 5 个字符到 c1 中
    s2 = s1.substr(int a, int b)    // 起始位 a，长度 b
    s2 = s1.substr(int a)           // 截取第 a 个之后的字符串
    ```

3. 大小写转换

    ```cpp
    // char
    char c1[64], C1[64];
    C1 = strupr(c1);    // 转大写 win
    c1 = strlwr(C1);    // 转小写 win

    for (char *ptr = c1; *c1; ptr++) {
        *ptr = toupper(*ptr);   // 转大写 linux
        *ptr = tolower(*ptr);   // 转小写 linux
    }

    // string
    transform(str.begin(), str.end(), str.begin(), (int (*)(int))tolower);  // 转小写
    transform(str.begin(), str.end(), str.begin(), (int (*)(int))toupper);  // 转大写
    // 或
    transform(str.begin(), str.end(), str.begin(), ::tolower);  // 转小写
    transform(str.begin(), str.end(), str.begin(), ::toupper);  // 转大写

    ```

### 5.6. 查

1. 字符查询

    ```cpp
    // 查找
    s1.find(s2);     // 返回起始位置或-1，大小写敏感
    if (s1.find(s2) != string::npos){   // string::npos 常用作没有匹配到内容的判定结果
        cout << "Can't find " << s2 << endl;
    }
    s1.rfind(s2);    // 从后往前查找，其他同上

    s1.find_first_of(s2);      // 查找 s2 第一次出现的位置
    s1.find_last_of(s2);       // 查找 s2 最后一次出现的位置
    s1.find_first_not_of(s2);  // 在 s1 中查找第一个不再 s2 中的字符
    s1.find_last_not_of(s2);   // 与上面相似

    p = strchr(s1, s2);     // 查找 s2 在 s1 中第一次出现的位置
    ```

2. 长度查询

    ```cpp
    strlen(c1);     // char
    s1.length();    // string
    ```

### 5.7. 其他操作

1. 比较

    ```cpp
    // 比较
    s1.compare(s2);  // 大于：1；小于：-1；等于：0
    strcmp(s1, s2);  // 同上
    strcmp(c1, c2);  // 同上

    // 比较两个字符串的前 n 个字符
    strncmp(c1, c2, n);
    ```

2. 分割 split [参考🔗](https://www.zhihu.com/question/36642771/answer/865135551)

    ```cpp
    /* c++11 以前没有通用的字符串分割程序 */
    // 字符串分割函数：要分割的字符串 s_in, 分割结果 s_out, 分隔符 delimiter
    void Split(const string &s_in, vector<string> &s_out, const string &delimiter = " ") {
        string::size_type lastPos = s_in.find_first_not_of(delimiter, 0);
        string::size_type pos = s_in.find_first_of(delimiter, lastPos);
        while (string::npos != pos || string::npos != lastPos) {
            s_out.push_back(s_in.substr(lastPos, pos - lastPos));
            lastPos = s_in.find_first_not_of(delimiter, pos);
            pos = s_in.find_first_of(delimiter, lastPos);
        }
    }
    ```

3. 格式化读取 sscanf

    ```cpp
    char c[64] = "2022-02-28 16:47:00";

    int year, month, day, hour, minute, second;
    sscanf(c, "%d-%d-%d %d:%d:%d", &year, &month, &day, &hour, &minute, &second);
    ```

## 6. 日期时间

### 6.1. 时间格式

1. time_t: 本质为长整型 (long)

    ```cpp
    #include <time.h>       // 或 ctime
    time_t now = time(0);   // 获取系统当前时间，0 或 NULL
    ```

2. tm 格式
   1. tm 结构

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

   2. tm 参数传递

        ```cpp
        #include <time.h>

        void use_tm(struct tm *now_tm){
            // code here
        }

        int main(){
            tm *now_tm;
            time_t now = time(0);
            now_tm = localtime(&now);
            use_tm(now_tm);
        }
        ```

### 6.2. 时间转换

1. time_t <-> tm

    ```cpp
    /* time_t -> tm */
    time_t t = time(0);
    tm *tm1 = localtime(&t);    // 不能连续使用

    // 连续使用需要用 localtime_s(Win) 或 localtime_r(Linux)
    tm tm1;
    localtime_s(&tm1, &t);  // Win
    localtime_r(&t, &tm1);  // Linux
    ```

    ```cpp
    /* tm -> time_t */
    time_t t = mktime(&tm1);    // 不能连续使用
    ```

2. string 转 time_t

    ```cpp
    #include <string>
    #include <ctime>

    // string 转 time_t
    time_t str_to_time(const string &str) {
        char *c = (char *)str.data();  // string 转 char*
        tm tm1;
        int year, month, day, hour, minute, second;
        sscanf(c, "%d-%d-%d %d:%d:%d", &year, &month, &day, &hour, &minute, &second);
        tm1.tm_year = year - 1900;  // 年份，从 1900 年开始
        tm1.tm_mon = month - 1;     // 月份，范围 0-11
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
        sprintf(c, "%04d-%02d-%02d %02d:%02d:%02d", ltm->tm_year + 1900, ltm->tm_mon + 1, ltm->tm_mday, ltm->tm_hour, ltm->tm_min, ltm->tm_sec);
        string str = c;
        return str;
    }
    ```

4. time_t 转 Char

    ```cpp
    // time_t 转 char
    char *Time2Char(time_t t) {
        static char t_str[64];  // static 必须
        tm t_tm;
        localtime_r(&t, &t_tm);

        sprintf(t_str, "%04d-%02d-%02d %02d:%02d:%02d", t_tm.tm_year + 1900, t_tm.tm_mon + 1, t_tm.tm_mday, t_tm.tm_hour, t_tm.tm_min, t_tm.tm_sec);

        return t_str;
    }
    ```

5. 日期格式化 `strftime`, [参考链接🔗](https://www.twle.cn/l/yufei/cplusplus/cplusplus-basic-ctime-strftime.html)

    ```cpp
    #include <ctime>

    time_t now = time(0);
    char tm_str[32];

    // 字符串，复制最大字符数，format, 指向 tm 结构的指针
    strftime(tm_str, 32, "%Y-%m-%d %H:%M:%S", localtime(&now));
    ```

    | 符号 | 说明                                                    | 示例                     |
    | ---- | ------------------------------------------------------- | ------------------------ |
    | %a   | 缩写的星期几名称                                        | Sun                      |
    | %A   | 完整的星期几名称                                        | Sunday                   |
    | %b   | 缩写的月份名称                                          | Mar                      |
    | %B   | 完整的月份名称                                          | March                    |
    | %c   | 日期和时间表示法                                        | Sun Aug 19 02:56:02 2012 |
    | %d   | 一月中的第几天（01-31）                                 | 19                       |
    | %H   | 24 小时格式的小时（00-23）                              | 14                       |
    | %I   | 12 小时格式的小时（01-12）                              | 05                       |
    | %j   | 一年中的第几天（001-366）                               | 231                      |
    | %m   | 十进制数表示的月份（01-12）                             | 08                       |
    | %M   | 分（00-59）                                             | 55                       |
    | %p   | AM 或 PM 名称                                           | PM                       |
    | %S   | 秒（00-61）                                             | 02                       |
    | %U   | 一年中的第几周以第一个星期日作为第一周的第一天（00-53） | 33                       |
    | %w   | 十进制数表示的星期几，星期日表示为 0（0-6）             | 4                        |
    | %W   | 一年中的第几周以第一个星期一作为第一周的第一天（00-53） | 34                       |
    | %x   | 日期表示法                                              | 08/19/12                 |
    | %X   | 时间表示法                                              | 02:50:06                 |
    | %y   | 年份，最后两个数字（00-99）                             | 01                       |
    | %Y   | 年份                                                    | 2012                     |
    | %Z   | 时区的名称或缩写                                        | CDT                      |
    | %%   | 一个 % 符号                                             | %                        |

### 6.3. 时间使用

1. 延时

    ```cpp
    // Linux
    sleep(5);   // 延时 5 秒
    usleep(5);  // 延时 5 微秒
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

2. c++11 以下

    ```cpp
    // c++11 以下
    string s1 = "123";
    char *c1 = "123.45";
    int i = atoi(s1.c_str());
    float j = atof(c1);
    long k = atol(c1);
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

### 7.4. ASCII 码转换

1. 字符 <-> int

    ```cpp
    string s = (char) (n + 64);
    int n = (int)('a')
    ```

## 8. 修饰符

### 8.1. extern

1. 声明 extern 关键字的全局变量和函数可以使得它们能够跨文件被访问
2. extern "C": 在 C++中使用 C 语言

    ```cpp
    extern "C"
    {
        #include "cExample.h"   //C++中使用 C 的函数和变量
    }
    ```

### 8.2. const

### 8.3. static
