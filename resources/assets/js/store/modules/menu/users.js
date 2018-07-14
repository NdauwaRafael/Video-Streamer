/**
 * Created by Raphael on 14.7.18.
 */

import lazyLoading from './lazyLoading'


export default {
    name: 'videos',
    meta: {
        expanded: false,
        title: 'Users',
        iconClass: 'entypo entypo-users'
    },
    children: [
        {
            name: 'all_users',
            path: '/users/create',
            component: lazyLoading('pages/users/list'),
            meta: {
                default: false,
                title: 'All Users',

            }
        },
        {
            name: 'user_roles',
            path: '/users/roles',
            component: lazyLoading('pages/users/roles'),
            meta: {
                default: false,
                title: 'Roles',
                iconClass: 'entypo entypo-user-add'
            }
        },
        {
            name: 'view_user',
            path: '/users/view:id',
            component: lazyLoading('pages/users/view'),
            meta: {
                default: false,
                notVisible: true
            }
        }
    ]
}