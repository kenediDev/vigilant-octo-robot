import Vue, { VueConstructor } from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../components/home.component.vue";
import LoginComponent from "../components/login.component.vue";
import ForgotComponent from "../components/forgot.component.vue";
import TestimoniComponent from "../components/testimoni.component.vue";
import ServiceComponent from "../components/service.component.vue";
import ContactComponent from "../components/contact.component.vue";
import AboutComponent from "../components/about.component.vue";
import DashboardComponent from "../components/dashboard.component.vue";

Vue.use(VueRouter);

type RouteName =
    | "home"
    | "login"
    | "forgot"
    | "testimoni"
    | "service"
    | "contact"
    | "about"
    | "dashboard";
type RoutePath =
    | "/"
    | "/login"
    | "/forgot-password"
    | "/testimoni"
    | "/service"
    | "/contact"
    | "/about"
    | "/dashboard";

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
        name: "login",
        path: "/login",
        component: LoginComponent
    },
    {
        name: "forgot",
        path: "/forgot-password",
        component: ForgotComponent
    },
    {
        name: "testimoni",
        path: "/testimoni",
        component: TestimoniComponent
    },
    {
        name: "service",
        path: "/service",
        component: ServiceComponent
    },
    {
        name: "contact",
        path: "/contact",
        component: ContactComponent
    },
    { name: "about", path: "/about", component: AboutComponent },
    { name: "dashboard", path: "/dashboard", component: DashboardComponent }
];

const router = new VueRouter({ routes });

const authenticate = ["login"];
const unauthenticate = ["dashboard"];

router.beforeEach((to, from, next) => {
    if (localStorage.getItem("token")) {
        if (authenticate.includes(to.name)) {
            next({ name: "home" });
        } else {
            next();
        }
    } else {
        if (unauthenticate.includes(to.name)) {
            next({ name: "login" });
        } else {
            next();
        }
    }
});

export default router;
