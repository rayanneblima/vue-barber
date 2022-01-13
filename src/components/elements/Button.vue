<template>
  <button
    @click.stop="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",

  emits: ['click'],

  props: {
    text: {
      default: "",
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
button {
  background: var(--dark-aqua);
  border: none;
  border-radius: 16px;
  color: var(--white);
  cursor: pointer;
  height: 40px;
  padding: 0;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  width: 100%;
}

button:hover {
  background: var(--aqua);
}
</style>
