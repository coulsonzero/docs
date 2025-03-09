# Django

[Django官网](https://www.djangoproject.com/)

## 快速启动

**1.安装 Django**

```shell
$ pip install Django
```

**2.创建并启动 Django 项目**

```sh
$ django-admin startproject mysite
$ cd mysite
$ python3 manage.py runserver
```

[http://127.0.0.1:8000/](http://127.0.0.1:8000/)

**3.创建超级管理员账户并登录后台管理系统**

```shell
# 创建超级管理员账户
# python manage.py makemigrations
$ python manage.py migrate
$ python manage.py createsuperuser
Username: admin
Email address:
Password: admin
Password (again): admin
# 重启Django项目
$ python manage.py runserver
```

[http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin)

### 连接mysql数据库
```sh
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django_test',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}
```

## 其他

```shell
# 查看Django版本
$ python -m django --version
# 更新Djnago版本
$ pip install --upgrade django
```

## FAQ

```shell
# 记录对models.py的所有改动，并且将这个改动迁移到migrations这个文件下生成一个文件例如：0001文件
$ python manage.py makemigrations
# 执行migrations里面新改动的迁移文件更新数据库，比如创建数据表，或者增加字段属性
$ python manage.py migrate
```
