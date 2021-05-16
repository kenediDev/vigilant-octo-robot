import Vue from "vue";
import BaseComponent from "./components/base.component.vue";
import router from "./routes";
import store from "./store";
import InlineSvg from "vue-inline-svg";
import moment from "moment";
import "moment/locale/id";
import VueMoment from "vue-moment";

Vue.component("icon", InlineSvg);

Vue.use(VueMoment, {
    moment
});

const app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(BaseComponent)
});
