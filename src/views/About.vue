<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  export default {
    beforeMount() {
      console.log('bnefore');
    },
    mounted() {
      console.log('my params:', this.$route.params);
    }
  }
</script>
