  <template>
    <div class="gift-card tenor-sans-regular font16pt">
      <p style="background-color: var(--my-palette-100); max-height: min-content; padding: 1rem 0 1rem 0.3rem; border-radius: 10px">{{ this.item.name }}</p>
      <img class="image" :src="this.item.picture" alt="source picture">
      <p style="word-break: break-word; border: 1px solid var(--my-palette-100); padding: 0.5rem">
        <span>Описание товара: </span>
        <br>
        <br>
        {{ this.item.description }}
      </p>
      <p style="text-align: end; width: 100%; align-self: center">
        <b>Цена: {{ this.item.price }}</b>
      </p>
      <p v-if="relativity !== undefined">
        Релевантность: {{ relativity.percents }}%
      </p>
      <div class=" buttons">
        <Button
            :handler="hrefHandler"
            text="В магазин"
        />
        <Button
            icon="../../../like.svg"
            :handler="approveHandler"
        /><Button
          icon="../../../dislike.svg"
          :handler="disapproveHandler"
      />
        <Button
            icon="../../../basket.svg"
            :handler="()=>{}"
        />
      </div>
    </div>
  </template>

  <script>
  import Button from "@/components/Button.vue";

  export default {
    name: "GiftItemComponent",
    components: {Button},
    props: {
      item: {
        picture: String,
        id: String,
        href: String,
        name: String,
        description: String,
        price: Number,
        relativity: Array,
      },
      approveHandler: Function,
      disapproveHandler: Function,
      category: String
    },
    methods: {
      hrefHandler() {
        if (this.item.href !== undefined) {
          window.open(this.item.href, "_blank");
          return;
        }
        alert('Not Provided Link')
      }
    },
    computed:{
      relativity(){
        console.log(this.item.relativity);
        return this.item?.relativity?.find(i => i.category === this.category);
        // return undefined;
      }
    }
  }
  </script>

  <style scoped>
  .gift-card {
    padding: 1vw;
    border: 1px solid var(--my-palette-100);
    background-color: white;
    display: grid;
    grid-template-columns: 100%;
    gap: 1rem;
    width: auto;
  }


  p {
    padding: 0;
    margin: 0;
    text-align: left;
  }

  .image {
    border-radius: 10px;
    justify-self: center;
    width: 100%;
    height: auto;
  }

  .buttons {
    display: flex;
    justify-self: center;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    align-items: center;
  }
  </style>