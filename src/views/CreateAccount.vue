<template>
  <section id="create-account">
    <div id="create-account__logo">
      <img src="@/assets/barber.svg" alt="Logo Image" />
    </div>

    <form id="create-account__form">
      <input type="text" placeholder="Digite seu nome" />
      <input type="email" placeholder="Digite seu e-mail" />
      <input type="password" placeholder="••••••••" />

      <button>Cadastrar</button>
    </form>

    <p>Já possui uma conta? <a href="#">Entrar</a></p>
  </section>
</template>

<script>
export default {
  name: "CreateAccount"
}
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
