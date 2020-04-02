# 使用natapp发布个人网站（含出错处理方法）

## 前言

本文章旨在帮助网络建设初学者快速、简便、免费创建自己的网站，并且可以将自己的网站分享给同学、朋友等等，享受学习成果带来的乐趣。

## 环境

- Windows 10
- pycharm2017.3.3 professional edition
- python3.6.4
- django2.0.2

## 方法

1. 首先你需要自己本地建好自己的网站，确保本地能通过浏览器访问自己的网页。
2. 去百度Google一下[natapp](https://natapp.cn/)，在官网上注册一个账号，并且实名制。毕竟是要将自己的网页挂到公网上，没实名的后果可想而知。
3. 到这一步就可以根据官方的[1分钟快速新手图文教程](https://natapp.cn/article/natapp_newbie)来走了，因为官方文档写的还是比较简单明了，我就不再这里赘述了。
4. 根据官方文档配置完config.ini文件后，打开natapp.exe文件，如果和下面这张图一样，那么恭喜你，透传服务已经建立。如果不是，可以参考官方的[除错文档](https://natapp.cn/article/errors)。
5. 启动Django服务，在浏览器上面输入natapp上面提供的网址，访问自己创建的网页。
6. 到上一步如果访问成功，此教程结束，如果出现DisallowedHost的错误，请继续。错误并不是natapp造成的，而是Django，从错误提示可以看出是由于natapp给出的网址未被允许，解决方法其实很简单：打开Django项目，找到settings.py文件里的

    ```python
    ALLOWED_HOSTS = []
    ```

    字段，将网址添加进去，变成下面这样

    ```python
    ALLOWED_HOSTS = [
        '127.0.0.1',
        'vih9ds.natappfree.cc',
    ]
    ```

    重启网络服务，并刷新网页，成功访问。

## 备注

带图教程，[请点这里](https://blog.csdn.net/mildddd/article/details/79570001)
