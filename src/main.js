import { createApp } from "vue";
import "bootstrap";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import App from "./App.vue";
import router from "./router";
import $httpMessageState from "@/utils/pushMessage.js";

const app = createApp(App);
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.component("vLoading", Loading);
app.use(VueAxios, axios);
app.use(router);
app.mount("#app");
