<template>
  <div>
    <testimoni />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import testimoni from "./home/testimoni.component.vue";

@Component({
  components: {
    testimoni,
  },
})
export default class TestimoniScreen extends Vue {}
</script>


<style lang="scss" scoped>
</style>