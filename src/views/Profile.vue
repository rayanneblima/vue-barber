<template>
  <section id="profile">
    <header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="36px"
        height="36px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>

      <Carousel />
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

      <Services />
      <Comments />
    </section>
  </section>
</template>

<script>
import Services from '../components/Services.vue';
import Comments from '../components/Comments.vue';
import Carousel from '../components/Carousel.vue';

export default {
  name: "Profile",

  components: {
    Services,
    Comments,
    Carousel
  }
};
</script>

<style scoped>
#search-barber {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

header {
  align-items: flex-start;
  display: flex;
  height: 30vh;
}

header svg {
  position: absolute;
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
  height: 70px;
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
</style>
