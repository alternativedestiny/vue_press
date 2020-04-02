# c++学习笔记

## 1. 获取长度的几种方法

```cpp
#include<iostream>
#include<string>

using namespace std;

xx.size()
xx.length()
sizeof(xx)  // 运算符，返回所占空间的字节数
strlen(xx)  // 函数，返回字符数组或字符串所占的字节数

int a[] = {1, 2, 3, 4}; // 数组
sizeof(a)/ sizeof(a[0]);  //数组长度

```

- [参考链接](https://blog.csdn.net/z_qifa/article/details/77744482)

## 2. print的用法

1. print类型
   - d：十进制带符号整数
   - o：八进制无符号整数
   - f：浮点数
   - p：指针
   - s：字符串*char
   - x：十六进制
   - I64d：用于int64或long long
   - %m.n：m指域宽，n指精度，右对齐（-左对齐）

- [参考链接-printf格式化输出](https://blog.csdn.net/xiexievv/article/details/6831194)

## 3. 数据类型

### 3.1. 数组

1. 数组定义

```cpp
int num[n] = {1, 2, 3};
```

### 3.2. Array

1. array：与数组一样，array对象的长度也是固定的，也是用栈（静态内存分配），而不是自由存储区，因此其效率与数组相同，但更方便，更安全。
2. 基本操作
   1. 定义：`array<typeName, number> name = {};`

### 3.3. 字符串 String

```cpp
// 头文件
#include <string>

string s1 = "what is your name"
string s2 = "is"

// 字符串截取
s1.substr(int a, int b)  // 起始位a，长度b
s1.substr(int a)  // 截取第a个之后的字符串

// 插入
s1.insert(int num, string s)  // 在num位置插入s

// 擦除
s1.erase(int a, int b)  // 删除a之后的b个字符

// 追加
s1.append(string s)  // 追加字符串
s1.append(int n, char c)  // 追加n个c字符

// 替换
s1.replace(int num1, int num2, string s)  // 用s替换num1后面的num2-1个字符
s1.replace(int num1, int num2, string s, int num3, int num4)  // 用s的第num3后面的num4-1个字符替换num1后面的num2-1个字符

// 拼接
int i = 5;
string s = "station: " + to_string(i);

// 查找
s1.find(s2)     // 返回起始位置或-1，大小写敏感
s1.rfind(s2)    // 从后往前查找，其他同上

s1.find_first_of(s2)    // 查找s2第一次出现的位置
s1.find_last_of(s2)     // 查找s2最后一次出现的位置
s1.find_first_not_of(s2)    // 在s1中查找第一个不再s2中的字符
s1.find_last_not_of(s2) // 与上面相似

// 比较
s1.compare(s2)  // 大于：1；小于：-1；等于：0

```

- [参考链接](https://blog.csdn.net/tengfei461807914/article/details/52203202)

## 4. 数据结构

### 4.1. 类&对象

1. 类的定义

    ```cpp
    class Box{
        // 除了public还可以定义成private或protect
        public:
            double length;
            double breadth;
            double height;
    }
    ```

2. 访问数据成员

    ```cpp
    Box Box1;  // 声明Box1，类型为Box

    // 定义box1的长宽高
    Box1.length = 10.0;  
    Box1.breadth = 12.0;
    Box1.height = 9.0；

    // 访问变量
    double volume = Box1.length * Box1.bredth  * Box1.height;
    ```

3. 类的成员函数

    ```cpp
    // 类内定义
    class Box(){
        public:
            double length;
            double breadth;
            double height;

            double getVolume(void){
                return length*breadth*height;
            }
    }

    // 类外定义
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

4. 类访问修饰符
   1. public公有成员：类的外部可以访问
   2. private私有成员：类的外部不可访问，不可查看，默认情况下，类的所有成员都是私有的。可以使用成员函数对数据进行初始化。
   3. protected保护成员：与私有成员类似，但是保护成员在派生类（子类）中可以访问。

5. 构造函数&析构函数
   1. 构造函数
      - 是一类特殊的成员函数，他会在每次创建类的新对象时执行
      - `构造函数的名称与类的名称是完全相同`的，并且不会返回任何类型，也不会返回 void
      - 构造函数可用于为某些成员变量设置初始值
      - 默认的构造函数没有任何参数，但如果需要，构造函数也可以带有参数

   2. 析构函数
      - 类的析构函数是类的一种特殊的成员函数，它会在每次删除所创建的对象时执行
      - 析构函数的名称与类的名称是完全相同的，只是在前面加了个波浪号（~）作为前缀，它不会返回任何值，也不能带有任何参数。析构函数有助于在跳出程序（比如关闭文件、释放内存等）前释放资源

    ```cpp
    class Line
    {
        public:
            void setLength( double len );
            double getLength( void );
            Line();   // 这是构造函数声明
            ~Line();  // 这是析构函数声明
    };

    // 成员函数定义，包括构造函数
    Line::Line(void)
    {
        cout << "Object is being created" << endl;
    }
    Line::~Line(void)
    {
        cout << "Object is being deleted" << endl;
    }
    ```

### 4.2. 链表

1. 单向链表：链表中最简单的一种是单向链表，它包含两个域，一个信息域和一个指针域。这个链接指向列表中的下一个节点，而最后一个节点则指向一个`空值`。
2. 双向链表：一种更复杂的链表是“双向链表”或“双面链表”。每个节点有两个连接：一个指向前一个节点，（当此“连接”为第一个“连接”时，指向空值或者空列表）；而另一个指向下一个节点，（当此“连接”为最后一个“连接”时，指向空值或者空列表）。
3. 优点：
   1. 使用链表结构可以克服数组链表需要预先知道数据大小的缺点，链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理。
   2. 相比数组结构，对于元素的插入和删除操作来说，链表的效率要比数组高，因为每个节点都有链域存储指向下一个节点的指针，因此进行插入和删除的操作时不需要频繁的移动其他的元素，只需要修改对应位置附近节点的链域的值即可。
4. 缺点
   1. 查询链表只能通过指针顺序访问，效率相对低下，查询可能需要O(n)的时间复杂度。
   2. 因为链表的每个节点都含有链域，所占用的空间较多。
5. 链表操作

    ```cpp
    #include <stdio.h>
    #include <iostream>

    using namespace std;

    // 创建链表
    typedef struct student {
        int score;  // 数据域
        struct student *next;  // 链域
    } LinkList;

    // 初始化链表，n为节点个数
    LinkList *creat(int n) {
        LinkList *head, *node, *end;  // 定义头节点，普通节点，尾节点
        head = (LinkList *) malloc(sizeof(LinkList));  // 分配地址
        end = head;  // 若是空链表则头尾节点一样
        printf("请输入 %d 个链表值: \n", n);
        for (int i = 0; i < n; i++) {
            node = (LinkList *) malloc(sizeof(LinkList));
            scanf("%d", &node->score);
            end->next = node;
            end = node;
        }
        end->next = NULL;  // 结束创建
        return head;
    }

    // 修改链表节点值，n为第n个值
    void change(LinkList *list, int n) {
        LinkList *t = list;
        int i = 0;
        n++;
        // 先查询
        while (i < n && t != NULL) {
            t = t->next;
            i++;
        }
        // 再修改
        if (t != NULL) {
            puts("输入要修改的值");
            scanf("%d", &t->score);
        } else {
            puts("节点不存在");
        }
    }

    // 删除节点
    void delet(LinkList *list, int n) {
        LinkList *t = list, *in;
        int i = 0;
        while (i < n && t != NULL) {
            in = t;
            t = t->next;
            i++;
        }
        if (t != NULL) {
            in->next = t->next;
            free(t);  // 放出被删除节点的空间
        } else {
            puts("节点不存在");
        }
    }

    // 插入链表节点
    void insert(LinkList *list, int n) {
        LinkList *t = list, *in;
        int i = 0;
        while (i < n && t != NULL) {
            t = t->next;
            i++;
        }
        if (t != NULL) {
            in = (LinkList *) malloc(sizeof(LinkList));
            puts("要插入的值");
            scanf("%d", &in->score);
            in->next = t->next;  // 填充in节点的指针域指向下一个节点
            t->next = in;  // t节点的指针域指向in
        } else {
            puts("节点不存在");
        }
    }

    // 输出链表
    void plot(LinkList *list) {
        LinkList *t = list;
        int i = 0;
        while (t->next != NULL) {
            t = t->next;
            printf("%d", t->score);
            i++;
        }
        printf("长度%d \n", i);
    }

    int main() {
        LinkList *li = creat(5);  // 创建5个长度的链表
        insert(li, 0);
        plot(li);
        change(li, 1);
        delet(li, 5);
        plot(li);

    }

    ```

    ```c
    // 力扣编程及测试文件

    #include <iostream>
    #include <vector>

    using namespace std;

    class Node {
    public:
        int val;
        Node *next;

        explicit Node(int x) : val(x), next(nullptr) {}
    };


    class List {
    private:
        Node *head, *tail;
    public:
        // 构造函数
        List() { head = tail = nullptr; };

        // 析构函数
        ~List() {
            delete head;
            delete tail;
        }

        void plot();

        void insert(int a);

        void search(int a);

        void del(int a);

        void del1(int a);

    };

    // 打印链表
    void List::plot() {
        Node *p = head;
        if (p == nullptr) {
            cout << "List is empty" << endl;
        } else {
            while (true) {
                cout << p->val;
                if (p->next == nullptr)break;
                cout << "->";
                p = p->next;
            }
            cout << endl;
        }
    }

    // 插入数据，用来创建列表
    void List::insert(int a) {
        if (head == nullptr) {
            head = tail = new Node(a);
            head->next = nullptr;
            tail->next = nullptr;
        } else {
            Node *p = new Node(a);
            tail->next = p;
            tail = p;
            tail->next = nullptr;
        }
    }

    // 查找元素
    void List::search(int a) {
        Node *p = head;
        if (p == nullptr) {
            cout << "链表为空" << endl;
            return;
        }
        int ad = 0, flag = 0;
        while (p != nullptr) {
            if (p->val == a) {
                cout << "Find:" << a << " at:" << ad << endl;
                flag = 1;
            }
            p = p->next;
            ad++;
        }
        if (flag == 0) {
            cout << "Not Found" << endl;
        }
    }


    // 删除元素
    void List::del(int a) {
        Node *h = new Node(-1);
        Node *p, *q;
        if (head == nullptr)return;
        h->next = head;
        p = h, q = h;
        head = p->next;
        while (p != nullptr) {
            if (p->val == a) {
                q->next = p->next;
            } else {
                q = p;
            }
            p = p->next;
        }
        head = h->next;
    }

    void List::del1(int a) {
        Node *p, *q;
        p = head;
        if (p == nullptr)return;  // 空链表
        while (p != nullptr) {
            if (p->val != a) {  // 链表从非删除元素开始
                head = p;
                break;
            }
            p = p->next;
        }
        if (p == nullptr) {  // 链表元素全部都是要删除的
            head = nullptr;
            return;
        }
        // 删除链表后部指定元素
        q = p;
        while (p != nullptr) {
            if (p->val == a) {
                q->next = p->next;
            } else {
                q = p;
            }
            p = p->next;
        }
    }

    // 反转
    void List::reverse() {
        Node *p = head;
        vector<int> v;
        if (p == nullptr)return;
        while (p != nullptr) {
            v.insert(v.begin(),p->val);
            p = p->next;
        }
        head = tail = new Node(0);
        for(int i:v){
            Node *q = new Node(i);
            tail->next = q;
            tail=q;
        }
        head = head->next;
    }


    int main() {
        vector<int> v{1, 1, 2, 3, 4, 2, 1};
        List l1;
        for (int i:v) {
            l1.insert(i);
        }
        l1.plot();
        l1.del(1);
        l1.plot();
        l1.search(2);
        return 0;
    }
    ```

- [链表操作](https://blog.csdn.net/Endeavor_G/article/details/80552680)
- [c++数据结构链表](https://juejin.im/entry/58ad26bc570c35006bcde428)

### 4.3. Vector向量

1. vector：可以简单的认为，向量是一个能够存放任意类型的动态数组，vector的元素不仅仅可以是int、double、string还可以是`结构体`，结构体要定义为`全局`的
2. 基本操作
   1. 头文件`#include<vector>`
   2. 创建vector对象：`vector<int> vec`

        ```cpp
        vector<int> vec;
        vector<int> vec(10,0);
        vector<int> vec = {1, 2, 3};
        vector<int> vec {1, 2, 3};
        ```

   3. 尾部插入对象：`vec.push_back(a)`
   4. 使用下标访问元素`cout<<vec[0]<<endl`
   5. 访问元素

        ```cpp
        vector<int>::iterator i;
        // 使用迭代器访问
        for(it=vec.begin();it!=vec.end();it++){
            cout<<*it<<endl;
        }
        // 普通访问方式
        for(int i=0; i<vec.size(); i++){
            cout<<vec[i]<<endl;
        }
        ```

   6. 插入元素：`vec.insert(vec.begin()+i,a)`：在第i+1个元素前面插入a
   7. 删除元素：`vec.erase(vec.begin()+2)`：删除第三个元素
   8. 向量大小：`vec.size()`
   9. 清空：`vec.clear`
3. 算法

- [参考链接1](https://blog.csdn.net/duan19920101/article/details/50617190)
- [参考链接2](https://www.runoob.com/w3cnote/cpp-vector-container-analysis.html)

### 4.4. Map

1. Map：map是一类关联式容器。它的特点是增加和删除节点对迭代器的影响很小，除了那个操作节点，对其他的节点都没有什么影响。
对于迭代器来说，可以修改实值，而不能修改key。
   1. 有点类似python3的字典
   2. Map使用

       ```cpp
       // 头文件
       #include<map>

       // 创建
       map<string,int> MapName = {
           {"a", 1},
           {"b", 2},
           {"c", 3}
       };

       // 插入
       MapName["d"] = 4;
       MapName.insert(pair<string,int> ("d",4));
       MapName.insert(map<string,int>::value_type("d",4));

       // 查询
       MapName["a"]
       MapName.at("a");  // 返回对应值

       // 查找
       MapName.find();  // 返回的是被查找元素的位置，没有则返回map.end()
       MapName.count();  // 返回的是被查找元素的个数。如果有，返回1；否则，返回0。注意，map中不存在相同元素，所以返回值只能是1或0。

       // 容量
       MapName.empty();  // 判断是否为空
       MapName.size();  // 返回大小

       // 删除
       MapName.erase("b");
       MapName.clear();  // 清空

       // 顺序比较
       MapName.key_comp("a","b")  // a在b前返回true
       ```

- [c++常见map用法](https://blog.csdn.net/shuzfan/article/details/53115922)
- [c++ STL hashmap](https://blog.csdn.net/u010025211/article/details/46653519)
- [散列表类的C++实现(探测散列表)](https://blog.csdn.net/Linux_ever/article/details/51143042)

### 4.5. 哈希/散列 HashTable/HashMap

1. 哈希表 hashmap
   1. 优点：大大减少数据存储和查询时间；缺点：消耗较多内存
   2. 原理：使用一个下标范围比较大的数组来存储元素。可以设计一个函数（哈希函数，也叫做散列函数），使得每个元素的关键字都与一个函数值（即数组下标，hash值）相对应，于是用这个数组单元来存储这个元素；也可以简单的理解为，按照关键字为每一个元素“分类”，然后将这个元素存储在相应“类”所对应的地方，称为桶。
   3. 插入值过程：首先分配一大片内存，形成许多桶。是利用hash函数，对key进行映射到不同区域（桶）进行保存。
      1. 得到key
      2. 通过hash函数计算hash值
      3. 得到桶号
      4. 存放key和value到桶内
   4. 取值过程
      1. 得到key
      2. 通过hash函数计算hash值
      3. 得到桶号
      4. 比较桶的内部元素是否与key相等，若都不相等，则没有找到
      5. 取出相等的记录的value
   5. 解决hash值冲突
      1. 开放定址法，设 hi(x) = (x+f(i)) % TableSize
         1. 线性探测：f(i) = i, 发生冲突时尝试下一个单元
         2. 平方探测：f(i) = i^2, 发生冲突时尝试加平方
         3. 双散列：f(i) = i*hash2(x), 这又涉及到第二个散列函数hash2(x)的选择，一般我们选择hash2(x) = R - (x % R)，其中R是小于TableSize的素数
      2. 分离链接法：思路是将散列到同一个值的所有元素保留到一个链表中
         1. 散列表结构：`vector<<list<hash>> name`
2. 哈希表与Map的区别
   1. Map对应的数据结构是红黑树，查询的时间复杂度为O(log n)
   2. 哈希表在STL中对应unordered_map（无序映射），查询的时间复杂度为O(1)
   3. 其他使用基本一样
3. 使用

    ```cpp
    // hash_map
    #include <hash_map>
    __gnu_cxx::hash_map<int, int> hashMap;

    // unordered_map
    #include <unordered_map>
    unordered_map<int, int> hashMap;
    ```

### 4.6. 树 Tree

1. 树是一种抽象数据类型（ADT）或是实现这种抽象数据类型的数据结构，用来模拟具有树状结构性质的数据集合。它是由n（n>0）个有限节点组成一个具有层次关系的集合
   - 每个节点都只有有限个子节点或无子节点；
   - 没有父节点的节点称为根节点；
   - 每一个非根节点有且只有一个父节点；
   - 除了根节点外，每个子节点可以分为多个不相交的子树；
   - 树里面没有环路(cycle)
2. 二叉树遍历
   1. 深度优先遍历
      1. 前序遍历：根节点->左子树->右子树
      2. 中序遍历：左子树->根节点->右子树
      3. 后续遍历：左子树->右子树->根节点
   2. 广度优先遍历（层序遍历）：会先访问离根节点最近的节点
3. 程序

    ```cpp

    #include <stdio.h>
    #include <string>
    #include <iostream>
    #include <vector>


    using namespace std;

    struct TreeNode {
        int val;
        struct TreeNode *left, *right;  // 左子树，右子树
    };

    // 创建树
    void createTree(TreeNode *&t, vector<int> v) {
        if (v.size() != 0) {
            t = new TreeNode;
            t->val = v[0];
            v.erase(v.begin());
            createTree(t->left, v);
            createTree(t->right, v);
        } else {
            t = NULL;
        }
    }

    // 前序遍历
    void pre(TreeNode *&t){
        if(t){
            cout<<t->val<<" ";
            pre(t->left);
            pre(t->right);
        }else{
            cout<<endl;
        }
    }

    // 中序遍历
    void mid(TreeNode *&t){
        if(t){
            pre(t->left);
            cout<<t->val<<" ";
            pre(t->right);
        }else{
            cout<<endl;
        }
    }

    // 后序遍历
    void back(TreeNode *&t){
        if(t){
            pre(t->left);
            pre(t->right);
            cout<<t->val<<" ";
        }else{
            cout<<endl;
        }
    }


    int main() {
        vector<int> vec = {1, 2, 3, 4};
        TreeNode *p;
        createTree(p, vec);
        pre(p);

        return 0;
    }
    ```

### 4.7. 堆&栈 Heap&Stack

1. 特点：堆，FIFO；栈FILO。
2. 操作

    ```c
    #include<stack>

    stack<int> s;  // 定义
    s.push(2);  // 压栈
    s.pop();  // 弹栈，删除弹出元素
    s.empty();  // 判空
    s.size();  // 取大小
    s.top();  // 返回栈顶元素，不删除元素
    ```

## 5. 指针

1. `*`：间接寻址运算符，一元运算符，返回操作数所指定地址的变量的值
2. `&`：取地址运算符，一元运算符，返回操作数的内存地址

```c
int a = 1;
int *p = &a;  // √
int *p = a;  // ×

cout << a << endl;  // 1
cout << &a << endl;  // 0x61fe14
cout << p << endl;  // 0x61fe14
cout << *p << endl;  // 1

*p = 10;
cout << a << endl;  // 10
cout << p << endl;  // 0x61fe14
cout << *p << endl;  // 10

cout << typeid(a).name() << endl;  // i
cout << typeid(p).name() << endl;  // Pi
cout << typeid(*p).name() << endl;  // i

```

## 6. 备注

### 6.1. ASCII码转换

```cpp
string s = (char) (n + 64);
int n = (int)('a')
```

### 6.2. 单引号`'`和双引号`"`

1. 单引号是字符型，单引号引起的字符代表一个整数
2. 双引号是字符串型，双引号的字符串指向一个无名数组起始字符的指针

### 6.3. 变量类型转换

1. String
   1. String->Int: `stoi(s)`
2. Int
   1. Int->Sting: `to_string(i)`
