<template>
  <div>
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import navbar from "./navbar.componen.vue";

@Component({
  components: {
    navbar,
  },
})
export default class BaseComponent extends Vue {
  beforeMount() {
    this.$store.dispatch("loadMe");
  }
}
</script>

<style lang="scss" scoped>
</style>