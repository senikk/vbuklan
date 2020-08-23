import Vue from "vue";
import LAN from "./LAN.vue";
import VBUK from "./VBUK.vue";
import NotFound from "./NotFound.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const routes = {
  '/': LAN,
  '/vbuk': VBUK
}

new Vue({
  vuetify,
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
});