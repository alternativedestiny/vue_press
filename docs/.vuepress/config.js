module.exports = {
    title: '北方酱Hoppou~', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '北方酱Hoppou~的个人注意', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/egg.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        logo: '/egg.png',
        lastUpdated: 'lastUpdate', // string | boolean
        plugins: ['@vuepress/back-to-top'],
        smoothScroll: true,
        // 导航栏
        nav: [
            // nav1
            { text: '首页', link: '/' },
            // nav2
            {
                text: '学习笔记',
                ariaLabel: '编程方面的学习笔记',
                items: [
                    { text: '小技巧', link: '/pages/folder1/常用工具软件.md' },
                    { text: '机器学习', link: '/pages/machine-learning/Keras学习笔记.md' },
                    { text: '前端笔记', link: '/pages/front-end/Vue学习笔记.md' }
                ]
            },
            // nav3
            {
                text: '好物私评',
                ariaLabel: '好物私评',
                items: [
                    { text: '静电容键盘', link: '/pages/tested/静电容键盘.md' }
                ]
            },
            // nav4
            { text: '功能演示', link: '' },
            // nav5
            { text: 'Github', link: 'https://github.com/alternativedestiny' },
        ],
        sidebar: {
            '/pages/folder1/': [
                '常用工具软件',
                '排序算法',
                'VSCode小技巧'
            ],
            '/pages/machine-learning/': [
                'Keras学习笔记',
                'LSTM学习笔记',
                'K-Means聚类算法'
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
            ]
        }
    }
}