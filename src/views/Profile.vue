<template>
  <section id="profile">
    <header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="24px"
        height="24px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>

      <div>
        <!-- <Carousel /> -->
      </div>
    </header>

    <section id="profile-details">
      <div>
        <div id="profile-card">
          <div id="profile-img">
            <img src="" alt="" />
          </div>

          <div id="profile-description">
            <h4>Nome do Barbeiro</h4>
            <div>Avaliação</div>
          </div>
        </div>

        <div id="favorite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
            />
          </svg>
        </div>
      </div>

      <div id="services">
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
      </div>

      <div id="comments">
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
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
#search-barber {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

header {
  align-items: center;
  display: flex;
  height: 30vh;
}

#profile-details {
  background: var(--white);
  border-top-left-radius: 24px;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  padding: 0 20px;
}

#profile-details > div {
  display: flex;
  justify-content: space-between;
}

#profile-card {
  border-radius: 8px;

  display: flex;
  gap: 20px;
  height: 100px;
  margin-bottom: 10px;
  width: 300px;
}

#profile-img {
  background: var(--gray);
  border-radius: 8px;
  height: 120px;
  position: relative;
  top: -50px;
  width: 120px;
}

#profile-description {
  padding-top: 10px;
}

#favorite {
  background: var(--white);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  top: -25px;
  width: 50px;
}

#services {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

#comments {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
