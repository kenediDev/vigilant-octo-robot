import Vue from "vue";
import BaseComponent from "./components/base.component.vue";
import store from "./store";
import router from "./routes";
import "moment/locale/id";
import moment from "moment";
import Vuemoment from "vue-moment";

Vue.use(Vuemoment, {
    moment
});

const app = new Vue({
    el: "#app",
    store,
    router,
    render: h => h(BaseComponent)
});

// kO(8xT8oHG*a00 // -> ssh
// )5CnxSdL@_{f
