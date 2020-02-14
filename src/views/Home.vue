<template>
  <div class="home">
    <div>This is a Home Page</div>
    <button @click="football">Football</button>
    <button @click="lord">Lord of rings</button>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import apiExample from "../api/apiExample";
export default {
  name: 'Home',
  components: {
  },
  methods: {
    football() {
      apiExample.football()
      .then((response) => {
        console.log('response success', response);
      })
      .catch((error) => {
        console.error('response error', error);
      })
    },
    lord() {
      apiExample.getLordOfTheRings()
      .then((response) => {
        console.log('response success', response);
      })
      .catch((error) => {
        console.error('response error', error);
      })
    }
  }
}
</script>
