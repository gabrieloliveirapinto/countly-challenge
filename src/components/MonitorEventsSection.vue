<template>
  <BaseSection
    class="monitor-event-section"
    title="Monitor Events"
  >
    <template #actions>
      <BaseButton
        icon="toggler-block"
        :text="configureEventsButtonText"
      />
      <CalendarSelect
        v-model="selectedDates"
        :block="isMobile"
      />
    </template>
    <EventsCardList
      :events="events"
      with-chart
    />
  </BaseSection>
</template>

<script setup>
import { computed, ref } from 'vue';

import { useWindowBreakpoint } from '@/composables/windowBreakpoint';

import BaseButton from '@/components/BaseButton';
import BaseSection from '@/components/BaseSection';
import CalendarSelect from '@/components/CalendarSelect';
import EventsCardList from '@/components/EventsCardList';

const selectedDates = ref([]);

const { breakpoint, isMobile } = useWindowBreakpoint();

const configureEventsButtonText = computed(() => (isMobile.value || breakpoint.value === 'md' ? null : 'Configure Events'));

const events = [
  {
    id: 1,
    chartData: Array.from({ length: 12 }, (_, index) => ({ x: index, y: Math.floor(Math.random() * 100) + 10 })),
    name: 'period-change',
    value: 329272,
    percentage: {
      value: 30.0,
      type: 'increase'
    },
    progress: 94.3
  },
  {
    id: 2,
    chartData: Array.from({ length: 12 }, (_, index) => ({ x: index, y: Math.floor(Math.random() * 100) + 10 })),
    name: 'Ping',
    value: 17902,
    percentage: {
      value: 20.2,
      type: 'increase'
    },
    progress: 5.1
  },
  {
    id: 3,
    chartData: Array.from({ length: 12 }, (_, index) => ({ x: index, y: Math.floor(Math.random() * 100) + 10 })),
    name: 'Cohort-create',
    value: 1015,
    percentage: {
      value: 10,
      type: 'increase'
    },
    progress: 0.3
  },
  {
    id: 4,
    chartData: Array.from({ length: 12 }, (_, index) => ({ x: index, y: Math.floor(Math.random() * 100) + 10 })),
    name: 'period-change',
    value: 329272,
    percentage: {
      value: 30.0,
      type: 'increase'
    },
    progress: 94.3
  }
];

</script>

<style lang="scss" scoped></style>