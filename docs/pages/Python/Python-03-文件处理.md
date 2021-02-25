# 3. 文件

## 1. 文件处理 os/pathlib

1. 遍历文件名

    ```python
    import os

    # 获取文件列表
    sources_path = "./folder"  # 路径
    file_name = os.listdir(sources_path)  # 所有文件名
    ```

2. 遍历多层文件夹

    ```python
    import os

    file_list = []
    for root, folder, files in os.walk('./folder'):
        for file_name in files:
            file_list.append(root + '/' + file_name)
    ```

3. 检测并创建文件夹

    ```python
    import os

    # 创建文件夹/文件目录
    path = 'abc/'
    # 检测文件夹/文件是否存在，不存在就创建该文件夹
    if not os.path.exists(path):
        print('folder not exist')
        os.makedirs(path)
    else:
        print('folder exist')
    ```

4. 重命名

    ```python
    import os
    # 重命名文件
    os.rename(old_name, new_name)
    ```

5. 用默认应用打开文件、文件夹

    ```python
    import os
    os.startfile('file_path')  # 打开文件
    path = ''
    os.system("explorer.exe %s" % path)  # 打开文件夹
    ```

## 2. 文件读写

### 2.1. Open

1. 读取文件文件

    ```python
    # 文件名，模式（默认 r), 缓存
    file = open('./test.txt', 'r')
    for line in file:   # 按行读取
        print(line, end='') # end=''避免输出两次换行
    # 关闭文件
    file.close()
    ```

    ```python
    # 会自动关闭文件（推荐）
    with open('./test.txt', 'r') as file:
        # 按行读取，也可以用 for line in file.readlines():
        for line in file:
            print(line, end='') # end=''避免输出两次换行
    ```

2. 写文件

    ```python
    # w 写入，a 追加，文件不存在会自动创建
    with open('./test.txt', 'w') as file:
        file.write('123\n')
    ```

3. 参数

    | open 参数  | 内容               |
    | --------- | ------------------ |
    | file      | （必须）文件名       |
    | mode      | 打开模式           |
    | buffering | 设置缓冲           |
    | encoding  | 编码               |
    | errors    | 报错级别           |
    | newline   | 区分换行符         |
    | closefd   | 传入的 file 参数类型 |
    | opener    | 设置自定义开启器   |

    | mode 参数 | 内容                                           |
    | -------- | ---------------------------------------------- |
    | w        | 以写方式打开                                   |
    | a        | 以追加模式打开 （从 EOF 开始，必要时创建新文件） |
    | r+       | 以读写模式打开                                 |
    | w+       | 以读写模式打开 （参见 w )                       |
    | a+       | 以读写模式打开 （参见 a )                       |
    | rb       | 以二进制读模式打开                             |
    | wb       | 以二进制写模式打开 （参见 w )                   |
    | ab       | 以二进制追加模式打开 （参见 a )                 |
    | rb+      | 以二进制读写模式打开 （参见 r+ )                |
    | wb+      | 以二进制读写模式打开 （参见 w+ )                |
    | ab+      | 以二进制读写模式打开 （参见 a+ )                |

4. 用 numpy 处理 csv 数据的方法
   1. 读取数据

    ```python
    file = open("filename.csv", "rb")
    # 读取 csv 文件，以逗号为间隔，跳过第一行
    data = np.loadtxt(file, delimiter=",", skiprows=1)
    a = data[行起始：终止，列起始：终止]
    ```

5. 用 pandas 读写 csv 文件，参考 [pandas 笔记](Python-05-Pandas.md)

### 2.2. Excel(xls/xlsx) 文件

1. 使用 xlrd/xlwt

   1. 安装库文件

       ```bash
       pip install xlrd
       pip install xlwt
       ```

   2. 读取文件

       ```python
       import xlrd

       # 打开文件
       data = xlrd.open_workbook('filename.xlsx')
       # 获取第一个工作表
       table = data.sheets()[0]
       # 行列数
       rows = table.nrows
       cols = table.ncols
       # 行列值
       table.row_values(i)
       table.row_values(i)[0]
       table.col_values(i)
       table.col_values(i)[0]
       # 单元格
       table.cell(x,y).value
       ```

   3. 日期处理

       ```python
       import xlrd
       from xlrd import xldate_as_datetime
       from xlrd import xldate_as_tuple

       xldate_as_datetime(table.row_values(i)[0], 0)  # 2019-06-01 00:00:00
       *xldate_as_tuple(table.row_values(i + 1)[0], 0)  # 2019 6 1 0 0 0
       ```

   - 参考 [Python 操作 excel 的几种方式--xlrd、xlwt、openpyxl](http://wenqiang-china.github.io/2016/05/13/python-opetating-excel/)
   - 参考 [python xlrd 模块处理 excel 日期变成浮点型的解决方法](https://my.oschina.net/zhangyangyang/blog/737072)
   - 参考 [用 python 读写 excel（xlrd、xlwt）](https://www.cnblogs.com/MrLJC/p/3715783.html)

2. 使用 openpyxl

   1. 安装库文件

       ```bash
       pip install openpyxl
       ```

   2. 读取文件

       ```python
       import openpyxl
       # 打开文件
       wb = openpyxl.load_workbook("file_name.xlsx")
       # 以只读方式打开
       wb = openpyxl.load_workbook("file_name.xlsx", read_only=True)

       # 读取 sheet 页
       sheet = wb['sheetname']
       # or
       sheet = wb.worksheets[0]

       # 行列数
       sheet.max_column
       sheet.max_row
       # 行列值
       sheet.cell(x, y).value
       ```

   - 参考 [Python 玩转 Excel](https://mp.weixin.qq.com/s?__biz=MjM5NjMyMjUzNg==&mid=2448130701&idx=1&sn=10919f10f4006a18579d6bbc13a3f15c&chksm=b2f42f0a8583a61c9421711b7a542f2a1c8cfe114ace3ea1ba8cefc26bdde8eb36755a7404ae&scene=0#rd)
