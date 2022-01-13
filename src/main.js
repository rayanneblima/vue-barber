import { createApp } from 'vue';
import Vuex from 'vuex';
import router from './router'
import App from './App.vue';

createApp(App)
  .use(router)
  .use(Vuex)
  .mount('#app');
