# pyside6

## 1.QuickStart

安装pyside6

```cmd
>>> pip install pyside6
```

使用QT Designer

```cmd
>>> pip show pyside6
Location: c:\users\Administrator\...\python\python39\site-packages

若上述代码运行报错
>>> where python
C:\...\Python\Python39\python.exe

python文件夹内搜索
>>> C:\...\Python\Python39\site-packages\PySide6\designer.exe
```

## 2.创建窗口运行程序

Ⅰ. Init

A.面向对象编程

```python
from PySide6.QtWidgets import *

class Window:
    def __init__(self):
        self.win = QMainWindow()

if __name__ == '__main__':
    app = QApplication([])
    w = Window()
    w.win.show()
    app.exec()
```

B.面向函数编程

```python
from PySide6.QtWidgets import *

if __name__ == '__main__':
    app = QApplication([])
    win = QMainWindow()
    win.show()
    app.exec()
```

Ⅱ Example

```python
from PySide6.QtWidgets import *


class Window:
    def __init__(self):
        # 初始化窗口
        self.win = QMainWindow()
        self.win.resize(500, 400)
        self.win.move(700, 210)
        self.win.setWindowTitle("测试窗口")

        # 创建多行文本框
        self.textEdit = QTextEdit(self.win)
        self.textEdit.move(50, 50)
        self.textEdit.resize(200, 300)
        self.textEdit.setPlaceholderText("请输入文本")

        # 创建按钮
        self.button = QPushButton("button", self.win)
        self.button.move(300, 100)
        # 设置按钮监听事件
        self.button.clicked.connect(self.getText)

    def getText(self):
        # 获取文本框的文本信息
        info = self.textEdit.toPlainText()
        print(info)


if __name__ == '__main__':
    app = QApplication([])
    # win = QMainWindow()
    # win.show()
    w = Window()
    w.win.show()
    app.exec()
```

## 3. QT Designer

### 3.1 自动生成python代码

```python
...
from PySide6.QtCore import QFile
from PySide6.QtUiTools import QUiLoader

    ...

if __name__ == "__main__":
    app = QApplication([])
    win = QMainWindow()
    w = Ui_Form()
    w.setupUi(win)
    win.show()
    app.exec_()
```

:::warning
view python code 报错："Unable to lanch C"
-> PySide6文件夹下复制uic.exe到新建的bin文件夹内

C:\...\Python\Python39\site-packages\PySide6\bin\uic.exe
:::

### 3.2 动态加载ui文件（首选）

```python
from PySide6.QtWidgets import *
from PySide6.QtCore import QFile
from PySide6.QtUiTools import QUiLoader


class Window:
    def __init__(self):
        super(Window, self).__init__()

        # 加载ui文件
        qfile = QFile("demo1.ui")
        qfile.open(QFile.ReadOnly)
        qfile.close()

        # 创建ui窗口对象
        self.ui = QUiLoader().load(qfile)
        self.ui.button.clicked.connect(self.btnClick)

    def btnClick(self):
        info = self.ui.textEdit.toPlainText()   # 获取文本信息
        print(info)

if __name__ == '__main__':
    app = QApplication([])
    # app.setWindowIcon(QIcon("logo.png"))    # 添加图标
    w = Window()
    w.ui.show()
    app.exec()
```

## 4. 最后：发布QT程序

```cmd
>>> pip install pyinstaller

>>> pyinstaller *.py --noconsole --hidden-import PySide6.QtXml [--icon="logo.ico"]

并将ui文件移至dist文件夹内
```

## 5. 鼠标操作时元素显示样式

:::tip
需注意按钮点击事件css写法
:::

```qss
QPushButton:pressed {...}       // 点击
QPushButton:hover {color: red;} // 悬浮
QCheckBox:hover:checked {...}   // 悬浮且处于勾选状态时
```

## ps

```
首次发布日期：2021-8-3
最新修改日期：2022-3-5     移除失效图片文件
```