# 4. 指针

1. `*`：间接寻址运算符，一元运算符，返回操作数所指定地址的变量的值
2. `&`：取地址运算符，一元运算符，返回操作数的内存地址

```c
int a = 1;
int *p = &a;    // √
int *p = a;     // ×

cout << a << endl;      // 1
cout << &a << endl;     // 0x61fe14
cout << p << endl;      // 0x61fe14
cout << *p << endl;     // 1

*p = 10;
cout << a << endl;      // 10
cout << p << endl;      // 0x61fe14
cout << *p << endl;     // 10

cout << typeid(a).name() << endl;       // i
cout << typeid(p).name() << endl;       // Pi
cout << typeid(*p).name() << endl;      // i
```
