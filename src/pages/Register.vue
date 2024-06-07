<template>
  <div class="main animate__animated animate__backInDown">
    <form class="shadow">
      <h3 class="title tenor-sans-regular font16pt">Начните удивлять!</h3>
      <div style="border-top: 1px solid var(--my-palette-100);"></div>
      <div>
        <input
            class="tenor-sans-regular font16pt"
            type="text"
            placeholder="Ваш чудесный никнейм"
            v-model="this.authenticated.name"
            v-on:input="validName(this.authenticated.name)"
        />
        <p v-if="!valid.name" style="color: var(--my-palette-alert)">
          Никнейм должен содержать буквы латинского алфавита
          <br>
          Никнейм не должен начинаться с цифры
        </p>
      </div>
      <div>
        <input
            class="tenor-sans-regular
            font16pt" type="email"
            placeholder="Ваша почта"
            v-model="this.authenticated.email"
            v-on:input="validEmail(this.authenticated.email)"
        />
        <p v-if="!valid.email" style="color: var(--my-palette-alert)">Не правильный формат электронной почты</p>
      </div>
      <div>
        <input
            class="tenor-sans-regular font16pt"
            type="password"
            placeholder="Пароль"
            v-model="this.authenticated.password"
            v-on:input="validPassword(this.authenticated.password)"
        />
        <p v-if="!valid.password.regex"
           style="color: var(--my-palette-alert)">
          Пароль должен содержать латинские буквы и цифры.
          <br>
          Пароль должен быть длиной от 6 до 20 символов.
        </p>
      </div>
      <div>
        <input
            class="tenor-sans-regular font16pt"
            type="password"
            placeholder="Повторите пароль"
            v-model="valid.password.comparable"
            v-on:input="validCompare(valid.password.comparable)"
        />
        <p v-if="!valid.password.compared"
           style="color: var(--my-palette-alert)">
          Пароли не совпадают
        </p>
      </div>
      <Button
          text="Зарегистрироваться"
          :handler="registerUser"
          invert="true"
      />
    </form>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Button from "@/components/Button.vue";

export default {
  name: "Register",
  components: {Button},
  data(){
    return{
      regex:{
        email: '',
        password:''
      },
      valid:{
        name: true,
        email:true,
        password:{
          regex: true,
          comparable: undefined,
          compared: true
        }
      }
    }
  },
  computed:{
    ...mapGetters('user', ['authenticated'])
  },
  mounted() {
    this.authenticated.email !== undefined ? this.validEmail(this.authenticated.email) : ()=>{}
    this.authenticated.name !== undefined ? this.validName(this.authenticated.name) : ()=>{}
    this.authenticated.password !== undefined ? this.validPassword(this.authenticated.email) : ()=>{}
  },
  methods:{
    registerUser(){
      if(!this.valid.name || !this.valid.email || !this.valid.password || !this.valid.password.compared)
        return;
      this.$router.push('/auth');
    },
    validName(name){
      this.valid.name = name !== '' && name.match(/^[a-zA-Z]\w*$/) !== null;
    },
    validPassword(pass){
      this.valid.password.regex = pass !== '' && pass.match(/^(?=.*\d)\w{6,20}$/m) !== null;
    },
    validEmail(email){
      this.valid.email = email !== '' && email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) !== null;
    },
    validCompare(pass){
      this.valid.password.compared = this.authenticated.password === pass;
    },
  }
}
</script>

<style scoped>
@import url('/src/assets/fonts.css');
@import url('/src/assets/colors.css');
@import url('/src/assets/defaults.css');

form{
  border: 1px solid var(--my-palette-100);
  background-color: var(--my-palette-200);
  display: grid;
  grid-template-rows: 1fr 1rem auto;
  gap: 2vh;
  padding: 2vw;
  width: 100%;
}

.main {
  display: flex;
  width: 20vw;
  height: min-content;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  padding: 1vw;
  left: 0;
  right: 0;
  top: 10vh;
}

</style>