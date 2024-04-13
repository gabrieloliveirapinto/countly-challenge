<template>
  <div
    v-if="events"
    class="featured-events-section"
  >
    <div class="featured-events-section__events-list">
      <EventCard
        v-for="event in events"
        :key="event.id"
        class="featured-events-section__event"
        :name="event.name"
        :value="event.value"
        :percentage="event.percentage"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import EventCard from '@/components/EventCard';

const props = defineProps({
  featuredEvents: {
    default: null,
    type: Array
  }
});

// Computed

const events = computed(() => {
  if (!props.featuredEvents || !Array.isArray(props.featuredEvents)) return [];

  return props.featuredEvents.filter(Boolean);
}); 
</script>

<style lang="scss" scoped>
.featured-events-section {

  // .featured-events-section__events-list
  &__events-list {
    display: flex;
    flex-direction: column;
    gap: $layout-unit-md;
  }

  // .featured-events-section__event
  &__event {
    flex-grow: 1;
  }

  @include media-breakpoint-up(lg) {

    // .featured-events-section__events-list
    &__events-list {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>