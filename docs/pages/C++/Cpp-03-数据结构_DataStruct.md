# 3. 数据结构

## 1. 结构体 Struct

1. 结构：允许存储不同类型的数据
2. 创建结构

    ```cpp
    #include <iostream>
    #include <cstring>

    using namespace std;

    struct Books {
        char title[50];
        char author[40];
        int book_id;
    };

    int main() {

        Books book1{};
        strcpy(book1.title, "C++ Learning");
        strcpy(book1.author, "tom");
        book1.book_id = 123;

        cout << book1.title << endl;
        cout << book1.author << endl;
        cout << book1.book_id << endl;

        return 0;
    }
    ```

3. 结构体排序

    ```cpp
    // 先定义一个排序依据：按照 book_id 升序排列
    bool comp(const Books &a, const Books &b) { return a.book_id < b.book_id; }

    // 然后在排序中使用
    sort(book_vec.begin(), book_vec.end(), comp);
    ```

## 2. 链表 Linked list

### 2.1. 链表定义

1. 单向链表：链表中最简单的一种是单向链表，它包含两个域，一个信息域和一个指针域。这个链接指向列表中的下一个节点，而最后一个节点则指向一个`空值`。
2. 双向链表：一种更复杂的链表是“双向链表”或“双面链表”。每个节点有两个连接：一个指向前一个节点，（当此“连接”为第一个“连接”时，指向空值或者空列表）；而另一个指向下一个节点，（当此“连接”为最后一个“连接”时，指向空值或者空列表）。
3. 优点：
   1. 使用链表结构可以克服数组链表需要预先知道数据大小的缺点，链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理。
   2. 相比数组结构，对于元素的插入和删除操作来说，链表的效率要比数组高，因为每个节点都有链域存储指向下一个节点的指针，因此进行插入和删除的操作时不需要频繁的移动其他的元素，只需要修改对应位置附近节点的链域的值即可。
4. 缺点
   1. 查询链表只能通过指针顺序访问，效率相对低下，查询可能需要 O(n) 的时间复杂度。
   2. 因为链表的每个节点都含有链域，所占用的空间较多。

### 2.2. 链表操作

1. 创建链表

    ```cpp
    #include <stdio.h>
    #include <iostream>

    using namespace std;

    // 创建链表
    typedef struct student {
        int score;  // 数据域
        struct student *next;  // 链域
    } LinkList;

    // 初始化链表，n 为节点个数
    LinkList *creat(int n) {
        LinkList *head, *node, *end;  // 定义头节点，普通节点，尾节点
        head = (LinkList *) malloc(sizeof(LinkList));  // 分配地址
        end = head;  // 若是空链表则头尾节点一样
        printf("请输入 %d 个链表值：\n", n);
        for (int i = 0; i < n; i++) {
            node = (LinkList *) malloc(sizeof(LinkList));
            scanf("%d", &node->score);
            end->next = node;
            end = node;
        }
        end->next = NULL;  // 结束创建
        return head;
    }

    int main() {
        LinkList *li = creat(5);  // 创建 5 个长度的链表
    }
    ```

2. 增

    ```cpp
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
            in->next = t->next;  // 填充 in 节点的指针域指向下一个节点
            t->next = in;  // t 节点的指针域指向 in
        } else {
            puts("节点不存在");
        }
    }
    ```

3. 删

    ```cpp
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
    ```

4. 改

    ```cpp
    // 修改链表节点值，n 为第 n 个值
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
    ```

5. 查

    ```cpp
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

    ```

6. 面向对象的链表操作

    ```cpp
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

- [链表操作🔗](https://blog.csdn.net/Endeavor_G/article/details/80552680)
- [c++数据结构链表🔗](https://juejin.im/entry/58ad26bc570c35006bcde428)

## 3. 向量 Vector

1. vector：可以简单的认为，向量是一个能够存放任意类型的动态数组，vector 的元素不仅仅可以是 int、double、string 还可以是`结构体`，结构体要定义为`全局`的
2. 基本操作
   1. 头文件`#include<vector>`
   2. 创建 vector 对象：`vector<int> vec`

        ```cpp
        vector<int> vec0;              // 定义空 vec
        vector<int> vec1(10);          // 定义长度为 10 的 vec, clear 会同时清空长度
        vector<int> vec2(10, 0);       // 定义长度为 10, 初值为 0 的 vec
        vector<int> vec3 = {1, 2, 3};  // 定义初值为 1,2,3 的 vec
        vector<int> vec4{1, 2, 3};     // 定义初值为 1,2,3 的 vec
        ```

   3. 使用下标访问元素`cout<<vec[0]<<endl`
   4. 访问元素

        ```cpp
        // 使用迭代器访问
        vector<int>::iterator it;
        for (it = vec.begin(); it != vec.end(); it++) {
            cout << *it << endl;
        }
        // 普通访问方式
        for (int i = 0; i < vec.size(); i++) {
            cout << vec[i] << endl;
        }
        ```

3. 增删改查
   1. 增加

        ```cpp
        // 尾部插入元素
        vec.push_back(a);

        // 任意位置插入元素
        vec.insert(vec.begin() + i, a);     // 在第 i+1 个元素前面插入 a

        // 复制 vec
        // 1. 在声明时复制
        vector<int> vec2(vec1);
        // 2. 其他时间复制
        vec2.assign(vec1.begin(), vec1.end());
        ```

   2. 删除

        ```cpp
        // 删除元素
        vec.erase(vec.begin() + 2);  // 删除第三个元素
        // 清空
        vec.clear();    // 会同时清空长度，需要用 resize 重新定义

        // 删除多个元素
        vector<int> m_vec = {1, 2, 3, 3, 2, 4, 3};
        vector<int>::iterator iter;

        for (iter = m_vec.begin(); iter != m_vec.end();) {  // 注意 end() 后面有分号
            if (*iter == 3) {
                iter = m_vec.erase(iter);
            } else {
                iter++;
            }
        }
        ```

   3. 修改

        ```cpp
        // 修改元素
        vec[num] = 123; // 已知索引可以直接赋值

        // 修改 size
        vec.resize(num);
        ```

4. 计算
   1. 求和

        ```cpp
        #include <numeric>  // 需要包含此包

        // accumulate（起始位，终止位，累加初始值）
        float sum = accumulate(vec.begin(), vec.end(), 0.0);
        ```

   2. 排序，参考本章结构体排序

5. 二维 vector

    ```cpp
    // 定义二维 vec
    vector<vector<int> > vec(6);    // 6 个 vector<int>

    // 访问
    vec[i][j];  // 第 i 个 vec 的第 j 个元素
    ```

6. 算法

- [参考链接 1🔗](https://blog.csdn.net/duan19920101/article/details/50617190)
- [参考链接 2🔗](https://www.runoob.com/w3cnote/cpp-vector-container-analysis.html)

## 4. 映射 Map

### 4.1. Map 基础使用

1. Map：map 是一类关联式容器。它的特点是增加和删除节点对迭代器的影响很小，除了那个操作节点，对其他的节点都没有什么影响。对于迭代器来说，可以修改实值，而不能修改 key。
2. Map 使用

    ```cpp
    // 头文件
    #include <map>

    // 创建
    map<string, int> map_name = {
        {"a", 1},
        {"b", 2},
        {"c", 3}
    };
    ```

3. 增删改查

    ```cpp
    // 插入
    map_name["d"] = 4;
    map_name.insert(pair<string,int> ("d",4));
    map_name.insert(map<string,int>::value_type("d",4));
    // 如果map的值为vector可以用push_back
    map_name["d"].push_back(4);

    // 删除
    map_name.erase("b");
    map_name.clear();  // 清空

    // 修改
    map_name["b"] = 10; // 将 b 的值修改成 0

    // 查询
    map_name["a"]   // 注意当key不存在时，会自动创建
    map_name.at("a");  // 返回对应值

    // 查找
    map_name.find();  // 返回的是被查找元素的位置，没有则返回 map.end()
    map_name.count();  // 返回的是被查找元素的个数。如果有，返回 1；否则，返回 0。注意，map 中不存在相同元素，所以返回值只能是 1 或 0。

    // 容量
    map_name.empty();  // 判断是否为空
    map_name.size();  // 返回大小
    ```

4. 遍历

    ```cpp
    #include <map>

    map<string, string> map_name;
    map<string, string>::iterator iter;

    for (iter = map_name.begin(); iter != map_name.end(); iter++) {
        cout << iter->first << " = " << iter->second << endl;
    }
    ```

5. 比较

    ```cpp
    // 顺序比较
    map_name.key_comp("a","b")  // a 在 b 前返回 true
    ```

6. 按照值排序 (map 本身会按照 key 排序）

    ```cpp
    #include <algorithm>
    #include <map>
    #include <string>
    #include <vector>

    using namespace std;

    // 定义排序规则：升序排列
    bool cmp(pair<string, int> a, pair<string, int> b) { return a.second < b.second; }

    // map 不能直接排序，故要借助 vector 实现
    void sort_map(map<string, int> &mymap) {
        vector<pair<string, int> > myvec;
        vector<pair<string, int> >::iterator it;

        map<string, int>::iterator iter;

        for (iter = mymap.begin(); iter != mymap.end(); iter++) {
            myvec.push_back(pair<string, int>(iter->first, iter->second));
        }

        sort(myvec.begin(), myvec.end(), cmp);  // 要加 algorithm 库

        for (it = myvec.begin(); it != myvec.end(); ++it) {
            printf("Key: %s  Val: %d\n", it->first.c_str(), it->second);
        }
    }

    int main(int argc, char const *argv[]) {
        map<string, int> mymap = {{"a", 1}, {"b", 2}, {"c", 3}};
        sort_map(mymap);
        return 0;
    }
    ```

- [c++常见 map 用法🔗](https://blog.csdn.net/shuzfan/article/details/53115922)
- [c++ STL hashmap🔗](https://blog.csdn.net/u010025211/article/details/46653519)
- [散列表类的 C++实现（探测散列表）🔗](https://blog.csdn.net/Linux_ever/article/details/51143042)

### 4.2. Map 含结构体使用

1. Map 创建

## 5. 哈希/散列 HashTable/HashMap

1. 哈希表 hashmap
   1. 优点：大大减少数据存储和查询时间；缺点：消耗较多内存
   2. 原理：使用一个下标范围比较大的数组来存储元素。可以设计一个函数（哈希函数，也叫做散列函数），使得每个元素的关键字都与一个函数值（即数组下标，hash 值）相对应，于是用这个数组单元来存储这个元素；也可以简单的理解为，按照关键字为每一个元素“分类”，然后将这个元素存储在相应“类”所对应的地方，称为桶。
   3. 插入值过程：首先分配一大片内存，形成许多桶。是利用 hash 函数，对 key 进行映射到不同区域（桶）进行保存。
      1. 得到 key
      2. 通过 hash 函数计算 hash 值
      3. 得到桶号
      4. 存放 key 和 value 到桶内
   4. 取值过程
      1. 得到 key
      2. 通过 hash 函数计算 hash 值
      3. 得到桶号
      4. 比较桶的内部元素是否与 key 相等，若都不相等，则没有找到
      5. 取出相等的记录的 value
   5. 解决 hash 值冲突
      1. 开放定址法，设 hi(x) = (x+f(i)) % TableSize
         1. 线性探测：f(i) = i, 发生冲突时尝试下一个单元
         2. 平方探测：f(i) = i^2, 发生冲突时尝试加平方
         3. 双散列：f(i) = i*hash2(x), 这又涉及到第二个散列函数 hash2(x) 的选择，一般我们选择 hash2(x) = R - (x % R)，其中 R 是小于 TableSize 的素数
      2. 分离链接法：思路是将散列到同一个值的所有元素保留到一个链表中
         1. 散列表结构：`vector<<list<hash>> name`
2. 哈希表与 Map 的区别
   1. Map 对应的数据结构是红黑树，查询的时间复杂度为 O(log n)
   2. 哈希表在 STL 中对应 unordered_map（无序映射），查询的时间复杂度为 O(1)
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

## 6. 树 Tree

1. 树是一种抽象数据类型（ADT）或是实现这种抽象数据类型的数据结构，用来模拟具有树状结构性质的数据集合。它是由 n（n>0）个有限节点组成一个具有层次关系的集合
   - 每个节点都只有有限个子节点或无子节点；
   - 没有父节点的节点称为根节点；
   - 每一个非根节点有且只有一个父节点；
   - 除了根节点外，每个子节点可以分为多个不相交的子树；
   - 树里面没有环路 (cycle)
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

## 7. 堆&栈 Heap&Stack

1. 特点：堆，FIFO；栈 FILO。
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
