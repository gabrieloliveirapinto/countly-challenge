<template>
  <div class="base-section">
    <div class="base-section__header">
      <h2 class="base-section__title">{{ title }}</h2>
      <slot name="actions" />
    </div>
    <div class="base-section__content">
      <slot />
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.base-section {

  // .base-section__content
  &__content {
    margin-top: $layout-unit-md;
  }

  // .base-section__header
  &__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: $layout-unit-sm;
  }

  // .base-section__title
  &__title {
    flex-shrink: 0;
    margin-right: auto;
  }

  @include media-breakpoint-up(md) {

    // .base-section__content
    &__content {
      margin-top: $layout-unit-lg;
    }

    // .base-section__header
    &__header {
      flex-wrap: nowrap;
    }
  }
}
</style>