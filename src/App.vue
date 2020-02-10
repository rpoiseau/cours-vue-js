<template>
  <div id="app">
    <my-component
      :firstName="firstName"
      last-name="Poiseau"
      @sendAge="receiveAge"></my-component>
    <div v-if="ageReceived && age > 18">La personne est majeure</div>
    <div v-else-if="ageReceived && age < 18">La personne est mineure</div>
    <div v-else>Age non reçu</div>
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
      age: 0,
      ageReceived: false
    }
  },
  methods: {
    receiveAge(age) {
      this.ageReceived = true;
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
