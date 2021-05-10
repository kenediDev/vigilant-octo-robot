import Vue from "vue";
import Vuex from "vuex";
import UserModules from "./modules/user.modules";
import VisionModules from "./modules/vision.modules";
import ServiceModules from "./modules/service.modules";
import AlbumModules from "./modules/album.modules";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { UserModules, VisionModules, ServiceModules, AlbumModules }
});
