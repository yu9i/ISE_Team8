import './assets/main.css'

import { createApp } from 'vue';
import teambuilding from './components/TeamBuilding.vue';
import login from './login.vue';
import mypage from './components/MyPage.vue'
import community from './components/Community.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far); 

createApp(login).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
