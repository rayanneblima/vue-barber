<template>
  <div id="service-card">
    <div id="service-description">
      <h3>Nome do Serviço</h3>
      <p>R$ 29,90</p>
    </div>

    <Button
      text="Agendar"
      :style="{ maxWidth: '100px' }"
    />
  </div>
</template>

<script>
import Button from "./elements/Button.vue";

export default {
  name: "ServiceCard",

  components: { Button },
};
</script>

<style scoped>
#service-card {
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  align-items: center;
  display: flex;
  gap: 20px;
  height: 80px;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
}

#service-description {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
