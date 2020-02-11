<template>
  <div id="app">
    <my-component></my-component>
    <div>
      Mon age via mon store : {{myAge}}
    </div>
  </div>
</template>

<script>
import MyComponent from "./components/Component";

export default {
  name: 'App',
  components: {
    MyComponent
  },
  computed: {
    myAge() {
      return this.$store.state.age;
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
