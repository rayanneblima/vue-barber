<template>
  <div id="rating">
    <div id="rating-stars">
      <template v-for="(filledStar, index) in filledStars" :key="index">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF9200" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      </template>

      <template v-if="halfStar">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#FF9200" width="20px" height="20px"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"/></g></g></g></svg>
      </template>

      <template v-else v-for="(emptyStar, index) in emptyStars" :key="index">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF9200" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
      </template>
    </div>
    <h4>{{ grade }}</h4>
  </div>
</template>

<script>
export default {
  name: "Rating",

  props: {
    grade: {
      default: 0,
      required: true,
      type: Number,
    },
  },

  data () {
    return {
      filledStars: 0,
      halfStar: 0,
      emptyStars: 0,
    }
  },

  mounted () {
    this.handleRenderStars();
  },

  methods: {
    handleRenderStars() {
      this.filledStars = parseInt(this.grade);
      this.halfStar = this.grade % 1;
      this.emptyStars = 5 - this.filledStars;
    },
  },
};
</script>

<style scoped>
#rating {
  align-items: center;
  display: flex;
  gap: 10px;
}

#rating h4 {
  color: var(--dark-aqua);
}
</style>
