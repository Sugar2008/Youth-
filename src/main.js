import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:3000";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import VAS from "vue-awesome-swiper";
Vue.use(VAS);
import "swiper/css/swiper.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// use()方法可以将ElementUI中的所有组件全部引入当前Vue项目
// 一旦在此处引入，每一个组件都将可以使用ElementUI的组件
Vue.use(ElementUI);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
