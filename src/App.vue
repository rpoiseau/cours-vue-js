<template>
  <div id="app">
    <div v-for="(student, index) in students"  :key="index">
      <my-component
              :firstName="student.firstName"
              :last-name="student.lastName"
              @sendAge="receiveAge">
        <template v-slot:footer="user">Mon footer avec mon userName = {{user.userName}}</template>
        <div slot="header">Mon header</div>
      </my-component>
      Age de la personne : {{student.age | ageFilter}}
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
  data() {
    return {
      students: [
        {firstName: 'Romain', lastName: 'Poiseau', age: 0},
        {firstName: 'Michel', lastName: 'Gomez', age: 0},
        {firstName: 'Jean', lastName: 'Marc', age: 0},
      ]
    }
  },
  methods: {
    receiveAge(firstName, age) {
      const studentIndex = this.students.findIndex(student => student.firstName === firstName);
      if (studentIndex !== -1) {
        this.students[studentIndex].age = age;
      }
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
