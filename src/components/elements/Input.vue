<template>
  <div class="input-group">
    <label class="sr-only" :for="name">{{ label }}</label>
    <slot name="left"></slot>
    <input
      :id="name"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
    />
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "Input",

  emit: ['input'],

  inheritAttrs: false,

  props: {
    value: {
      default: "",
      required: false,
      type: String,
    },

    name: {
      default: "",
      required: true,
      type: String,
    },

    type: {
      default: "",
      required: true,
      type: String,
    },

    label: {
      default: "",
      required: true,
      type: String,
    },

    placeholder: {
      default: "",
      required: false,
      type: String,
    },
  },
};
</script>

<style scoped>
.input-group {
  background: var(--light-aqua);
  border: 0;
  border-radius: 16px;

  align-items: center;
  display: inline-flex;
  gap: 5px;
  height: 40px;
  padding: 0 10px;
  transition: all 0.4s ease-in-out;
  width: 100%;
}

.input-group:hover {
  background: var(--aqua);
}

input {
  background: transparent;
  border: 0;
  height: 100%;
  width: 90%;
}

input::placeholder {
  color: var(--dark-aqua);
}

input:focus-visible {
  outline: none;
}

/* Accessibility */
.sr-only {
  border-width: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
