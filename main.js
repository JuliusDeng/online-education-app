import Vue from 'vue'
import App from './App'
import api from '@/api/api.js';
Vue.prototype.$api = api

import store from '@/store/index.js';
Vue.prototype.$store = store

Vue.prototype.$toast = function(msg){
	uni.showToast({
		title: msg,
		icon: 'none'
	});
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
