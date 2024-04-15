<template>
  <BaseSection
    class="monitor-events-section"
    title="Monitor Events"
  >
    <template #actions>
      <BaseButton
        icon="toggler-block"
        :text="configureEventsButtonText"
      />
      <CalendarSelect
        class="monitor-events-section__calendar-input"
        v-model="selectedDates"
        :block="isMobile"
        id="monitor-events-calendar-input"
        label="Time Period"
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


const { breakpoint, isMobile } = useWindowBreakpoint();

// State

const selectedDates = ref([]);

const configureEventsButtonText = computed(() => (isMobile.value || breakpoint.value === 'md' ? null : 'Configure Events'));

const events = [
  // Mocked data
  {
    id: 1,
    chartData: Array.from({ length: 12 }, (_, index) => ({ x: index, y: Math.floor(Math.random() * 100) + 10 })),
    name: 'period-change',
    value: 329272,
    percentage: {
      value: 30.0,
      type: 'decrease'
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
      type: 'decrease'
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

<style lang="scss" scoped>
.monitor-events-section {

  // .monitor-events-section__calendar-input
  &__calendar-input {
    // Remove label height + spacing from top margin to correctly align button and input 
    margin-top: -#{$layout-unit-sm + $layout-unit-xs};
  }
}
</style>