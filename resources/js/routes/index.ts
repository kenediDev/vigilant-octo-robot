import Vue, { VueConstructor } from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../components/home.component.vue";

Vue.use(VueRouter);

type RouteName = "home";
type RoutePath = "/";

interface Routes {
    name: RouteName;
    path: RoutePath;
    component: VueConstructor<Vue>;
}

const routes: Routes[] = [
    {
        name: "home",
        path: "/",
        component: HomeComponent
    }
];

export default new VueRouter({ routes });
