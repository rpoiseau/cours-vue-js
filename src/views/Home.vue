<template>
  <div class="home">
    <div>This is a Home Page</div>
    <button @click="getBeers">Get Beers</button>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import apiExample from "../api/apiExample";

export default {
  name: 'Home',
  components: {},
  methods: {
    async getBeers() {
      try {
        const response = await apiExample.getBeers();
        console.log('Récupération des bières', response);
      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des bières');
      }
    }
  }
}
</script>
