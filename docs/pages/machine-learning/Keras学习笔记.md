# Keras 学习笔记

## 核心层

1. 全连接层：神经网络中最常用的，实现对神经网络里的神经元激活

   ```python
   # units：全连接层输出的维度，即下一层神经元的个数
   # activation：激活函数，默认使用 Relu
   # use_bias：是否使用 bias 偏置
   Dense(units, activation='relu', use_base=True)
   ```

2. 激活层：对上一层的

   ```python
   # 激活函数，relu、tanh、sigmoid等
   Activation(activation)
   ```

3. Dropout层：对上一层的神经元随机选取一定比例的失活，不更新，但是权重仍然保留，防止过拟合

   ```python
   # rate：失活比例，0-1浮点数
   Droupout(rate)
   ```

4. Flatten层：将一个维度大于或等于3的高维矩阵，“压扁”为一个二维矩阵。即保留第一个维度（如：batch的个数），然后将剩下维度的值相乘作为“压扁”矩阵的第二个维度

   ```python
   Flatten()
   ```

5. Reshape层：将输入的维度重构成特定的shape

   ```python
   # target_shape：目标矩阵的维度，不包含batch样本数
   Reshape(target_shape)
   ```

6. 卷积层：卷积操作分为一维、二维、三维，分别为Conv1D、Conv2D、Conv3D。一维卷积主要应用于以时间序列数据或文本数据，二维卷积通常应用于图像数据。由于这三种的使用和参数都基本相同，所以主要以处理图像数据的Conv2D进行说明

   ```python
   # filters：卷积核的个数
   # kernel_size：卷积核的大小
   # strides：步长，二维中默认为(1,1)，一维中默认为1
   # Padding：补“0”策略，‘valid’指卷积后的大小与原来的大小可以不同，‘same’指卷积后的大小与原来大小一致
   Conv2D(filters, kernel_size, strides=(1,1), padding='valid')
   ```

7. 池化层：与卷积层一样，最大统计量池化和平均统计量池化也有三种，分别为MaxPooling1D、MaxPooling2D、MaxPooling3D和AveragePooling1D、AveragePooling2D、AveragePooling3D，由于使用和参数基本相同，所以主要以MaxPooling2D进行说明

   ```python
   # poll_size：长度为2的整数tuple，表示在横向和纵向的下采样因子，一维则为纵向下采样因子
   MaxPolling(poll_size=(2,2), strides=None, padding='valid')
   ```

8. 循环层：循环神经网络中的RNN、LSTM和GRU都继承本层，所以该父类的参数同样使用于对应的子类SimpleRNN、LSTM和GRU

   ```python
   # retrun_sequences：控制返回类型，‘False’返回输出序列的最后一个输出，‘True’则返回整个序列
   Recurrent(return_sequences=False)
   ```

9. 嵌入层：该层只能用在模型的第一层，是将所有索引标号的稀疏矩阵映射到致密的低维矩阵。如我们对文本数据进行处理时，我们对每个词编号后，我们希望将词编号变成词向量就可以使用嵌入层

   ```python
   # input_dim：大或等于0的整数，字典长度，即输入数据最大下标+1
   # output_dim：大于0的则行数，代表全连接嵌入的维度
   # input_length：当输入序列的长度固定时，该值为其长度。如果要在该层后接Flatten层，然后接Dense层，则必须指定该参数，否则Dense层的输出维度无法自动推断
   Embedding(input_dim, output_dim, input_length)
   ```

## 模型搭建

## 备注

- [Keras入门](http://www.tensorflownews.com/2018/03/15/%e4%bd%bf%e7%94%a8keras%e8%bf%9b%e8%a1%8c%e6%b7%b1%e5%ba%a6%e5%ad%a6%e4%b9%a0%ef%bc%9a%ef%bc%88%e4%b8%80%ef%bc%89keras-%e5%85%a5%e9%97%a8/)
