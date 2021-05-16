import Vue, { VueConstructor } from "vue";
import VueRouter from "vue-router";
import HomeScreen from "../components/screen/home.screen.vue";
import LoginScreen from "../components/screen/login.screen.vue";
import ForgotScreen from "../components/screen/forgot.screen.vue";
import DashboardScreen from "../components/screen/dashboard.screen.vue";
import ServiceScreen from "../components/screen/service/service.screen.vue";
import TestimoniScreen from "../components/screen/testimoni/testimoni.screen.vue";
import AboutScreen from "../components/screen/about/about.screen.vue";
import ContactScreen from "../components/screen/contact/contact.screen.vue";

Vue.use(VueRouter);

type RouteName =
    | "home"
    | "login"
    | "forgot"
    | "dashboard"
    | "service"
    | "testimoni"
    | "about"
    | "contact";
type RoutePath =
    | "/"
    | "/accounts"
    | "/forgot-accounts"
    | "/dashboard"
    | "/service"
    | "/testimoni"
    | "/about"
    | "/contact";

interface Routes {
    name: RouteName;
    path: RoutePath;
    component: VueConstructor<Vue>;
}

const routes: Routes[] = [
    {
        name: "home",
        path: "/",
        component: HomeScreen
    },
    {
        name: "login",
        path: "/accounts",
        component: LoginScreen
    },
    {
        name: "forgot",
        path: "/forgot-accounts",
        component: ForgotScreen
    },
    {
        name: "dashboard",
        path: "/dashboard",
        component: DashboardScreen
    },
    {
        name: "service",
        path: "/service",
        component: ServiceScreen
    },
    {
        name: "testimoni",
        path: "/testimoni",
        component: TestimoniScreen
    },
    {
        name: "about",
        path: "/about",
        component: AboutScreen
    },
    {
        name: "contact",
        path: "/contact",
        component: ContactScreen
    }
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
