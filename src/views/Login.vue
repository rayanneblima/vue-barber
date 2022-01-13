<template>
  <section id="login">
    <div id="login__logo">
      <img src="@/assets/barber.svg" alt="Logo Image" />
    </div>

    <form id="login__form">
      <Input
        v-model:value="user.email"
        name="email"
        type="email"
        label="E-mail"
        placeholder="Informe seu e-mail"
        @input="onEmailInput"
      >
        <template v-slot:left>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#268596"
            width="20px"
            height="20px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </template>
      </Input>
      <Input
        v-model:value="user.password"
        name="password"
        type="password"
        label="Senha"
        placeholder="••••••••"
        @input="onPasswordInput"
      >
        <template v-slot:left>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#268596"
            width="20px"
            height="20px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
            />
          </svg>
        </template>
      </Input>

      <Button text="Login" />
    </form>

    <p>
      Ainda não possui conta?
      <router-link :to="{ name: 'create-account' }">Cadastre-se</router-link>.
    </p>
  </section>
</template>

<script>
import Input from "../components/elements/Input.vue";
import Button from "../components/elements/Button.vue";

export default {
  name: "Login",

  components: { Input, Button },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    onEmailInput(value) {
      this.user.email = value;
    },

    onPasswordInput(value) {
      this.user.password = value;
    },
  },
};
</script>

<style scoped>
#login {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
}

#login__logo {
  max-width: 300px;
}

#login__logo img {
  display: block;
  max-width: 100%;
}

#login__form {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  max-width: 300px;
}
</style>
