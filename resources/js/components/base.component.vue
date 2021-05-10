<template>
  <div>
    <navbar v-if="activeNavbar" />
    <router-view></router-view>
    <message />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import navbar from "./navbar.componen.vue";
import message from "./validation/message.vue";

@Component({
  components: {
    navbar,
    message,
  },
})
export default class BaseComponent extends Vue {
  activeNavbar: boolean = false;
  beforeCreate() {
    if (this.$route.name === "dashboard") {
      this.activeNavbar = true;
    }
  }
  beforeMount() {
    this.$store.dispatch("loadMe");
    this.$router.push({ name: "dashboard" });
    localStorage.setItem(
      "token",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvYXV0aCIsImlhdCI6MTYyMDY3MjQxNywiZXhwIjoxNjIwNjc2MDE3LCJuYmYiOjE2MjA2NzI0MTcsImp0aSI6Ik9EZVRpQnBlREIzSDVBYzgiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.8ua4R9IAXjuJgjRXH1EUOfcLobbUAPLPY7EGtItALhg"
    );
  }
}
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
</style>