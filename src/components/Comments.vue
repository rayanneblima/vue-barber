<template>
  <section id="comments">
    <header>
      <div class="title">
        <h2>Comentários</h2>

        <!-- <template> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#268596"
            width="36px"
            height="36px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M 16.59 8.59 L 12 13.17 L 7.41 8.59 L 6 10 L 12 16 L 18 10 Z"
              transform="matrix(-1, 0, 0, -1, 24, 24.59)"
            ></path>
          </svg>
        <!-- </template> -->

        <!-- <template> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#268596"
            width="36px"
            height="36px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        <!-- </template> -->
      </div>
    </header>

    <div class="comments-list">
      <CommentCard />
    </div>
  </section>
</template>

<script>
import CommentCard from './CommentCard.vue';

export default {
  name: "Comments",

  components: { CommentCard },
};
</script>

<style scoped>
#comments {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
}

header {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  color: var(--dark-aqua);

  align-items: center;
  display: inline-flex;
  justify-content: space-between;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
