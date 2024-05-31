# Vue 组合式

[代码教程指南](https://cn.vuejs.org/tutorial/#step-1)

### ref

```vue
<script setup>
import { ref } from 'vue'

// string
const newTodo = ref('')

// map
let id = 0
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

// getting ref
conse.log(newTodo.value)
// change  ref
function addTodo() {
  newTodo.value = ''
}
</script>
```

### vue-if

```vue
<template>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
</template>
```


### vue-list

```vue
<script setup>
import { ref } from 'vue'

let id = 0
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

</script>

<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
</template>
```


```vue
<script setup>
import { ref, computed } from 'vue'

// todos

const hideCompleted = ref(false)
// change todos by computed
// 点击按钮筛选数据
const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})
</script>
```

```shell
- <li v-for="todo in todos">
+ <li v-for="todo in filteredTodos">
```

### vue-button

```vue
<script setup>
import { ref } from 'vue'

const hideCompleted = ref(false)

</script>

<template>
    <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
</template>
```

### vue-fetch

```vue
<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

// 点击按钮改变id后发送异步请求更改页面数据
watch(todoId, fetchData)
</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>
```

```
computed：筛选数据 (点击按钮筛选数据)
watch：监听并更改请求数据 (点击按钮改变id后发送异步请求更改页面数据)
```



### 子组建

App.vue
```vue
<script setup>
import ChildComp from './ChildComp.vue'
</script>

<template>
  <ChildComp />
</template>
```

ChildComp.vue
```vue
<template>
  <h2>A Child Component!</h2>
</template>
```

### 父组件传递参数到自组件
```vue
import ChildComp from './ChildComp.vue'
const greeting = ref('Hello from parent')

<ChildComp :msg="greeting" />
```

```vue
const props = defineProps({
  msg: String
})

<h2>{{ msg || 'No props passed yet' }}</h2>
```


### 子组件传递参数到父组件

```vue
const childMsg = ref('No child msg yet')

<ChildComp @response="(msg) => childMsg = msg" />
<p>{{ childMsg }}</p>
```

```vue
const emit = defineEmits(['response'])
emit('response', 'hello from child')
```


