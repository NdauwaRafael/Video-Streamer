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
                title: 'All Users'
            }
        },
        {
            name: 'add_user',
            path: '/users/create',
            component: lazyLoading('pages/users/add'),
            meta: {
                default: false,
                title: 'Add User'
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