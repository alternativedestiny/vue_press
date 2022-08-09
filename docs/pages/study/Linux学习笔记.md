# Linux 学习笔记 (Ubuntu)

## 1. 系统安装及配置

### 1.1. 更换软件源

1. 查看系统版本

    ```bash
    cat /etc/issue
    ```

2. 备份原始源文件/etc/apt/sources.list

    ```bash
    sudo cp sources.list sources_backup.list
    ```

3. 换源，选择对应的版本源
   1. [Ubuntu 清华源](https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/)
   2. [树莓派使用 Ubuntu Ports 镜像](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu-ports/)
4. 更新软件列表

    ```bash
    sudo apt-get update
    sudo apt-get upgrade
    ```

### 1.2. 开启 SSH

1. 开启 ssh

    ```bash
    # 检查系统有无安装 ssh
    dpkg -l|grep ssh

    # 卸载原有 ssh
    sudo apt-get remove openssh-server

    # 安装 ssh
    sudo apt-get install openssh-server

    # 修改配置文件，修改 Port
    sudo vi /etc/ssh/sshd_config
    # Port 1234
    # PasswordAuthentication yes

    # 重启 ssh 服务
    sudo service ssh --full-restart
    ```

2. 启动 ssh 出现 `no hostkeys available— exiting` 错误，[解决方案](https://wangxianggit.github.io/sshd%20no%20hostkeys%20available/)

    ```bash
    # root 用户下
    ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key
    ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key

    # 修改密钥权限
    chmod 600 /etc/ssh/ssh_host_dsa_key
    chmod 600 /etc/ssh/ssh_host_rsa_key

    # 重启 ssh
    sudo service ssh --full-restart
    ```

3. Xshell 连接 WSL 的时候需要先重启 ssh

## 2. 概念

1. BASH（Bourne Again SHell）：bash 是最初 Unix 上由 Steve Bourne 写成 shell 程序 sh 的增强版

## 3. 基础使用

1. 文件操作
   1. pwd(print name of current working directory) 打印出当前工作目录名
   2. cd(Change directory) 更改目录
      1. 符号“.”指的是工作目录，“..”指的是工作目录的父目录
   3. ls(List directory contents) 列出目录内容
      1. -a：add，显示全部文件（包括隐藏文件）
      2. -l：long，结果以长模式输出
      3. -t：按文件修改时间先后排序
      4. -r：结果以相反顺序输出
      5. -S：结果按文件大小排序
      6. 长模式

        | drwxr-sr-x             | 9              | user             | user   | 283 Jul 23 06:09 | user   |
        | ---------------------- | -------------- | ---------------- | ------ | ---------------- | ------ |
        | 权限：用户、同组、其他 | 文件硬链接数目 | 文件所有者用户名 | 用户组 | 上次修改时间     | 文件名 |

   4. ll 列出文件详细信息
      1. -h: 显示文件大小
2. 操作系统
   1. file：确定文件类型
   2. less：浏览文件内容

        | 命令     | 行为         |
        | -------- | ------------ |
        | PageUp   | 向上翻滚一页 |
        | PageDown | 向下翻滚一页 |
        | h        | 显示帮助     |
        | q        | 退出 less    |

3. 使用命令
   1. type：说明怎样解释一个命令名
   2. which：显示会执行那个可执行程序
   3. man：显示命令手册页
   4. apropos：显示一系列适合的命令
   5. info：显示命令 info
   6. whatis：显示一个命令的简洁描述
   7. alias：创建命令别名
4. I/O 重定向：允许我们改变输出地点和输入来源
   1. 命令
      1. cat：连接文件
      2. sort：排序文本行
      3. uniq：报道或省略重复行
      4. grep：打印匹配行
      5. wc：打印文件中的换行符，字，和字节个数
      6. head：输出文件第一部分（-n 调整打印行数）
      7. tail：输出文件的最后一部分（-n 调整打印行数）
      8. tee：从标准输入 Stdin 读取数据，并同时写到标准输出 Stdout 和文件
   2. 管道
      1. command1 | command2 一个命令的标准输出可以通过管道送至另一个命令的标准输入
5. shell 命令
   1. echo：
6. 键盘高级操作技巧
   1. clear：清空屏幕
   2. history：显示历史列表内容

## 4. Shell 脚本

1. 什么是 Shell 脚本：一个 Shell 脚本就是一个包含一系列命令的文件。
2. 创建脚本文件
   1. 编写一个脚本
   2. 使脚本文件可执行（需要设置脚本文件的权限，使其可执行）

      ```shell
      chmod 775 shell
      ```

      - 常见权限设置：775——每个人都能执行，700——只有文件所有者能执行

   3. 把脚本文件放置到 shell 能够到的地方，一般放在`/home/me/bin`下，因为这个文件默认在 PATH 配置中
3. 执行脚本
   1. 工作目录执行 `./shell.sh`
   2. 绝对路径执行 `/home/user/Desktop/Project/shell.sh`
   3. sh 执行 `sh shell.sh` 或 `bash shell.sh`
   4. shell 环境执行 `. shell.sh` 或 `source shell.sh`
   5. bash 执行`bash xx.sh`
4. 权限

    | 权限 | 权限数字 | 备注       |
    | ---- | -------- | ---------- |
    | r    | 4        | 读权限     |
    | w    | 2        | 写权限     |
    | x    | 1        | 可执行权限 |

## 5. 常用指令

### 5.1. 编辑指令 vi

1. vi 的模式
   - 一般模式（默认）：移动光标、粘贴、拷贝、存盘、退出等
   - 编辑模式：在一般模式中键入`i, o, a, r`可进入编辑模式，在此模式下可完成文本输入操作，“Esc”返回一般模式
   - 指令模式：在一般模式下键入`: / ?`进入指令模式，执行查找、读取、存盘、离开等命令

2. vi 退格和方向键不能使用的问题

   ```bash
   # 编辑 vimrc.tiny 文件
   sudo vi /etc/vim/vimrc.tiny
   # 修改 set compatible 为
   set nocompatible
   # 增加
   set backspace=2
   ```

3. vi 指令

    | 命令          | 应用模式 | 功能                                               |
    | ------------- | -------- | -------------------------------------------------- |
    | a             | 一般模式 | 增加文本                                           |
    | i             | 一般模式 | 插入文本                                           |
    | o             | 一般模式 | 插入新的一行                                       |
    | k             | 一般模式 | 上移                                               |
    | j             | 一般模式 | 下移                                               |
    | h             | 一般模式 | 左移                                               |
    | l             | 一般模式 | 右移                                               |
    | r             | 一般模式 | 替换字符                                           |
    | 0             | 一般模式 | 移动到行首字符处                                   |
    | $             | 一般模式 | 移动到行尾字符处                                   |
    | Ctrl+b        | 一般模式 | 向上翻页                                           |
    | Ctrl+f        | 一般模式 | 向下翻页                                           |
    | Ctrl+u        | 一般模式 | 向上翻半页                                         |
    | Ctrl+d        | 一般模式 | 向下翻半页                                         |
    | x             | 一般模式 | 删除本文，相当于 Del                               |
    | X             | 一般模式 | 删除本文，相当于 Backspace                         |
    | dd            | 一般模式 | 删除当前行                                         |
    | n dd          | 一般模式 | 删除指定行数                                       |
    | D             | 一般模式 | 删除光标后本行所有内容，包含光标所在的字符         |
    | u             | 一般模式 | 撤销上一步操作，相当于 Ctrl+z                      |
    | d0            | 一般模式 | 删除光标前本行所有内容，不包含光标所在的字符       |
    | dw            | 一般模式 | 删除光标开始位置的字，包含光标所在的字符           |
    | Esc           | 编辑模式 | 退回到一般模式                                     |
    | :w            | 指令模式 | 存盘                                               |
    | :w!           | 指令模式 | 强行存盘                                           |
    | :q            | 指令模式 | 退出                                               |
    | :q!           | 指令模式 | 强制退出                                           |
    | :wq           | 指令模式 | 存盘退出                                           |
    | :w filename   | 指令模式 | 另存为“filename”文件                               |
    | /word         | 指令模式 | 向后寻找字符串“word”, n 继续查找下一个             |
    | ?word         | 指令模式 | 向前寻找字符串“word”, n 继续查找下一个             |
    | :set number   | 指令模式 | 打开行号显示                                       |
    | :set paste    | 指令模式 | 然后输入 o 进入复制模式，避免复制缩进问题          |
    | :n            | 指令模式 | 跳到第 n 行                                        |
    | :0/$          | 指令模式 | 跳到第一行/最后一行                                |
    | :a,bs/s1/s2/g | 指令模式 | 将 a 到 b 行的 s1 全部替换成 s2, /g 不询问直接替换 |

### 5.2. 查询指令 find/grep/which

1. find 指令：find -name "xx*"
2. findcpp xxx：查询含有 xxx 的 cpp 文件，findh 类似
3. grep 指令：grep 要查的字符 文件

   ```bash
   # 查找含 print 字符的 cpp 文件
   grep print *cpp
   ```

4. which 指令：查找可执行文件位置 `which 文件名`

### 5.3. 进程指令 ps/top

1. 进程信息

    | 名称    | 描述                            |
    | ------- | ------------------------------- |
    | USER    | 启动该进程的账户名称            |
    | PID     | 进程 ID                         |
    | TTY     | 表明该进程在那个终端上运行      |
    | STAT    | 进程状态                        |
    | START   | 启动该进程的时间                |
    | TIME    | 该进程占用的 CPU 时间           |
    | COMMAND | 启动该进程的命令的名称          |
    | %CPU    | 占用 CPU 的百分比               |
    | %MEM    | 占用内存的百分比                |
    | VSZ     | 占用虚拟内存 (swap 空间）的大小 |
    | RSS     | 占用常驻内存（物理内存）的大小  |

    - > TTY：'?' 表示未知或不需要终端
    - > STAT：S（休眠）、Z（僵死）、<（高优先级）、N（低优先级）、s（父进程）、+（前台进程）

2. 查询进程
    1. ps：查找与进程相关的 PID 号
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
        1. 当用户在前台执行某个进程时，可以按 Ctrl+C 组合键强制进行中断
        2. kill PID
        3. kill -9 PID 强制终止
        4. killall 进程名
    3. top 命令：类似 Windows 资源管理器
    4. pgrep 命令：查询进程信息
        1. pgreg -l "进程名"
    5. pstree 命令：查看进程树
        1. pstree 命令默认情况下只显示个进程的名称
        2. 结合“-p”选项使用时可以同时列出对应的 PID 号
        3. 结合“-u”选项可以列出对应的用户名
        4. 结合“-a”选项可以列出完整的命令信息

3. top 指令：查询系统资源使用情况

### 5.4. 运行程序

1. 运行程序指令

   ```bash
   # 后台运行程序：关闭终端不影响程序运行
   ./app &
   # 后台运行程序，终端不显示输出
   ./app > /dev/null &
   # 后台运行并输出日志
   ./app > app.log &
   ```

### 5.5. 网络指令 netstat

1. Netstat 参数

    | 参数     | 功能                                     |
    | -------- | ---------------------------------------- |
    | -a(all)  | 显示所有选项，默认不显示 LISTEN 相关     |
    | -t(tcp)  | 仅显示 tcp 相关选项                      |
    | -u (udp) | 仅显示 udp 相关选项                      |
    | -n       | 拒绝显示别名，能显示数字的全部转化成数字 |
    | -l       | 仅列出有在 Listen （监听） 的服務状态    |
    | -p       | 显示建立相关链接的程序名                 |
    | -r       | 显示路由信息，路由表                     |
    | -e       | 显示扩展信息，例如 uid 等                |
    | -s       | 按各个协议进行统计                       |
    | -c       | 每隔一个固定时间，执行该 netstat 命令    |

    ```bash
    # 检查占用 8000 端口的进程
    netstat -anpt| grep 8000
    ```

2. TCP 状态

    | 状态        | 解释                                                               |
    | ----------- | ------------------------------------------------------------------ |
    | LISTEN      | 等待接收连                                                         |
    | ESTABLISHED | 一个处于活跃状态的连接                                             |
    | TIME_WAIT   | 一个刚被终止的连接。它只持续 1 至 2 分钟，然后就会变成 LISTEN 状态 |

3. 参考链接 [Linux netstat 命令介绍](https://www.cnblogs.com/cheesezh/p/5169498.html)

### 5.6. 文件指令

1. 文件扩展指令 tuncate

    1. 清空文件内容

        ```bash
        # 将文件大小设为 0
        truncate -s 0 filename
        ```

    2. 将文件设置为指定大小

        ```bash
        # 将文件设为 10k 大小，可选 k,m,g,t,p 等
        truncate -s 10k filename
        ```

2. 文件编码 iconv

    ```bash
    # UTF-8 转 GBK
    iconv -f UTF-8 -t GBK input.file -o output.file
    ```

### 5.7. 日期时间指令 date

1. 设定日期时间

    ```bash
    # root 账户下

    # 月/日/年
    date -s 01/01/22    # 2022 年 1 月 1 日
    # 时/分/秒
    date -s 00:00:00
    ```

### 5.8. 其他指令

| 指令 | 功能                 |
| ---- | -------------------- |
| h    | 查询历史指令输入记录 |

1. ssh 开图

    ```bash
    ssh ip 地址 -Y
    ```

2. scp 拷贝文件

    ```bash
    # scp 文件名 对端路径
    scp test.txt linuxName:/home/username/

    # 带密码 (-p xxx), 带端口号 (-P 22)
    sshpass -p xxx scp -P 22 test.txt linuxName:/home/username/
    # 显示 manpath... 可以不管，拷贝是成功的
    ```

3. 创建快捷方式

    ```bash
    # ln -s 目标文件夹 快捷方式名
    ln -s abc/def/g g   # 创建文件夹 g 的快捷方式
    ```

4. 录屏

    ```bash
    # 开启录屏，并输出到 debug 文件
    script debug
    # 结束录屏
    exit
    ```

5. 创建快捷指令或路径

    > 可以直接用 alias 指令添加（当此登录使用）, 也可以在`~/.cshrc`配置文件中添加（每次登录都可使用）

    ```bash
    # 配置文件
    vi ~/.cshrc
    # 编辑完后 source 一下
    source ~/.cshrc

    # 再在文件中添加指令
    # alias 指令名='原命令 -选项/参数'
    # 比如
    alias base='conda activate base'

    # 显示已设置的快捷指令
    alias -p

    # 删除快捷命令
    unalias base
    ```

6. 输入法：Linux 启动 SCIM 方法

    ```bash
    pkill scim
    scim -d
    ```

## 6. Linux & c++

### 6.1. 库的使用

#### 6.1.1. 库分类

1. 静态库：静态库的代码在编译过程中已经被载入可执行程序，因此体积较大
2. 动态库（共享库）：代码不会连接到目标文件之中，只有当动态库可访问时，应用程序才能正确执行动态库函数。执行动态库的方式有隐式调用和显式调用
   1. 隐式调用：也称共享库的静态加载，动态库在应用开始执行时会自动载入内存，进程结束时又自动卸载。隐式调用的编译方式与静态库一致
   2. 显式调用：也称共享库的动态加载，编译时可以不显式的提供原动态库文件及名称，但是必须遵循 dlopen 等函数的规则实现调用

#### 6.1.2. 静态库

1. 静态库生成：设计源码->编译`.o`文件->链接静态库，命名规则`libxxx.a`
2. 静态库的应用模型
   1. 调用库函数代码
   2. 编译链接选项

        ```shell
        # cc -O -o main.c ./libxxx.a
        ```

3. 执行目标程序`# ./main`

#### 6.1.3. 动态库

1. 动态库生成：
   1. 设计源码（exp：d1.c & d2.c）
   2. Linux 和其它使用 gcc 编译器的 Unix

        ```cpp
        gcc -fpic -c d1.c d2.c /*编译。o 为扩展名的中间目标文件*/
        gcc -shared -o d1.so d1.o /*创建动态库文件 d1.so*/
        gcc -shared -o d2.so d2.o /*创建动态库文件 d2.so*/
        ```

        或者可以一步到位

        ```cpp
        gcc -O -fpic -shared -o d1.so d1.c/*创建动态库文件 d1.so*/
        gcc -O -fpic -shared -o d2.so d2.c/*创建动态库文件 d2.so*/
        ```

2. 动态库的隐式调用
   1. 调用库函数代码（main 程序 main.c）
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
            - RTLD_NOW：动态库对象的所有符号在函数 dlopen 返回前被解析

      2. 获取动态库对象地址

          ```c
          #include <dlfcn.h>
          void *dlsym(const char *handle, const char *name);    //dlsym 在动态库中搜索与字符串 name 同名的对象
          ```

          - handle：由函数 dlopen 返回成功加载动态库的句柄
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

#### 6.1.4. 小结

- 三种库调用对比

    | 对比项         | 静态库     | 隐式调用   | 显式调用 |
    | -------------- | ---------- | ---------- | -------- |
    | 编译参数       | 传递编译器 | 传递编译器 | 不需要   |
    | 链接到目标文件 | 是         | 否         | 否       |
    | 库存储位置     | 不需要     | 特定位置   | 任意位置 |
    | 载入时间       | 进程启动   | 进程启动   | 任意时刻 |

### 6.2. 标准文件编程库

#### 6.2.1. 文件的创建、打开、关闭和删除

- filename：打开文件的名称（带路径）
- type：打开文件的方式，由权限和类型两部分组成
- stream：已经打开的文件指针

1. fopen 函数：打开或创建一个文本

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

2. freopen 函数：实现文件流的替换。它首先关闭一个文件流，再创建新的文件流

    ```c
    FILE *freopen(const char *filename, const char *type, FILE *stream)
    ```

    | FILE 标识符 | 文件         |
    | ----------- | ------------ |
    | stdout      | 标准输出     |
    | stdin       | 标准输入     |
    | stderr      | 标准错误输出 |

3. fclose 函数

    ```c
    // 关闭文件流，成功时返回 0，否则返回 EOF
    int fclose(FILE *stream);
    ```

4. remove 函数

    ```c
    // 删除指定文件或目录
    int remove(const char *filename);
    ```

5. rename 函数

    ```c
    // 重命名
    int rename(const char *oldname, const char *newname);
    ```

6. 二进制文件与文本文件
   1. 文本文件又称为 ASCII 码文件，可以用 vi 等文本编辑器编辑其中任意字符，也可以直接操作以空额、制表符或换行符分割的单词和文本。C 语言源代码是典型的文本文件。
   2. 二进制文件中可以包含任意字符，没有固定格式，文本编辑器无法正常阅读，所有对文件的解析都由应用程序完成。C 语言编译后的可执行文件就是二进制文件。

#### 6.2.2. 文件的无格式读写

1. 字符读写：每次之操作一个字符
   1. 字符输入函数族

        ```c
        #include<stdio.h>
        // getc 以 unsigned char 类型读取文件输入流 stream 中的一个字符，并将该无符号字符转化为整型后返回，同时移动文件指针到下一个字符处
        int getc(FILE *stream);
        // getchar 实际上是关于 getc 的宏定义“getc(stdin)”
        int getchar(void);
        // fgetc 功能类似于 getc，但是执行速度远低于 getc
        int fgetc(FILE *stream);

        // 错误时都返回 EOF，EOF 一般定义为 int 型-1
        ```

   2. 字符输出函数族

        ```c
        #include<stdio.h>
        // 函数 putc 先将 int 型参数 c 自动转换为 unsigned char 类型，然后写入文件流 stream 中，同时移动文件指针到下一个字符处
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

### 6.3. linux 命令

1. grep 文件搜索
   1. 常用命令
      1. grep：在没有参数的情况下，只输出符合 RE（Regular Expression）字符。
      2. egrep：等同于 grep -E，和 grep 最大的区别就是表现在转义符上比如 grep 做次数匹配时、{n,m\}egrep 则不需要直接{n，m}。egrep 方便，简介。
      3. fgrep：等同于 grep -f，但是不能使用正则表达式。所有的字符匹配功能均已消失。
   2. 参数说明 `grep [OPTIONS] PATTERN（模式） [file]`

2. 压缩与解压

    ```bash
    # 压缩
    tar -zcvf filename.tar.gz dirname
    # 解压 .tar
    tar -xvf file.tar
    # 解压 .tar.gz
    tar -zxvf file.tar.gz
    ```

### 6.4. coredump

1. coredump 概念：程序调试
2. coredump 开启
   1. 输入命令`ulimit -c`，结果为 0 表示未打开
   2. 输入命令`ulimit -c unlimited`开启 coredump
3. gdb 调试
   1. 调试 core 文件`gdb program coredumpfile`
   2. 调试服务程序`gdb program PID`
4. 多个 core 文件可以使用`file`命令查询 core 文件所属，比如

    ```bash
    # 列出所有 core 文件所属
    file core*
    ```

- [linux 下 core dump](https://www.cnblogs.com/Anker/p/6079580.html)

## 7. 用户和组

### 7.1. 创建用户和组

1. 创建用户，参考 [添加删除用户和用户组](https://www.cnblogs.com/xd502djj/archive/2011/11/23/2260094.html)

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

### 7.2. 删除用户和组

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

### 7.3. 操作用户和组

1. 查看用户/组列表

   ```bash
   # 查看用户
   cat /etc/passwd
   # 查看组，分四个字段 用户组：用户组密码：GID: 用户列表
   cat /etc/group
   ```

2. 修改用户密码

    ```bash
    sudo passwd username
    ```

## 8. 定时任务 crontab

1. 指令

    | 指令       | 功能       |
    | ---------- | ---------- |
    | crontab -e | 编辑       |
    | crontab -l | 显示       |
    | crontab -r | 删除       |
    | crontab -i | 带提示删除 |

2. crontab 脚本用*表示时间，中间用空格隔开

    | *号    | 含义 | 范围                    |
    | ------ | ---- | ----------------------- |
    | 第一个 | 分钟 | 0-59                    |
    | 第二个 | 小时 | 0-23                    |
    | 第三个 | 日   | 1-31                    |
    | 第四个 | 月   | 1-12                    |
    | 第五个 | 周   | 0-7(0 和 7 都表示周日） |

3. 特殊符号

    | 符号 | 功能             | 示例                                                 |
    | ---- | ---------------- | ---------------------------------------------------- |
    | *    | 代表任何时间     |
    | ,    | 代表不连续时间   | 比如 `0 8,10,12 * * *` 表示每天 8,10,12 点各执行命令 |
    | -    | 电表连续时间范围 | 比如 `0 5 * * 1-6` 表示每周一至周六 5 点执行命令     |
    | /    | 表示每个         | 比如 `*/10 * * * *` 表示每 10 分钟执行一次命令       |

4. 多条指令

    | 符号 | 功能                               |
    | ---- | ---------------------------------- |
    | `;`  | 连续执行，不考虑对错               |
    | `&&` | 中间有错就停止，没错就一直执行下去 |
    | `    |                                    | ` | 遇到可以成功执行的命令，那么命令停止执行，即便后面有正确的命令也不执行 |

5. 示例

    ```bash
    # 进入编辑
    crontab -e

    # 编写脚本：每 5min 输出一次 hello
    */5 * * * * ehco 'hello'

    # 备份文件：每周 1-6,05:00 删除旧文件，备份新文件
    0 5 * * 1-6 rm -rf filename_bak && cp -r filename filename_bak
    ```

## 9. 备注

- [教程地址](http://billie66.github.io/TLCL/book/index.html)
