# 1. 安装

## 1. 配置容器

1. 创建并进入容器ubuntu

    ```bash
    docker run -it --name ubuntu1 ubuntu:18.04 /bin/bash
    ```

2. 常用命令

    | 命令                          | 功能             |
    | ----------------------------- | ---------------- |
    | docker start [container_name] | 运行容器         |
    | docker attach [container_id]  | 进入容器         |
    | docker rm [container_name]    | 删除容器         |
    | docker images                 | 显示已抽取的镜像 |
    | docker ps                     | 显示运行中的镜像 |
    | docker ps -a                  | 显示所有镜像     |

3. 安装wget

    ```bash
    apt-get update
    apt-get install wget
    ```

4. 安装
