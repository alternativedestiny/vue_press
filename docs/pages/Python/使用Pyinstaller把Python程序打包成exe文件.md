# 使用Pyinstaller把Python程序打包成exe文件

## 1. 前言

无论是为了装逼还是为了实用，在实际过程中，我们经常需要将自己写出的Python程序打包成exe文件供其他windows用户使用。Python打包工具不少，其bug也不少，坑极多，这里只说自己使用成功的。
顺便提一句自己打包的工程中包含matplotlib，tkinter这类库，也成功了。

## 2. 环境

- Windows 10
- Python 3.6.5
- pyinstaller 3.4.dev0+6e5c70e06

## 3. 方法

1. 确保Python程序在自己的开发环境下能够成功运行。
2. pip安装的pyinstaller打包会出现闪退情况，因此需要用Github下的pyinstaller包来安装：
    1. 打开[pyinstaller链接][1]
    2. 下载zip安装文件
    3. 解压文件
    4. 打开文件，在地址栏输入cmd进入控制台，运行

    ```bash
    python setup.py install
    ```

3. 在工程目录地址栏输入cmd进入控制台，开始打包xxx.py程序

    ```bash
    pyinstaller xxx.py
    ```

4. 打包完成后会出现三个文件夹，我们打包成功的程序在dist文件夹里面，在里面有个与项目同名文件，进去找到exe文件就可以执行。

## 4. 备注

无

[1]: https://github.com/pyinstaller/pyinstaller
