<template>
  <div id="barber-card">
    <div id="barber-img">
      <img src="" alt="" />
    </div>

    <div id="barber-description">
      <h4>Nome do Barbeiro</h4>
      <Rating :grade="4.5" />
      <Button text="Ver Perfil" dense outlined />
    </div>
  </div>
</template>

<script>
import Button from './elements/Button.vue';
import Rating from './elements/Rating.vue';

export default {
  name: "BarberCard",

  components: { Button, Rating },
};
</script>

<style scoped>
#barber-card {
  background: var(--white);
  border-radius: 8px;

  align-items: center;
  display: flex;
  gap: 20px;
  height: 100px;
  margin-bottom: 10px;
  min-width: 280px;
  padding: 10px 20px;
  width: 100%;
}

#barber-img {
  background: var(--gray);
  border-radius: 8px;
  height: 70px;
  width: 70px;
}

#barber-description {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
