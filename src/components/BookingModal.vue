<template>
  <section id="booking">
    <div id="booking-modal">
      <header>
        <div class="title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="36px"
            height="36px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        </div>
      </header>

      <section id="booking-details">
        <div id="booking-barber">
          <div id="barber-img">
            <img src="" alt="" />
          </div>
          <h4>Nome do Barbeiro</h4>
        </div>

        <div id="booking-description">
          <p>Corte masculino</p>
          <p>R$20,90</p>
        </div>

        <div id="booking-description">
          <Input
            v-model:value="date"
            name="date"
            type="date"
            label="Data"
            @input="onPasswordInput"
          />
        </div>

        <div id="booking-description">
          <Input
            v-model:value="time"
            name="time"
            type="time"
            label="Hora"
            @input="onPasswordInput"
          />
        </div>

        <Button text="Finalizar Agendamento" :style="{ maxWidth: '100%' }" />
      </section>
    </div>
  </section>
</template>

<script>
import Input from './elements/Input.vue';
import Button from "./elements/Button.vue";

export default {
  name: "BookingModal",

  components: { Input, Button },

  data () {
    return {
      date: null,
      time: null
    }
  }
};
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
  min-height: 360px;
  padding: 10px 0 10px 10px;
  position: fixed;
  width: 100%;
}

#booking-details {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding: 10px 10px 20px 0;
}

#booking-barber,
#booking-description {
  background: var(--white);
  border-radius: 8px;

  align-items: center;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  min-height: 50px;
  min-width: 300px;
  padding: 10px 20px;
  width: 100%;
}

#barber-img {
  background: var(--gray);
  border-radius: 8px;
  height: 50px;
  width: 50px;
}

#booking-description {
  font-weight: bold;
  justify-content: space-between;
}
</style>
