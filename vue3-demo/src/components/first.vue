<template>
  <div>我是子组件：{{title}}</div>
</template>
<script>
  export default {
    name: "child",
    inject: ["title"]
  }
</script>