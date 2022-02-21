import Vue from 'vue';
import App from './App.vue';
import VueTyped from 'vue-typed-js';
import router from './router';
import './index.css';

Vue.use(VueTyped);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
