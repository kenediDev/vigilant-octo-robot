<template>
  <div>
    <navbars />
    <router-view></router-view>
    <message />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import navbars from "./navbar.component.vue";
import message from "./screen/validation.screen.vue";

@Component({
  components: {
    navbars,
    message,
  },
})
export default class BaseComponent extends Vue {
  beforeMount() {
    this.$router.push({ name: "forgot" });
  }
}
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

// font-family: 'Roboto', sans-serif;
</style>