<template>
  <section id="create-account">
    <div id="create-account__logo">
      <img src="@/assets/barber.svg" alt="Logo Image" />
    </div>

    <form id="create-account__form">
      <Input
        v-model:value="user.name"
        name="name"
        type="name"
        label="Nome"
        placeholder="Informe seu nome"
        @input="onNameInput"
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
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
            />
          </svg>
        </template>
      </Input>

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
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </template>
      </Input>

      <Button text="Cadastrar" />
    </form>

    <p>
      Já possui uma conta?
      <router-link :to="{ name: 'login' }">Entrar</router-link>.
    </p>
  </section>
</template>

<script>
import Input from "../components/elements/Input.vue";
import Button from "../components/elements/Button.vue";

export default {
  name: "CreateAccount",

  components: {
    Input,
    Button,
  },

  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    onNameInput(value) {
      this.user.email = value;
    },

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
#create-account {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
}

#create-account__logo {
  max-width: 300px;
}

#create-account__logo img {
  display: block;
  max-width: 100%;
}

#create-account__form {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  max-width: 300px;
}
</style>
