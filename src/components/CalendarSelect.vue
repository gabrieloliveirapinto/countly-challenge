<template>
  <div
    class="calendar-select"
    :class="classes"
  >
    <label
      v-if="label"
      class="calendar-select__label"
      :for="id"
    >
      {{ label }}
    </label>
    <Calendar
      class="calendar-select__element"
      v-model="dateRanges"
      :date-format="DATE_FORMAT"
      icon-display="input"
      :id="id"
      selection-mode="range"
      show-icon
      :pt="passThroughClasses"
    >
      <template #inputicon="{ clickCallback }">
        <BaseIcon
          class="calendar-select__icon"
          color="blue"
          name="calendar"
          @click="clickCallback"
        />
      </template>
    </Calendar>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import Calendar from 'primevue/calendar';

import BaseIcon from '@/components/BaseIcon';


const props = defineProps({
  block: {
    default: false,
    type: Boolean
  },

  id: {
    default: null,
    type: String
  },

  label: {
    default: null,
    type: String
  },

  modelValue: {
    default: null,
    type: [Array],
  }
});

const emit = defineEmits([
  'update:modelValue'
]);

// Constants

const DATE_FORMAT = 'M dd, yy'

// Computed

const classes = computed(() => ({
  'calendar-select--block': props.block
}));

const dateRanges = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const passThroughClasses = computed(() => ({
  dayLabel: { class: 'calendar-select__table-cell' },
  decadetitle: { class: 'calendar-select__display' },
  header: { class: 'calendar-select__header' },
  input: { class: 'calendar-select__input' },
  month: { class: 'calendar-select__table-cell' },
  monthTitle: { class: 'calendar-select__button' },
  nextButton: { class: 'calendar-select__button' },
  panel: { class: 'calendar-select__panel' },
  previousButton: { class: 'calendar-select__button' },
  table: { class: 'calendar-select__table' },
  tableBody: { class: 'calendar-select__table-body' },
  tableHeaderCell: { class: 'calendar-select__table-header-cell' },
  title: { class: 'calendar-select__title' },
  year: { class: 'calendar-select__table-cell' },
  yearTitle: { class: 'calendar-select__button' }
}));

</script>

<style lang="scss">
.calendar-select {
  display: inline-flex;
  flex-direction: column;
  gap: $layout-unit-xs;
  width: auto;
  min-width: calc(250px + $layout-unit-md);

  // .calendar-select__button
  &__button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: $layout-unit-xs;
    background: transparent;
    color: $color-blue1;
    border: none;
    font-size: $font-size-md;
    line-height: $font-line-height-md;

    outline: none;

    // .calendar-select__button svg
    svg {
      height: $layout-unit-sm;
      width: $layout-unit-sm;
    }
  }

  // .calendar-select__display
  &__display {
    padding: $layout-unit-xs;
    color: $color-blue1;
    font-size: $font-size-md;
    line-height: $font-line-height-md;
  }

  // .calendar-select__element
  &__element {
    position: relative;
    width: 100%;
    background-color: $color-white;

    padding: $layout-unit-sm - 2px;
    padding-left: $layout-unit-sm + $layout-unit-md + $layout-unit-xs;

    border: 1px solid $color-blue1;
    border-radius: 5px;
    min-height: 2 * $layout-unit-sm + $font-size-md;
  }

  // .calendar-select__header
  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $layout-unit-sm;
    padding-bottom: $layout-unit-sm;
    margin-bottom: $layout-unit-sm;

    border-bottom: 1px solid $color-blue1;
  }

  // .calendar-select__icon
  &__icon {
    position: absolute;
    cursor: pointer;

    top: $layout-unit-sm;
    left: $layout-unit-sm;
  }

  // .calendar-select__input
  &__input {
    width: 100%;
    border: none;
    background: none;
    outline: none;

    padding-right: $layout-unit-sm + $layout-unit-md + $layout-unit-xs;

    font-size: $font-size-md;
    line-height: $font-line-height-md;
  }

  // .calendar-select__label
  &__label {
    font-size: $font-size-sm;
    line-height: $font-line-height-sm;
    color: $color-blue1;
  }

  // .calendar-select__panel
  &__panel {
    background-color: $color-white;
    border: 1px solid $color-blue1;
    border-radius: 5px;
    padding: $layout-unit-sm;
  }

  // .calendar-select__table
  &__table {
    width: 100%;
  }

  // .calendar-select__table-body-cell
  &__table-body>tr>td[data-p-today="true"] {
    color: $color-blue1;
    background-color: $color-blue3;
    font-weight: $font-weight-semibold;
  }

  // .calendar-select__table-cell
  &__table-cell {
    cursor: pointer;
    display: block;
    border-bottom: 1px solid transparent;
    text-align: center;
    font-size: $font-size-md;
    padding: $layout-unit-xs;

    // .calendar-select__table-cell:hover
    // .calendar-select__table-cell[aria-selected="true"]
    &:hover,
    &[aria-selected="true"] {
      color: $color-blue1;
      border-bottom: 1px solid $color-blue1;
      background-color: $color-blue3;
      font-weight: $font-weight-semibold;
    }

    // .calendar-select__table-cell[aria-disabled="true"]
    &[aria-disabled="true"] {
      cursor: not-allowed;
      color: $color-gray;
    }
  }

  // .calendar-select__table-header-cell
  &__table-header-cell {
    color: $color-blue1;
    font-size: $font-size-md;
    font-weight: $font-weight-semibold;
  }

  // .calendar-select__title
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $layout-unit-xs;
  }


  // .calendar-select--block
  &--block {
    width: 100%;
  }

  // .calendar-select:after
  &:after {
    pointer-events: none;
    content: '';

    position: absolute;
    top: $layout-unit-sm;
    right: $layout-unit-sm;
    transform: translateY(50%);

    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: $layout-unit-sm solid $color-black;
  }
}
</style>