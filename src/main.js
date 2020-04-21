import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Intro from "./components/Intro";
import Work from "./components/Work";
import Books from "./components/Books";

import "bootstrap/dist/js/bootstrap.min.js";

import BootstrapVue from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Intro },
  { path: "/intro", redirect: "/" },
  { path: "/work", component: Work },
  { path: "/books", component: Books }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
