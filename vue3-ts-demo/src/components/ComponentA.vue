<template>
  <div>
    <p>{{ nameString }}</p>
    <p>{{ child }}</p>
    <button @click="comClick">改变父组件的值，查看控制台</button>
  </div>
</template>
<script>
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    child: String,
    fromChildEvent: Function
  },
  watch: {},
  components: {},
  // emits 写自定义事件，作用：比较清晰知道该组件有那些自定义事件
  emits: {
    // 无需验证写法
    "com-click": null
  }
})
export default class ComponentA extends Vue {
  // initial data
  nameString = `ComponentA`;

  // lifecycle hook
  mounted() {
    this.greet();
  }

  // computed
  get computedMsg() {
    return "computed " + this.nameString;
  }

  // method
  greet() {
    console.log("greeting: " + this.nameString);
  }

  comClick() {
    this.$emit("com-click", "我被改变了...");
  }
}
</script>
