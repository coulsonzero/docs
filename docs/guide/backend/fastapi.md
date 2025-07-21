# FastApi

## Overview

### install

```sh
pip install fastapi
pip install "uvicorn[standard]"
```

### hello
```py
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
```
`https://127.0.0.1:8000/`

`$ fastapi dev main.py`

### run
```py
# hello.py
from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

if __name__ == '__main__':
    uvicorn.run(app="hello:app")
```
`https://127.0.0.1:8000/hello`


### docs
`https://127.0.0.1:8000/docs`


## Params
### 路径参数
```py{5,6}
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}
```
`https://127.0.0.1:8000/items/3`

::: details 扩展
```py
# 查询参数 q 的类型为 str，默认值为 None，因此它是可选的
async def read_items(q: str | None = None):
async def read_items(q: Union[str, None] = None):
# 用 Query(default=None) 替换默认值 None，Query 的第一个参数同样也是用于定义默认值
async def read_items(q: Union[str, None] = Query(default=None, max_length=50)):
```
```py
q: Union[str, None] = Query(default=None)
# 等同于：
q: str = None
```
:::

### 查询参数
```py{6}
from fastapi import FastAPI

app = FastAPI()

@app.get("/items")
async def read_item(skip: int = 0, limit: int = 10):
    return {"skip": skip, "limit": limit}
```
`https://127.0.0.1:5000/items?skip=0&limit=10`

### 表单参数
```py{6}
from fastapi import FastAPI, Form

app = FastAPI()

@app.post("/login")
async def login(username: str = Form(), password: str = Form()):
    # pip install python-multipart
    return {"username": username}
```

### Json 请求体参数
```py
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str                        # 返回值可选
    description: str | None = None   # 返回值有默认值
    price: float
    tax: float | None = None


@app.post("/items")
async def create_item(item: Item):
    return item
```
`http://127.0.0.1:8000/items`
```json
{
    "name": "Foo",
    "description": "An optional description",
    "price": 45.2,
    "tax": 3.5
}
```