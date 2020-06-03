# 1. Python 环境

## 1. Windows 环境搭建

### 1.1. Python 使用

1. Python下载
   [Python官方网站](https://www.python.org/)
2. 更换清华源

    ```bash
    pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
    ```

3. 安装库

    | 库          | 功能                       |
    | ----------- | -------------------------- |
    | psutil      | 电脑监控信息读取           |
    | matplotlib  | 绘图                       |
    | pillow->PIL | 图片处理                   |
    | pyserial    | 串口                       |
    | scipy       | 科学计算库                 |
    | sympy       | 科学（符号）计算库         |
    | pymysql     | MySQL数据库                |
    | django      | django网站框架             |
    | pandas      | 数据分析工具               |
    | virtualenv  | 虚拟环境                   |
    | paramiko    | ssh工具                    |
    | jaydebeapi  | 通过java的jdbc来连接数据库 |
    | pulp        | 线性求解                   |
    | pwlf        | 分段线性拟合               |

4. 升级库

    ```bash
    pip list --outdate  // 显示可升级库
    pip install --upgrade xxx  // 升级库
    ```

5. 下载离线安装包

    ```bash
    # 在目标路径下进入cmd
    # 会连同下载所有依赖包
    pip download 包名

    # 离线安装
    pip install --no-index --find-links=file:路径 包名
    ```

6. 创建虚拟环境
   1. 安装virtualenv库 `pip install virtualenv`
   2. 在目标文件夹下进入cmd
   3. `virtualenv venv` 创建虚拟环境venv
   4. 在 `venv/Scripts` 下执行 `activate` 开启虚拟环境
   5. 退出虚拟环境 `deactivate`

### 1.2. Miniconda 使用

1. 从清华源下载安装[miniconda](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/)
2. 默认设置下安装完成，官方不推荐添加到环境变量
3. 进入安装目录下`C:\ProgramData\Miniconda3\Scripts`执行指令

    ```bash
    conda list  # 查看已安装的包
    conda --version  # 查看版本
    conda -V  # 同上
    ```

4. Miniconda [换清华源](https://mirror.tuna.tsinghua.edu.cn/help/anaconda/)
5. 创建虚拟环境

    ```bash
    # 创建一个名为test的包含python3的新环境
    conda create --name test python=3
    # 或者
    conda create -n test python=3

    # 列出所有环境
    conda info --envs
    # 或者
    conda info -e

    ```

## 2. linux 环境搭建

### 2.1. Miniconda 使用（Linux）

1. 安装virtualenv库 `sudo pip install virtualenv`
2. 创建虚拟环境`virtualenv venv`
3. 添加环境变量

## 3. miniconda 环境配置(linux)

1. 安装miniconda：`bash miniconda3_xxx.sh`，根据提示一路yes
2. 配置环境变量：

     ```bash
     # 打开配置文件
     ~/miniconda3/bin$ sudo gedit ~/.bashrc
     # 在末尾添加
     export PATH=~/anaconda3/bin:$PATH
     # 生效
     source ~/.bashrc
     # 验证
     conda --version
     pip --version
     ```

3. 换源

    ```bash
    # 清华源
    # 任意目录下编辑.condarc文件
    vi ~/.condarc
    # 添加清华源，参考清华源官网
    # 显示源
    conda config --show-sources
    ```

4. 安装文件

     ```bash
     # 更新
     conda upgrade --all
     ```

5. 创建环境
   1. 创建虚拟环境

        ```bash
        # 配置完环境变量后会生成一个base的环境

        # 创建一个名为test的包含python3的新环境
        conda create --name test python=3  

        #列出所有环境
        conda info --envs
        ```

   2. 创建虚拟环境失败，出现`an unexpected error has occurred`问题，可能是源文件出现问题，需要删除`.condarc`文件

6. 环境激活与注销

     ```bash
     conda active base  # 激活base环境
     conda deactive  # 注销当前环境
     conda env remove -n test  # 删除test环境
     ```
