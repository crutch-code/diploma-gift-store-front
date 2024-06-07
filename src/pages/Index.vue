<template>
  <div>
    <NavHeader
        :buttons="[
            {
              text: 'Home',
              handler: ()=> {console.log(1)}
            },{
              text: 'Next',
              handler: ()=> {console.log(2)}
            }
        ]"
      :active-index=0
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import NavHeader from "@/components/NavHeader.vue";

export default {
  name: "Index",
  components: {NavHeader},
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

<style scoped>

</style>