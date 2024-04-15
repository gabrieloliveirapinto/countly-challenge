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
    name: 'Event 1',
    count: 10,
    sum: 100,
    duration: '1h 30m'
  },
  {
    name: 'Event 2',
    count: 20,
    sum: 200,
    duration: '2h 30m'
  },
  {
    name: 'Event 3',
    count: 30,
    sum: 300,
    duration: '3h 30m'
  }
]);

const tableHeaders = computed(() => [
  {
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