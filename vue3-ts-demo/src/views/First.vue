<template>
  <div>
    <div>{{ double }}</div>
    <input v-model="name" />
    {{ name }}
    <button @click="add">Click</button>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class First extends Vue {
  count = 0;
  firstName = "John";
  lastName = "Doe";

  // Declared as computed property getter
  get name() {
    return this.firstName + " " + this.lastName;
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(" ");
    this.firstName = splitted[0];
    this.lastName = splitted[1] || "";
  }
  get double() {
    return this.count * 2;
  }
  add() {
    this.count++;
  }
}
</script>
