# Docker

## 1. 安装

### Windows 安装

1. 下载安装[Docker](https://www.docker.com/)
2. 更换国内源
   > 在Docker Seting中修改Doker Engine的配置文件, 在"registry-mirrors"配置中添加国内镜像, 比如使用官方中国区`https://registry.docker-cn.com`

    <img src='../images/docker_setting.png'>

### 1. 配置容器

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

4. 容器自启动

    ```bash
    # 先查询容器id
    docker ps -a
    # 将容器id放入自启动, 可以同时放多个容器id
    docker update --restart=always 容器id
    ```
