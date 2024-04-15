<template>
  <BaseSection
    class="monitor-event-section"
    title="Event Metrics"
  >
    <template #actions>
      <BaseButton icon="download" />
      <BaseInput
        :block="isMobile"
        icon="search"
        placeholder="Search"
      />
    </template>
    <BaseTable
      :data="tableData"
      :headers="tableHeaders"
    />
  </BaseSection>
</template>

<script setup>
import { computed } from 'vue';
import { useWindowBreakpoint } from '@/composables/windowBreakpoint';

import BaseInput from '@/components/BaseInput';
import BaseButton from '@/components/BaseButton';
import BaseSection from '@/components/BaseSection';
import BaseTable from '@/components/BaseTable';


const { isMobile } = useWindowBreakpoint();

// Computed

const tableData = computed(() => [
  {
    name: 'Event Long Name 1',
    count: 10,
    sum: 100,
    duration: '10s'
  },
  {
    name: 'Event Long Name  2',
    count: 20,
    sum: 200,
    duration: '20s'
  },
  {
    name: 'Event Long Name  3',
    count: 30,
    sum: 300,
    duration: '30s'
  },
  {
    name: 'Event Long Name 4',
    count: 10,
    sum: 100,
    duration: '10s'
  },
  {
    name: 'Event Long Name  5',
    count: 20,
    sum: 200,
    duration: '20s'
  },
  {
    name: 'Event Long Name  6',
    count: 30,
    sum: 300,
    duration: '30s'
  },
  {
    name: 'Event Long Name 7',
    count: 10,
    sum: 100,
    duration: '10s'
  },
  {
    name: 'Event Long Name  8',
    count: 20,
    sum: 200,
    duration: '20s'
  },
  {
    name: 'Event Long Name  9',
    count: 30,
    sum: 300,
    duration: '30s'
  },
  {
    name: 'Event Long Name 10',
    count: 10,
    sum: 100,
    duration: '10s'
  }
]);

const tableHeaders = computed(() => [
  {
    alignText: 'left',
    key: 'name',
    label: 'Name'
  },
  {
    key: 'count',
    label: 'Count'
  },
  {
    key: 'sum',
    label: 'Sum'
  },
  {
    key: 'duration',
    label: 'Duration'
  }
]);

</script>

<style lang="scss" scoped></style>