# Tomcat笔记

## 1. 安装

### 1.1. Ubuntu安装

1. 参考[Ubuntu安装tomcat](https://cloud.tencent.com/developer/article/1162159)
2. 在[官网](https://tomcat.apache.org/download-90.cgi)下载安装包
3. 创建tomcat目录

    ```bash
    cd /opt
    sudo mkdir tomcat
    ```

4. 解压到创建的目录中, 注意根据自己的情况替换路径

    ```bash
    sudo tar -zxvf /path/apache-tomcat-9.0.40.tar.gz -C tomcat/ --strip-components=1
    ```

5. 添加tomcat用户

    ```bash
    # 创建tomcat用户组
    sudo groupadd tomcat
    # 添加tomcat用户并使该用户成为tomcat组的成员
    sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
    # 创建用户密码
    sudo passwd tomcat
    ```

6. 更新权限

    ```bash
    cd opt/tomcat/
    # 授予tomcat组对整个安装目录的所有权
    sudo chgrp -R tomcat /opt/tomcat
    # 为tomcat组提供conf目录及所有内容的读访问权限, 并执行对目录本身的访问
    sudo chmod -R g+r conf
    sudo chmod g+x conf
    # 使tomcat用户成为webapps, work, temp, logs目录的所有者
    sudo chown -R tomcat webapps/ work/ temp/ logs/
    ```

7. 打开服务

    ```bash
    su tomcat   # 切换用户
    cd bin  # 进入

    ./start.sh  # 启动
    ```

8. 添加设置界面后台用户

    ```bash
    cd opt/tomcat/conf
    sudo vi tomcat-users.xml
    ```

    在<tomcat-users>中加入以下字段

    ```xml
    <role rolename="manager-gui"/>
    <user username="admin" password="admin" roles="manager-gui, admin-gui"/>
    ```

## 2. 项目部署
