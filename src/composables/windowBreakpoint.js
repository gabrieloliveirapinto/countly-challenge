import { computed, ref, onMounted, onUnmounted } from 'vue';

// Constants

const WINDOW_BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
export function useWindowBreakpoint() {
  // State

  const windowWidth = ref(window.innerWidth);

  // Computed

  const breakpoint = computed(() => {
    if (windowWidth.value >= WINDOW_BREAKPOINTS.xxl) return 'xxl';
    if (windowWidth.value >= WINDOW_BREAKPOINTS.xl) return 'xl';
    if (windowWidth.value >= WINDOW_BREAKPOINTS.lg) return 'lg';
    if (windowWidth.value >= WINDOW_BREAKPOINTS.md) return 'md';
    if (windowWidth.value >= WINDOW_BREAKPOINTS.sm) return 'sm';

    return 'xs';
  });

  const isMobile = computed(() => breakpoint.value === 'xs' || breakpoint.value === 'sm');

  // Methods - Event Handlers

  const onWidthChange = () => {
    windowWidth.value = window.innerWidth;
  };

  // Lifecycle Hooks

  onMounted(() => {
    window.addEventListener('resize', onWidthChange);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onWidthChange);
  });

  return { breakpoint, isMobile };
}
