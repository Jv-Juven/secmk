import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routers from './router'
// import Vuex from 'vuex'

// 设置网页的dpr
import LibFlexible from 'lib-flexible'

Vue.use(VueRouter);
// Vue.use(Vuex);

var router = new VueRouter();

Routers(router);

router.start(App, '#app');
