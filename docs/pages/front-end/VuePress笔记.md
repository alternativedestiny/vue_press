# VuePress 笔记

## 1. 安装配置

1. 环境
   - node v12.14.1
   - npm 6.13.4

2. 安装 VuePress

    ```bash
    # 安装
    npm install -g vuepress  # 可以使用 cnpm
    ```

    > 如果 back-to-top 插件出现问题，尝试本地安装 vuepress，不要用`-g`全局

## 2. 创建项目

1. 项目启动

    ```bash
    npm run dev
    ```

2. 推送到 github
   1. deploy.sh 文件配置

        ```bash
        #!/usr/bin/env sh

        # 确保脚本抛出遇到的错误
        set -e

        # 生成静态文件
        npm run build

        echo "*** buid complete ***"

        # 进入生成的文件夹
        cd docs/.vuepress/dist

        echo "*** start push ***"

        git init
        git add -A
        git commit -m 'deploy'

        # 如果发布到 https://<USERNAME>.github.io，-f 强制推送，选择性使用
        git push -f https://gitee.com/hoppou/hoppou master
        git push -f https://github.com/alternativedestiny/alternativedestiny.github.io master

        echo "*** push complete ***"
        sleep 5s  # 避免窗口立即关闭

        ```

   2. 执行推送

        ```bash
        npm run deploy
        ```

## 3. 自动导航栏和侧边栏

1. 用 js 代码生成导航栏和目录栏列表
2. 文件目录

    ```bash
    vuepress_project/
        |_docs/
            |_.vuepress/
                |_config.js
            |_pages/
                |_Python/
                    |_Python-01-环境_Env.md
    ```

3. 源码：可以直接放在 config.js 文件，也可以单独放到一个 js 文件中然后导入。

    ```js
    const fs = require('fs');

    // 自动获取侧边栏
    function getSideBar(folder) {
        // 只能用绝对路径
        path = 'D:/PersonalProject/vue_press/docs/pages/' + folder + '/';
        let file_list = fs.readdirSync(path);
        for (let i = 0; i < file_list.length; i++) {
            file_list[i] = file_list[i].slice(0, -3);
        }
        return file_list;
    }

    // 自动获取导航栏
    function getNav(folder) {
        path = 'D:/PersonalProject/vue_press/docs/pages/' + folder + '/';
        let file_list = fs.readdirSync(path);
        let nav_text = [];
        for (let i = 0; i < file_list.length; i++) {
            nav_text.push({
                text: file_list[i].slice(0, -3),
                link: '/pages/' + folder + '/' + file_list[i].slice(0, -3)
                });
        }
        return nav_text;
    }
    ```

4. 使用：在 config.js 文件中设置 nav 和 sidebar

    ```js
    module.exports = {
        ......
        themeConfig: {
            ......
            nav: [
                {
                    text: 'Python',
                    items: getNav('Python')
                },
            ],
            sidebar: {
                '/pages/Python/': getSideBar('Python'),
            }
        }
    }

    ```

## 4. 调整显示宽度

1. 修改 docs->styles->palette.styl 文件，增加如下内容

    ```stylus
    // 显示宽度由百分比调整，根据需求修改
    $contentWidth = 80%
    ```

## 5. Gitalk

## 6. 参考

- [VuePress 中文官网🔗](https://vuepress.vuejs.org/zh/)
- [1 小时搞定 vuepress 快速制作 vue 文档/博客+免费部署预览🔗](https://juejin.im/post/5dce1e0e5188254eda3936c5#heading-9)
