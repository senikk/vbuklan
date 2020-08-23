import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import LAN from "./LAN.vue";
import VBUK from "./VBUK.vue";
import vuetify from "./plugins/vuetify";
import NotFound from "./NotFound.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter)

const routes = [
  { path: '/', component: VBUK },
  { path: '/lan', component: LAN },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');