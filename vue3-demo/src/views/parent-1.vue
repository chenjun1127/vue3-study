<template>
  <div>parent-1</div>
  <div>{{ title }}</div>
  <first />
  <button @click="handleClick">改变标题</button>
</template>
<script>
  import first from '../components/first.vue'
  export default {
    components: { first },
    data() {
      return {
        title: '我是父组件标题'
      }
    },
    // 非组合式api中使用
    provide() {
      return {
        title: this.title
      }
    },
    methods: {
      handleClick() {
        this.title = '被改变了！'
      }
    }
  }
</script>
