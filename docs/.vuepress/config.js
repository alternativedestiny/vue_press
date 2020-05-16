module.exports = {
    title: '北方酱Hoppou~', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '北方酱Hoppou~的个人主页', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/hoppou_nobg.jpg' }],  //浏览器的标签栏的网页图标
        // 公式相关的两项
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
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
        'vuepress-plugin-cat',  // 那只猫
    ],
    themeConfig: {
        logo: '/hoppou_nobg.jpg',
        lastUpdated: 'lastUpdate', // string | boolean
        smoothScroll: false,
        // sidebar: 'auto',
        // 导航栏
        nav: [
            // nav1
            { text: '首页', link: '/' },
            // nav2
            {
                text: '学习笔记',
                items: [
                    { text: 'Python笔记', link: '/pages/Python/Python-01-环境' },
                    { text: '编程笔记', link: '/pages/study/Git学习笔记' },
                    { text: '机器学习', link: '/pages/machine-learning/K-Means聚类算法' },
                    { text: '前端笔记', link: '/pages/front-end/Vue学习笔记' },
                    { text: '软件技巧', link: '/pages/skill/常用工具软件' }
                ]
            },
            // nav3
            {
                text: '好物私评',
                items: [
                    { text: '静电容键盘', link: '/pages/tested/静电容键盘' }
                ]
            },
            // nav4
            { text: '功能演示', link: '/pages/others/test' },
            // nav5
            { text: '关于', link: '/pages/others/aboutme' },
            { text: 'Github', link: 'https://github.com/alternativedestiny/vue_press' },
        ],
        sidebar: {
            '/pages/Python/': [
                'Python-01-环境',
                'Python-02-数据类型',
                'Python-03-文件处理',
                'Python-04-Numpy',
                'Python-05-Pandas',
                'Python-06-Matplotlib',
                'Python代码块'
            ],
            '/pages/study/': [
                'c++学习笔记',
                'Java学习笔记',
                'MySQL笔记',
                'Git学习笔记',
                '力扣题解',
                '排序算法',
                '使用Pyinstaller把Python程序打包成exe文件',
                '用python实现crc校验',
                'Clion&MinGW的使用方法',
                'libsvm学习笔记',
                'Linux学习笔记',
                'NodeJS笔记',
                'Ubuntu笔记',
                'TCP IP学习笔记'
            ],
            '/pages/machine-learning/': [
                'Keras学习笔记',
                'LSTM学习笔记',
                'K-Means聚类算法',
                '机器学习',
                '聚类算法',
                '谱聚类',
                'DBSCAN密度聚类算法',
                'sklearn中SVM程序',
                '预测评价指标'
            ],
            '/pages/front-end/': [
                'Vue学习笔记',
                'electron打包web应用流程',
                'HTTP学习笔记',
                'JavaScript学习笔记',
                'PHP读取数据库方法',
                'TypeScript学习笔记',
                'Vue-cli笔记',
                'VuePress笔记'
            ],
            '/pages/skill/': [
                '常用工具软件',
                '使用natapp发布个人网站',
                '微软官方硬盘备份软件SyncToy',
                'Pycharm模板与补全',
                'VSCode小技巧',
                'VSCode自定义补全'
            ],
        }
    }
}