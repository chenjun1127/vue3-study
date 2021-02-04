<template>
  <div>
    <component-a ref="a" :child="nameString" @com-click="fromChildEvent" />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import ComponentA from "../components/ComponentA.vue";
@Options({
  components: {
    "component-a": ComponentA
  }
})
export default class Second extends Vue {
  nameString = "middle";
  mounted() {
    console.log("mounted");
  }
  comClick() {
    console.log(this); // -> Hello World!
  }

  fromChildEvent(val) {
    console.log(val);
  }
}
</script>
