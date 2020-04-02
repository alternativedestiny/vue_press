# TypeScript 学习笔记

- [1. TypeScript 数据类型](#1-typescript-数据类型)
- [2. 接口 (Interfaces)](#2-接口-interfaces)
- [3. 数组](#3-数组)
- [4. 函数](#4-函数)
- [5. 类型断言（Type Assertion）](#5-类型断言type-assertion)
- [6. 声明文件](#6-声明文件)
- [7. 参考](#7-参考)

## 1. TypeScript 数据类型

1. 布尔型

    ```ts
    let b: boolean = false
    ```

2. 数值

    ```ts
    let a: number = 6;
    let b: number = 0xff;
    let c: number = NaN;
    let d: number = Infinity;
    ```

3. 字符串

    ```ts
    let str1: string = 'tom';
    ```

4. null 和 undefined

    ```ts
    // void 变量只能赋值为undefined或null
    let unusable: void = undefined;
    let u: undefined = undefined;
    let n: null = null;

    ```

    与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量， 但是`void`类型不行。

5. any：任意值（Any）用来表示允许赋值为任意类型

    ```ts
    let myFavoriteNumber: string = 'seven';
    myFavoriteNumber = 7;
    ```

    也可以访问任何属性或者调用任何方法
    **变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**

6. symbol

7. 类型推论：声明变量时如果没有指定类型，TypeScript会根据赋值推断出一个类型，如果声明变量时没有赋值，则变量类型会被推断成`any`

8. 联合类型 (Union Types)：联合类型表示取值可以为多种类型中的一种。联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型。

    ```ts
    let myFavoriteNumber: string | number;
    myFavoriteNumber = 'seven';
    myFavoriteNumber = 7;
    ```

## 2. 接口 (Interfaces)

1. 在 TypeScript 中，使用接口（Interfaces）来定义对象的类型，首字母大写，变量属性必须和接口属性一致。~~约等于类？~~

    ```ts
    interface Person {
        name: string;
        age: number;
    }

    let tom: Person = {
        name: 'Tom',
        age: 25
    };
    ```

2. 可选属性：变量属性可以没有可选属性

    ```ts
    interface Person {
        name: string;
        age?: number;
    }

    let tom: Person = {
        name: 'Tom'
    };
    ```

3. 任意属性：可以任意设置的属性。需要注意的是，**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**

    ```ts
    interface Person {
        name: string;
        age?: number;
        [propName: string]: any;
    }

    let tom: Person = {
        name: 'Tom',
        gender: 'male'
    };
    ```

4. 只读属性：只能在创建的时候被赋值

    ```ts
    interface Person {
        readonly id: number;
        name: string;
        age?: number;
        [propName: string]: any;
    }

    let tom: Person = {
        id: 89757,
        name: 'Tom',
        gender: 'male'
    };
    ```

## 3. 数组

1. 数组的定义方式

   ```ts
   // 1.「类型 + 方括号」
   let fibonacci: number[] = [1, 1, 2, 3, 5];

   // 2. 数组泛型（Array Generic）
   let fibonacci: Array<number> = [1, 1, 2, 3, 5];

   // 3. 接口，一般不用
   interface NumberArray {
       [index: number]: number;
   }
   let fibonacci: NumberArray = [1, 1, 2, 3, 5];

   ```

## 4. 函数

1. 函数声明：在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）

    ```js
    // 函数声明（Function Declaration）
    function sum(x, y) {
        return x + y;
    }
    // 带约束的函数声明
    function sum(x: number, y: number): number {
        return x + y;
    }

    // 函数表达式（Function Expression）
    let mySum = function (x, y) {
        return x + y;
    };
    // 带约束的函数表达式
    let mySum = function (x: number, y: number): number {
        return x + y;
    };
    ```

2. 可选参数：可选参数必须在必选参数之后，且后面不能再有必选参数

    ```ts
    function buildName(firstName: string, lastName?: string) {
        if (lastName) {
            return firstName + ' ' + lastName;
        } else {
            return firstName;
        }
    }
    let tomcat = buildName('Tom', 'Cat');
    let tom = buildName('Tom');
    ```

3. 参数默认值：添加了默认值的参数会变成可选参数，此时不受`可选参数必须在必选参数之后`的限制

    ```ts
    function buildName(firstName: string, lastName: string = 'Cat') {
        return firstName + ' ' + lastName;
    }
    let tomcat = buildName('Tom', 'Cat');
    let tom = buildName('Tom');
    ```

4. 剩余参数：可以用`...rest`获取剩余参数，剩余参数只能是最后一个参数

    ```ts
    function push(array: any[], ...items: any[]) {
        items.forEach(function(item) {
            array.push(item);
        });
    }

    let a = [];
    push(a, 1, 2, 3);
    ```

5. 重载：重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

    ```ts
    function reverse(x: number): number;
    function reverse(x: string): string;
    function reverse(x: number | string): number | string {
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''));
        } else if (typeof x === 'string') {
            return x.split('').reverse().join('');
        }
    }
    ```

## 5. 类型断言（Type Assertion）

1. 类型断言用来手动指定一个值的类型

    ```ts
    <类型>值
    // 或
    值 as 类型  // tsx语法中只能用这种
    ```

    例：将一个联合类型变量指定为一个具体类型

    ```ts
    function getLength(something: string | number): number {
        if ((<string>something).length) {
            return (<string>something).length;
        } else {
            return something.toString().length;
        }
    }
    ```

2. 类型断言 ≠ 类型转换，断言成联合类型外的类型是不允许的

## 6. 声明文件

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

1. 声明语句

    ```ts
    // 比如在js中导入jQuery模块
    // declare var不是定义了一个变量，而是定义了全局变量jQuery的类型
    // 编译过程中这句会被删除
    declare var jQuery: (selector: string) => any;
    jQuery('#foo')
    ```

2. 声明文件：通常我们会把声明语句放到一个单独的文件（`jQuery.d.ts`）中，这就是声明文件。声明文件必须以`.d.ts`为后缀

    ```ts
    // src/jQuery.d.ts

    declare var jQuery: (selector: string) => any;
    ```

    ```ts
    // src/index.ts

    jQuery('#foo');
    ```

3. 安装声明文件

    ```bash
    npm install @types/jquery --save-dev
    ```

4. 声明全局变量
    - `declare var/let/const` 声明全局变量
    - `declare function` 声明全局方法
    - `declare class` 声明全局类
    - `declare enum` 声明全局枚举类型
    - `declare namespace` 声明（含有子属性的）全局对象

## 7. 参考

- [TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial)
