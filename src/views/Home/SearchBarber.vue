<template>
  <section id="search-barber">
    <header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>

      <Input
        v-model:value="search"
        name="search"
        type="text"
        label="Busca"
        placeholder="Digite o nome do barbeiro"
        @input="onEmailInput"
      >
        <template v-slot:right>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </template>
      </Input>
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
import Input from '../../components/elements/Input.vue';

export default {
  name: "SearchBarber",
  components: { BarberCard, Input },
}
</script>

<style scoped>
#search-barber {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

header {
  align-items: center;
  display: flex;
}

#card-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
