<template>
  <div class="navigation-bar">
    <div class="navigation-bar__page-title-container">
      <h2 class="avigation-bar__page-title">
        Events Overview
      </h2>
      <div class="navigation-bar__last-updated">
        <BaseIcon name="clock" />
        <p class="navigation-bar__last-updated-copy">
          Updated 15 hours ago
        </p>
      </div>
    </div>
    <BaseButton
      class="navigation-bar__button"
      icon="book"
      :text="buttonText"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

import BaseButton from './BaseButton';
import BaseIcon from './BaseIcon';

import { useWindowBreakpoint } from '@/composables/windowBreakpoint';

const { isMobile } = useWindowBreakpoint();


// Computed

const buttonText = computed(() => (isMobile.value ? null : 'Create New Event'));

</script>

<style lang="scss" scoped>
.navigation-bar {
  background-color: $color-white;
  padding: $layout-unit-sm $layout-unit-lg;

  display: flex;
  align-items: center;
  justify-content: space-between;

  // .navigation-bar__button-text
  &__button-text {
    display: none;
  }

  // .navigation-bar__last-updated
  &__last-updated {
    color: $color-gray;
    display: flex;
    align-items: center;
    gap: $layout-unit-xs;
  }

  // .navigation-bar__last-updated-copy
  &__last-updated-copy {
    color: $color-gray;
  }

  // .navigation-bar__page-title-container
  &__page-title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @include media-breakpoint-up(md) {
    padding-left: $layout-unit-md;
    padding-right: $layout-unit-md;

    // .navigation-bar__page-title-container
    &__page-title-container {
      flex-direction: row;
      align-items: baseline;
      gap: $layout-unit-xs;
    }
  }

  @include media-breakpoint-up(lg) {
    padding-left: $layout-unit-xl;
    padding-right: $layout-unit-xl;
  }
}
</style>