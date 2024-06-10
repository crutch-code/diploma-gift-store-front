  <template>
    <div class="gift-card tenor-sans-regular font16pt">
      <p style="background-color: var(--my-palette-100); padding: 1rem 0 1rem 0.3rem; border-radius: 10px">{{ this.item.name }}</p>
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
      <div class=" buttons">
        <Button
            :handler="hrefHandler"
            text="Открыть товар"
        />
        <Button
            icon="bascket.svg"
            :handler="()=> {alert('Переход в корзину')}"
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
      }
    },
    methods: {
      hrefHandler() {
        if (this.item.href !== undefined) {
          window.open(this.item.href, "_blank");
          return;
        }
        alert('Not Provided Link')
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
    width: max-content;
  }

  span {

  }

  p {
    //word-break: normal;
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
    width: 40%;
    align-items: center;
  }
  </style>