<template>
  <div id="app">
    <my-component
      :firstName="firstName"
      last-name="Poiseau"
      @sendAge="receiveAge"></my-component>
    <div>Age reçu : {{age}}</div>
  </div>
</template>

<script>
import MyComponent from "./components/Component";

export default {
  name: 'App',
  components: {
    MyComponent
  },
  data() {
    return {
      firstName: "Romain",
      age: 0
    }
  },
  methods: {
    receiveAge(age) {
      this.age = age;
    }
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
