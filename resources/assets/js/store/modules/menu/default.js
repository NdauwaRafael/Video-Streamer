import lazyLoading from './lazyLoading'

export default {
    name: 'main_page',
    path: '/',
    component: lazyLoading('./App'),
    meta: {
        default: false,
        title: 'HOME',
        expanded: false
    }
}