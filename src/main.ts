import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/scss/main.scss';

// Bootstrap
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
