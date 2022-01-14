<template>
  <section id="barbers-list">
    <header>
      <div class="title">
        <h2>Agendamentos</h2>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
      </div>
    </header>

    <section id="card-list">
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
    </section>
  </section>
</template>

<script>
import AppointmentCard from '../../components/AppointmentCard.vue';

export default {
  name: "AppointmentsList",

  components: { AppointmentCard },
}
</script>

<style scoped>
#barbers-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

header {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
