# 6. 输入输出

## 1. iostream

### 1.1. cin & cout 标准输入输出

1. 输入

    ```cpp
    cin >> 变量 1 >> 变量 2 >> ... >> 变量 n;
    ```

2. 输出

    ```cpp
    cout << 表达式 1 << 表达式 2 << ... << 表达式 n;
    ```

3. 避免控制台直接关闭

    ```cpp
    cin.get();
    // 或
    system("pause");
    ```

4. 参考 [C++中 cout、cin 和 endl 的用法](https://blog.csdn.net/Lee_Shuai/article/details/53313988)

### 1.2. cerr 标准错误

> cerr 流对象是标准错误流，指定为和显示器关联，和 cout 作用差不多，有点不同就是 cout, 通常是传到显示器输出，但可以被重定向输出到文件，而 cerr 流中的信息只能在显示器输出

### 1.3. printf

1. printf 语法

    ```cpp
    printf("abcd\n");
    printf("%s %d\n", c_str, num);
    ```

2. 常用变量输出方法

    | 符号 | 变量                | 说明   |
    | ---- | ------------------- | ------ |
    | %d   | int                 | 整型   |
    | %ld  | long                | 长整型 |
    | %f   | float               | 浮点   |
    | %s   | char/string.c_str() | 字符   |

3. 数值精度
4. 对齐方法
   1. `\t`适用于输出字符长度相差不大的情况

        ```cpp
        // 字符长度相差较大就会造成无法对齐的情况
        printf("abc \tabc\n");            // abc     abc
        printf("abcdef \tabcdef\n");      // abcdef  abcdef
        printf("abcdefgh \tabcdefgh\n");  // abcdefgh        abcdefgh
        printf("abcd \tabcd\n");          // abcd    abcd
        ```

   2. `%ns`适用于`\t`无法实现对齐的场景

        ```cpp
        // 正数代表右对齐，左侧补空格
        // 负数代表左对齐，右侧补空格
        printf("%-10s abc\n", "abc");            // abc        abc
        printf("%-10s abcdef\n", "abcdef");      // abcdef     abcdef
        printf("%-10s abcdefgh\n", "abcdefgh");  // abcdefgh   abcdefgh
        printf("%10s abcd\n", "abcd");           //       abcd abcd
        ```

## 2. 文件读写

### 2.1. 文件流 fstream

1. fstream

    | fstream  | 功能                                 |
    | -------- | ------------------------------------ |
    | ofstream | 文件写操作，内存写入存储设备         |
    | ifstream | 文件读操作，存储设备读取到内存中     |
    | fstream  | 读写操作，对打开的文件可进行读写操作 |

    | 打开方式   | 功能                     |
    | ---------- | ------------------------ |
    | ios::app   | 追加模式                 |
    | ios::ate   | 文件打开后定位到文件末尾 |
    | ios::in    | 读取                     |
    | ios::out   | 写入，会清空现有文件     |
    | ios::trunc | 如果文件存在，则截断文件 |

2. 读写文件

    ```cpp
    #include <iostream>
    #include <fstream>
    using namespace std;

    int main(int argc, char const *argv[]) {

        // 读文件，文件必须已存在
        fstream file(file_name);
        if (!file.is_open()) {
            cerr << "Open file " << file_name << " failed!" << endl;
        }
        char buffer[100];
        while (!file.eof()) {
            file.getline(buffer, 100);  // 按行输出
            cout << buffer << endl;
        }
        file.close();   // 关闭文件

        // 写文件
        fstream ofile(file_name, ios::app);  // 追加模式
        // ofile.seekg(0, ios::end);   // 定位到文件末尾，也可以使用追加模式
        ofile << "fstream file write." << endl;
        ofile.close();  // 关闭文件

        return 0;
    }
    ```

### 2.2. fopen

1. 打开文件方式

    | 方式 | 功能                                                     |
    | ---- | -------------------------------------------------------- |
    | r    | 只读，文件必须存在                                       |
    | r+   | 读写，文件必须存在                                       |
    | w    | 只写，如文件不存在则新建，文件存在则原本内容会消失       |
    | w+   | 读写，如文件不存在则新建，文件存在则原本内容会消失       |
    | a    | 追加，只写，如文件不存在则新建，文件存在则原本内容会保留 |
    | a+   | 追加，读写，如文件不存在则新建文件存在则原本内容会保留   |
    | ...  | ...                                                      |

2. 打开文件

    ```cpp
    // 打开文件
    FILE *file = fopen("test.txt", "r");
    if (file == NULL) {
        cout << "Open file failed!" << endl;
        exit(0);
    }

    /* 文件读写 */

    // 关闭文件
    fclose(file);
    ```

3. 读文件

    ```cpp
    // fscanf, 遇到空格会换行
    char c1[10], c2[10];
    fscanf(file, "%s %s", &c1, &c2);
    // 按行读取
    char buffer[256];
    while (EOF != fscanf(file, "%s", buffer)) {
        cout << buffer << endl;
    }

    // fread
    char buffer[256];
    fread(buffer, sizeof(char), 200, file);

    // fgets
    char buffer[256];
    while (fgets(buffer, 256, file) != NULL) {
        char *data = strtok(buffer, "\n");  // 去除换行符 #include <cstring>
        cout << data << endl;
    }
    ```

4. 写文件，推荐使用 fprintf

    ```cpp
    // 写入文件 fprintf, 推荐使用
    fprintf(file, "use fprintf write file.\n");
    char c1[] = "pi=";
    float f1 = 3.14;
    fprintf(file, "%s%f", &c1, f1);

    // 写入文件 fwrite
    char buffer[] = "use fwrite write file.\n";
    // 写入数据的地址，块长度，块数量，写入的文件
    fwrite(buffer, sizeof(char), sizeof(buffer) - 1, file);
    ```

### 2.3. 参考

- [c++文件读写详解](https://blog.csdn.net/kingstar158/article/details/6859379)

## 3. 输入输出格式化

### 3.1. 输入格式化

1. scanf 从控制台输入

    ```cpp
    #include <stdio.h>

    using namespace std;

    int main(int argc, char const *argv[])
    {
        int a, b;
        cout << "请输入两个整数，用空格隔开" << endl;   // 回车也可
        scanf("%d %d", &a, &b);  // 等同于 cin >> a >> b;
        printf("a = %d\n", a);
        printf("b = %d\n", b);
        return 0;
    }
    ```

2. sscanf 从字符串中输入，参考 [C 语言函数 sscanf() 的用法](https://www.cnblogs.com/lyq105/archive/2009/11/28/1612677.html)

    ```cpp
    #include <stdio.h>

    using namespace std;

    int main(int argc, char const *argv[])
    {
        char str[] = "pi = 3.14";
        char variable[10];
        float num;
        sscanf(str, "%s = %f", variable, num);
        cout << variable << endl; 
        cout << num << endl; 
        return 0;
    }
    ```

3. fscanf 从文件中输入，遇到空格和换行结束

### 3.2. 输出格式化

1. sprintf

    ```cpp
    // 格式化
    sprintf(c1, "%s abc %d", c2, i);  // 字符串只能用 char 型
    ```
