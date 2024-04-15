<template>
  <div
    class="base-input"
    :class="classes"
  >
    <label
      v-if="label"
      class="base-input__label"
      :for="id"
    >
      {{ label }}
    </label>
    <div class="base-input__element">
      <BaseIcon
        v-if="icon"
        class="base-input__icon"
        :name="icon"
        color="blue"
      />
      <input
        v-model="modelValue"
        class="base-input__input"
        :placeholder="placeholder"
        :type="type"
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import BaseIcon from '@/components/BaseIcon';


const props = defineProps({
  block: {
    default: false,
    type: Boolean
  },

  icon: {
    default: null,
    type: String
  },

  id: {
    type: String,
    required: true
  },

  label: {
    default: null,
    type: String
  },

  placeholder: {
    default: null,
    type: String
  },

  value: {
    type: String,
    default: ''
  },

  type: {
    type: String,
    default: 'text'
  }
});

const emit = defineEmits(['update:value']);

// Computed

const classes = computed(() => ({
  'base-input--block': props.block
}));

const modelValue = computed({
  get: () => props.value,
  set: (value) => emit('update:modelValue', value)
});
</script>

<style lang="scss" scoped>
.base-input {
  display: inline-flex;
  flex-direction: column;
  gap: $layout-unit-xs;

  // .base-input__element
  &__element {
    position: relative;
    width: 100%;

    background: $color-white;
    padding: $layout-unit-sm - 2px;
    padding-left: $layout-unit-sm + $layout-unit-md + $layout-unit-xs;

    border: 1px solid $color-blue1;
    border-radius: 5px;
  }

  // .base-input__icon
  &__icon {
    position: absolute;
    left: $layout-unit-sm;
    top: 50%;
    transform: translateY(-50%);
  }

  // .base-input__input
  &__input {
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
    font-size: $font-size-md;
    line-height: $font-line-height-md;

    // .base-input__input::placeholder
    &::placeholder {
      color: $color-gray;
    }
  }

  // .base-input__label
  &__label {
    font-size: $font-size-sm;
    line-height: $font-line-height-sm;
    color: $color-blue1;
  }

  // .base-input--block
  &--block {
    width: 100%;
  }
}
</style>