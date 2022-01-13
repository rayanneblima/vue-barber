<template>
  <section id="comments">
    <h3>Comentários</h3>

    <div class="comments-list">
      <div id="comment-card">
        <div id="comment-description">
          <h4>Nome do Serviço</h4>
          <p>R$ 29,90</p>
        </div>

        <div id="comment-btn">
          <div>Agendar</div>
        </div>
      </div>
      <div id="comment-card">
        <div id="comment-description">
          <h4>Nome do Serviço</h4>
          <p>R$ 29,90</p>
        </div>

        <div id="comment-btn">
          <div>Agendar</div>
        </div>
      </div>
      <div id="comment-card">
        <div id="comment-description">
          <h4>Nome do Serviço</h4>
          <p>R$ 29,90</p>
        </div>

        <div id="comment-btn">
          <div>Agendar</div>
        </div>
      </div>
      <div id="comment-card">
        <div id="comment-description">
          <h4>Nome do Serviço</h4>
          <p>R$ 29,90</p>
        </div>

        <div id="comment-btn">
          <div>Agendar</div>
        </div>
      </div>
      <div id="comment-card">
        <div id="comment-description">
          <h4>Nome do Serviço</h4>
          <p>R$ 29,90</p>
        </div>

        <div id="comment-btn">
          <div>Agendar</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Comments",
};
</script>

<style scoped>
#comments {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#comment-card {
  background: var(--dark-aqua);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  align-items: center;
  display: flex;
  gap: 20px;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;
}

#comment-description {
  padding-top: 10px;
}

#comment-btn {
  background: var(--dark-aqua);
  color: var(--white);
  border-radius: 8px;
  height: 40px;
  width: 100px;
}
</style>
