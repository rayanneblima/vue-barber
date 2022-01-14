<template>
  <div v-if="isLoading">
    <SplashScreen :isLoading="isLoading" />
  </div>

  <router-view></router-view>

  <div v-if="!showBooking">
    <BookingModal />
  </div>
</template>

<script>
import SplashScreen from './views/SplashScreen.vue';
import BookingModal from './components/BookingModal.vue';

export default {
  name: "App",

  components: {
    SplashScreen,
    BookingModal
  },

  data () {
    return {
      isLoading: true,
      showBooking: false
    }
  },

  mounted () {
    this.handleChangeLoading();
  },

  methods: {
    handleChangeLoading () {
      setTimeout(() => this.isLoading = false, 3000);
    }
  }
}
</script>
