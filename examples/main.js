import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import Loader from '../src/index.js';

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;
Vue.use(Loader);

router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
	next();
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
