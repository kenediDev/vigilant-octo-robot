import Vue from "vue";
import Vuex from "vuex";
import userModules from "./modules/user.modules";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userModules
    }
});
