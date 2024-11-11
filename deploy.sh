username="coulsonzero"

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
echo 'docs.coulsonzero.top' > CNAME

git init
git add -A
git commit -m 'deploy docs'

# 如果发布到https://<USERNAME>.github.io
# git push -f git@github.com:coulsonzero/docs.git


# 如果发布到https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:coulsonzero/docs.git master:gh-pages
# git push -f git@github.com:${username}/docs.git master:gh-pages
git push -f git@github.com:coulsonzero/docs.git main:gh-pages

cd -

rm -rf docs/.vuepress/dist