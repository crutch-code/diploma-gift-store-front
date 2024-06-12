<template>
  <div class="gift-collections">
    <GiftItemComponent
        v-for="(gift) in gifts"
        :item="gift"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import GiftItemComponent from "@/components/GiftItemComponent.vue";

export default {
  name: "GiftCollections",
  components: {GiftItemComponent},
  computed:{
    ...mapGetters('collections', ['collections']),

    ...mapGetters('gifts', ['gifts'])
    // targetCollectionId() {
    //   this.collections.find((item) => item.id === this.$route.params.uuid);
    // }
  },
  mounted() {
    this.$store.dispatch("gifts/getAllGifts");
  }
}
</script>

<style scoped>
.gift-collections {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  width: 55vw;
}
</style>