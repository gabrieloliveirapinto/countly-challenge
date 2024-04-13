<template>
  <div class="app">
    <NavigationBar class="app__navigation" />
    <div class="app__content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';

import NavigationBar from './components/NavigationBar';
</script>