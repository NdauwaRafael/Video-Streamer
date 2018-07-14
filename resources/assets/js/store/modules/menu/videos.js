/**
 * Created by Raphael on 14.7.18.
 */

import lazyLoading from './lazyLoading'


export default {
    name: 'videos',
    meta: {
        expanded: false,
        title: 'Videos',
        iconClass: 'vuestic-icon vuestic-icon-video'
    },
    children: [
        {
            name: 'all_videos',
            path: '/video/list',
            component: lazyLoading('pages/videos/list'),
            meta: {
                default: false,
                title: 'All Videos'
            }
        },
        {
            name: 'create_video',
            path: '/video/create',
            component: lazyLoading('pages/videos/create'),
            meta: {
                default: false,
                title: 'Login'
            }
        },
        {
            name: 'view_video',
            path: '/video/list:id',
            component: lazyLoading('pages/videos/view'),
            meta: {
                default: false,
                notVisible: true
            }
        }
    ]
}