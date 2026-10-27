set -e
npm run build
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'docs.kopiano.cc'> CNAME

git init
git add -A
git commit -m 'deploy docs'

git push -f git@github.com:coulsonzero/docs.git HEAD:gh-pages

cd -

rm -rf docs/.vuepress/dist