# NodeJS 笔记

## 1. npm 指令

### 1.1. 换源

1. 临时换源

    ```bash
    npm --registry https://registry.npm.taobao.org install express
    ```

2. 永久换源

    ```bash
    npm config set registry https://registry.npm.taobao.org
    ```

3. 安装cnpm

    ```bash
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

### 1.2. 包(package)管理

1. 本地管理

    ```bash
    # 安装
    npm install <package>
    # 简化
    npm i <package>

    # 更新
    npm outdated  # 检查新版本
    npm update  # 更新版本

    # 卸载
    npm uninstall <package>
    ```

2. 全局管理

    ```bash
    # 安装
    npm install -g <package>

    # 更新
    npm update -g <package>

    # 卸载
    npm uninstall -g <package>
    ```

## 2. yarn

### 2.1. 换源

1. 临时

    ```bash
    yarn save <package> --registry https://registry.npm.taobao.org/
    ```

2. 永久

    ```bash
    yarn config set registry https://registry.npm.taobao.org/
    ```

### 2.2. 使用方法

1. 初始化

    ```bash
    yarn add [package]
    yarn add [package]@[version]
    yarn add [package]@[tag]
    ```

2. 安装包

    ```bash
    yarn install [package]
    ```

3. 升级包

    ```bash
    yarn upgrade [package]
    yarn upgrade [package]@[version]
    yarn upgrade [package]@[tag]
    ```

4. 删除包

    ```bash
    yarn remove [package]
    ```
