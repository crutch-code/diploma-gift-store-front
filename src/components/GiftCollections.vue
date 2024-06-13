<template>
  <div class="gift-collections">
    <GiftItemComponent
        :category="category"
        :key="gift.id"
        :approve-handler="() => approveHandler(gift)"
        :disapprove-handler="() => disapproveHandler(gift)"
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
  props: {
    uid: String
  },
  data(){
    return {
    }
  },
  computed:{
    ...mapGetters('collections', ['collections']),
    ...mapGetters('gifts', ['gifts']),
    category(){
      return this.$route.params.category;
    }
  },
  methods:{
    approveHandler(gift){
      this.$store.dispatch("gifts/approve", { id: gift.id, data: this.collection });
    },
    disapproveHandler(gift){
      this.$store.dispatch("gifts/disapprove", { id: gift.id, data: this.collection });
    }
  },
  async mounted() {
    await this.$store.dispatch("collections/getCollections", this.uid)
        .then(()=>{
          this.$store.dispatch("collections/findById", {id: this.$route.params.uuid})
              .then(r => {
                this.collection = r;
                console.log(this.collection)
              });
        });
    this.$store.dispatch("gifts/getGiftsByCategory", {category: this.category})
    // this.$store.dispatch("gifts/getAllGifts");
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