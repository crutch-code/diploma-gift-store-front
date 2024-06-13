<template>
  <div class="main">
    <div class="content">
      <DropdownComponent :select-handler="ageHandler" placeholder="Укажите возраст" :options="ageOptions"/>
      <DropdownComponent :select-handler="categoryHandler" placeholder="Категория подарка" :options="categoryOptions"/>
      <DropdownComponent :select-handler="restrictionHandler" placeholder="Ограничения" :options="restrictionOptions"/>
      <DropdownComponent :select-handler="genderHandler" placeholder="Укажите пол" :options="genderOptions"/>
    </div>
    <Button
        style="margin-top: 2rem"
        text="Сохранить"
        :handler="saveHandler"
    />
  </div>
</template>

<script>


import DropdownComponent from "@/components/DropdownComponent.vue";
import Button from "@/components/Button.vue";
import {mapGetters} from "vuex";

export default {
  name: "CreateGiftCollection",
  components: {Button, DropdownComponent},
  props: {
    uid: String,
    collectionId: String
  },
  data() {
    return {
      collection:{},
      ageOptions: [
         '10-15',
         '15-25',
         '25-35',
         '35+',
      ],
      categoryOptions: [
        'Музыка',
        'Рыбалка',
        'Спорт',
        'Путешествия',
        'Рукоделие'
      ],
      genderOptions: [
        'Мужской',
        'Женский'
      ],
      restrictionOptions: [
          'Отсутствует',
        'Православие',
        'Ислам',
        'Вегетарианство'
      ],
    }
  },
  computed: {
    ...mapGetters('user', ['authenticated'])
  },
  mounted() {
    this.collection =  this.$store.dispatch('collections/findById', {collectionId: this.collectionId})
  },
  methods: {
    async saveHandler() {
      if (this.collectionId !== undefined) {
        this.collection.id = this.collectionId;
      }
      console.log(this.collection)
      await this.$store.dispatch("collections/addCollection", {uid: this.uid, body: this.collection});
      this.$router.push('/collections');
    },

    ageHandler(val) {
      console.log(this.collection)
      this.collection.age = val
    },
    restrictionHandler(val) {
      console.log(this.collection)
      this.collection.restriction = val
    },
    genderHandler(val) {
      console.log(this.collection)
      this.collection.gender = val
    },
    categoryHandler(val) {
      console.log(this.collection)
      this.collection.category = val
    }
  }
}
</script>

<style scoped>
.main {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 55vw;
}

.content {
  display: flex;
  justify-self: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}

</style>