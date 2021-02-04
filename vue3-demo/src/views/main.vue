<template>
  <div id="app">
    <p>姓名：{{ name }}</p>
    <p>
      <button @click="changeAge(-1)">-</button>
      年龄：{{ age }}
      <button @click="changeAge(1)">+</button>
    </p>
    <p>
      出生年份：
      <button @click="changeYear(-1)">-</button>
      {{ year }}
      <button @click="changeYear(1)">+</button>
    </p>
  </div>
</template>
<script>
  import { computed, reactive, toRefs } from 'vue'
  export default {
    name: 'app',
    data() {
      return {
        name: 'xiaosan'
      }
    },
    setup() {
      const data = reactive({
        // 建立一个响应式对象
        name: '小四',
        age: 18,
        year: computed({
          get: () => {
            return 2020 - data.age
          },
          set: (val) => {
            data.age = 2020 - val
          }
        })
      })

      function changeAge(val) {
        data.age += val //想改变值或获取值 必须.value
      }

      function changeYear(val) {
        data.year = data.year + val
      }
      return {
        //必须返回 模板中才能使用
        ...toRefs(data), //讲响应式的对象变为普通对象 在家。。。结构，在模板中就可以直接使用属性，不用data.name
        changeAge,
        changeYear
      }
    }
  }
</script>
