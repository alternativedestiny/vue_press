# 3. 文件

## 1. 文件处理

```python
import os

# 获取文件列表
sources_path = "./folder"  # 路径
file_name = os.listdir(sources_path)  # 所有文件名

# 创建文件夹/文件目录
path = 'abc/'
# 检测文件夹/文件是否存在，不存在就创建该文件夹
if not os.path.exists(path):
    print('folder not exist')
    os.makedirs(path)
else:
    print('folder exist')

# 重命名文件
os.rename(old_name, new_name)
```

## 2. 文件读写

### 2.1. csv 文件

1. 读取csv文件的两种写法

    ```python
    with open('filename.csv', 'w', newline='') as file:
    ```

    ```python
    file = open('filename.csv', 'rb')
    ```

2. 用numpy处理csv数据的方法
   1. 读取数据

    ```python
    file = open("filename.csv", "rb")
    # 读取csv文件，以逗号为间隔，跳过第一行
    data = np.loadtxt(file, delimiter=",", skiprows=1)
    a = data[行起始:终止, 列起始:终止]
    ```

3. 用pandas读写csv文件，参考pandas笔记

4. 备注

- w：以写方式打开
- a：以追加模式打开 (从 EOF 开始, 必要时创建新文件)
- r+：以读写模式打开
- w+：以读写模式打开 (参见 w )
- a+：以读写模式打开 (参见 a )
- rb：以二进制读模式打开
- wb：以二进制写模式打开 (参见 w )
- ab：以二进制追加模式打开 (参见 a )
- rb+：以二进制读写模式打开 (参见 r+ )
- wb+：以二进制读写模式打开 (参见 w+ )
- ab+：以二进制读写模式打开 (参见 a+ )

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

   - 参考[Python操作excel的几种方式--xlrd、xlwt、openpyxl](http://wenqiang-china.github.io/2016/05/13/python-opetating-excel/)
   - 参考[python xlrd模块处理excel日期变成浮点型的解决方法](https://my.oschina.net/zhangyangyang/blog/737072)
   - 参考[用python读写excel（xlrd、xlwt）](https://www.cnblogs.com/MrLJC/p/3715783.html)

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

       # 读取sheet页
       sheet = wb['sheetname']
       # or
       sheet = wb.worksheets[0]

       # 行列数
       sheet.max_column
       sheet.max_row
       # 行列值
       sheet.cell(x, y).value
       ```

   - 参考[Python 玩转 Excel](https://mp.weixin.qq.com/s?__biz=MjM5NjMyMjUzNg==&mid=2448130701&idx=1&sn=10919f10f4006a18579d6bbc13a3f15c&chksm=b2f42f0a8583a61c9421711b7a542f2a1c8cfe114ace3ea1ba8cefc26bdde8eb36755a7404ae&scene=0#rd)

### 2.3. txt 文件

1. 打开文件

    ```python
    file = open('数据采样/分区修正.txt', encoding='utf-8')
    lines = file.readlines()
    for line in lines:
        print(line)
    file.close()
    ```
