<template>
  <div>我是子组件second</div>
  <div>姓名：{{name}}</div>
  <div>年龄：{{age}}</div>
</template>
<script>
  import { toRefs, inject } from "vue"
  export default {
    name: "child",
    setup() {
      const userInfo = inject("userInfo");
      return {
        ...toRefs(userInfo)
      }
    }
  }
</script>