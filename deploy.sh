cname="shop"

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'docs.coulsonzero.shop'> CNAME

git init
git add -A
git commit -m 'deploy docs'

git push -f git@github.com:coulsonzero/docs.git master:gh-pages

cd -

rm -rf docs/.vuepress/dist