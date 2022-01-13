<template>
  <div class="loader">
    <img src="@/assets/barber.svg" alt="Splash Screen Image" :class="{ flip: isLoading }" />
  </div>
</template>

<script>
export default {
  name: "SplashScreen",

  props: {
    isLoading: {
      default: false,
      required: false,
      type: Boolean
    }
  }
};
</script>

<style scoped>
.loader {
  background-color: var(--primary-bg);

  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  overflow: hidden;
  right: 0;
  top: 0;
  z-index: 999;
}

.loader img {
  max-width: 250px;
}

.flip {
  animation: flip 5s infinite;
}

@keyframes flip {
  0% {
    transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
  }
}
</style>
