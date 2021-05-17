import Vue from "vue";
import Vuex from "vuex";
import userModules from "./modules/user.modules";
import DefaultModules from "./modules/default.modules";
import ServiceModules from "./modules/service.modules";
import TestimonialsModules from "./modules/testimonials.modules";
import VisionModules from "./modules/vision.modules";
import AlbumModules from "./modules/album.modules";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userModules,
        DefaultModules,
        ServiceModules,
        TestimonialsModules,
        VisionModules,
        AlbumModules
    }
});
