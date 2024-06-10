<template>
  <div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    this.$router.push({path:'/'})
    console.log('Component mounted.');
  }
}
</script>

<style>
@import url('/src/assets/colors.css');

body{
  background-color: var(--my-palette-200);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
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
