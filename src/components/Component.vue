<template>
  <div class="hello">
    <input v-model="age" type="number"/>
    <button @click="sendToMyStore">Envoyer</button>
  </div>
</template>

<script>

  export default {
  name: 'MyComponent',
  props: {
  },
  data() {
    return {
      age: 0
    }
  },
  methods: {
    sendToMyStore() {
      this.$store.commit('SET_AGE', this.age);
    }
  },
  computed: {
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
