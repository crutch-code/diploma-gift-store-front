<script>

export default {
  name: "NavButton",
  components: {

  },
  props:{
    handler: Function,
    text: String,
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <button
      class="tenor-sans-regular font16pt nav"
      :class="{selected: selected}"
      @click="handler === undefined || selected ? ()=> {} : handler()"
  >{{ text }}
  </button>
</template>

<style scoped>
@import url('/src/assets/fonts.css');
@import url('/src/assets/colors.css');
@import url('/src/assets/defaults.css');

button.nav {
  border: 0;
  color: var(--my-palette-500);
}

button.nav:hover {
  color: var(--my-palette-100);
}

.nav.selected,
.nav.selected:hover,
.nav.selected:focus,
.nav.selected:active
{
  color: var(--my-palette-100);
}

</style>