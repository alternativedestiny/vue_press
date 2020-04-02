# Pycharm模板与补全

## 1. 环境

- windows10
- pycharm2017.3.3 professional edition

## 2. 模板

1. 打开File->Settings->Editor->File and Code Templates
2. 选择Python Script，输入模板

   ![Python Script](../images/pycharm-templates.png)

3. 常用模板设置

    ```python
    #!/usr/bin/python3
    # -*- coding:utf-8 -*-

    # ------------------
    # Project: ${PROJECT_NAME}
    # Tittle: ${FILE_NAME}
    # Version: python3.7
    # DateTime: ${DATE}
    # Function:
    # ------------------

    ```

4. 系统变量

| 变量名                    | 内容       |
| ------------------------- | ---------- |
| ${PROJECT_NAME}           | 项目名称   |
| ${PRODUCT_NAME}           | IDE名称    |
| ${FILE_NAME}              | 文件名     |
| ${DATE}                   | 日期       |
| ${USER}                   | 用户名     |
| \${YEAR} \${MONTH} ${DAY} | 年、月、日 |
| \${HOUR} ${MINUTE}        | 时、分     |

## 3. 补全

1. 打开File->Settings->Editor->Live Templates

2. 打开需要创建的程序下拉菜单，然后点击右侧“+”号并选择Live Template

3. 编辑自动补全：
    1. 把 \<abbreviation> 修改为触发词
    2. Description为解释内容
    3. 最下面红字，点击后面的Define选择适用语言
    4. 右侧option选择触发按键

4. 点击apply就完成设置。比如下图的设置，在HTML文件里输入`<!`，然后按Tab键就会补全称为`<!-- -->`

![设置](../images/2018-10-07-16-48-50.png)
