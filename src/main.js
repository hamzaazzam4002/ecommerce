import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// pinia
import { createPinia } from "pinia";
const pinia = createPinia();
// emitter
import mitt from "mitt";
const Emitter = mitt();
// swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
const vuetify = createVuetify({
  components,
  directives,
});
createApp(App)
  .use(vuetify)
  .use(pinia)
  .provide("Emitter", Emitter)
  .use(router)
  .mount("#app");
