<template>
  <div class="hello">
    <div> Un message via une data : {{ myMessage }}</div>
    <div> Un message via une fonction : {{ myFunction() }}</div>
    <div> Un message via une fonction avec paramètre : {{ myFunctionWithParam("Message trop beau") }}</div>
    <button @click="myFunctionModifyData('Un message avec un clic !')">Un bouton qui change le message !</button>
    <div>Une interprétation JS : {{1 > 2}}</div>
    <div>Une interprétation JS : {{1 + 2}}</div>
  </div>
</template>

<script>
export default {
  name: 'Fundamentals',
  data() {
    return {
      myMessage: "Un super beau message"
    }
  },
  methods: {
    myFunction() {
      return "Un super beau message via une fonction";
    },
    myFunctionWithParam(message) {
      return message;
    },
    myFunctionModifyData(message) {
      this.myMessage = message;
    }
  },
  beforeCreate() {
    console.log('Mon composant va se créer');
  },
  created() {
    console.log('Mon composant est créé');
  },
  beforeMount() {
    console.log('Mon composant va se monter');
  },
  mounted() {
    console.log('Mon composé est monté');
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
