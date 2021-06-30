# 12. Word2Vec

## 1. 简介

## 2. 应用

### 2.1. 安装

1. 安装`gensim`

    ```bash
    pip install gensim
    ```

2. 中文训练需要用的分词，可以用`jieba`

    ```bash
    pip install jieba
    ```

### 2.2. 训练

1. 主要模型参数

    | 参数        | 默认值 | 功能                        |
    | ----------- | ------ | --------------------------- |
    | sentences   |        | 语料（必要参数）              |
    | vector_size | 100    | 词向量维度                  |
    | window      | 5      | 词向量上下文的最大距离      |
    | sg          | 0      | 选择模型：0-CBOW,1-ShipGram |

2. 训练示例，<a href="../files/in_the_name_of_people_segment.txt" target="_blank">wenjian</a>

    ```python
    import logging
    import os
    from gensim.models import word2vec

    # 显示训练信息
    logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)
    # 读取训练语料（中文分词结果）
    sentences = word2vec.LineSentence('./in_the_name_of_people_segment.txt')
    # 训练
    model = word2vec.Word2Vec(sentences, vector_size=100, window=3, min_count=5)
    # 保存模型
    model.save('w2v.model')
    ```

### 2.3. 使用模型

1. 找出某个词向量最相近的词集合

    ```python
    # 加载模型
    model2 = word2vec.Word2Vec.load('w2v.model')

    # 相近词个数
    req_count = 5
    for key in model2.wv.similar_by_word('李达康', topn=100):
        if len(key[0]) == 3:
            req_count -= 1
            print(key[0], key[1])
            if req_count == 0:
                break
    ```

2. 看两个词的相近程度

    ```python
    # 加载模型
    model2 = word2vec.Word2Vec.load('w2v.model')
    print(model2.wv.similarity('李达康', '吴慧芬'))
    ```

3. 找出不同类的词

    ```python
    # 加载模型
    model2 = word2vec.Word2Vec.load('w2v.model')
    print(model2.wv.doesnt_match("沙瑞金 高育良 李达康 刘庆祝".split()))
    ```

## 3. 参考

- 刘建平 [用 gensim 学习 word2vec](https://www.cnblogs.com/pinard/p/7278324.html)
