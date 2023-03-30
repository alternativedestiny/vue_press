# 5. 函数

## 1. 参数

### 1.1. 参数简介

1. 形参 & 实参

    ```cpp
    void func(int i){   // 形参
        /* 函数内容 */
    }

    int main(int argc, const char** argv) {
        int a = 1;
        func(a);    // 实参
        return 0;
    }

    ```

### 1.2. 参数传递

1. 传递方式
   1. 值传递：将实参的值复制到形参中，实参和形参不是同一存储单元，所以实参的值不会发生改变
   2. 指针传递：形参是指针变量，实参是一个变量的地址，在函数中改变的不是实参的值，而是实参地址所指向的变量
   3. 引用：实参地址传递到形参，使形参的地址去实参的地址，从而使形参和实参共享同一单元

    | 传递方式   | 改变原值 | 函数命名                | 函数调用 |
    | ---------- | -------- | ----------------------- | -------- |
    | 值         | 否       | void func(int i)        | func(a)  |
    | 指针       | 是       | void func(int *i)       | func(&a) |
    | 引用       | 是       | void func(int &i)       | func(a)  |
    | const 引用 | 否       | void func(const int &i) | func(a)  |

    ```cpp
    void func(vector<int> vec1, vector<int> &vec2){
        /* 在函数中修改 vec1 不会改变原 vec */
        /* 在函数中修改 vec2 会改变原 vec */
    }
    ```

2. 选择传递方式，[参考 设计 C++函数传参时如何决定使用指针还是引用🔗🔗](https://www.zhihu.com/question/31276547/answer/233683553)
   1. 函数不是构造函数，且参数是只读，用 const 引用
   2. 函数不是构造函数，且参数是作为输出的参数，用指针
   3. 函数不是构造函数，且不是只读，用引用

3. 默认参数

    ```cpp
    // 默认参数智能放在函数末尾
    int func(int a, int b=0);    // √
    int func(int a=0, int b=0);  // √
    int func(int a=0, int b);    // ×
    ```

### 1.3. 不定长度参数

1. 不定长度参数

    ```cpp
    #include <stdarg.h>
    #include <iostream>

    using namespace std;

    void puts(char *fmt, ...) {
        va_list args;
        va_start(args, fmt);    // 将 fmt 后的参数存入 args 中
        char msg[64];
        vsprintf(msg, fmt, args);   // 类似于 sprintf 函数
        va_end(args);
        printf("\033[31;1m%s\n\033[0m", msg);   // 红色打印
    }

    int main(int argc, char const *argv[]) {
        puts("a = %d\n", 1);

        return 0;
    }

    ```

### 1.4. 参考

- [C++函数传递参数的方式有哪些？🔗](https://blog.csdn.net/summer00072/article/details/80992519)
- [设计 C++函数传参时如何决定使用指针还是引用？ - 神奇先生的回答 - 知乎🔗](https://www.zhihu.com/question/31276547/answer/233683553)

## 2. 返回值

1. char 类型返回值
