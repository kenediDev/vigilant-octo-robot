import Vue from "vue";
import Vuex from "vuex";
import UserModules from "./modules/user.modules";
import PrefixModules from "./modules/prefix.modules";
import DefaultModules from "./modules/default.modules";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        UserModules,
        PrefixModules,
        DefaultModules
    }
});
