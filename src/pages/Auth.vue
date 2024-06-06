<template>
  <div class="main">
    <div class="main-text">
      <img src="@/assets/gift-hand.svg" alt="Gift Hand" style="width: 20vw; height: 20vh;" />
      <p class="tenor-sans-regular font24pt">
        Дарите радость другим!
      </p>
    </div>
    <div class="auth-container">
      <div class="auth-inputs">
        <input class="tenor-sans-regular font16pt" type="text" placeholder="Имя пользователя/E-mail">
        <input class="tenor-sans-regular font16pt" type="password" placeholder="Пароль" />
      </div>
      <div class="">
        <Button
            text="уыва"
            outcome="true"
            :handler="forgotPassword"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Auth",
  components: {Button},
  data(){
    return{

    }
  },
  mounted() {
    console.log("Component Auth mounted.")
  },
  methods:{
    forgotPassword(){
      alert('asdfasdfsadf')
    }
  }
}

</script>

<style scoped>
@import url('/src/assets/fonts.css');
@import url('/src/assets/colors.css');

.tenor-sans-regular.font16pt{
  font-size: 16pt;
  color: var(--my-palette-300);
}
.tenor-sans-regular.font24pt{
  font-size: 24pt;
  color: var(--my-palette-300);
}

input{
  background-color: var(--my-palette-200);
  height: max-content;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom-color: var(--my-palette-500);
  border-bottom: .05rem solid ;
}

input:hover{
  transform: scale(1.05);
  transition-timing-function: cubic-bezier(0.42, 0, 1, 1);
  transition-duration: .1s;
}
input:active,

input:focus{
  outline: none;
}

.auth-inputs{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  gap: 2rem;
  width: 100%;
}

.auth-container {
  //background-color: var(--my-palette-100);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 3rem;
  left: 0;
  right: 0;
  //top: 30vh;
  border: solid 1px;
  border-color: var(--my-palette-500);
  width: 20vw;
  min-height: 20vh;
  height: max-content;
}

.main{
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

.main-text{
  width: auto;
  display: flex;
  flex-direction: column;
  margin: .5rem;
}
</style>