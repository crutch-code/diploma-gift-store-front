<template>
  <div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: 'App',
  data(){

  },
  components: {

  },

  mounted() {
    this.$router.push({path:'/'})
    console.log(this.authenticated);
    console.log('Component mounted.');
  }
}
</script>

<style>
@import url('/src/assets/colors.css');

body{
  background-color: var(--my-palette-200);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
