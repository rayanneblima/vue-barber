<template>
  <section id="booking">
    <div id="booking-modal">
      <header>
        <div class="title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
        </div>
      </header>

      <section id="booking-details">
        <div id="barber-card">
          <div id="barber-img">
            <img src="" alt="" />
          </div>

          <div id="barber-description">
            <h4>Nome do Barbeiro</h4>
          </div>
        </div>

        <div id="barber-card">
          <div id="barber-description">
            <h4>Corte Masculino</h4>
          </div>

          <div id="barber-description">
            <h4>R$29,90</h4>
          </div>
        </div>

        <div id="barber-card">
          <div id="barber-description">
            <input type="date" name="" id="">
          </div>
        </div>

        <div id="barber-card">
          <div id="barber-description">
            <input type="time" name="" id="">
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookingModal"
}
</script>

<style scoped>
#booking {
  background: rgba(127, 127, 127, 0.4);

  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
}

#booking-modal {
  background: var(--light-aqua);

  border-radius: 16px 16px 0 0;
  bottom: 0;
  height: 360px;
  padding: 10px;
  position: fixed;
  width: 100%;
}

#booking-details {
  height: 300px;
  overflow-y: auto;
}

#barber-card {
  background: var(--white);
  border-radius: 8px;

  align-items: center;
  display: flex;
  gap: 20px;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 300px;
}

#barber-img {
  background: var(--gray);
  border-radius: 8px;
  height: 70px;
  width: 70px;
}
</style>
