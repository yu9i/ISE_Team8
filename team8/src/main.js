import './assets/main.css'

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Teambuilding from './view/TeamBuilding.vue';
import login from './view/login.vue';
import mypage from './view/MyPage.vue';
import community from './view/Community.vue';
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far); 

const router = createRouter( {
history: createWebHistory(),
routes:[
    {path: '/', name: 'Login', component:login},
    {path: '/Teambuilding', name: 'Teambuilding', component:Teambuilding},
    {path: '/mypage', name: 'mypage', component:mypage},
    {path: '/community', name: 'community', component:community},
]
})

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app');
