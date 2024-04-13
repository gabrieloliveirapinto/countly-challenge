<template>
  <BasePanel class="event-card-list">
    <EventCard
      v-for="item in list"
      :key="item.id"
      class="event-card-list__item"
      :name="item.name"
      no-background
      no-padding
      :value="item.value"
      :percentage="item.percentage"
      :progress="item.progress"
      :with-progress-bar="withProgressBar"
    />
  </BasePanel>
</template>

<script setup>
import { computed } from 'vue';
import BasePanel from '@/components/BasePanel';
import EventCard from '@/components/EventCard';

const props = defineProps({
  events: {
    default: null,
    type: Array
  },

  withProgressBar: {
    default: false,
    type: Boolean
  }
});

const list = computed(() => {
  if (!Array.isArray(props.events)) return [];

  return props.events.filter(Boolean);
})
</script>

<style lang="scss" scoped>
.event-card-list {
  display: flex;
  flex-direction: column;
  gap: $layout-unit-lg;

  // .event-card-list__item:not(:last-child)
  &__item:not(:last-child) {
    position: relative;

    // .event-card-list__item:not(:last-child):after
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -#{$layout-unit-lg * 0.5};

      width: 100%;
      height: 1px;
      background-color: $color-blue3;
    }
  }
}
</style>