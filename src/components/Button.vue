<template>
  <button
      v-if="icon !== undefined"
      class="tenor-sans-regular font16pt icon"
      @click="handler === undefined ? ()=> {} : handler()"
  >
    <img :src="icon" alt="icon"/>
  </button>

  <button
      v-else
      class="tenor-sans-regular font16pt {{additional}}"
      :class="{
        outcome: outcome,
        invert: invert,
        alert: alert
      } "
      @click="handler === undefined ? ()=> {} : handler()"
  >{{text}}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: [
    'text',
    'icon',
    'alert',
    'additional',
    'invert',
    'outcome',
    'handler',
  ],

  data() {
    return {}
  },
  methods: {},
  computed() {

  }
}
</script>

<style scoped>


button.alert {
  background-color: var(--my-palette-alert);
}

button.invert{
  background-color: var(--my-palette-400);
  color: var(--my-palette-100);
  border-color: var(--my-palette-400);
}

button.invert:hover {
  background-color: var(--my-palette-200);
  color: var(--my-palette-300);
}

button.invert:active{
  color: var(--my-palette-100);
}

button.outcome {
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  outline: none;
  color: var(--my-palette-blue);
}

button.outcome:hover {
  color: var(--my-palette-100);
}

button.outcome:active {
  color: var(--my-palette-400);
}

button.icon{
  border: 0;
  height: min-content;
  width: min-content;
}

button.icon:hover{
  background-color: var(--my-palette-100);
}
</style>