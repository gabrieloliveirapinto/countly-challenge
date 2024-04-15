<template>
  <BasePanel
    class="event-card"
    :class="classes"
    :no-background="noBackground"
    :no-padding="noPadding"
  >
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
          <BaseIcon
            :name="percentageIconName"
            :size="isProgressBarVisible ? 'small' : null"
          />
          {{ percentageDisplay }}
        </p>
      </div>
    </div>
    <ProgressBar
      v-if="isProgressBarVisible"
      class="event-card__progress-bar"
      :value="progress"
    />
    <BarChart
      v-if="isChartVisible"
      class="event-card__chart"
      :data="chartData"
    />
  </BasePanel>
</template>

<script setup>
import { computed } from 'vue';

import BarChart from '@/components/BarChart';
import BaseIcon from '@/components/BaseIcon';
import BasePanel from '@/components/BasePanel';
import ProgressBar from '@/components/ProgressBar';


const props = defineProps({
  chartData: {
    default: null,
    type: Array
  },

  name: {
    default: null,
    type: String
  },

  noBackground: {
    default: false,
    type: Boolean
  },

  noPadding: {
    default: false,
    type: Boolean
  },

  percentage: {
    default: null,
    type: Object
  },

  progress: {
    default: null,
    type: Number
  },

  title: {
    default: null,
    type: String
  },

  value: {
    default: 0,
    type: Number
  },

  withChart: {
    default: false,
    type: Boolean
  },

  withProgressBar: {
    default: false,
    type: Boolean
  }
});

// Computed 

const isChartVisible = computed(() => props.withChart && Array.isArray(props.chartData));

const isProgressBarVisible = computed(() => props.withProgressBar && typeof props.progress === 'number');

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

// Computed with dependencies

const classes = computed(() => ({
  'event-card--with-chart': isChartVisible.value,
  'event-card--with-progressbar': isProgressBarVisible.value
}));
</script>

<style lang="scss" scoped>
.event-card {

  // .event-card__chart
  &__chart {
    margin-top: $layout-unit-md;
  }

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

  // .event-card__progress-bar
  &__progress-bar {
    margin-top: $layout-unit-md;
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

  // .event-card__title
  &__title {
    font-weight: $font-weight-regular;
  }

  // .event-card--with-chart
  &--with-chart {

    // .event-card--with-chart .event-card__infos
    // .event-card--with-chart .event-card__values
    & .event-card__infos,
    & .event-card__values {
      flex-direction: row;
      align-items: flex-end;
    }

    // .event-card--with-chart .event-card__icon
    & .event-card__icon {
      display: none;
    }

    // .event-card--with-chart .event-card__name
    // .event-card--with-chart .event-card__percentage
    & .event-card__name,
    & .event-card__percentage {
      font-size: $font-size-md;
      line-height: $font-line-height-md;
    }

    // .event-card--with-chart .event-card__value
    & .event-card__value {
      font-size: $font-size-md;
      line-height: $font-line-height-md;
      font-weight: $font-weight-regular;
    }

    // .event-card--with-chart .event-card__values
    & .event-card__values {
      margin-top: $layout-unit-sm;
    }

    @include media-breakpoint-up(lg) {

      // .event-card--with-chart .event-card__percentage
      & .event-card__percentage {
        font-size: $font-size-md;
        line-height: $font-line-height-md;
      }

      // .event-card--with-chart .event-card__value
      & .event-card__value {
        font-size: $font-size-lg;
        line-height: $font-line-height-lg;
      }
    }
  }

  // .event-card--with-progressbar
  &--with-progressbar {

    // .event-card--with-progressbar .event-card__infos
    // .event-card--with-progressbar .event-card__values
    & .event-card__infos,
    & .event-card__values {
      flex-direction: row;
      align-items: flex-end;
    }

    // .event-card--with-progressbar .event-card__icon
    & .event-card__icon {
      display: none;
    }

    // .event-card--with-progressbar .event-card__name
    // .event-card--with-progressbar .event-card__percentage
    & .event-card__name,
    & .event-card__percentage {
      font-size: $font-size-sm;
      line-height: $font-line-height-sm;
    }

    // .event-card--with-progressbar .event-card__value
    & .event-card__value {
      font-size: $font-size-md;
      line-height: $font-line-height-md;
      font-weight: $font-weight-regular;
    }

    @include media-breakpoint-up(lg) {

      // .event-card--with-progressbar .event-card__name
      // .event-card--with-progressbar .event-card__percentage
      & .event-card__name,
      & .event-card__percentage {
        font-size: $font-size-md;
        line-height: $font-line-height-md;
      }

      // .event-card--with-progressbar .event-card__value
      & .event-card__value {
        font-size: $font-size-lg;
        line-height: $font-line-height-lg;
      }
    }
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