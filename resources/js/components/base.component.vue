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
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvYXV0aCIsImlhdCI6MTYyMDY2ODEyMSwiZXhwIjoxNjIwNjcxNzIxLCJuYmYiOjE2MjA2NjgxMjEsImp0aSI6Ik5zQmM5eFVNbkV1VjNDb1MiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.XI7JHjYGw9j7xENyKK-moBh9NsjDr6qB-vitHVCmdt4"
    );
  }
}
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
</style>