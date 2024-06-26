import { createApp } from 'vue';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';

import App from '@/App.vue';
import router from '@/router';

import '@/assets/styles';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { unstyled: true });

app.mount('#app');
