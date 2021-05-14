import Vue from "vue";
import BaseComponent from "./components/base.component.vue";
import store from "./store";
import router from "./routes";
import "moment/locale/id";
import moment from "moment";
import Vuemoment from "vue-moment";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

import { Icon } from "leaflet";

Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

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
