<template>
  <section id="services">
    <h3>Lista de Serviços</h3>

    <div class="services-list">
      <div id="service-card">
        <div id="service-description">
          <h4>Nome do Serviço</h4>
          <p>R$ 29,90</p>
        </div>

        <div id="service-btn">
          <div>Agendar</div>
        </div>
      </div>
      <div id="service-card">
        <div id="service-description">
          <h4>Nome do Serviço</h4>
          <p>R$ 29,90</p>
        </div>

        <div id="service-btn">
          <div>Agendar</div>
        </div>
      </div>
      <div id="service-card">
        <div id="service-description">
          <h4>Nome do Serviço</h4>
          <p>R$ 29,90</p>
        </div>

        <div id="service-btn">
          <div>Agendar</div>
        </div>
      </div>
      <div id="service-card">
        <div id="service-description">
          <h4>Nome do Serviço</h4>
          <p>R$ 29,90</p>
        </div>

        <div id="service-btn">
          <div>Agendar</div>
        </div>
      </div>
      <div id="service-card">
        <div id="service-description">
          <h4>Nome do Serviço</h4>
          <p>R$ 29,90</p>
        </div>

        <div id="service-btn">
          <div>Agendar</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
#services {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
}

.services-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
}

#service-card {
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  align-items: center;
  display: flex;
  gap: 20px;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 300px;
}

#service-description {
  padding-top: 10px;
}

#service-btn {
  background: var(--dark-aqua);
  color: var(--white);
  border-radius: 8px;
  height: 40px;
  width: 100px;
}
</style>
