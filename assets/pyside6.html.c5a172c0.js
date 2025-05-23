import{_ as n,e as s}from"./app.afb47d0b.js";const a={},t=s(`<h1 id="pyside6" tabindex="-1"><a class="header-anchor" href="#pyside6" aria-hidden="true">#</a> pyside6</h1><h2 id="_1-quickstart" tabindex="-1"><a class="header-anchor" href="#_1-quickstart" aria-hidden="true">#</a> 1.QuickStart</h2><p>\u5B89\u88C5pyside6</p><div class="language-cmd ext-cmd"><pre class="language-cmd"><code>&gt;&gt;&gt; pip install pyside6
</code></pre></div><p>\u4F7F\u7528QT Designer</p><div class="language-cmd ext-cmd"><pre class="language-cmd"><code>&gt;&gt;&gt; pip show pyside6
Location: c:\\users\\Administrator\\...\\python\\python39\\site-packages

\u82E5\u4E0A\u8FF0\u4EE3\u7801\u8FD0\u884C\u62A5\u9519
&gt;&gt;&gt; where python
C:\\...\\Python\\Python39\\python.exe

python\u6587\u4EF6\u5939\u5185\u641C\u7D22
&gt;&gt;&gt; C:\\...\\Python\\Python39\\site-packages\\PySide6\\designer.exe
</code></pre></div><h2 id="_2-\u521B\u5EFA\u7A97\u53E3\u8FD0\u884C\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u7A97\u53E3\u8FD0\u884C\u7A0B\u5E8F" aria-hidden="true">#</a> 2.\u521B\u5EFA\u7A97\u53E3\u8FD0\u884C\u7A0B\u5E8F</h2><p>\u2160. Init</p><p>A.\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">class</span> <span class="token class-name">Window</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>win <span class="token operator">=</span> QMainWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    w <span class="token operator">=</span> Window<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>win<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>B.\u9762\u5411\u51FD\u6570\u7F16\u7A0B</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    win <span class="token operator">=</span> QMainWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    win<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u2161 Example</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> <span class="token operator">*</span>


<span class="token keyword">class</span> <span class="token class-name">Window</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u521D\u59CB\u5316\u7A97\u53E3</span>
        self<span class="token punctuation">.</span>win <span class="token operator">=</span> QMainWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>win<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>win<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token number">700</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>win<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5\u7A97\u53E3&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># \u521B\u5EFA\u591A\u884C\u6587\u672C\u6846</span>
        self<span class="token punctuation">.</span>textEdit <span class="token operator">=</span> QTextEdit<span class="token punctuation">(</span>self<span class="token punctuation">.</span>win<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>textEdit<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>textEdit<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>textEdit<span class="token punctuation">.</span>setPlaceholderText<span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u6587\u672C&quot;</span><span class="token punctuation">)</span>

        <span class="token comment"># \u521B\u5EFA\u6309\u94AE</span>
        self<span class="token punctuation">.</span>button <span class="token operator">=</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>win<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>button<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
        <span class="token comment"># \u8BBE\u7F6E\u6309\u94AE\u76D1\u542C\u4E8B\u4EF6</span>
        self<span class="token punctuation">.</span>button<span class="token punctuation">.</span>clicked<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>getText<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">getText</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u83B7\u53D6\u6587\u672C\u6846\u7684\u6587\u672C\u4FE1\u606F</span>
        info <span class="token operator">=</span> self<span class="token punctuation">.</span>textEdit<span class="token punctuation">.</span>toPlainText<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># win = QMainWindow()</span>
    <span class="token comment"># win.show()</span>
    w <span class="token operator">=</span> Window<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>win<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-qt-designer" tabindex="-1"><a class="header-anchor" href="#_3-qt-designer" aria-hidden="true">#</a> 3. QT Designer</h2><h3 id="_3-1-\u81EA\u52A8\u751F\u6210python\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-1-\u81EA\u52A8\u751F\u6210python\u4EE3\u7801" aria-hidden="true">#</a> 3.1 \u81EA\u52A8\u751F\u6210python\u4EE3\u7801</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtCore <span class="token keyword">import</span> QFile
<span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtUiTools <span class="token keyword">import</span> QUiLoader

    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    win <span class="token operator">=</span> QMainWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w <span class="token operator">=</span> Ui_Form<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>setupUi<span class="token punctuation">(</span>win<span class="token punctuation">)</span>
    win<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span>exec_<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>view python code \u62A5\u9519\uFF1A&quot;Unable to lanch C&quot; -&gt; PySide6\u6587\u4EF6\u5939\u4E0B\u590D\u5236uic.exe\u5230\u65B0\u5EFA\u7684bin\u6587\u4EF6\u5939\u5185</p><p>C:...\\Python\\Python39\\site-packages\\PySide6\\bin\\uic.exe</p></div><h3 id="_3-2-\u52A8\u6001\u52A0\u8F7Dui\u6587\u4EF6-\u9996\u9009" tabindex="-1"><a class="header-anchor" href="#_3-2-\u52A8\u6001\u52A0\u8F7Dui\u6587\u4EF6-\u9996\u9009" aria-hidden="true">#</a> 3.2 \u52A8\u6001\u52A0\u8F7Dui\u6587\u4EF6\uFF08\u9996\u9009\uFF09</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtCore <span class="token keyword">import</span> QFile
<span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtUiTools <span class="token keyword">import</span> QUiLoader


<span class="token keyword">class</span> <span class="token class-name">Window</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>Window<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># \u52A0\u8F7Dui\u6587\u4EF6</span>
        qfile <span class="token operator">=</span> QFile<span class="token punctuation">(</span><span class="token string">&quot;demo1.ui&quot;</span><span class="token punctuation">)</span>
        qfile<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>QFile<span class="token punctuation">.</span>ReadOnly<span class="token punctuation">)</span>
        qfile<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># \u521B\u5EFAui\u7A97\u53E3\u5BF9\u8C61</span>
        self<span class="token punctuation">.</span>ui <span class="token operator">=</span> QUiLoader<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load<span class="token punctuation">(</span>qfile<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>button<span class="token punctuation">.</span>clicked<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>btnClick<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">btnClick</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        info <span class="token operator">=</span> self<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>textEdit<span class="token punctuation">.</span>toPlainText<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># \u83B7\u53D6\u6587\u672C\u4FE1\u606F</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># app.setWindowIcon(QIcon(&quot;logo.png&quot;))    # \u6DFB\u52A0\u56FE\u6807</span>
    w <span class="token operator">=</span> Window<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u6700\u540E-\u53D1\u5E03qt\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_4-\u6700\u540E-\u53D1\u5E03qt\u7A0B\u5E8F" aria-hidden="true">#</a> 4. \u6700\u540E\uFF1A\u53D1\u5E03QT\u7A0B\u5E8F</h2><div class="language-cmd ext-cmd"><pre class="language-cmd"><code>&gt;&gt;&gt; pip install pyinstaller

&gt;&gt;&gt; pyinstaller *.py --noconsole --hidden-import PySide6.QtXml [--icon=&quot;logo.ico&quot;]

\u5E76\u5C06ui\u6587\u4EF6\u79FB\u81F3dist\u6587\u4EF6\u5939\u5185
</code></pre></div><h2 id="_5-\u9F20\u6807\u64CD\u4F5C\u65F6\u5143\u7D20\u663E\u793A\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-\u9F20\u6807\u64CD\u4F5C\u65F6\u5143\u7D20\u663E\u793A\u6837\u5F0F" aria-hidden="true">#</a> 5. \u9F20\u6807\u64CD\u4F5C\u65F6\u5143\u7D20\u663E\u793A\u6837\u5F0F</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u9700\u6CE8\u610F\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6css\u5199\u6CD5</p></div><div class="language-qss ext-qss"><pre class="language-qss"><code>QPushButton:pressed {...}       // \u70B9\u51FB
QPushButton:hover {color: red;} // \u60AC\u6D6E
QCheckBox:hover:checked {...}   // \u60AC\u6D6E\u4E14\u5904\u4E8E\u52FE\u9009\u72B6\u6001\u65F6
</code></pre></div><h2 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h2><div class="language-text ext-text"><pre class="language-text"><code>\u9996\u6B21\u53D1\u5E03\u65E5\u671F\uFF1A2021-8-3
\u6700\u65B0\u4FEE\u6539\u65E5\u671F\uFF1A2022-3-5     \u79FB\u9664\u5931\u6548\u56FE\u7247\u6587\u4EF6
</code></pre></div>`,27);function p(e,o){return t}var c=n(a,[["render",p],["__file","pyside6.html.vue"]]);export{c as default};
