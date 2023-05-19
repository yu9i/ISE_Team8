import { createRouter, createWebHistory } from 'vue-router'

import Community from './components/Community.vue';
import MyPage from './components/MyPage.vue';
import TeamBuilding from './components/TeamBuilding.vue';
import Login from './login.vue';

const routes = [
    { path: '/community', component:Community},
    { path: '/mypage', component:MyPage},
    { path: '/teambuilding', component:TeamBuilding}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export {router}