# Linux学习笔记

## 1. 系统安装及配置（Ubuntu）

### 1.1. 更换软件源

1. 备份原始源文件/etc/apt/sources.list
      `sudo cp sources.list sources_backup.list`
2. 更换[清华源](https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/)
3. 更新软件列表
      `sudo apt-get update`

### 1.2. 配置ssh

1. 查看有没有安装ssh, ubuntu默认安装了ssh-client

   ```bash
   dpkg -l | grep ssh
   ```

2. 如果没有安装

   ```bash
   # 连接其他机器
   sudo apt-get install openssh-client
   # 被其他机器连接
   sudo apty-get install openssh-server
   ```

3. 查看ssh有没有开启

   ```bash
   ps -e | grep ssh
   ```

## 2. 概念

1. BASH（Bourne Again SHell）：bash 是最初 Unix 上由 Steve Bourne 写成 shell 程序 sh 的增强版

## 3. 基础使用

1. 文件操作
   1. pwd(print name of current working directory)打印出当前工作目录名
   2. cd(Change directory)更改目录
      1. 符号“.”指的是工作目录，“..”指的是工作目录的父目录
   3. ls(List directory contents)列出目录内容
      1. -a：add，显示全部文件（包括隐藏文件）
      2. -l：long，结果以长模式输出
      3. -t：按文件修改时间先后排序
      4. -r：结果以相反顺序输出
      5. -S：结果按文件大小排序
      6. 长模式

      | drwxr-sr-x             | 9              | user             | user   | 283 Jul 23 06:09 | user   |
      | ---------------------- | -------------- | ---------------- | ------ | ---------------- | ------ |
      | 权限：用户、同组、其他 | 文件硬链接数目 | 文件所有者用户名 | 用户组 | 上次修改时间     | 文件名 |

2. 操作系统
   1. file：确定文件类型
   2. less：浏览文件内容

      | 命令     | 行为         |
      | -------- | ------------ |
      | PageUp   | 向上翻滚一页 |
      | PageDown | 向下翻滚一页 |
      | h        | 显示帮助     |
      | q        | 退出less     |

3. 使用命令
   1. type：说明怎样解释一个命令名
   2. which：显示会执行那个可执行程序
   3. man：显示命令手册页
   4. apropos：显示一系列适合的命令
   5. info：显示命令info
   6. whatis：显示一个命令的简洁描述
   7. alias：创建命令别名
4. I/O重定向：允许我们改变输出地点和输入来源
   1. 命令
      1. cat：连接文件
      2. sort：排序文本行
      3. uniq：报道或省略重复行
      4. grep：打印匹配行
      5. wc：打印文件中的换行符，字，和字节个数
      6. head：输出文件第一部分（-n 调整打印行数）
      7. tail：输出文件的最后一部分（-n 调整打印行数）
      8. tee：从标准输入Stdin读取数据，并同时写到标准输出Stdout和文件
   2. 管道
      1. command1 | command2 一个命令的标准输出可以通过管道送至另一个命令的标准输入
5. shell命令
   1. echo：
6. 键盘高级操作技巧
   1. clear：清空屏幕
   2. history：显示历史列表内容

## 4. vi用法

1. vi的模式
   - 一般模式（默认）：移动光标、粘贴、拷贝、存盘、退出等
   - 编辑模式：在一般模式中键入`i, o, a, r`可进入编辑模式，在此模式下可完成文本输入操作，“Esc”返回一般模式
   - 指令模式：在一般模式下键入`: / ?`进入指令模式，执行查找、读取、存盘、离开等命令

2. vi退格和方向键不能使用的问题

   ```bash
   # 编辑vimrc.tiny文件
   sudo vi /etc/vim/vimrc.tiny
   # 修改 set compatible 为
   set nocompatible
   # 增加
   set backspace=2
   ```

3. vi指令

   | 命令          | 应用模式 | 功能                                        |
   | ------------- | -------- | ------------------------------------------- |
   | a             | 一般模式 | 增加文本                                    |
   | i             | 一般模式 | 插入文本                                    |
   | o             | 一般模式 | 插入新的一行                                |
   | k             | 一般模式 | 上移                                        |
   | j             | 一般模式 | 下移                                        |
   | h             | 一般模式 | 左移                                        |
   | l             | 一般模式 | 右移                                        |
   | r             | 一般模式 | 替换字符                                    |
   | 0             | 一般模式 | 移动到行首字符处                            |
   | $             | 一般模式 | 移动到行尾字符处                            |
   | Ctrl+b        | 一般模式 | 向上翻页                                    |
   | Ctrl+f        | 一般模式 | 向下翻页                                    |
   | Ctrl+u        | 一般模式 | 向上翻半页                                  |
   | Ctrl+d        | 一般模式 | 向下翻半页                                  |
   | x             | 一般模式 | 删除本文, 相当于Del                         |
   | X             | 一般模式 | 删除本文, 相当于Backspace                   |
   | dd            | 一般模式 | 删除当前行                                  |
   | n dd          | 一般模式 | 删除指定行数                                |
   | D             | 一般模式 | 删除光标后本行所有内容,包含光标所在的字符   |
   | u             | 一般模式 | 撤销上一步操作, 相当于Ctrl+z                |
   | d0            | 一般模式 | 删除光标前本行所有内容,不包含光标所在的字符 |
   | dw            | 一般模式 | 删除光标开始位置的字,包含光标所在的字符     |
   | Esc           | 编辑模式 | 退回到一般模式                              |
   | :w            | 指令模式 | 存盘                                        |
   | :w!           | 指令模式 | 强行存盘                                    |
   | :q            | 指令模式 | 退出                                        |
   | :q!           | 指令模式 | 强制退出                                    |
   | :wq           | 指令模式 | 存盘退出                                    |
   | :w filename   | 指令模式 | 另存为“filename”文件                        |
   | /word         | 指令模式 | 向后寻找字符串“word”, n 继续查找下一个      |
   | ?word         | 指令模式 | 向前寻找字符串“word”, n 继续查找下一个      |
   | :set number   | 指令模式 | 打开行号显示                                |
   | :set paste    | 指令模式 | 然后输入o进入复制模式, 避免复制缩进问题     |
   | :n            | 指令模式 | 跳到第n行                                   |
   | :0/$          | 指令模式 | 跳到第一行/最后一行                         |
   | :a,bs/s1/s2/g | 指令模式 | 将a到b行的s1全部替换成s2, /g不询问直接替换  |

## 5. Shell脚本

1. 什么是Shell脚本：一个Shell脚本就是一个包含一系列命令的文件。
2. 创建脚本文件
   1. 编写一个脚本
   2. 使脚本文件可执行（需要设置脚本文件的权限，使其可执行）

      ```shell
      chmod 775 shell
      ```

      - 常见权限设置：775——每个人都能执行，700——只有文件所有者能执行

   3. 把脚本文件放置到shell能够到的地方，一般放在`/home/me/bin`下，因为这个文件默认在PATH配置中
3. 执行脚本
   1. 工作目录执行 `./shell.sh`
   2. 绝对路径执行 `/home/user/Desktop/Project/shell.sh`
   3. sh执行 `sh shell.sh` 或 `bash shell.sh`
   4. shell环境执行 `. shell.sh` 或 `source shell.sh`
   5. bash执行`bash xx.sh`

4. find指令：find -name "xx*"
5. grep指令：grep 要查的字符 文件
6. top指令: 查询系统资源使用情况

## 6. 常用指令

### 6.1. 查询指令

1. find指令：find -name "xx*"
2. findcpp xxx：查询含有xxx的cpp文件, findh类似
3. grep指令：grep 要查的字符 文件

   ```bash
   # 查找含print字符的cpp文件
   grep print *cpp
   ```

### 6.2. 进程指令

1. 进程信息

      | 名称    | 描述                         |
      | ------- | ---------------------------- |
      | USER    | 启动该进程的账户名称         |
      | PID     | 进程ID                       |
      | TTY     | 表明该进程在那个终端上运行   |
      | STAT    | 进程状态                     |
      | START   | 启动该进程的时间             |
      | TIME    | 该进程占用的CPU时间          |
      | COMMAND | 启动该进程的命令的名称       |
      | %CPU    | 占用CPU的百分比              |
      | %MEM    | 占用内存的百分比             |
      | VSZ     | 占用虚拟内存(swap空间)的大小 |
      | RSS     | 占用常驻内存(物理内存)的大小 |

      - > TTY：'?' 表示未知或不需要终端
      - > STAT：S(休眠)、Z(僵死)、<(高优先级)、N(低优先级)、s(父进程)、+(前台进程)

2. 查询进程
   1. ps：查找与进程相关的PID号
      | 命令   | 功能                         |
      | ------ | ---------------------------- |
      | a      | 列出所有进程                 |
      | e      | 显示每个程序所使用的环境变量 |
      | f      | 显示树状结构                 |
      | u      | 以用户为主的进程显示         |
      | x      | 显示所有程序，不以终端区分   |
      | -aux   | 组合命令                     |
      | \|less | 筛选                         |
      | --sort | 排序                         |

   2. 关闭进程
      1. 当用户在前台执行某个进程时，可以按Ctrl+C组合键强制进行中断
      2. kill PID
      3. kill -9 PID 强制终止
      4. killall 进程名
   3. top命令：类似Windows资源管理器
   4. pgrep命令：查询进程信息
      1. pgreg -l "进程名"
   5. pstree命令：查看进程树
      1. pstree命令默认情况下只显示个进程的名称
      2. 结合“-p”选项使用时可以同时列出对应的PID号
      3. 结合“-u”选项可以列出对应的用户名
      4. 结合“-a”选项可以列出完整的命令信息

### 6.3. 运行程序

1. 运行程序指令

   ```bash
   # 后台运行程序: 关闭终端不影响程序运行
   ./app &
   # 后台运行程序, 终端不显示输出
   ./app > /dev/null &
   ```

## 7. Linux & c++

### 7.1. 库的使用

#### 7.1.1. 库分类

1. 静态库：静态库的代码在编译过程中已经被载入可执行程序，因此体积较大
2. 动态库（共享库）：代码不会连接到目标文件之中，只有当动态库可访问时，应用程序才能正确执行动态库函数。执行动态库的方式有隐式调用和显式调用
   1. 隐式调用：也称共享库的静态加载，动态库在应用开始执行时会自动载入内存，进程结束时又自动卸载。隐式调用的编译方式与静态库一致
   2. 显式调用：也称共享库的动态加载，编译时可以不显式的提供原动态库文件及名称，但是必须遵循dlopen等函数的规则实现调用

#### 7.1.2. 静态库

1. 静态库生成：设计源码->编译`.o`文件->链接静态库，命名规则`libxxx.a`
2. 静态库的应用模型
   1. 调用库函数代码
   2. 编译链接选项

     ```shell
     # cc -O -o main.c ./libxxx.a
     ```

3. 执行目标程序`# ./main`

#### 7.1.3. 动态库

1. 动态库生成：
   1. 设计源码（exp：d1.c & d2.c）
   2. Linux和其它使用gcc编译器的Unix

     ```cpp
     gcc -fpic -c d1.c d2.c /*编译.o为扩展名的中间目标文件*/
     gcc -shared -o d1.so d1.o /*创建动态库文件d1.so*/
     gcc -shared -o d2.so d2.o /*创建动态库文件d2.so*/
     ```

     或者可以一步到位

     ```cpp
     gcc -O -fpic -shared -o d1.so d1.c/*创建动态库文件d1.so*/
     gcc -O -fpic -shared -o d2.so d2.c/*创建动态库文件d2.so*/
     ```

2. 动态库的隐式调用
   1. 调用库函数代码（main程序 main.c）
   2. 编译链接选项

      ```bash
      # cp d1.so dll.so
      # cc -O -o main main.c ./dll.so
      # ./main  /*运行程序*/
      ```

   3. 动态库查找：动态库文件变更位置后程序无法正常运行，解决方法：带路径编译或更改环境变量
   4. 动态库更换：动态链接库取代静态库的好处之一是随时升级库的内容

      ```bash
      # cp d2.so dll.so
      # ./main
      ```

3. 动态库的显式调用
   1. 函数族：显式调用动态库，编译时无需库文件，执行时动态库可存储于人艺文志，库里共享对象必须先申请后使用，不同版本的动态库，只要其共享对象接口相同，就可以直接动态加载。
      1. 打开动态库

          ```c
          #include <dlfcn.h>
          void *dlopen(const char *pathname, int mode);     //加载动态库
          ```

          - pathname：带路径的动态库名
          - mode：动态库加载方式
            - RTLD_LAZY：动态库的对象符号在被调用时解析
            - RTLD_NOW：动态库对象的所有符号在函数dlopen返回前被解析

      2. 获取动态库对象地址

          ```c
          #include <dlfcn.h>
          void *dlsym(const char *handle, const char *name);    //dlsym在动态库中搜索与字符串name同名的对象
          ```

          - handle：由函数dlopen返回成功加载动态库的句柄
          - name：待使用对象的名称（动态库中包含的函数名或变量名）
      3. 错误检查

          ```c
          #include <dlfcn.h>
          char *dlerror(void);  //获取显示动态库操作中的错误信息
          ```

      4. 关闭动态库

          ```c
          #include <dlfcn.h>
          void *dlclose(char *handle);  //动态库使用完必须关闭
          ```

   2. 应用模型：打开动态库->获取对象地址->执行动态对象（可回到上一步）->关闭动态库

#### 7.1.4. 小结

- 三种库调用对比

     | 对比项         | 静态库     | 隐式调用   | 显式调用 |
     | -------------- | ---------- | ---------- | -------- |
     | 编译参数       | 传递编译器 | 传递编译器 | 不需要   |
     | 链接到目标文件 | 是         | 否         | 否       |
     | 库存储位置     | 不需要     | 特定位置   | 任意位置 |
     | 载入时间       | 进程启动   | 进程启动   | 任意时刻 |

### 7.2. 标准文件编程库

#### 7.2.1. 文件的创建、打开、关闭和删除

- filename：打开文件的名称（带路径）
- type：打开文件的方式，由权限和类型两部分组成
- stream：已经打开的文件指针

1. fopen函数：打开或创建一个文本

    ```c
    fopen(const char *filename, const char *type)
    ```

    | 方式 | 描述                                                                 |
    | ---- | -------------------------------------------------------------------- |
    | r    | 以只读方式打开，不能更改内容，若文件不存在则报错                     |
    | w    | 以只写方式打开，若文件已存在，清空原文件内容，否则创建新文件         |
    | a    | 以追加方式打开，若文件已存在，则在文件末尾增加内容，否则创建新文件   |
    | r+   | 以读写方式打开，若文件不存在则报错                                   |
    | w+   | 以读写方式打开，若文件已存在，清空原文件内容，否则创建新文件         |
    | a+   | 以读取和追加模式打开文件，全文读取，文末追加，若文件不存在创建新文件 |
    | b    | 以二进制模式打开或创建文件，否则以文本文件打开或创建文件             |

2. freopen函数：实现文件流的替换。它首先关闭一个文件流，再创建新的文件流

    ```c
    FILE *freopen(const char *filename, const char *type, FILE *stream)
    ```

    | FILE标识符 | 文件         |
    | ---------- | ------------ |
    | stdout     | 标准输出     |
    | stdin      | 标准输入     |
    | stderr     | 标准错误输出 |

3. fclose函数

    ```c
    // 关闭文件流，成功时返回0，否则返回EOF
    int fclose(FILE *stream);
    ```

4. remove函数

    ```c
    // 删除指定文件或目录
    int remove(const char *filename);
    ```

5. rename函数

    ```c
    // 重命名
    int rename(const char *oldname, const char *newname);
    ```

6. 二进制文件与文本文件
   1. 文本文件又称为ASCII码文件，可以用vi等文本编辑器编辑其中任意字符，也可以直接操作以空额、制表符或换行符分割的单词和文本。C语言源代码是典型的文本文件。
   2. 二进制文件中可以包含任意字符，没有固定格式，文本编辑器无法正常阅读，所有对文件的解析都由应用程序完成。C语言编译后的可执行文件就是二进制文件。

#### 7.2.2. 文件的无格式读写

1. 字符读写：每次之操作一个字符
   1. 字符输入函数族

        ```c
        #include<stdio.h>
        // getc以unsigned char类型读取文件输入流stream中的一个字符，并将该无符号字符转化为整型后返回，同时移动文件指针到下一个字符处
        int getc(FILE *stream);
        // getchar实际上是关于getc的宏定义“getc(stdin)”
        int getchar(void);
        // fgetc功能类似于getc，但是执行速度远低于getc
        int fgetc(FILE *stream);

        // 错误时都返回EOF，EOF一般定义为int型-1
        ```

   2. 字符输出函数族

        ```c
        #include<stdio.h>
        // 函数putc先将int型参数c自动转换为unsigned char类型，然后写入文件流stream中，同时移动文件指针到下一个字符处
        int putc(int c, FILE *stream);
        int putchar(int c);
        int fputc(int c, FILE *stream);
        ```

2. 行读写
   1. 行输入函数族

        ```c
        #include<stdio.h>
        //
        char *gets(char *s);
        char *fgets(char *s, int n, FILE *stream)

        ```

### 7.3. linux命令

1. grep 文件搜索
   1. 常用命令
      1. grep：在没有参数的情况下，只输出符合RE（Regular Expression）字符。
      2. egrep：等同于grep -E，和grep最大的区别就是表现在转义符上比如grep 做次数匹配时\{n,m\}egrep则不需要直接{n，m}。egrep方便，简介。
      3. fgrep：等同于grep -f，但是不能使用正则表达式。所有的字符匹配功能均已消失。
   2. 参数说明 `grep [OPTIONS] PATTERN(模式) [file]`

2. 压缩与解压

    ```bash
    # 压缩
    tar zxvf filename.tar
    # 解压
    tar czvf filename.tar dirname
    ```

### 7.4. coredump

1. coredump概念：程序调试
2. coredump开启
   1. 输入命令`ulimit -c`，结果为0表示未打开
   2. 输入命令`ulimit -c unlimited`开启coredump
3. gdb调试
   1. 调试core文件`gdb program coredumpfile`
   2. 调试服务程序`gdb program PID`

- [linux下core dump](https://www.cnblogs.com/Anker/p/6079580.html)

## 8. 用户和组

### 8.1. 创建用户和组

1. 创建用户, 参考[添加删除用户和用户组](https://www.cnblogs.com/xd502djj/archive/2011/11/23/2260094.html)

   ```bash
   # 创建用户
   adduser username  # 用户名
   passwd 1234 # 密码

   # 创建组
   groupadd group

   # 同时创建用户并添加到组
   useradd -g group username
   ```

2. 给已有的用户添加组

   ```bash
   usermod -G group username  # 会把这个用户从其他组中删除
   usermod -a group username
   ```

### 8.2. 删除用户和组

1. 关闭/释放用户

   ```bash
   # 临时关闭
   passwd username -l
   # 重新释放
   passwd username -u
   ```

2. 永久删除用户/组

   ```bash
   userdel username
   groupdel group
   ```

3. 从组中删除用户

   ```bash
   gpasswd -d username group
   ```

### 8.3. 操作用户和组

1. 查看用户/组列表

   ```bash
   # 查看用户
   cat /etc/passwd
   # 查看组, 分四个字段 用户组:用户组密码:GID:用户列表
   cat /etc/group
   ```

## 9. 备注

- [教程地址](http://billie66.github.io/TLCL/book/index.html)
