# Git 学习笔记

## 1. 前言

Git 分区：工作区—暂存区—Git 仓库

## 2. 设定和查询用户名、邮箱

1. 设定用户名、邮箱

    ```git
    # 设定
    git config --global user.name "xx"
    git config --global user.email "xxxx"
    # 查询
    git config user.name
    git config user.email
    ```

## 3. Git 语法

### 3.1. 基础语法

1. 新文件初始化

    ```git
    git init
    ```

2. 把工作目录的文件添加到暂存区域

    ```git
    git add xxx
    # 添加目录下的所有文件
    git add .
    ```

3. 把暂存区域提交到 Git 仓库

    ```git
    git commit -m "声明"
    ```

    合并添加和提交

    ```git
    git commit -am "声明 "
    ```

4. 把 Git 仓库文件还原到暂存区域

    ```git
    # 撤销上次 commit
    git reset --soft HEAD^
    ```

    | 参数            | 工作空间改动代码 | commit | add    | 备注                                                                  |
    | --------------- | ---------------- | ------ | ------ | --------------------------------------------------------------------- |
    | --mixed（默认） | 不删除           | 撤销   | 撤销   | 快照回滚到暂存区域                                                    |
    | --soft          | 不删除           | 撤销   | 不撤销 | 只移动 head 指向                                                      |
    | --hard          | 删除             | 撤销   | 撤销   | 不仅移动 head，还把暂存区文件还原到工作目录，即恢复到上次 commit 状态 |

5. 查询 Git 状态

    ```git
    git status
    ```

6. 查看记录

    ```git
    git log
    ```

7. 文件比较

    ```git
    git diff
    ```

8. 更正最近一次提交

    ```git
    git commit --amend
    ```

    如果需要提交新的说明

    ```git
    git commit --amend -m
    ```

9. 文件被删后，把暂存区文件还原到工作目录

    ```git
    git checkout -- xxx
    ```

    注意--前后各有一个空格
10. 删除文件

    ```git
    git rm xxx
    ```

    然后执行

    ```git
    git reset --soft HEAD~
    ```

11. 重命名文件

    ```git
    git mv name1 name2
    ```

### 3.2. 进阶

1. 创建分支

    ```git
    git branch 分支名
    ```

2. 切换分支

    ```git
    git checkout 分支名
    ```

3. 显示分支

    ```git
    git log --decorate --all --graph --oneline
    ```

4. 合并分支

    ```git
    git merge 分支名
    ```

    将选定分支合并到 HEAD 所在分支
5. 删除分支

    ```git
    git branch -d 分支名
    ```

### 3.3. 使用 Git 工具将本地文件上传到 Github

1. 打开 Github 网站，登陆账户，点击头像旁边的加号，选择“New repository”创建一个新的工程。

   ![创建工程](../images/2018-07-17-12-10-57.png)

2. 创建好工程后会跳转到工程页面，其实此时的页面里面就清楚写着上传项目的方法，不过第一次用并不知道这堆英文是什么意思，不过网上有部分教程可能是因为太老了，指令不正确，此时按照这个页面上操作肯定是不会有什么问题。

   ![上传文件](../images/2018-07-17-12-12-00.png)

3. 创建一个文件夹，把要上传的文件放到该文件夹里，比如创建一个 readme.txt 文件，然后右键点击“Git Bash Here”弹出一个命令框，按照下面指令一步一步操作。# 后是注释，不要输入！

    ```git
    git init  # 初始化 Git
    git add readme.txt  # 添加文件，注意替换文件名
    git commit -m "注释"  # 文件入库
    git remote add origin https://github.com/alternativedestiny/DataShowWebsite.git  # 链接之前在 Github 上面创建的工程，注意更换地址
    git push -u origin master  # 上传项目文件，第一次会出现一个登陆窗口，需要登陆你的 Github 账户，之后就不会出现了。登陆之后出现下面这些文字表示上传成功
    ```

4. 查看远程仓库地址

    ```git
    git remote -v
    ```

5. origin 添加错误或需要更换 origin 执行下面指令，删除原有 origin，然后重新添加就行

    ```git
    git remote rm origin
    git remote add origin 地址

    # 也可以直接用下述指令
    git remote set-url origin 地址
    ```

### 4. 老瓶装新酒（新设备在已有项目的基础上继续更新）

1. 克隆项目到本地，在目标文件下

    ```git
    git clone xxx.git
    ```

2. 在 git 配置好的情况下直接使用即可

### 5. gitignore 文件配置

1. 忽略目录下的全部内容：folder/*
2. 忽略文件类型：*.csv
3. 反选模式：!

## 6. 参考资料

1. [动图展示 10 大 Git 命令🔗](https://mp.weixin.qq.com/s?__biz=MzA4MjEyNTA5Mw==&mid=2652570879&idx=1&sn=e7d65d4be44df0af89465b44444896e9&chksm=84652cb5b312a5a3c2f4975795186fc04ff0af0fb73a016ea57d6a8f58b240d3b1256bfd3ffc&scene=126&sessionid=1587521838&key=50dc6060d6f362f2d218b9abe9c2b86b097bcf1333bb1dc6b0cad6af7642e5b230e70852bacc9b72e3db7f80c1636254a3dcb95f648610988a60feab67966c1a7582174d7f4b21196cb88257089a1e27&ascene=1&uin=MjU5MzIwMTIyNQ%3D%3D&devicetype=Windows+10&version=62080079&lang=zh_CN&exportkey=A0F%2F1RksbRl8KXR9O6MO1N8%3D&pass_ticket=k354jbPubdXVTpTDIcxr3NXQcDGVIDj5J2Q2xxveWNk%2BP%2FFwCyAG9QcMLJE8hy4d)
