<template>
  <div>
    <navbar v-if="visibility" :token="token" />
    <router-view v-on:clickRouter="clickRouter($event)"></router-view>
    <message />
    <footers v-if="visibility" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import navbar from "./navbar.component.vue";
import message from "./validation/message.component.vue";
import footers from "./footer.component.vue";

@Component({
  components: {
    navbar,
    message,
    footers,
  },
})
export default class BaseComponent extends Vue {
  token: string = "";
  visibility: boolean = true;
  clickRouter(args: string) {
    this.$router.push({ name: args });
  }
  getToken() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }

    if (this.$route.name === "dashboard") {
      this.visibility = false;
    } else {
      this.visibility = true;
    }
  }
  beforeUpdate() {
    this.getToken();
  }
  beforeMount() {
    this.getToken();
    this.$store.dispatch("listCar");
    this.$store.dispatch("listProduct");
    this.$store.dispatch("listDefault");
    if (this.$route.name === "dashboard") {
    } else {
      this.$router.push({ name: "dashboard" });
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
// font-family: 'Roboto Slab', serif;
// font-family: 'Roboto Condensed', sans-serif;
</style>