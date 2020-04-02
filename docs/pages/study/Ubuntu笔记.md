# Ubuntu笔记

## 新机配置

1. 调整分辨率
2. 设置vim，修改`/etc/vim/vimrc.tiny`文件

    ```vim
    // 原本
    set compatible
    // 改为
    set nocompatible
    set backspace=2
    ```

3. 更换国内源，修改`/etc/apt/sources.list`文件
   1. 备份原有源
   2. 使用[清华源](https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/)
   3. sudo apt-get update
   4. sudo apt-get upgrade
