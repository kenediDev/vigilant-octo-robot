import Vue from "vue";
import BaseComponent from "./components/base.component.vue";
import router from "./routes";
import store from "./store";

const app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(BaseComponent)
});
