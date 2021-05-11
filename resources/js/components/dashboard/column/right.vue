<template>
  <div class="nc-col">
    <album v-if="choice === 'album'" v-on:updateAlbum="updateAlbum($event)" />
    <vision
      v-else-if="choice === 'vision'"
      v-on:updateVision="updateVision($event)"
    />
    <service
      v-else-if="choice === 'service'"
      v-on:updateService="updateService($event)"
    />
    <testimonials
      v-else-if="choice === 'testimoni'"
      v-on:updateTestimonials="updateTestimonials($event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";
import service from "../dashboard.service.vue";
import testimonials from "../dashboard.testimonials.vue";
import vision from "../dashborad.vision.vue";
import album from "../dashboard.album.vue";
import {
  Album,
  Service,
  Testimonials,
  Vision,
} from "../../../store/types/interface";

@Component({
  components: {
    service,
    testimonials,
    vision,
    album,
  },
})
export default class RightColumn extends Vue {
  @Prop(String) choice: string;

  @Emit()
  updateAlbum(args: Album) {
    this.$emit("updateAlbum", args);
  }

  @Emit()
  updateService(args: Service) {
    this.$emit("updateService", args);
  }
  @Emit()
  updateVision(args: Vision) {
    this.$emit("updateVision", args);
  }
  @Emit()
  updateTestimonials(args: Testimonials) {
    this.$emit("updateTestimonials", args);
  }
}
</script>

<style lang="scss" scoped>
</style>