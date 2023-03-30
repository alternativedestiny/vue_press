# 10. Neo4j 图数据库

## 1. 安装配置

1. 安装配置 JDK 环境，比如需要 jdk11 以上版本
2. 从 [neo4j 官网🔗](https://neo4j.com/) 的 [下载地址🔗](https://neo4j.com/download-center/#community) 下载安装包
3. 离线安装包解压即可
4. 启动数据库
   1. 在`../neo4j-community-4.0.3/bin`安装目录下打开命令行

        ```bash
        neo4j console
        ```

   2. 正常数据库打开效果

        ```bash
        D:\neo4j-community-4.0.3\bin>neo4j console
        2020-07-02 06:57:01.863+0000 INFO  ======== Neo4j 4.0.3 ========
        2020-07-02 06:57:01.868+0000 INFO  Starting...
        2020-07-02 06:57:10.438+0000 INFO  Bolt enabled on localhost:7687.
        2020-07-02 06:57:10.439+0000 INFO  Started.
        2020-07-02 06:57:11.376+0000 INFO  Remote interface available at http://localhost:7474/
        ```

   3. 在浏览器中打开 `http://localhost:7474/` 即可访问数据库

        <img src='../images/neo4j-browser.png' width=800>

   4. 默认用户名`neo4j`，密码`neo4j`，首次登录会要求修改密码

        <img src='../images/neo4j-browser1.png' width=800>

## 2. py2neo 使用

### 2.1. 安装

1. 安装`py2neo`库

    ```bash
    pip install py2neo
    ```

2. 连接数据库

    ```python
    from py2neo import Graph, Node, Relationship

    # 连接数据库
    neo_graph = Graph(
        'http://localhost:7474',
        username='neo4j',
        password='password'
    )

    # 简写 1
    neo = Graph('localhost', auth=('neo4j', 'password'))

    # 简写 2
    neo = Graph('localhost', password='password')
    ```

3. demo

    ```python
    from py2neo import Graph, Node, Relationship

    # 连接数据库
    neo_graph = Graph(
    'http://localhost:7474',
    username='neo4j',
    password='password'
    )
    test = neo_graph.begin()

    # 建立节点
    a = Node('person', name='Alice')
    b = Node('person', name='Bos')
    # 创建关系
    ab = Relationship(a, 'knows', b)
    # 写入数据库
    test.create(ab)
    test.commit()

    print(ab)
    ```

    > (Alice)-[:knows {}]->(Bos)

    <img src='../images/neo4j-demo.png' width=800>

### 2.2. 增

1. 创建节点与属性
    1. py2neo 写法

        ```python
        # 建立节点
        a = Node('person', name='Alice')
        b = Node('person', name='Bob')
        ab = Relationship(a, 'knows', b)
        # 添加属性
        a['age'] = 20
        b['age'] = 21
        ab['time'] = '2020-07-03'

        print(a)
        print(b)
        print(ab)
        ```

        > (:person {age: 20, name: 'Alice'})
        > (:person {age: 21, name: 'Bos'})
        > (Alice)-[:knows {time: '2020-07-03'}]->(Bos)

    2. cypher 写法

        ```python
        neo.run('create(p:person{name:"Alice", age:16})')
        neo.begin().commit()
        ```

2. 设置默认属性 setdefault

    ```python
    a.setdefault('location', 'beijing')
    print(a)
    ```

    > (:person {age: 20, location: 'beijing', name: 'Alice'})

3. 属性批量更新 update

    ```python
    data = {
    'name': 'amy',
    'age': 21
    }

    a.update(data)

    print(a)
    ```

    > (:person {age: 21, location: 'beijing', name: 'amy'})

### 2.3. 删

1. 删除节点

    ```python
    # 删除节点 2
    neo.delete(neo.nodes[2])
    neo.begin().commit()
    ```

2. 删库

    ```python
    from py2neo import Graph, Node, Relationship, walk

    neo = Graph(
    'http://localhost:7474',
    username='neo4j',
    password='password'
    )

    neo.delete_all()
    ```

### 2.4. 改

### 2.5. 查

1. 查询节点

   1. 通过 nodes 的 id 查询

        ```python
        from py2neo import Graph

        neo = Graph(
            'http://localhost:7474',
            username='neo4j',
            password='password'
        )

        print(neo.nodes[1])
        print(neo.nodes.get(1))
        ```

        > (_1:person {age: 21, name: 'Bob'})

   2. 通过 Cypher 语言查询

        ```python
        n = neo.run("MATCH (a:person) RETURN a.name,a.age LIMIT 4").data()
        for i in n:
            print(i)
        ```

        > {'a.name': 'amy', 'a.age': 21}
        > {'a.name': 'Bob', 'a.age': 21}

   3. 通过 NodeMatcher 查询

        ```python
        matcher = NodeMatcher(neo)
        find = matcher.match('person').where('_.name="Bob"').first()
        print(find)
        ```

        > (_1:person {age: 21, name: 'Bob'})

2. 查询

## 3. Neomodel 使用

### 3.1. 安装

1. 安装 neomodel

    ```bash
    pip install neomodel
    ```

2. 连接数据库

    ```python
    from neomodel import config
    # 默认用户名密码
    config.DATABASE_URL = 'bolt://neo4j:neo4j@localhost:7687'
    ```

    或

    ```python
    from neomodel import db
    db.set_connection('bolt://neo4j:neo4j@localhost:7687')
    ```

### 3.2. 创建模型

1. 定义关系和模型，命名为 models.py

    ```python
    from neomodel import (config, StructuredNode, StringProperty, IntegerProperty,
        UniqueIdProperty, RelationshipTo)

    # 节点 1 country
    class Country(StructuredNode):
        code = StringProperty(unique_index=True, required=True)

    # 节点 2 person
    class Person(StructuredNode):
        uid = UniqueIdProperty()
        name = StringProperty(unique_index=True)
        age = IntegerProperty(index=True, default=0)

        # traverse outgoing IS_FROM relations, inflate to Country objects
        country = RelationshipTo(Country, 'IS_FROM')
    ```

2. 关系类型

    | 关系             | 方向 | 备注                       |
    | ---------------- | ---- | -------------------------- |
    | Relationship     | 双向 | 双向查询                   |
    | RelationshipTo   | 正向 | 可以从当前节点查到对象节点 |
    | RelationshipFrom | 反向 | 可以从对象节点查询当前节点 |

### 3.3. 使用模型

1. 创建模型

    ```python
    from neomodel import config
    import models

    config.DATABASE_URL = 'bolt://neo4j:password@localhost:7687'

    jim = test.Person(name='jim', age=3).save()
    ```

2. 查询节点

    ```python
    # 单一查询（如果有多个会报错）
    jim = models.Person.nodes.get_or_none(name='jim')
    # 查询第一个
    ch = models.Country.nodes.first_or_none(name='China')
    # 多项查询，返回一个对象列表
    ch = models.Country.nodes.filter(name='China')
    # 全部
    all_nodes = Person.ndoes.all()
    ```

3. 创建关系

    ```python
    # 获取节点
    jim = models.Person.nodes.get_or_none(name='jim')
    # 创建节点
    ch = models.Country(name='China').save()
    # 创建节点关系
    jim.country.connect(ch)
    ```

4. 更新节点

    ```python
    # 获取节点
    jim = models.Person.nodes.get_or_none(name='jim')
    # 更新数据
    jim.age = 4
    # 保存更新
    jim.save()
    ```

5. 删除

    ```python
    am = models.Country.nodes.get_or_none(name='American')
    am.delete()
    ```

6. 官方 [文档🔗](https://neomodel.readthedocs.io/en/latest/getting_started.html#)
