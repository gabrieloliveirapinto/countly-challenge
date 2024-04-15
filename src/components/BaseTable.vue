<template>
  <BasePanel
    class="base-table"
    padding-size="small"
  >
    <div
      v-if="isEmpty"
      class="base-table__empty-disclaimer"
    >
      No data to display
    </div>
    <table
      v-else
      class="base-table__table"
    >
      <thead>
        <tr>
          <td
            v-for="header in headers"
            class="base-table__table-cell base-table__table-cell--header"
            :class="{
              [`base-table__table-cell--align-${header.alignText}`]: !!header.alignText
            }"
            :key="header.key"
          >
            {{ header.label }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in data"
          :key="row.id"
          class="base-table__table-body-row"
        >
          <td
            v-for="header in headers"
            :key="`${row.id}-${header.key}`"
            class="base-table__table-cell"
            :class="{
              [`base-table__table-cell--align-${header.alignText}`]: !!header.alignText
            }"
          >
            {{ row[header.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </BasePanel>
</template>

<script setup>
import { computed } from 'vue';

import BasePanel from '@/components/BasePanel';


const props = defineProps({
  data: {
    default: null,
    type: Array
  },

  headers: {
    default: null,
    type: Array
  }
});

// Computed

const isEmpty = computed(() => !props?.data || (Array.isArray(props.data) && props.data.length === 0));
</script>

<style lang="scss" scoped>
.base-table {

  // .base-table__empty-disclaimer
  &__empty-disclaimer {
    text-align: center;
  }

  // .base-table__table
  &__table {
    width: 100%;
    border: 1px solid rgba($color-blue1, 0.2);
    border-collapse: collapse;
  }

  // .base-table__table-body-row
  &__table-body-row {
    border-bottom: 1px solid rgba($color-blue1, 0.2);
  }

  // .base-table__table-cell
  &__table-cell {
    padding: $layout-unit-xs;
    text-align: center;

    font-size: $font-size-md;
    line-height: $font-line-height-md;

    // .base-table__table-cell:not(:last-child)
    &:not(:last-child) {
      border-right: 1px solid rgba($color-blue1, 0.2);
    }

    // .base-table__table-cell--align-left
    &--align-left {
      text-align: left;
    }

    // .base-table__table-cell--header
    &--header {
      font-weight: $font-weight-semibold;
      border-bottom: 1px solid $color-blue1;
    }
  }

  @include media-breakpoint-up(md) {

    // .base-table__table-cell
    &__table-cell {
      padding: $layout-unit-sm;
    }
  }
}
</style>