<template>
  <div class="main">
    <div class="main-text animate__animated animate__backInLeft">
      <img src="@/assets/gift-hand.svg" alt="Gift Hand" style="width: 20vw; height: 20vh;"/>
      <p class="tenor-sans-regular font24pt">
        Дарите радость другим!
      </p>
    </div>
    <div style="height: 40vh; width: 0; border-left: 1px solid var(--my-palette-100)"/>
    <div class="auth-container shadow animate__animated animate__backInRight">
      <div class="auth-inputs">
        <input v-model="this.authenticated.username" class="tenor-sans-regular font16pt" type="text" placeholder="Имя пользователя/E-mail">
        <input v-model="this.authenticated.password" class="tenor-sans-regular font16pt" type="password" placeholder="Пароль"/>
        <p v-if="isFailed" class="tenor-sans-regular font16pt" style="color: var(--my-palette-alert)">Не верный логин или пароль</p>
      </div>
      <div class="auth-main-buttons">
        <div style="width: 100%; display: flex; justify-content: space-evenly">
          <Button
              text="Войти"
              invert="true"
              :handler="auth"
          />
          <Button
            text="Зарегистрироваться"
            :handler="registerRedirect"
          />
        </div>
        <Button
            text="Забыли пароль?"
            outcome="true"
            :handler="forgotPassword"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import {mapGetters} from "vuex";
import 'animate.css'

export default {
  name: "Auth",
  components: {Button},
  data() {
    return {
      isFailed: false
    }
  },
  mounted() {
    console.log("Component Auth mounted.")
  },
  computed: {
    ...mapGetters('user', ['authenticated'])
  },
  methods: {
    forgotPassword() {
      alert('Заглушка')
    },

    async auth() {
      await this.$store.dispatch('user/auth', this.authenticated);

      if(this.authenticated.jwt === undefined) { this.isFailed = true; return;}

      this.$router.push('/');
    },
    registerRedirect(){
      this.$router.push('/register')
    }
  }
}

</script>

<style scoped>
@import url('/src/assets/fonts.css');
@import url('/src/assets/colors.css');
@import url('/src/assets/defaults.css');



.auth-main-buttons{
  padding-top: 3vh;
  display: flex ;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.auth-inputs {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1rem);
  gap: 2rem;
  width: 100%;
}

.auth-container {
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem 1rem;
  left: 0;
  right: 0;
  border: solid 1px;
  border-color: var(--my-palette-500);
  width: 20vw;
  min-height: 20vh;
  height: max-content;
}


.main {
  display: flex;
  width: 50vw;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  left: 0;
  right: 0;
  top: 30vh;
}

.main-text {
  width: auto;
  display: flex;
  flex-direction: column;
  margin: .5rem;
}
</style>