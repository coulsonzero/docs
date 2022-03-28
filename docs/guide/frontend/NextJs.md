script# NextJs

### 1. JavaScript DOM

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script type="text/javascript">
        const app = document.getElementById('app')
        const header = document.createElement('h1')
        const headerContent = document.createTextNode('Develop. Preview. Ship. 🚀')
        header.appendChild(headerContent)
        app.appendChild(header)
    </script>
  </body>
</html>

<!--
<div id="app">
    <h1>Develop. Preview. Ship. 🚀</h1>
</div>
-->
```

### 2. JQuery

```html
<html>
  <body>
    <div id="app"></div>

    <script src="https://code.jquery.com/jquery-3.1.1.js"></script>
    <script>
        $('#app').append(
            `<h1>Develop. Preview. Ship. 🚀</h1>`
        )
    </script>
  </body>
</html>
```

### 3 From JavaScript to React

#### 3.1 React JSX


```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <!-- React -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/javascript">
      const app = document.getElementById('app')
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)
    </script>
  </body>
</html>
```

#### 3.2 React Function JSX

```jsx
<script type="text/jsx">
  const app = document.getElementById("app")
  function Header() {
     return (<h1>Develop. Preview. Ship. 🚀</h1>)
   }
   ReactDOM.render(<Header />, app)
</script>
```




#### 3.3 React Components

```jsx
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  )
}

ReactDOM.render(<Header />, app)
```





#### 3.4 React Porps

```jsx
function Header(props) {
  return <h1>{props.title}</h1>
}

function HomePage() {
  return (
    <div>
      <Header title="React 💙" />
      <Header title="Develop. Preview. Ship. 🚀" />
    </div>
  )
}

ReactDOM.render(<Header />, app)
```


7. Rendering lists


```jsx
function Header(props) {
  return <h1>{props.title}</h1>
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )

}
ReactDOM.render(<Header />, app)
```


8. Handling Events

```jsx
function Header(props) {
  return <h1>{props.title}</h1>
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  function handleClick() {
    console.log("increment like count")
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like</button>
    </div>
  )

}
ReactDOM.render(<Header />, app)
```


. State

```jsx
function HomePage() {
  const [likes, setLikes] = React.useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }}
  return (
    // ...
    <button onClick={handleClick}>Like({likes})</button>
  )
}
```

10. From React to Next.js

```jsx
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/jsx">
      const app = document.getElementById("app")

      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }

      function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

        const [likes, setLikes] = React.useState(0)

        function handleClick() {
          setLikes(likes + 1)
        }

        return (
          <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
          </div>
        )
      }

      ReactDOM.render(<HomePage />, app)
    </script>
  </body>
</html>
```



```sh
$ npm install react react-dom next
$ touch package.json
$ rm index.html
```


```json
//package.json
{
    "scripts": {
        "dev": "next dev"
    }
}
```

```jsx
// pages/index.jsx
import React, {useState} from "react";
function Header({title}) {
    return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

    const [likes, setLikes] = useState(0);

    function handleClick() {
     setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}
```

```sh
$ npm run dev
```


11. NextJs

```sh
$ npx next-create-app nextjs-app-learning
http://localhost:3000/api/hello
```