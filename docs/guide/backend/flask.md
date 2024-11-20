# Flask

[Flask官网](https://flask.net.cn)

## 快速启动

**1.安装 Flask**

```sh
$ pip install flask
```

**2.创建 Flask 项目**

```sh
$ mkdir flask-app
$ cd flask-app
$ touch app.py
```

::: tip
**app.py**

```py
from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'


if __name__ == "__main__":
    app.run(host='127.0.0.1', debug=False)
```

:::

**3.启动 Flask 项目**

```sh
$ python app.py
```

[http://127.0.0.1:5000](http://127.0.0.1:5000)


### router

```py
# http://localhost:5000/hello
@app.route("/hello")
def hello():
    return "hello flask!"
```

query查询参数
```py
# http://localhost:5000/hello?name=john
@app.route("/hello")
def hello():
    name = request.args.get("name")
    print(name)
    return "hello flask!"
```

form表单参数
```py
@app.route("/hello", methods=["POST"])
def hello():
    # form-data
    age = request.form.get("age")
    print(age)
    return "hello flask!"
```


### blueprint

```py
# app.py
from flask import Flask, request
from api.book import book

app = Flask(__name__)
app.register_blueprint(book, url_prefix="/book")

if __name__ == '__main__':
    app.run()
```

```py
# api/book.py
from flask import Blueprint, jsonify

book = Blueprint('book', __name__)

@book.route('/')
def get_books():
    return "查询所有书籍"
```

完整版
```py
# api/book.py
from flask import Blueprint, jsonify, request

book = Blueprint('book', __name__)

@book.route('/')
def get_books():
    return jsonify({
        "code": 200,
        "data": "",
        "message": "查询成功"
    })

@book.route("/<book_id>")
def get_book(book_id):
    return jsonify({
        "code": 200,
        "data": book_id,
        "message": "查询成功"
    })


@book.route('/', methods=["POST"])
def add_book():
    name = request.form.get("username")
    psw = request.form.get("password")
    print(name, psw)
    return jsonify({
        "code": 200,
        "data": {
            "name": name,
            "psw": psw,
        },
        "message": "添加用户成功"
    })

@book.route('/<book_id>', methods=["PUT"])
def update_book(book_id):
    return jsonify({
        "code": 200,
        "data": book_id,
        "message": "更新用户成功"
    })

@book.route('/<book_id>', methods=["DELETE"])
def delete_book(book_id):
    return jsonify({
        "code": 200,
        "data": book_id,
        "message": "删除用户成功"
    })
```