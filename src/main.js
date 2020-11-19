import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Intro from "./components/Intro";
import Work from "./components/Work/WorkContainer";
import Books from "./components/Books/BookContainer";

import "bootstrap/dist/js/bootstrap.min.js";

import BootstrapVue from "bootstrap-vue";
import VueGtag from "vue-gtag";

import SmoothReflow from "./components/SmoothReflow";

Vue.component("SmoothReflow", SmoothReflow);

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.use(VueRouter);
Vue.config.productionTip = false;

import { VueMailchimpEmailSignupForm } from "vue-mailchimp-email-signup-form";
Vue.component("vue-mailchimp-email-signup-form", VueMailchimpEmailSignupForm);

Vue.use(VueGtag, {
  config: { id: "G-33FYSXW31H" }
});

const routes = [
  {
    path: "/",
    component: Intro,
    meta: {
      title: "Pavlos",
      metaTags: [
        {
          name: "description",
          content: "Pavlos' portfolio."
        },
        {
          property: "og:description",
          content: "Pavlos' portfolio."
        }
      ]
    }
  },
  { path: "/intro", redirect: "/" },
  { path: "/work", component: Work },
  { path: "/books", component: Books }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
