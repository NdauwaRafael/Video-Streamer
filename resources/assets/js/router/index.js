import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue';
import Dashboard from '../components/pages/dashboard';
import Videos from '../components/pages/videos/list.vue';
import AddVideo from '../components/pages/videos/create.vue';
import ViewVideo from '../components/pages/videos/view.vue';
import Users from '../components/pages/users/list.vue';
import Roles from '../components/pages/users/roles.vue';

Vue.use(Router);

export default new Router({
    routes: [
                {
                    name: 'dashboard',
                    path: '/',
                    component: Dashboard
                },
                {
                    name: 'videos',
                    path: '/videos',
                    component: Videos
                },

                {
                    name: 'add_video',
                    path: '/videos/add',
                    component: AddVideo
                },

                {
                    name: 'view_video',
                    path: '/videos/view/:videoId',
                    component: ViewVideo
                },

                {
                    name: 'users',
                    path: '/users',
                    component: Users
                },

                {
                    name: 'roles',
                    path: '/roles',
                    component: Roles
                }

    ],
    mode: 'history',
    hashbang: false,
    history: true,
    linkActiveClass: 'active'
})


