# 7. 面向对象

## 1. 类&对象

1. 类的定义

    ```cpp
    class Box{
        // 除了 public 还可以定义成 private 或 protect
        public:
            double length;
            double breadth;
            double height;
    }
    ```

2. 访问数据成员

    ```cpp
    Box Box1;  // 声明 Box1，类型为 Box

    // 定义 box1 的长宽高
    Box1.length = 10.0;  
    Box1.breadth = 12.0;
    Box1.height = 9.0；

    // 访问变量
    double volume = Box1.length * Box1.bredth  * Box1.height;
    ```

## 2. 成员函数

### 2.1. 函数定义

1. 类内定义

    ```cpp
    class Box(){
        public:
            double length;
            double breadth;
            double height;

            double getVolume(void){
                return length*breadth*height;
            }
    }

    // 访问函数
    Box Box1;
    double volume  = Box1.getVolume();

    ```

2. 类外定义

    ```cpp
    class Box(){
        public:
            double length;
            double breadth;
            double height;
            // 成员函数声明
            double getVolume(void);
    }
    double Box::getVolume(void){
        return length * breadth * height;
    }

    // 访问函数
    Box Box1;
    double volume  = Box1.getVolume();

    ```

### 2.2. 构造函数&析构函数

1. 构造函数
   - 是一类特殊的成员函数，他会在`每次创建类的新对象时执行`
   - `构造函数的名称与类的名称是完全相同`的，并且不会返回任何类型，也不会返回 void
   - 构造函数可用于为某些成员变量设置初始值
   - 默认的构造函数没有任何参数，但如果需要，构造函数也可以带有参数

2. 析构函数
   - 类的析构函数是类的一种特殊的成员函数，它会在`每次删除所创建的对象时执行`
   - `析构函数的名称与类的名称是完全相同的`，只是在前面加了个`波浪号（~）作为前缀`，它不会返回任何值，也不能带有任何参数。析构函数有助于在跳出程序（比如关闭文件、释放内存等）前释放资源

3. 代码

    ```cpp
    class Line
    {
        public:
            void setLength( double len );
            double getLength( void );
            Line();   // 这是构造函数声明
            ~Line();  // 这是析构函数声明
            int Cal();  // 普通类内函数
    };

    // 成员函数定义，包括构造函数
    Line::Line(void)
    {
        cout << "Object is being created" << endl;
    }
    // 析构函数
    Line::~Line(void)
    {
        cout << "Object is being deleted" << endl;
    }

    int Line::Cal(){}
    ```

## 3. 类访问修饰符

1. public 公有成员：类的外部可以访问
2. private 私有成员：类的外部不可访问，不可查看，默认情况下，类的所有成员都是私有的。可以使用成员函数对数据进行初始化。
3. protected 保护成员：与私有成员类似，但是保护成员在派生类（子类）中可以访问。

## 4. 继承
