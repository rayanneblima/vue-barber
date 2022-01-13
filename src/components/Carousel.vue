<template>
  <section id="carousel">
    <img src="@/assets/barber.svg" alt="" />
    <img src="@/assets/barber.svg" alt="" />
    <img src="@/assets/barber.svg" alt="" />
  </section>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
#carousel {
  height: 100%;
  width: 100%;
}

#carousel img {
  height: 100%;
  width: 100%;
}

#carousel img:nth-child(2),
#carousel img:nth-child(3) {
  display: none;
}
</style>
