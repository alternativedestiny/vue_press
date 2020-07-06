const fs = require('fs');

function getSideBar(path) {
    // 只能用绝对路径
    path = 'D:/PersonalProject/vue_press/docs/pages/' + path + '/';
    let file_list = fs.readdirSync(path);
    for (let i = 0; i < file_list.length; i++) {
        file_list[i] = file_list[i].slice(0, -3);
    }
    return file_list;
}

// function getNav(path) {
//     path = 'D:/PersonalProject/vue_press/docs/pages/' + path + '/';
//     let file_list = fs.readdirSync(path);
//     let nav_list = [];
//     for (let i = 0; i < file_list.length; i++) {
//         let name = file_list[i].split(/[.]|-/);
//         nav_list[i] = "{ text: 'Python-" + name[name.length - 2] + "', link: '" + path + file_list[i] + "'},";
//     }
//     return nav_list;
// }


module.exports = {
    title: '北方酱Hoppou~', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '北方酱Hoppou~的个人主页', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {
            rel: 'icon',
            href: '/hoppou_nobg.jpg'
        }], //浏览器的标签栏的网页图标
        // 公式相关的两项
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
        }],
        ['link', {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
        }]
    ],
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({
                html: true
            })
            md.use(require('markdown-it-katex'))
        }
    },
    serviceWorker: true,
    plugins: [
        '@vuepress/back-to-top', // 回到顶部按钮
        'vuepress-plugin-cat', // 那只猫
        // 'vuepress-plugin-nprogress', // 顶部进度条
    ],
    themeConfig: {
        logo: '/hoppou_nobg.jpg',
        lastUpdated: 'lastUpdate', // string | boolean
        smoothScroll: false,
        // sidebar: 'auto',
        // 导航栏
        nav: [
            // nav1
            {
                text: '首页',
                link: '/'
            },
            // nav2
            {
                text: 'Python笔记',
                items: [
                    { text: 'Python 环境', link: '/pages/Python/Python-01-环境' },
                    { text: 'Python 数据类型', link: '/pages/Python/Python-02-数据类型' },
                    { text: 'Python 文件', link: '/pages/Python/Python-03-文件处理' },
                    { text: 'Python Numpy', link: '/pages/Python/Python-04-Numpy' },
                    { text: 'Python Pandas', link: '/pages/Python/Python-05-Pandas' },
                    { text: 'Python Matplotlib', link: '/pages/Python/Python-06-Matplotlib' },
                    { text: 'Python SciPy', link: '/pages/Python/Python-07-SciPy' },
                    { text: 'Python PyInstaller', link: '/pages/Python/Python-08-Pyinstaller' },
                    { text: 'Python MySQL', link: '/pages/Python/Python-09-Mysql' },
                    { text: 'Python Neo4j', link: '/pages/Python/Python-10-Neo4j' },
                    { text: 'Python PyCharm', link: '/pages/Python/Python-Pycharm' },
                ]
            },
            {
                text: '机器学习',
                link: '/pages/machine-learning/K-Means聚类算法'
            },
            {
                text: '学习笔记',
                link: '/pages/study/Git学习笔记'
            },
            {
                text: '前端笔记',
                link: '/pages/front-end/Vue学习笔记'
            },
            {
                text: '软件技巧',
                link: '/pages/skill/常用工具软件'
            },
            // nav3
            // {
            //     text: '好物私评',
            //     items: [{
            //         text: '静电容键盘',
            //         link: '/pages/tested/静电容键盘'
            //     }]
            // },
            // nav4
            {
                text: '功能演示',
                link: '/pages/others/test'
            },
            // nav5
            {
                text: '关于',
                link: '/pages/others/aboutme'
            },
            {
                text: 'Github',
                link: 'https://github.com/alternativedestiny/vue_press'
            },
        ],
        sidebar: {
            '/pages/Python/': getSideBar('Python'),
            '/pages/machine-learning/': getSideBar('machine-learning'),
            '/pages/study/': getSideBar('study'),
            '/pages/front-end/': getSideBar('front-end'),
            '/pages/skill/': getSideBar('skill'),
        }
    },
    // theme:'ting'
}
