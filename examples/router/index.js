import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);


export const routerMap = [
    { path: '/', component: () => import('../pages/index/index'), meta: { title: '首页' }},
    { path: '/tree', component: () => import('../pages/tree/index'), meta: { title: '树节点组件' }}
]


export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routerMap
})
