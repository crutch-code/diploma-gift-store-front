<template>
  <div class="gift-list-item tenor-sans-regular font16pt">
    <div class="text">
      <p>Ограничения:</p>
      <p>Возраст:</p>
      <p>Пол:</p>
      <p>Категория:</p>
      <p>{{ item.restriction }}</p>
      <p>{{ item.age }}</p>
      <p>{{ item.gender }}</p>
      <p>{{ item.category }}</p>
    </div>
    <div class="buttons">
      <Button
        icon="gift.svg"
        :handler="()=>{this.$router.push({name:'gifts', params: {uuid: item.id, category: item.category}})}"
      />
      <Button
          icon="edit.svg"
          :handler="()=>{}"
      />
      <Button
          icon="cross.svg"
          :handler="deleteCollection"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import {mapGetters} from "vuex";
import router from "@/router/router";

export default {
  name: "CollectionItemComponent",
  components: {Button},
  props: {
    item: {
      id: String,
      restriction: String,
      age: String,
      gender: String,
      category: String
    }
  },
  computed:{
    ...mapGetters('user', ['authenticated'])
  },
  methods: {
    async deleteCollection(){
      console.log(this.item.id);
      await this.$store.dispatch("collections/deleteCollection", { uid: this.authenticated.id, collectionId: this.item.id });
    }
  }
}
</script>

<style scoped>
.gift-list-item {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--my-palette-100);
  border-radius: 10px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.text{
  display: grid;
  width: 50%;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.buttons{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
</style>