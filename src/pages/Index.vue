<template>
  <div>
    <NavHeader
        :user="this.authenticated"
    />
    <div class="content">
      <div class="content-area">
        <div v-if="this.$route.path === '/collections'">
          <CollectionsComponent :uid="authenticated.id"/>
        </div>
        <div v-if="this.$route.path === '/collections/add'">
          <CreateGiftCollection :uid="authenticated.id"/>
        </div>
        <div v-if="this.$route.name === 'gifts'">
          <GiftCollections :uid="authenticated.id"/>
        </div>
        <!--      <GiftItemComponent-->
        <!--        v-for="(it, idx) in items"-->
        <!--        :key="idx"-->
        <!--        :item="it"-->
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import NavHeader from "@/components/NavHeader.vue";
import MainContent from "@/components/MainContent.vue";
import GiftItemComponent from "@/components/GiftItemComponent.vue";
import CollectionItemComponent from "@/components/CollectionItemComponent.vue";
import CollectionsComponent from "@/components/CollectionsComponent.vue";
import CreateGiftCollection from "@/components/CreateCollectionComponent.vue";
import GiftCollections from "@/components/GiftCollections.vue";

export default {
  name: "Index",
  components: {
    GiftCollections,
    CreateGiftCollection,
    CollectionsComponent, CollectionItemComponent, GiftItemComponent, MainContent, NavHeader},

  data(){
    return{
      // items:[
      //   {
      //     name: "Test",
      //     picture:"https://ir-2.ozone.ru/s3/multimedia-1-h/wc1000/7027759313.jpg",
      //     href:"https://www.ozon.ru/product/pomazok-dlya-britya-s-barsuchim-volosom-962783879/",
      //     description:"asdfl;asdkhjf;asdolijkhf;lasdkjhf",
      //     price: 432
      //   }
      // ]
      // items:[
      //   {
      //     restriction: 'asdfasdfasdf',
      //     age: 'asdfasdfasdf',
      //     gender: '10-15',
      //     category: 'хуйта',
      //   }
      // ]
    }
  },

  computed:{
    ...mapGetters('user', ['authenticated']),
  },
  mounted() {
    console.log("Component INDEX mounted.");
    console.log(this.$route);
    console.log(this.$router);
    console.log("Component INDEX mounted.");
    if(this.authenticated.jwt === undefined)
      this.$router.push('/auth');
  }
}
</script>

<style scoped>
  .content{
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    gap: 5vw;
    width: 100%;
  }
  .content-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>