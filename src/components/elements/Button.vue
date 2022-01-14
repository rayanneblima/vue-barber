<template>
  <button @click.stop="$emit('click')" :class="{ dense, outlined }" :style="style">
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
    },

    style: {
      default: () => ({}),
      required: false,
      type: Object
    },

    dense: {
      default: false,
      required: false,
      type: Boolean
    },

    outlined: {
      default: false,
      required: false,
      type: Boolean
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
  max-width: 260px;
  padding: 0;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  width: 100%;
}

button:hover {
  background: var(--aqua);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

button.dense {
  border-radius: 8px;
  height: 20px;
  max-width: 100px;
  padding: 0 20px;
  text-transform: none;
}

button.outlined {
  background: transparent;
  border: 2px solid var(--dark-aqua);
  color: var(--dark-aqua);
}
</style>
