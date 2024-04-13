<template>
  <div
    class="base-panel"
    :class="classes"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const AVAILABLE_PADDING_SIZES = ['small', 'default', 'large'];


const props = defineProps({
  paddingSize: {
    default: 'default',
    type: String
  }
});

const classes = computed(() => {
  const classesObject = {};

  if (
    !!props.paddingSize &&
    AVAILABLE_PADDING_SIZES.includes(props.paddingSize) &&
    props.paddingSize !== 'default'
  ) classesObject[`base-panel--${props.paddingSize}-padding`] = true;

  return classesObject;
});
</script>

<style lang="scss" scoped>
.base-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: $layout-unit-md;

  background-color: $color-white;

  border-radius: 5px;

  // .base-panel--large-padding
  &--large-padding {
    padding: $layout-unit-lg;
  }

  // .base-panel--small-padding
  &--small-padding {
    padding: $layout-unit-sm;
  }
}
</style>