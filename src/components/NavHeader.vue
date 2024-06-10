<template>
  <div class="main">
    <div class="nav-container">
      <div class="nav-logo tenor-sans-regular font16pt">
        <img src="@/assets/gift-nav.svg" alt="Gift nav logo" />
        <p>Подарочки всем!</p>
      </div>
      <div class="nav-container buttons">
        <NavButton
            v-for="(it, idx) in buttons"
            :key="idx"
            :text="it.text"
            :handler="it.handler"
            :selected="idx === activeIndex"
        />
      </div>
      <div class="nav-account tenor-sans-regular font16pt">
          <p>{{this.authenticated.username}}</p>
          <div style="height: 100%; border-left: 1px solid var(--my-palette-100)"></div>
          <Button
            icon="exit.svg"
            outcome="true"
            :handler="logoutHandler"
          />
        <Button
            icon="bascket.svg"
            outcome="true"
            :handler="logoutHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton.vue";
import {mapGetters} from "vuex";
import Button from "@/components/Button.vue";

export default {
  name: "NavHeader",
  components:{
    Button,
    NavButton
  },
  props: {
    pos: Number,
    user: Object
  },
  data(){
    return {
        buttons: [
          {
            text: 'Главная страница',
            handler: ()=> {
                this.$router.push('/')
                this.activeIndex = 0
            }
          },
          {
            text: 'Мои подборки',
            handler: ()=> {
              this.$router.push('/collections')
              this.activeIndex = 1
            }
          },
          // {
          //   text: 'Создать профиль',
          //   handler: ()=> {
          //     this.$router.push('/create-gifts')
          //     this.activeIndex = 2
          //   }
          // }
        ],
        activeIndex: undefined
    }
  },

  computed: {
    ...mapGetters('user', ['authenticated'])
  },

  mounted() {
    this.activeIndex = this.pos === undefined ? 0: this.pos;
  },
  methods:{
    logoutHandler() { this.$store.dispatch('user/logout', ()=> {this.$router.push('/auth')})}
  }
}
</script>

<style scoped>
  .main{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .nav-container {
    width: 55vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--my-palette-100);
  }
  .nav-container.buttons{
    justify-content: center;
    border: 0;
  }
  p{
    vertical-align: center;

    width: max-content;
  }
  .nav-logo{
    color: var(--my-palette-400);
    width: 30%;
    display: flex;
    justify-content: space-around;
  }

  .nav-account{
    height: min-content;
    color: var(--my-palette-400);
    width: 25%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-content: center;
  }
</style>