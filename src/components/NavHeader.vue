<template>
  <div class="nav-container">
    <Button
        v-for="(it, idx) in buttons"
        :key="idx"
        outcome = "true"
        :text="it.text"
        :handler="it.handler"
        :additional = "activeIndex === idx ? 'nav act' : ''"
    />
  </div>
</template>

<script>
import button from "@/components/Button.vue";

export default {
  name: "NavHeader",
  props:{
    buttons: {
      text: String,
      handler: Function
    },
    activeIndex: Number
  },
  data(){
    return{

    }
  },
  mounted() {
    console.log(this.props.buttons);
  }
}
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .act{
    color: var();
  }
</style>