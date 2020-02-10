<template>
  <div class="hello">
    <div>Prénom : {{firstName}}</div>
    <div>Nom : {{lastName}}</div>
    <input type="number" v-model="age" :style="ageStyle"/>
    <button @click="decreaseAge">-</button>
    <button @click="increaseAge">+</button>
    <button @click="sendAge">Envoyer</button>
    <slot></slot>
  </div>
</template>

<script>

  export default {
  name: 'MyComponent',
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: false,
      default: "Anonyme"
    }
  },
  data() {
    return {
      age: 0,
    }
  },
  methods: {
    increaseAge() {
      this.age++;
    },
    decreaseAge() {
      this.age--;
    },
    sendAge() {
      this.$emit('sendAge', this.firstName, this.age);
    }
  },
  computed: {
    ageStyle() {
      return this.age < 1 ? 'background-color: red;' : 'background-color: green';
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
