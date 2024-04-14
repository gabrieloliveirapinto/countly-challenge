<template>
  <Chart
    class="bar-chart"
    :data="chartData"
    :options="chartOptions"
    type="bar"
  />
</template>

<script setup>
import { computed, ref, watch } from "vue";

import Chart from 'primevue/chart';

const DEFAULT_DATASET_CONFIG = {
  backgroundColor: '#0364FF',
  maxBarThickness: 8
};

const props = defineProps({
  data: {
    default: null,
    type: Array
  }
})

// State

const chartData = ref([]);

// Computed

const chartOptions = computed(() => ({
  aspectRatio: 0.8,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      display: false,
      beginAtZero: true,
    },
    y: {
      grid: {
        drawTicks: false,
        color: '#cce0ff',
      }
    }
  }
}));

const setChartData = () => {
  if (!Array.isArray(props.data)) return;

  chartData.value = {
    labels: props.data.map((item) => item.x),
    datasets: [
      {
        ...DEFAULT_DATASET_CONFIG,
        data: props.data.map((item) => item.y)
      }
    ]
  };
};

// Watchers

watch(
  () => props.data,
  setChartData,
  { immediate: true }
)
</script>
