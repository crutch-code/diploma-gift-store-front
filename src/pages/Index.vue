<script>
import {mapGetters} from "vuex";

export default {
  name: "Index",
  computed:{
    ...mapGetters('user', ['authenticated'])
  },
  mounted() {
    console.log("Component INDEX mounted.");
    if(this.authenticated.jwt === undefined)
      this.$router.push('/auth');
  }
}
</script>

<template>
  <div>
    <p>ТЕСТ ИНД</p>
  </div>
</template>

<style scoped>

</style>