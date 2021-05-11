<template>
  <div class="nc-col">
    <album v-if="choice === 'album'" />
    <vision v-else-if="choice === 'vision'" />
    <service v-else-if="choice === 'service'" />
    <testimonials v-else-if="choice === 'testimoni'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import service from "../dashboard.service.vue";
import testimonials from "../dashboard.testimonials.vue";
import vision from "../dashborad.vision.vue";
import album from "../dashboard.album.vue";

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
}
</script>

<style lang="scss" scoped>
</style>