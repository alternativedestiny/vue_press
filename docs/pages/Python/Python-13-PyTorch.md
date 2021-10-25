# 13. PyTorch 笔记

## 1. 安装

1. 安装包比较大，建议先配置清华源，参考第一章 [Python 环境](Python-01-环境。html)
2. 进入 Pytorch 官网的 [安装页面](https://pytorch.org/get-started/locally/), 根据需要选择环境和安装版本

    ![图 1](../images/2021-06-26_92.png)  

3. 根据生成的命令再本地执行安装

   > 比如根据上图选择的通过 pip 安装的适用于 python 的 cpu 版本 Pytorch

    ```bash
    pip3 install torch torchvision torchaudio
    ```

4. 检测 GPU 是否可用

    > 要使用 GPU 需要先安装 cuda 及相应版本的 torch

    ```python
    import torch
    print(torch.cuda.is_available())    # True 表示可用
    # 显示显卡数量
    print(torch.cuda.device_count())    # 1
    # 显示当前
    print(torch.cuda.current_device())  # 0
    # 显示显卡名
    print(torch.cuda.get_device_name(0))
    ```

## 基础使用方法

### 数据处理

1. 数据转换

    ```python
    # torch 转 numpy
    torch_data.numpy()
    # numpy 转 torch
    torch_data = torch.FloatTensor(np_data)
    ```

2. 降维

    ```python
    torch.squeeze(input, dim=None, out=None)
    ```

### 模型保存与加载

1. 保存模型

    ```python
    # 只保存模型参数
    torch.save(net.state_dict(), 'model_name')
    ```

2. 加载模型

    ```python
    # 加载模型参数
    static_dict = torch.load(para_path, map_location='cuda:0')
    model.load_state_dict(static_dict)
    ```

    > map_location 不设置的话，模型会加载到保存模型的设备

## 并行计算
