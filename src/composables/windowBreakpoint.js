import { computed, ref, onMounted, onUnmounted } from 'vue';

const windowBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}
export function useWindowBreakpoint () {
  // State

  const windowWidth = ref(window.innerWidth);

  // Computed

  const breakpoint = computed(() => {
    if (windowWidth.value >= windowBreakpoints.xxl) return 'xxl';
    if (windowWidth.value >= windowBreakpoints.xl) return 'xl';
    if (windowWidth.value >= windowBreakpoints.lg) return 'lg';
    if (windowWidth.value >= windowBreakpoints.md) return 'md';
    if (windowWidth.value >= windowBreakpoints.sm) return 'sm';
    
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