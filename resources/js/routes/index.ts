import Vue, { VueConstructor } from "vue";
import VueRouter from "vue-router";
import HomeScreen from "../components/screen/home.screen.vue";
import LoginScreen from "../components/screen/login.screen.vue";
import ForgotScreen from "../components/screen/forgot.screen.vue";
import DashboardScreen from "../components/screen/dashboard.screen.vue";

Vue.use(VueRouter);

type RouteName = "home" | "login" | "forgot" | "dashboard";
type RoutePath = "/" | "/accounts" | "/forgot-accounts" | "/dashboard";

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
    }
];

const router = new VueRouter({ routes });

const authenticate = ["login"];
const unauthenticate = ["dashboard"];

router.beforeEach((to, from, next) => {
    if (authenticate.includes(to.name)) {
        if (localStorage.getItem("token")) {
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
