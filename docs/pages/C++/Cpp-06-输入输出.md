# 6. 输入输出

## 1. iostream

### 1.1. cin & cout

1. 避免控制台直接关闭

    ```cpp
    cin.get();
    // 或
    system("pause");
    ```

### cerr

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
    | ios::out   | 写入, 会清空现有文件     |
    | ios::trunc | 如果文件存在, 则截断文件 |

2. 读写文件

    ```cpp
    #include <iostream>
    #include <fstream>
    using namespace std;

    int main(int argc, char const *argv[]) {

        // 读文件, 文件必须已存在
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
        // ofile.seekg(0, ios::end);   // 定位到文件末尾, 也可以使用追加模式
        ofile << "fstream file write." << endl;
        ofile << "fstream file write." << endl;
        ofile.close();  // 关闭文件

        return 0;
    }
    ```

### 2.2. fopen

1. 打开文件方式

    | 方式 | 功能                                                   |
    | ---- | ------------------------------------------------------ |
    | r    | 只读, 文件必须存在                                     |
    | r+   | 读写, 文件必须存在                                     |
    | w    | 只写, 如文件不存在则新建, 文件存在则原本内容会消失     |
    | w+   | 读写, 如文件不存在则新建, 文件存在则原本内容会消失     |
    | a    | 追加,只写, 如文件不存在则新建,文件存在则原本内容会保留 |
    | a+   | 追加,读写, 如文件不存在则新建文件存在则原本内容会保留  |
    | ...  | ...                                                    |

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

4. 写文件, 推荐使用fprintf

    ```cpp
    // 写入文件 fprintf
    fprintf(file, "use fprintf write file.\r");
    char c1[] = "pi=";
    float f1 = 3.14;
    fprintf(file, "%s%f", &c1, f1);

    // 写入文件 fwrite
    char buffer[] = "use fwrite write file.\r";
    // 写入数据的地址, 块长度, 块数量, 写入的文件
    fwrite(buffer, sizeof(char), sizeof(buffer)-1, file);
    ```

### 2.3. 参考

- [c++文件读写详解](https://blog.csdn.net/kingstar158/article/details/6859379)
