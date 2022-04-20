# Flask

[flask官网](https://flask.net.cn)

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
