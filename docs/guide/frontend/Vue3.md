# Vue3

## Overview

**Hello Vue**
```html
<div id="app">{{ message }}</div>

<script src="https://unpkg.com/vue@next"></script>
<script>
	const app = {
		data() {
			return {
				message: "Hello Vue!",
			}
		}
	}
	Vue.createApp(app).mount("#app")
</script>
```
