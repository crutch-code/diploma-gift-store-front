<template>
  <div class="main">
    <li
        v-for="(it, idx) in this.collections"
        :key="idx"
        style="list-style: none; padding: 0; margin: 0;"
    >
      <CollectionItemComponent :item="it"/>
    </li>
    <Button
        style="margin-top: 2rem; justify-self: center"
        icon="plus.svg"
        :handler="()=> {this.$router.push('/collections/add')}"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import CollectionItemComponent from "@/components/CollectionItemComponent.vue";
import Button from "@/components/Button.vue";

export default {
  name: "CollectionsComponent",
  props: {
    uid: String
  },
  components: {
    Button,
    CollectionItemComponent
  },
  computed: {
    ...mapGetters('collections', ['collections'])
  },
  mounted() {
    this.$store.dispatch("collections/getCollections", this.uid);
  }
}
</script>

<style scoped>

.main {
  width: 55vw;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>