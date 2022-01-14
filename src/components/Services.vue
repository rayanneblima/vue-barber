<template>
  <section id="services">
    <h2>Lista de Serviços</h2>

    <div class="services-list">
      <ServiceCard />
    </div>
  </section>
</template>

<script>
import ServiceCard from './ServiceCard.vue';

export default {
  name: "Services",

  components: { ServiceCard },
};
</script>

<style scoped>
#services {
  color: var(--dark-aqua);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
}

.services-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
}
</style>
