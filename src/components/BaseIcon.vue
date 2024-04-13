<template>
  <div
    v-if="icon"
    class="base-icon"
    :class="classes"
  >
    <template v-if="icon">
      <component
        :is="icon"
        v-if="color"
        :color="color"
      />
      <component
        :is="icon"
        v-else
      />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import arrowUp from '@/assets/icons/arrow-up.svg';
import arrowDown from '@/assets/icons/arrow-down.svg';
import book from '@/assets/icons/book.svg';
import calendar from '@/assets/icons/calendar.svg';
import clock from '@/assets/icons/clock.svg';
import download from '@/assets/icons/download.svg';
import questionMark from '@/assets/icons/question-mark.svg';
import search from '@/assets/icons/search.svg';
import togglerBlock from '@/assets/icons/toggler-block.svg';


const availableIcons = {
  'arrow-up': arrowUp,
  'arrow-down': arrowDown,
  book,
  calendar,
  clock,
  download,
  'question-mark': questionMark,
  search,
  'toggler-block': togglerBlock
};

const props = defineProps({
  color: {
    default: null,
    type: String
  },

  name: {
    default: null,
    type: String
  },

  size: {
    default: null,
    type: String
  }
});


// Computed

const classes = computed(() => {
  const classesObject = {};

  if (props.size) classesObject[`base-icon--${props.size}`] = true;

  return classesObject;
});
const icon = computed(() => availableIcons[props.name]);

</script>

<style lang="scss">
.base-icon {
  display: inline-flex;
  min-width: $layout-unit-md;
  min-height: $layout-unit-md;
  height: $layout-unit-md;

  //.base-icon svg
  svg {
    height: 100%;
    width: auto;
  }

  // .base-icon--small
  &--small {
    min-width: $layout-unit-sm;
    min-height: $layout-unit-sm;
    height: $layout-unit-sm;
  }
}
</style>