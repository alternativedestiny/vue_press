# 8. Pyinstaller 打包

## 1. 前言

无论是为了装逼还是为了实用，在实际过程中，我们经常需要将自己写出的 Python 程序打包成 exe 文件供其他 windows 用户使用。Python 打包工具不少，其 bug 也不少，坑极多，这里只说自己使用成功的。
顺便提一句自己打包的工程中包含 matplotlib，tkinter 这类库，也成功了。

## 2. 环境

- Windows 10
- Python 3.6.5
- pyinstaller 3.4.dev0+6e5c70e06

## 3. 方法

1. 确保 Python 程序在自己的开发环境下能够成功运行。
2. pip 安装的 pyinstaller 打包会出现闪退情况，因此需要用 Github 下的 pyinstaller 包来安装：
    1. 打开 [pyinstaller 链接][1]
    2. 下载 zip 安装文件
    3. 解压文件
    4. 打开文件，在地址栏输入 cmd 进入控制台，运行

    ```bash
    python setup.py install
    ```

3. 在工程目录地址栏输入 cmd 进入控制台，开始打包 xxx.py 程序

    ```bash
    pyinstaller xxx.py
    ```

4. 打包完成后会出现三个文件夹，我们打包成功的程序在 dist 文件夹里面，在里面有个与项目同名文件，进去找到 exe 文件就可以执行。

## 4. Django 打包

- [参考链接](https://blog.csdn.net/qq_34809033/article/details/81873896)
- [参考链接 2](https://www.cnblogs.com/daqi-work/p/11394968.html)

## 5. 备注

无

[1]: https://github.com/pyinstaller/pyinstaller
