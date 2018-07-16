import Vue from 'vue'
import Router from 'vue-router';
import Dashboard from '../components/pages/dashboard/index.vue';
import Videos from '../components/pages/videos/list.vue';
import AddVideo from '../components/pages/videos/create.vue';
import ViewVideo from '../components/pages/videos/view.vue';
import Users from '../components/pages/users/list.vue';
import Roles from '../components/pages/users/roles.vue';
import ViewRole from '../components/pages/users/view_role.vue';
import Permission from '../components/pages/users/permissions.vue'
import RolePermission from '../components/pages/users/role_permission.vue'

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
                },

                {
                    name: 'permission',
                    path: '/permission',
                    component: Permission
                },
                {
                    name: 'view_role',
                    path: '/role/view:roleId',
                    component: ViewRole
                },
                {
                    name: 'add_permissions_to_role',
                    path: '/role/permission:roleId',
                    component: RolePermission
                }

    ],
    mode: 'history',
    hashbang: false,
    history: true,
    linkActiveClass: 'active'
})


