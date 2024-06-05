<template>
  <button
          class="tenor-sans-regular"
          :class="{outcome: outcome}"
          @click="{handler!== un }"
  >{{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: [
    'text',
    'icon',
    'alert',
    'invert',
    'outcome',
    'handler'
  ],

  methods: {

  }
}
</script>

<style scoped>
button {
  padding: .5rem;
  border: 1px solid var(--my-palette-100);
  background-color: var(--my-palette-200);
}

button.alert {
  background-color: var(--my-palette-alert);
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
</style>