<template>
  <div class="events-overview">
    <div class="row">
      <div class="col-11 offset-1">
        <BaseButton
          class="events-overview__button"
          icon="calendar"
          text="Last 30 days"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-5 offset-md-1">
        <FeaturedEventsSection
          class="events-overview__section"
          :featured-events="featuredEvents"
        />
      </div>
      <div class="col-12 col-md-5">
        <EventsCardList
          class="events-overview__section"
          :events="topEvents"
          with-progress-bar
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <MonitorEventsSection class="events-overview__section" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <EventMetricsSection class="events-overview__section" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton';
import FeaturedEventsSection from '@/components/FeaturedEventsSection';
import EventsCardList from '@/components/EventsCardList';
import EventMetricsSection from '@/components/EventMetricsSection';
import MonitorEventsSection from '@/components/MonitorEventsSection';

// Mocked data

const featuredEvents = [
  {
    id: 1,
    name: 'Total Event Count',
    value: 349260,
    percentage: {
      value: 30.3,
      type: 'increase'
    }
  },
  {
    id: 2,
    name: 'Events Per User',
    value: 247.9,
    percentage: {
      value: 22.2,
      type: 'increase'
    }
  },
  {
    id: 3,
    name: 'Events Per Session',
    value: 32.5,
    percentage: {
      value: 4.5,
      type: 'increase'
    }
  }
];

const topEvents = [
  {
    id: 1,
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
.events-overview {

  // .events-overview__button
  &__button {
    margin-top: $layout-unit-lg;
  }

  // .events-overview__section
  &__section {
    margin: $layout-unit-lg 0;
  }

  @include media-breakpoint-up(lg) {

    // .events-overview__button
    &__button {
      margin-top: $layout-unit-xxl;
    }

    // .events-overview__section
    &__section {
      margin: 2 * $layout-unit-xxl 0;
    }
  }
}
</style>