<template>
  <div>
    <navbar />
    <router-view v-on:clickRouter="clickRouter($event)"></router-view>
    <message />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import navbar from "./navbar.component.vue";
import message from "./validation/message.component.vue";

@Component({
  components: {
    navbar,
    message,
  },
})
export default class BaseComponent extends Vue {
  clickRouter(args: string) {
    this.$router.push({ name: args });
  }
  beforeMount() {
    this.$router.push({ name: "forgot" });
  }
}
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");
// font-family: 'Roboto Slab', serif;
</style>