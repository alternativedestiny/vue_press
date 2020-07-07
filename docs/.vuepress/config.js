const fs = require('fs');

function getSideBar(folder) {
    // 只能用绝对路径
    path = 'D:/PersonalProject/vue_press/docs/pages/' + folder + '/';
    let file_list = fs.readdirSync(path);
    for (let i = 0; i < file_list.length; i++) {
        file_list[i] = file_list[i].slice(0, -3);
    }
    return file_list;
}

function getNav(folder) {
    path = 'D:/PersonalProject/vue_press/docs/pages/' + folder + '/';
    let file_list = fs.readdirSync(path);
    let nav_text = [];
    for (let i = 0; i < file_list.length; i++) {
        // let name = file_list[i].split(/[.]|-/);
        nav_text.push({ text: file_list[i].slice(0, -3), link: '/pages/' + folder + '/' + file_list[i].slice(0, -3) });
    }
    return nav_text;
}

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
            // {
            //     text: '首页',
            //     link: '/'
            // },
            // nav2
            {
                text: 'Python',
                items: getNav('Python')
            },
            {
                text: '机器学习',
                items: getNav('machine-learning')
            },
            {
                text: '编程',
                items: getNav('study')
            },
            {
                text: '前端',
                items: getNav('front-end')
            },
            {
                text: '软件',
                items: getNav('skill')
            },

            {
                text: '功能演示',
                link: '/pages/others/test'
            },
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
