# NodeJS 笔记

## 1. npm 指令

### 1.1. 换源

1. 查看源

    ```bash
    npm config get registry
    ```

2. 临时换源

    ```bash
    npm --registry https://registry.npm.taobao.org install express
    ```

3. 永久换源

    ```bash
    npm config set registry https://registry.npm.taobao.org
    ```

4. 安装 cnpm

    ```bash
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

### 1.2. 包 (package) 管理

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

3. 参数

    | 参数 | 全名            | 功能                                      |
    | ---- | --------------- | ----------------------------------------- |
    | -g   |                 | 全局安装                                  |
    | -S   | --save          | 安装到 node_modules，添加到 dependencies    |
    | -D   | --save-dev      | 安装到 node_modules，添加到 devDependencies |
    | -O   | --dave-optional | 添加到 OptionalDependencies                |

## 2. yarn

### 2.1. 换源

1. 安装

    ```bash
    cnpm i -g yarn
    ```

2. 查看源

    ```bash
    yarn config get registry
    ```

3. 临时

    ```bash
    yarn save <package> --registry https://registry.npm.taobao.org/
    ```

4. 永久

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
