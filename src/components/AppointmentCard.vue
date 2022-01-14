<template>
  <div id="appointment-card">
    <div id="appointment-barber">
      <div id="barber-img">
        <img src="" alt="" />
      </div>
      <h4>Nome do Barbeiro</h4>
    </div>

    <div id="appointment-description">
      <p>Corte masculino</p>
      <p>R$20,90</p>
    </div>

    <div id="appointment-date">
      <p>25/10/2022</p>
      <p>13:00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppointmentCard"
};
</script>

<style scoped>
#appointment-card {
  background: var(--white);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  min-height: 120px;
  min-width: 280px;
  padding: 10px 20px;
  width: 100%;
}

#appointment-barber,
#appointment-description,
#appointment-date {
  align-items: center;
  display: inline-flex;
  gap: 10px;
}

#barber-img {
  background: var(--gray);
  border-radius: 8px;
  height: 50px;
  width: 50px;
}

#appointment-description,
#appointment-date {
  font-weight: bold;
  justify-content: space-between;
}

#appointment-date p {
  background: var(--dark-aqua);
  border-radius: 4px;
  color: var(--white);
  font-weight: normal;

  padding: 10px;
}
</style>
