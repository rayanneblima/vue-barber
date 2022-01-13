<template>
  <section id="fav-barbers">
    <header>
      <div class="title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>

        <h2>Favoritos</h2>
      </div>
    </header>

    <section id="card-list">
      <BarberCard />
      <BarberCard />
      <BarberCard />
      <BarberCard />
      <BarberCard />
      <BarberCard />
      <BarberCard />
    </section>
  </section>
</template>

<script>
import BarberCard from '../../components/BarberCard.vue';

export default {
  name: "FavBarbersList",
  components: { BarberCard },
}
</script>

<style scoped>
#fav-barbers {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

header {
  align-items: center;
  display: flex;
}

.title {
  display: inline-flex;
  justify-content: space-between;
}

.title h2 {
  color: var(--white);
}

#card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
}
</style>
