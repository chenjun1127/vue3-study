<template>
  <ul>
    <li v-for="item in paths" :key="item">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </li>
  </ul>
</template>
<script>
  import { reactive } from 'vue'
  export default {
    name: 'home',
    setup() {
      var paths = reactive([
        {
          path: '/',
          title: 'index'
        },
        {
          path: '/main',
          title: 'main'
        },
        {
          path: '/parent-1',
          title: 'parent-1'
        },
        {
          path: '/parent-2',
          title: 'parent-2'
        },
        {
          path: '/about',
          title: 'about'
        }
      ])
      return { paths }
    }
  }
</script>
