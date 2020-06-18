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

# 如果发布到 https://<USERNAME>.github.io
# git push -f https://gitee.com/hoppou/hoppou master
# git push -f https://github.com/alternativedestiny/alternativedestiny.github.io master
git push https://gitee.com/hoppou/hoppou master
git push https://github.com/alternativedestiny/alternativedestiny.github.io master

echo "*** push complete ***"
