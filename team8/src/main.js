import './assets/main.css'
// import App from './TeamBuilding.vue';
import App from './Community.vue';

import { createApp } from 'vue';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far); 

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');