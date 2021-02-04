<template>
  <div>parent-2</div>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <second />
  <button @click="changeInfo">改变标题</button>
  <br />
  <input type="text" v-model="age" />
</template>
<script>
  import second from '../components/second.vue'
  import { reactive, provide, toRefs } from 'vue'
  export default {
    components: { second },
    setup() {
      const userInfo = reactive({
        name: 'jack',
        age: 30
      })
      provide('userInfo', userInfo)
      const changeInfo = () => {
        userInfo.name = 'tony'
        userInfo.age = 25
      }
      return {
        ...toRefs(userInfo),
        changeInfo
      }
    }
  }
</script>
