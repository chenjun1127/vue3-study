<template>
<div>
<p>{{ nameString }}</p>
<p>{{ child }}</p>
<button @click="comClick">button</button>
</div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
props: {
child: String
},
watch: {

},
components: {

}
})

export default class ComponentA extends Vue {
// initial data
nameString = `ComponentA`

// lifecycle hook
mounted() {
this.greet()
}

// computed
get computedMsg() {
return 'computed ' + this.nameString
}

// method
greet() {
console.log('greeting: ' + this.nameString)
}

}
</script>
</script>