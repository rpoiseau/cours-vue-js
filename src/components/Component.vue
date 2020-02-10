<template>
  <div class="hello">
    <div>Prénom : {{firstName}}</div>
    <div>Nom : {{lastName}}</div>
    <div :style="ageStyle">Age : {{age}} {{age > 1 ? 'ans' : 'an'}}</div>
    <button @click="decreaseAge">-</button>
    <button @click="increaseAge">+</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {

  },
  data() {
    return {
      age: 0,
      firstname: "Romain",
      lastname: "Poiseau"
    }
  },
  methods: {
    increaseAge() {
      this.age++;
    },
    decreaseAge() {
      this.age--;
    }
  },
  computed: {
    ageStyle() {
      return this.age < 1 ? 'background-color: red;' : 'background-color: green';
    }
  },
  watch: {
    age(newValue, oldValue) {
      console.log(`myNumber change new value : ${newValue}, old value : ${oldValue}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
