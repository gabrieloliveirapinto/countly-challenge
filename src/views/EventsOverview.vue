<template>
  <div class="events-overview">
    <div class="row">
      <div class="col-12 col-lg-5 offset-lg-1">
        <FeaturedEventsSection
          class="events-overview__featured-events"
          :featured-events="featuredEvents"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import FeaturedEventsSection from '@/components/FeaturedEventsSection';

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
]
</script>

<style lang="scss" scoped>
.events-overview {

  // .events-overview__featured-events
  &__featured-events {
    padding-top: $layout-unit-lg;
  }

  @include media-breakpoint-up(lg) {

    // .events-overview__featured-events
    &__featured-events {
      padding-top: 2 * $layout-unit-xxl;
    }
  }
}
</style>