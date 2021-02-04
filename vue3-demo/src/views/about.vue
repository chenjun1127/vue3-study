<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>count:{{ state.count }}</div>
    <div>double:{{ double }}</div>
    <button @click="add">+</button>
    <button @click="goHome">goHome</button>
  </div>
</template>
<script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  export default {
    setup() {
      const store = useStore()
      const router = useRouter()
      const state = store.state
      const double = computed(() => state.count * 2)
      const goHome = () => {
        router.push('/')
      }
      const add = () => {
        store.commit('add')
      }
      return { state, add, double, goHome }
    }
  }
</script>
<style>
  button {
    margin: 0 10px;
  }
</style>
