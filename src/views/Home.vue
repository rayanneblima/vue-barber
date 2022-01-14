<template>
  <section id="home">
    <div class="home__view">
      <router-view></router-view>
    </div>

    <HomeNavigation />
  </section>
</template>

<script>
import HomeNavigation from '../components/HomeNavigation.vue';

export default {
  name: "Home",
  components: { HomeNavigation },
};
</script>

<style scoped>
#home {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  width: 100%;
}

.home__view {
  max-height: 95vh;
  overflow-y: auto;
  padding: 20px;
  width: 100%;
}
</style>
