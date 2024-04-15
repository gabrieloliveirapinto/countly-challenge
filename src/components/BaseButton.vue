<template>
  <button
    class="base-button"
    :class="classes"
  >
    <slot
      v-if="icon || $slots.icon"
      name="icon"
    >
      <BaseIcon
        v-if="icon"
        class="base-button__icon"
        :name="icon"
      />
    </slot>
    <div
      v-if="hasText"
      class="base-button__text"
    >
      <slot>
        {{ text }}
      </slot>
    </div>
  </button>
</template>

<script setup>
import { computed, useSlots } from 'vue';

import BaseIcon from './BaseIcon.vue';

const slots = useSlots();

const props = defineProps({
  icon: {
    default: null,
    type: String
  },

  text: {
    default: '',
    type: String
  }
});

// Computed

const hasText = computed(() => !!props.text || !!slots.default);

// Computed with dependencies

const classes = computed(() => ({
  'base-button--with-text': hasText.value
}));
</script>

<style lang="scss" scoped>
$padding-sm-without-border-width: $layout-unit-sm - 1;
$padding-md-without-border-width: $layout-unit-md - 1;

.base-button {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: $layout-unit-sm;

  border: 1px solid $color-blue1;
  border-radius: 5px;
  padding: $padding-sm-without-border-width;

  background-color: $color-blue3;
  color: $color-blue1;

  font-family: $font-sans-serif;
  font-size: $font-size-md;
  line-height: $font-line-height-md;

  transition: background-color 0.3s ease, padding 0.3s ease;

  // .base-button:hover
  // .base-button:active
  &:hover,
  &:active {
    background-color: $color-blue1;
    color: $color-blue3;
  }

  // .base-button--with-text
  &--with-text {
    padding-left: $padding-md-without-border-width;
    padding-right: $padding-md-without-border-width;
  }
}
</style>