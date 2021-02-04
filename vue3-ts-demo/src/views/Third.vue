<template>
  <div>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </div>
</template>
<script lang="ts">
import { reactive, computed } from "vue";
interface Count {
  count: number;
  double: object;
}
export default {
  setup() {
    const state = reactive<Count>({
      count: 0,
      double: computed(() => state.count * 2)
    });

    function increment() {
      state.count++;
    }

    return {
      state,
      increment
    };
  }
};
</script>
