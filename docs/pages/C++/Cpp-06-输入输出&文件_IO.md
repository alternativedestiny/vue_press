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

### 1.3. printf 格式化&彩色

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

5. 修改输出颜色 (Linux)

    ```cpp
    // 输出内容为红字，31 表示红色，1m 高亮，0m 关闭所有属性
    printf("\033[31;1m%s\033[0m", msg); // 红色高亮
    printf("\033[32;1m%s\033[0m", msg); // 绿色高亮
    printf("\033[33;1m%s\033[0m", msg); // 黄色高亮

    // 也可以通过宏定义
    #define printr(format, args...) (printf("\033[31;21m" format "\033[0m", ##args))    // red
    #define printg(format, args...) (printf("\033[32;21m" format "\033[0m", ##args))    // green
    #define printy(format, args...) (printf("\033[33;21m" format "\033[0m", ##args))    // yellow
    ```

    | 样式配置 | 样式         |
    | -------- | ------------ |
    | \033[0m  | 关闭所有属性 |
    | \033[1m  | 高亮         |
    | \033[2m  | 亮度减半     |
    | \033[3m  | 斜体         |
    | \033[4m  | 下划线       |
    | \033[5m  | 闪烁         |
    | \033[6m  | 快闪         |
    | \033[7m  | 反显         |
    | \033[8m  | 消隐         |
    | \033[9m  | 中间一道横线 |

    | 前景色 | 背景色 | 备注                                        |
    | ------ | ------ | ------------------------------------------- |
    | 30     | 40     | 黑                                          |
    | 31     | 41     | 红                                          |
    | 32     | 42     | 绿                                          |
    | 33     | 43     | 黄                                          |
    | 34     | 44     | 蓝色                                        |
    | 35     | 45     | 紫色                                        |
    | 36     | 46     | 深绿                                        |
    | 37     | 47     | 白色                                        |
    | 38     | 48     | 打开下划线，设置默认前景色/无               |
    | 39     | 49     | 关闭下划线，设置默认前景色/设置，默认背景色 |

    - 参考 [C/C++改变终端（cout ）(printf) 输出不同颜色的字体](https://www.codeleading.com/article/1816945688/)

6. printf 彩色输出封装

    ```cpp
    // 红色高亮输出
    #define printr(format, args...) (printf("\033[31;1m" format "\033[0m", ##args))

    int main(int argc, char const *argv[]) {
        printr("%s %d", "avc", 1);
        return 0;
    }

    ```

### 1.4. 关闭缓冲区

1. 正常的`printf`和`cout`不加换行符不会打印出来，需要关闭缓冲区，也可以使用清空缓冲区的方法

    ```cpp
    setbuf(stdout, NULL);   // 关闭缓冲区
    fflush(stdout);         // 清空缓冲区
    ```

2. 实现进度条的方法，[参考链接](https://blog.csdn.net/u014311125/article/details/102798699)

    ```cpp
    #include <Windows.h>

    #include <iostream>

    int main() {
        int all_block_num = 1000;
        for (int i = 0; i < all_block_num; i++) {
            if (i < all_block_num - 1) {
                printf("\r 读取中 [%.2lf%%]:", i * 100.0 / (all_block_num - 1));
            } else {
                printf("\r 读取完成 [%.2lf%%]:", i * 100.0 / (all_block_num - 1));
            }
            int show_num = i * 20 / all_block_num;
            for (int j = 1; j <= show_num; j++) {
                std::cout << "█";
                Sleep(20);
            }
        }
        std::cout << std::endl;
        return 1;
    }
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

5. 清除文件缓冲区

    ```cpp
    fflush(file);   // 清除文件缓冲区
    ```

### 2.3. ini 文件解析

1. 文件格式

    ```ini
    [class1]
    a = 1
    b = 2

    [class2]
    c = 3
    d = 4

    ```

2. 解析

    ```cpp
    struct Conf {
        int a;
        int b;
        int c;
        int d;
    }

    // 读取配置文件
    void GetConf(Conf &conf) {
        char file[128] = "conf.ini";

        FILE *fp = fopen(file, "r");

        if (fp == NULL) {
            cout << "Can't open conf.ini, please check config file!" << endl;
            return;
        }

        map<string, int> conf_map;
        char buffer[256];
        while (fgets(buffer, sizeof(buffer), fp) != NULL) {
            string line = buffer;

            if (line.find_first_not_of(" ") == "#") {
                continue;  // 跳过注释行
            }

            char ckey[128], cval[128];

            if (line.find('=') != string::npos) {
                sscanf(buffer, "%s = %d", ckey, cval);
                conf_map[ckey] = cval;
            }
        }

        fclose(fp);

        conf.a = conf_map.at("a");
        conf.b = conf_map.at("b");
    }
    ```

### 2.4. 文件列表

1. 头文件

    ```cpp
    #include <sys/types.h>
    #include <dirent.h>
    #include <unistd.h>
    ```

2. 程序

    ```cpp
    // 获取文件列表
    vector<string> file_vec;
    DIR *dp;
    struct dirent *ptr;
    char path[128];  // 路径
    char file[128];  // 路径+文件名

    sprintf(path, "a/b/c");
    dp = opendir(path);
    if (dp == NULL) {
        return;
    }

    while ((ptr = readdir(dp)) != 0) {
        // 过滤掉`.`和`..`
        if (strcmp(ptr->d_name, ".") != 0 && strcmp(ptr->d_name, "..") != 0) {
            sprintf(file, "%s/%s", path, ptr->d_name);
            printf("%s\n", file);
            file_vec.push_back(file);
        }
    }

    closedir(dp);
    ```

### 2.5. 文件信息

1. 头文件

    ```cpp
    #include <sys/stat.h>
    #include <unistd.h>
    ```

2. 程序

    ```cpp
    struct stat tmp;
    stat(file_path, &tmp);  // 文件不存在返回-1, 否则返回 0

    // 文件最后一次修改时间
    time_t modify_time = tmp.st_mtime;
    // 文件最后一次访问时间
    time_t access_time = tmp.st_atime;
    // 最后一次改变时间（指属性）
    time_t change_time = tmp.st_ctime;

    // 文件大小
    int size = tmp.st_size; // 字节 Bytes
    ```

3. 参考 [linux C++ 获取文件信息 stat 函数详解](https://www.cnblogs.com/matthew-2013/p/4679425.html)

### 2.6. 文件删除

1. 头文件

    ```cpp
    #include <cstdio>
    ```

2. 程序

    ```cpp
    remove(file);
    ```

### 2.7. 参考

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
        // 成功则返回参数数目，失败则返回-1，错误原因存于 errno 中
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

## 4. 创建文件夹

1. 创建单个文件夹

    ```cpp
    // linux 检测文件夹是否存在，不存在就创建
    if (access(folder, F_OK) == 0) {
        continue;
    } else {
        mkdir(folder, 0775);
    }
    ```

2. 按照路径创建多级文件目录

    ```cpp
    // 创建多级文件目录
    void create_folder(const char *path) {
        printf("Create folder: %s\n", path);

        string path_str = path;
        vector<string> path_vec;
        split(path_str, path_vec, "/");

        char folder[256];
        sprintf(folder, "/%s", path_vec[0].c_str());  // 首个路径是系统路径，无需创建

        // 从根路径开始检测，如果不存在就创建
        for (size_t i = 1; i < path_vec.size(); ++i) {
            sprintf(folder, "%s/%s", folder, path_vec[i].c_str());
            if (access(folder, F_OK) == 0) {
                continue;
            } else {
                mkdir(folder, 0775);
            }
        }
    }
    ```
