<template>
  <div class="progress-bar">
    <p class="progress-bar__display">
      {{ textDisplay }}
    </p>
    <div class="progress-bar__background">
      <div
        class="progress-bar__foreground"
        :style="{ width: `${percentage}%` }"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
  total: {
    default: 100,
    type: Number
  },

  value: {
    default: 0,
    type: Number
  }
});

const percentage = computed(() => {
  if (typeof props.value !== 'number') return 0;

  return (props.value / props.total) * 100;
});

const textDisplay = computed(() => `${percentage.value.toFixed(2)}% of Total`);
</script>

<style lang="scss" scoped>
.progress-bar {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: $layout-unit-xs;

  // .progress-bar__background
  &__background {
    position: relative;
    width: 100%;
    height: $layout-unit-sm;
    background-color: $color-blue3;
    border-radius: 20px;
  }

  // .progress-bar__display
  &__display {
    font-size: $font-size-sm;
    line-height: $font-line-height-sm;
    color: $color-green;
  }

  // .progress-bar__foreground
  &__foreground {
    position: absolute;
    top: 0;
    left: 0;
    height: $layout-unit-sm;
    background-color: $color-blue1;
    border-radius: 20px;
  }

  @include media-breakpoint-up(md) {

    // .progress-bar__display
    &__display {
      font-size: $font-size-sm + $font-size-xs;
      line-height: $font-line-height-md;
    }
  }
}
</style>