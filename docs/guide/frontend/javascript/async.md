# Asynchronous JavaScript


## Fetch

```js
fetch("http://geek.itheima.net/v1_0/channels")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.error(`Could not get data: ${error}`)
    })
```