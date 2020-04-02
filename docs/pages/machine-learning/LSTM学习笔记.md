# LSTM 学习笔记

## 1. LSTM

### 1.1. 代码详解

```python

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from keras.models import Sequential
from keras.layers import Dense, Activation
from keras.layers import LSTM, Dropout
from sklearn.preprocessing import MinMaxScaler
from keras.callbacks import EarlyStopping
from keras import losses

# 读取数据
file = 'substation_2019/哈密#1主变.csv'
df1 = pd.read_csv(file, decimal=',', header=0, low_memory=False, error_bad_lines=False)
df_all = pd.DataFrame()
df_all['t'] = pd.to_datetime(df1['tm1'])
df_all['v1'] = pd.to_numeric(df1['hv'])
df_all['p'] = pd.to_numeric(df1['hp'])

v1 = df_all['v1'][0:500000]
time = df_all['t'][141120:141180]

# 数据归一化处理：将原始数据映射到0—1范围内
data = v1.values
data = data.astype('float32')
data = np.reshape(data, (-1, 1))
scaler = MinMaxScaler(feature_range=(0, 1))
data = scaler.fit_transform(data)
# 根据数据量分训练集和测试集大小
train_size = 1380
test_size = 60


# 创建数据集，非固定格式
def create_data(start, size, day):  # 起始位置，数据长度，天数
    x, y = [], []  # 出入，输出
    for m in range(start, start + size):  # size条输入
        old_data = []  # 其中一条输入
        for n in range(day):
            old_data.append(data[m + n * 7 * 1440])  # 第n周第m点的数据
        x.append(old_data)
        y.append(data[m + 1440 * 7 * day])  # 第day周第i点数据
    return np.array(x), np.array(y)

# 用过去14周第一天的数据去预测第15周第一天的数据
days = 14  
# x_train：训练集输入，y_train：训练集输出
x_train, y_train = create_data(0, train_size, days)
# x_test：测试集输入，y_test：测试集输出
x_test, y_test = create_data(train_size, test_size, days)

# x_train.shape(训练数据组数，时间间隔，数据维数(特征个数))
x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))
x_test = np.reshape(x_test, (x_test.shape[0], x_test.shape[1], 1))
print(x_train.shape)

# 模型结构
model = Sequential()
# 定义 LSTM 模型，第一个隐藏层含有 100 个神经元
model.add(LSTM(100, input_shape=(x_train.shape[1], x_train.shape[2])))
model.add(Dropout(0.25))  # 暂时从网络中移除神经网络中的单元
model.add(Dense(1))  # 输出维数
model.add(Activation('relu'))  # 激活函数

# 使用均方差损失函数，优化器Adam，评估标准
model.compile(loss=losses.mean_squared_error,  # 损失函数mse
              optimizer='adam',  # 优化器
              metrics=['mae', 'acc'])  # 评估标准

# 模型将会进行 30 个 epochs 的训练，每个 batch 的大小为 100
history = model.fit(x_train, y_train, epochs=30, batch_size=100,
                    validation_data=(x_test, y_test),
                    callbacks=[EarlyStopping(monitor='val_loss', patience=10)],
                    verbose=1, shuffle=False)
model.summary()

# 做出预测
test_predict = model.predict(x_test)
train_predict = model.predict(x_train)
# 预测值求逆
test_predict = scaler.inverse_transform(test_predict)
train_predict = scaler.inverse_transform(train_predict)
# 真实值求逆
y_test = scaler.inverse_transform(y_test)
y_train = scaler.inverse_transform(y_train)

```

## 2. Attention
