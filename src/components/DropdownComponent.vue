<template>
  <!--  <select @change="handler($event)">-->
  <!--    <option v-for="(option, idx) in options" :key="idx" :value="option">{{option}}</option>-->
  <!--  </select>-->
  <div v-out-click="()=> {this.open = false}" class="dropdown">
    <div
        @click="open = true"
        class="dropdown-header tenor-sans-regular font16pt">
      <p>
        {{ selected === undefined ? placeholder : selected }}
      </p>
      <img src="@/assets/arrow-down.svg" alt="arrow-down" />
    </div>
    <ul class="dropdown" v-if="open">
      <li @click="handler(option); open = false" v-for="(option, idx) in options" :key="idx">{{ option }}</li>
    </ul>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {Button},
  data() {
    return {
      open: false,
      selectedValue: undefined,
    }
  },
  name: "DropdownComponent",
  props: {
    options: Array,
    selectHandler:{
      type: Function,
      default: ()=> {alert('Not Defined Handler')}
    },
    placeholder: {
      type: String,
      default: 'Выбересте значение из списка'
    }
  },
  computed:{
    selected(){
      return this.selectedValue;
    }

  },
  methods: {
    handler(val) {
      this.selectedValue= val
      this.selectHandler(val);
    }
  }
}
</script>

<style scoped>

.dropdown-header {
  border-bottom: 1px solid var(--my-palette-100);
  color: var(--my-palette-500);
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.dropdown-header:hover {
  background-color: var(--my-palette-100);
  color: var(--my-palette-300);
}

.dropdown-header:active {
  background-color: var(--my-palette-200);
}

p{
  margin: 0;
}

ul{
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
}

li:hover {
  background-color: var(--my-palette-100);
}
li:active{
  background-color: var(--my-palette-200);
}

</style>