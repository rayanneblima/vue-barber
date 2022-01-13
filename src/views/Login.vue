<template>
  <section id="login">
    <div id="login__logo">
      <img src="@/assets/barber.svg" alt="Logo Image" />
    </div>

    <form id="login__form">
      <input type="email" placeholder="Digite seu e-mail" />
      <input type="password" placeholder="••••••••" />

      <button>Login</button>
    </form>

    <p>Ainda não possui conta? <a href="#">Cadastre-se</a></p>
  </section>
</template>

<script>
export default {
  name: "Login"
}
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
