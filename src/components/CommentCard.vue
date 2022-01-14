<template>
  <div id="comment-card">
    <div id="comment-description">
      <h4>Nome do Serviço</h4>
      <Rating :grade="4.5" hiddenGradeText />
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione
      amet, quasi odio deleniti maxime illum at aspernatur quisquam quis minima
      fuga voluptatum expedita nihil. A aliquam delectus nemo architecto.
    </p>
  </div>
</template>

<script>
import Rating from "./elements/Rating.vue";

export default {
  name: "CommentCard",

  components: { Rating },
};
</script>

<style scoped>
#comment-card {
  background: var(--dark-aqua);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: var(--white);

  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 80px;
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;
}

#comment-description {
  display: flex;
  justify-content: space-between;
}

#comment-btn {
  background: var(--dark-aqua);
  color: var(--white);
  border-radius: 8px;
  height: 40px;
  width: 100px;
}
</style>
