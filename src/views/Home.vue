<template>
  <section id="home">
    <HomeNavigation />

    <router-view></router-view>
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
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
}
</style>
