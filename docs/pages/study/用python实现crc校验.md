# 概述

使用python来实现crc16 modbus校验，校验多项式:x^16+x^15+x^2+1

## 1. 环境

- python 3.7.1

## 2. 方法

代码实现方法比较简单

```python
def crc16(x):
    x = x.split()  # 将数据按照空格分开
    a = 0xFFFF  # 初始值
    b = 0xA001  # 校验码
    for byte in x:
        a ^= int(byte, 16)
        for i in range(8):
            last = a % 2
            a >>= 1
            if last == 1:
                a ^= b
    s = hex(a).upper()

    return s[2:6]


if __name__ == "__main__":
    m = input()
    print(crc16(m))

```

输入16进制数据，输出为两个字节的校验码
比如输入“55 66”，输出校验码“CABE”，输入每个字节用空格分开

## 3. 备注
