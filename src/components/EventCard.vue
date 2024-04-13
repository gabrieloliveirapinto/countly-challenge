<template>
  <BasePanel class="event-card">
    <h2
      v-if="title"
      class="event-card__title"
    >
      {{ title }}
    </h2>
    <div class="event-card__infos">
      <p class="event-card__name">
        {{ name }}
        <BaseIcon
          class="event-card__icon"
          name="question-mark"
        />
      </p>
      <div class="event-card__values">
        <p class="event-card__value h2">
          {{ valueDisplay }}
        </p>
        <p
          v-if="percentageDisplay"
          class="event-card__percentage"
          :class="percentageDisplayClasses"
        >
          <BaseIcon :name="percentageIconName" />
          {{ percentageDisplay }}
        </p>
      </div>
    </div>
  </BasePanel>
</template>

<script setup>
import { computed } from 'vue';

import BaseIcon from '@/components/BaseIcon';
import BasePanel from '@/components/BasePanel';

const props = defineProps({
  name: {
    default: null,
    type: String
  },
  percentage: {
    default: null,
    type: Object
  },
  title: {
    default: null,
    type: String
  },
  value: {
    default: 0,
    type: Number
  },
  withProgressBar: {
    default: false,
    type: Boolean
  }
});

// Computed 

const percentageDisplay = computed(() => {
  const percentageAsNumber = typeof props.percentage?.value !== 'number' ?
    +props.percentage?.value :
    props.percentage?.value || null;

  if (!isNaN(percentageAsNumber)) return `${percentageAsNumber}%`;

  return null;
});

const percentageDisplayClasses = computed(() => {
  let color = null;

  if (props.percentage?.type === 'increase') color = 'green';
  else if (props.percentage?.type === 'decrease') color = 'red';

  return {
    ...color && { [`event-card__percentage--${color}`]: true }
  };
});

const percentageIconName = computed(() => {
  if (props.percentage?.type === 'increase') return 'arrow-up';
  else if (props.percentage?.type === 'decrease') return 'arrow-down';

  return null;
});

const valueDisplay = computed(() => {
  return props.value.toLocaleString('en-US', { maximumFractionDigits: 2 });
});
</script>

<style lang="scss" scoped>
.event-card {

  // .event-card__icon
  &__icon {
    cursor: pointer;
    color: $color-blue1;
  }

  // .event-card__infos
  &__infos {
    display: flex;
    flex-direction: column;
    gap: $layout-unit-sm;
  }

  // .event-card__name
  &__name {
    display: flex;
    align-items: center;
    gap: $layout-unit-xs;
  }

  // .event-card__percentage
  &__percentage {
    display: flex;
    align-items: center;
    gap: $layout-unit-xs;

    // .event-card__percentage--green
    &--green {
      color: $color-green;
    }

    // .event-card__percentage--red
    &--red {
      color: $color-red;
    }
  }

  // .event-card__values
  &__value {
    color: $color-blue1;
    font-weight: $font-weight-semibold;
  }

  // .event-card__values
  &__values {
    display: flex;
    flex-direction: column;
    gap: $layout-unit-xs;
  }

  @include media-breakpoint-up(md) {

    // .event-card__values
    &__value {
      font-size: $font-size-xl;
    }
  }

  @include media-breakpoint-up(lg) {

    // .event-card__infos
    &__infos {
      gap: $layout-unit-md;
    }
  }
}
</style>