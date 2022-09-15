# JavaScript 学习笔记

## 1. JS 数据类型

### 1.1. 基础数据类型

| 类型      | 简介                   |
| --------- | ---------------------- |
| Undefined | 未定义，声明但未初始化 |
| Boolean   | 布尔值                 |
| String    | 字符串                 |
| Number    | 数值                   |
| Object    | 对象或 null            |
| Function  | 函数                   |

- 布尔值转换为 True 的值：`true`, `非空字符串`, `非零数字`, `对象`, `N/A`
- 布尔值转换为 False 的值：`""`, `0`, `NaN`, `null`, `undefined`

### 1.2. 数字 Number

1. 取整

    ```js
    // 取整
    parseInt(num);
    // 向下取整
    Math.floor(num);
    // 向上取整
    Math.ceil(num);
    // 四舍五入
    Math.round(num);
    ```

### 1.3. 字符串 String

1. 查

    ```js
    // 字符串长度
    str.length;
    ```

2. 截取

    ```js
    // 截取从 m（包括）到 n（不包括）的字符，支持负数
    str.slice(m, n);
    ```

3. 模板字符串

    > 模板字符串使用反引号 (``) 代替单双引号，${变量}来表示变量

    ```js
    console.log(`a + b = ${a + b}`);
    ```

### 1.4. 数组 Array

1. 数组

    ```js
    // 新建数组
    let myarray = new Array();
    // 或者
    let myarray = [];

    // 也可以直接赋值
    let myarray = new Array(1, 2, 3);
    // 或者
    let myarray = [1, 2, 3];

    // 获取数组长度
    let num = myarray.length;
    ```

2. 查

    ```js
    // 查询元素所的索引：前向查询
    myarray.indexOf(1);
    // 查询元素所的索引：后向查询
    myarray.lastIndexOf(1);

    // 查询函数
    myarray.find();
    ```

3. 增

    ```js
    // 在数组的末尾添加
    myarray.push(1);

    // 在指定位置插入
    myarray.splice(i, 0, 1);    // 在第 i 个元素前面插入 1
    ```

4. 删

    ```js
    // 删除单个元素：先找到索引，再删除元素
    let index = myarray.indexOf(1);
    myarray.splice(index, 1);

    // 删除第 i 个元素后的 n 个元素
    myarray.splice(i, n);
    ```

5. 二维数组
6. 参考

    - [数组操作](https://cloud.tencent.com/developer/article/1780467?from=information.detail.js%20%E6%95%B0%E7%BB%84%E9%A6%96%E4%BD%8D%E6%B7%BB%E5%8A%A0)

### 1.5. JSON

## 2. 定义变量

| var              | let            | const          |
| ---------------- | -------------- | -------------- |
| 存在变量提升     | 不存在变量提升 | 不存在变量提升 |
| 代码块外部可调用 | 存在块级作用域 | 存在块级作用域 |
|                  |                | 赋值后不可改变 |

## 3. 操作符

1. 一元操作符

    1. ++:   ++变量
    2. --:   --变量
    3. +:   +变量，不会产生任何操作
    4. -:   -变量，转为负数

2. 位操作符：正负数以二进制码存储，负数使用的格式是二进制补码，负数=二进制正数取反+1

    1. 按位非 (NOT)——~变量
    2. 按位与 (AND)——变量&变量
    3. 按位或 (OR)——变量|变量
    4. 按位异或 (XOR)——变量^变量
    5. 左移——变量<<位数，用 0 填充
    6. 有符号右移——变量>>位数，保留符号位，用符号位填充
    7. 无符号右移——变量>>>位数，用 0 填充

3. 布尔操作符

    1. 逻辑非——! 变量
    2. 逻辑与——变量&&变量
    3. 逻辑或——变量||变量

4. 乘性操作符 * / %

5. 加性操作符 + -

6. 关系操作符 < > <= >=

7. 相等操作符
    1. 相等和不相等（先转换再比较） == !=
    2. 全等和不全等（仅比较而不转换） === !==

8. 条件操作符

    1. variable = boolean_expression ? true_value : false_value

9. 赋值操作符 = *= /= += -= <<= >>= >>>=

10. 逗号操作符

## 4. 函数

1. 理解参数：ECMAScript 函数不介意传递进来多少个参数，也不在乎传递进来的参数是什么数据类型

2. 没有重载：如果再 ECMAScript 中定义了两个相同名字的函数，则该名字只属于后定义的函数

## 5. 执行环境及作用域

1. 基本类型和引用类型的值
    1. 动态的属性
    对于引用类型的值，可以添加属性和方法，也可以改变和删除其属性和方法；但是不能给基本类型的值添加属性。
    2. 复制变量的值
    引用类型复制后还是指向同一个对象，变化相互影响；基本类型的值复制后完全独立，不会相互影响
    3. 传递参数
    ECMAScript 中的所有函数的参数都是按值传递的
    4. 检测类型
       - 检测基本类型数据：typeof variable
       - 检测引用类型数据：variable instanceof constructor
2. 执行环境与作用域
    1. 执行环境 (execution context, 也称“环境”)
        - 全局执行环境是最外围的一个执行环境
        - 每个函数都有自己的执行环境
    2. 延长作用域链，当执行流进入下面的任何一个语句时，作用链就会加长
        - try-catch 语句中的 catch 块
        - with 语句
    3. JS 没有块级作用域，C、C++、Java 有块级作用域
        - let 声明的变量只作用于块级，var 声明的变量就会自动添加到最接近的环境中（函数的局部环境）, 这就是变量提升
        - 如果初始化变量时没有用 var 声明，该变量会自动被添加到全局环境
    4. 搜索过程从作用域的前端开始，向上逐级查询与给定的名字匹配的标识符。
3. 垃圾收集：JavaScript 是一门具有自动垃圾回收机制的编程语言
    1. - [x] 标记清除（常用）
        1. 给内存中的所有变量添加标记
        2. 去掉环境中的变量和环境中变量引用变量的标记
        3. 此时被标记的变量就是准备删除的变量
        4. 垃圾回收器完成内存清除工作
    2. - [ ] 引用计数（不常用，有循环引用的问题）
    3. 性能问题，垃圾回收器太频繁运行会导致性能问题
    4. 管理内存
        解除引用：一旦数据不再有用，最好将其值设置为 null 来释放其引用

## 6. 引用类型

在 ECMAScript 中，引用类型是一种数据结构，用于将数据和功能组织在一起。

### 6.1. Object 类型

1. 创建 object 实例有两种方法
    - [ ] 使用 new 操作符后跟 Object 构造函数

        ```js
        var person = new Object();
        person.name = "Nicholas";
        person.age = 19;
        ```

    - [x] 使用*对象字面量*表示法

        ```js
        var person = {
            name : "Nicholas",
            age : 19
        }
        ```

2. 访问对象属性也有两种方法
    - [x] 点表示法

        ```js
        console.log(person.name);
        ```

    - [ ] 方括号语法，若果属性名使用的是关键字或保留字，用方括号就不会报错

        ```js
        console.log(person[name]);
        ```

### 6.2. 数组 Array 类型

1. 创建数组方法

    ```js
    var colors = new Array();
    var colors = new Array(2);
    var colors = [];
    var colors = ["red", "blue", "green"];
    ```

2. 检测数组

    ```js
    if(value instanceof Array){
        // 对数组执行某些操作
    }
    if(Array.isArray(value)){
        // 对数组执行某些操作
    }
    ```

3. 属性

    | 属性        | 功能                             |
    | ----------- | -------------------------------- |
    | constructor | 返回对创建此对象的数组函数的引用 |
    | length      | 设置或返回数组元素的数目         |
    | prototype   | 向对象添加属性或方法             |

4. 增
5. 删
6. 改
   1. 字符串分割

        ```js
        arr.split(' ')
        ```

7. 查
8. 转换方法
    1. .toString()
    2. .valueOf()
    3. .toLocalString()
    4. .join()——改变数组分隔符
9. 栈方法
    1. .push()——推入队尾，返回修改后长度
    2. .pop()——移除队尾，返回移除的项
10. 队列方法
    1. .push()——推入队尾，返回修改后长度
    2. .shift()——移除第一项，并返回该项
    3. .unshift()——在数组前端插入，并返回长度
11. 重排序方法
    1. .reverse()——反向
    2. .sort()——从小到大排序，按字符串排序
    3. 按数值排序

        ```js
        function compare(value1, value2){
            return value2 - value1;
        }
        arr.sort(compare);
        ```

12. 操作方法
    1. .concat()——数组拼接，不影响原数组
    2. .slice()——数组截取，不影响原数组
    3. .splice()——主要用途是向数组中插入项，影响原数组

        ```js
        arr.splice(num1, num2, arr1)——删除位置，删除数量，插入数组
        ```

13. 位置方法
    1. .indexOf()——查找元素所在位置，（可选）查找起点位置
    2. .lastIndexOf()—— 从末尾向前查找
14. 迭代方法
    影响 this 的值。传入这些方法中的函数会接受三个参数：数组项的值、该项在数组中的位置、数组对象本身。
    1. .every()——对数组的每一项运行给定函数，每项返回 True 则返回 True
    2. .filter()——对数组的每一项运行给定函数，返回该函数会返回 True 的项组成的数组
    3. .forEach()——对数组的每一项运行给定函数，没有返回值
    4. .map()——对数组的每一项运行给定函数，返回每次函数调用的结果组成的数组
    5. .some()——对数组的每一项运行给定函数，只要有一项返回 True 则返回 True
15. 归并方法
    1. 这两个方法都接收两个参数：在每一项上调用的函数和（可选的）作为归并基础的初始值
    2. 传递给函数 4 个参数：前一个值、当前值、项的索引、数组对象
    3. .reduce()——从数组的第一项开始，逐个遍历到最后
    4. .reduceRight()——从数组的最后一项开始，向前遍历到第一项

### 6.3. 日期 Date 类型

1. Date 类型
    - Date.parse()
    - Date.UTC()
    - Date.now()
2. 继承方法
    - .toLocalString()
    - .toString()
    - .valueOf()
3. 日期格式化方法
4. 日期时间组件

### 6.4. 正则 RegExp 类型

1. ECMAScript 通过 RegExp 类型来支持正则表达式。

    ```js
    var expression = / pattern（模式） / flags（标志）
    var expression = new RegExp("pattern", "flags")
    ```

    - flags——g: 全局模式；i: 不区分大小写模式；m: 多行模式
    - 元字符需转义
2. RegExp 实例属性
    - global——布尔值，表示是否设置了 g 标志
    - ignoreCase——布尔值，表示是否设置了 i 标志
    - lastIndex——整数，表示开始搜索下一个匹配项的字符位置，从 0 开始
    - multiline——布尔值，表示是否设置了 m 标志
    - source——正则表达式的字符串表示
3. RegExp 实例方法
    - .ecec()——捕获组
        - .index——表示匹配项所在字符串中的位置
        - .input——表示应用正则表达式的字符串
4. RegExp 构造函数属性
5. 模式的局限性

### 6.5. 函数 Function 类型

1. 声明函数

   ```js
   // 函数声明，会有函数声明提升的过程
   function sum(a, b){
        return a + b;
    }
    // 函数表达式，不会提升
   var sum = function (a, b) {
       return a + b;
    };
   ```

2. 作为值的函数
   因为 ECMAScript 中的函数名本来就是变量，所以函数也可以作为值来使用。
3. 函数内部的值
    1. arguments
        是一个类数组对象，包含着传入函数中的所有参数
        arguments.callee 是一个指针，指向拥有这个 arguments 的函数，可以解除函数代码耦合
    2. this
        this 引用的是函数执行的环境对象
    3. .caller
        这个属性中保存着调用当前函数的函数的引用
4. 函数的属性和方法
    1. length: 表示函数希望接受命名参数的个数
    2. prototype: 保存他们所有实例方法的真正所在

### 6.6. 基本包装类型

1. Boolean 类型
   1. 布尔表达式中的所有对象都会被转换成 true, 因此 falseObject 对象在布尔表达式中代表的是 true
   2. 建议不要使用 Boolean 对象
2. Number 类型
    1. Number 对象
        - valueOf() 方法返回对象表示的基本类型的数值
        - toString() 和 toLocalString() 返回字符串的形式的数值

        ```js
        var numberObject = new Number(10);
        var b = numberObject.valueOf();  // number
        var c = numberObject.toString();  // string
        ```

    2. Number 变量的方法
        - .toFixed(n)——显示 n 位小数
        - .toExponential(n)——格式化数值，科学计数法，显示 n 位小数
        - .toPrecision(n)——格式化数值，变成 n 位
3. String 类型
    1. 字符方法
        - .chatAt(n)——返回字符串的第 n+1 个字符
        - .chatCodeAt(n)——返回字符串的第 n+1 个字符的字符编码 (ASCII)
    2. 字符串操作方法
        - .concat()——拼接字符串，不过“+”更常用
        - .slice(n)——脚标从 0 开始，截取第 n（包含）个字符之后的字符串，负数表示从尾部算起，不修改原字符
        - .substring(a,b)——截取第 a（包含）个到第 b（不包含）个字符，负数变成 0, 不修改源字符
        - .substr(a,b)——从第 a（包含）个字符开始，截取 b（不包含）个字符，第一个负数加上字符串长度，第二个负数变成 0, 不修改源字符
    3. 字符串位置方法
        - .indexOf("a")——返回字符“a”所在位置，没有则返回-1
        - .lastIndexOf("a")——从末尾向前搜索字符“a”的位置，没有则返回-1
    4. trim() 方法
        .trim() 方法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果
    5. 字符串大小写的转换方法
        .toLocaleLowerCase()
        .toLowerCase()
        .toLocaleUpperCase()
        .toUpperCase()
    6. 字符串的模式匹配方法
        - .match()——本质与调用 RegExp 的 exec() 方法相同
        - .search()——返回字符串中第一个匹配项的索引，没有则返回-1
        - .replace(a,b)——参数 b 替换参数 a, 如果 a 是字符串则只替换第一个，全部替换需要 a 是正则表达式而且要指定全局 (g) 标志。第二个参数 b 可以是字符串、特殊的字符序列、函数
        - .split()——基于指定的分隔符将一个字符串分割成多个子字符串
    7. localeCompare() 方法，字符串比较，可用于判断大小写
    8. HTML 方法，尽量不要使用

### 6.7. 单体内置对象

定义：由 ECMAScript 实现提供的、不依赖宿主环境的对象，这些对象在 ECMAScript 程序执行之前就已经存在了

1. Global 对象
2. Math 对象
    1. min() 和 max() 方法
    2. 舍入方法
        - Math.ceil()——执行向上舍入，即小数进一
        - Math.floor()——执行向下舍入，即小数舍去
        - Math.round()——执行标准舍入，即四舍五入
    3. Math.random() 方法，生成一个≥0,<1 的随机数
    4. 其他方法：绝对值、次幂、三角函数等

## 7. 面向对象

## 8. 函数表达式

### 8.1. 函数的表达式

1. 定义函数的方式有两种：一种是函数声明，另一种是函数表达式
   1. 函数声明

      ```js
      function functionName(arg0, arg1, arg2){
          // 函数体
      };
      ```

   2. 函数声明提升：意思是执行代码之前会先读取函数声明。这就意味着可以把函数声明放在调用它的语句后面

        ```js
        sayHi();
        function sayHi(){
            laert("Hi!");
        }
        ```

   3. 函数表达式

        ```js
        var functionName = function(arg0, arg1, arg2){
            // 函数体
        };
        ```

   4. 区别
       1. 函数表达书创建的函数叫做匿名函数 (anonymous function), 也称为拉姆达函数，因为 function 关键字后面没有标识符。匿名函数的 name 属性是空字符串
       2. 函数表达式与其他表达式一样使用前必须先赋值
       3. 理解函数提升的关键就是理解函数声明与函数表达式之间的区别，函数表达式能够创建函数再赋值给变量，也就能够把函数作为其他函数的返回值
2. 递归：递归函数是在一个函数通过名字调用自身的情况下构成的
3. 闭包：是指有权访问另一个函数作用域中变量的函数。创建闭包的常见方式，就是在函数内部创建另一个函数。

## 9. 选择器

1. js

    ```js
    // id 选择
    document.getElementById('id');

    // name 属性选择
    document.getElementByName('name');

    // 标签/元素选择
    document.getElementByTagName('p');  // 选择所有<p>元素
    ```

2. jquery

    ```js
    // 元素选择
    $('p')  // 选择所有<p>元素
    
    // id 选择
    $('#i')    // 选择元素 id=i 的元素
    
    // .class 选择
    $('.cls')   // 选择所有 class='cls'的元素
    ```

## 10. DOM 操作

### 10.1. 操作属性 jQuery

1. 增加属性

    ```js
    // jquery
    $(selector).addClass(classname);
    ```

2. 替换属性

    ```js
    // jquery
    $(selector).attr(attribute);
    // 或带参数
    $(selector).attr(attribute,value);
    ```

3. 删除属性

    ```js
    $(selector).removeClass(classname);
    ```

## 11. 读写文件 (NodeJS)

1. 读文件

    ```js
    const fs = require('fs')    // 头文件

    let fname = 'abc.csv'
    fs.readFile(fname, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        let list = data.split('\r\n');  // 按行分割
        for (let xx in list) {
            console.log(list[xx]);  // 按行输出
        }
    })
    ```

2. 写文件

### 11.1. Json 文件处理

1. 读取 Json 文件

    ```js
    // 头文件
    const fs = require("fs");

    // 读取 json 配置文件
    var index = fs.readFileSync("xxx.json", 'utf-8', function (err, data) {
        if (err) {
            console.log("Read file error!");
            console.log(err.message);
        } else {
            console.log("Read file success.");
            return data;
        }
    });
    // json 数据格式化
    index = JSON.parse(index);
    ```

2. 写入 Json 文件

    ```js
    // 头文件
    const fs = require("fs");

    // 读取 json 配置文件
    var json_data = fs.readFileSync("xxx.json", 'utf-8', function (err, data) {
        if (err) {
            console.log("Read file error!");
            console.log(err.message);
        } else {
            console.log("Read file success.");
            return data;
        }
    });
    // json 数据格式化
    json_data = JSON.parse(json_data);

    // 创建新数据
    let new_data = {
        key1: value1,
        key2: value2,
        key3: value3
    };
    json_data.push(new_data);   // 添加数据
    var t = JSON.stringify(json_data, "", "\t");    // Json 数据格式化
    fs.writeFileSync("xxx.json", t);    // 写入文件
    ```

3. 路径问题，[参考](https://www.cnblogs.com/yinhaiying/p/10782303.html)

## 12. 未完待续
