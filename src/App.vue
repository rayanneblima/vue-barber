<template>
  <div v-if="isLoading">
    <SplashScreen :isLoading="isLoading" />
  </div>

  <router-view></router-view>
</template>

<script>
import SplashScreen from './views/SplashScreen.vue';

export default {
  name: "App",

  components: {
    SplashScreen
  },

  data () {
    return {
      isLoading: true
    }
  },

  mounted () {
    this.handleChangeLoading();
  },

  methods: {
    handleChangeLoading () {
      setTimeout(() => this.isLoading = false, 10000);
    }
  }
}
</script>

<style>
  @import url('./styles/global.css');
</style>
