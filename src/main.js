import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/compoment.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');

library.add(fas);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router).mount('#app');