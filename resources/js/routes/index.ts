import Vue, { VueConstructor } from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../components/home.component.vue";
import DashboardComponent from "../components/dashboard/dashborad.component.vue";

Vue.use(VueRouter);

type RouteName = "home" | "dashboard";
type RoutePath = "/" | "/dashboard";

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
    },
    {
        name: "dashboard",
        path: "/dashboard",
        component: DashboardComponent
    }
];

export default new VueRouter({ routes });
