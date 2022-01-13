import { createApp } from 'vue';
import Vuex from 'vuex';
import router from './router'
import App from './App.vue';
import './styles/global.css';

createApp(App)
  .use(router)
  .use(Vuex)
  .mount('#app');
