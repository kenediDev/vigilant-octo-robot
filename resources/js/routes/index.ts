import Vue, { VueConstructor } from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../components/home.component.vue";
import LoginComponent from "../components/login.component.vue";
import ForgotComponent from "../components/forgot.component.vue";

Vue.use(VueRouter);

type RouteName = "home" | "login" | "forgot";
type RoutePath = "/" | "/login" | "/forgot-password";

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
