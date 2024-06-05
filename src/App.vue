<template>
  <div>
<!--    <p>{{authenticated.user.id}}</p>-->
  </div>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: 'App',
  components: {

  },
  computed:{

  },
  mounted() {
    console.log(this.$store)
    // this.$store.dispatch('auth');
    console.log(this.$store.getters.user.authenticated);
    console.log('Component mounted.');
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
