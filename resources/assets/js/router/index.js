import Vue from 'vue'
import Router from 'vue-router'

//import menuModule from 'vuex-store/modules/menu'
import menuModule from '../store/modules/menu';
import Dashboard from '../components/dashboard/Dashboard.vue'
import App from '../App.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'main_page',
            component: App,
            path: '/',
            children: [
                ...generateRoutesFromMenu(menuModule.state.items),
                {path: '*', redirect: { name: getDefaultRoute(menuModule.state.items).name }},
                {
                    name: 'main_page',
                    path: '/',
                    component: Dashboard

                }
            ]

        }
    ],
    mode: 'history',
    hashbang: false,
    history: true,
    linkActiveClass: 'active'
})

function generateRoutesFromMenu (menu = [], routes = []) {
    for (let i = 0, l = menu.length; i < l; i++) {
        let item = menu[i]
        if (item.path) {
            routes.push(item)
        }
        if (item.children) {
            generateRoutesFromMenu(item.children, routes)
        }
    }
    return routes
}

function getDefaultRoute (menu = []) {
    let defaultRoute

    menu.forEach((item) => {
        if (item.meta.default) {
            defaultRoute = item
        } else if (item.children) {
            let defaultChild = item.children.find((i) => i.meta.default)
            defaultRoute = defaultChild || defaultRoute
        }
    })

    return defaultRoute
}
