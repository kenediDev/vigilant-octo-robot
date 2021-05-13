<template>
  <div>
    <navbar v-if="activeNavbar" />
    <router-view></router-view>
    <message />
    <footers />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import navbar from "./navbar.componen.vue";
import message from "./validation/message.vue";
import footers from "./footer.component.vue";

@Component({
  components: {
    navbar,
    message,
    footers,
  },
})
export default class BaseComponent extends Vue {
  activeNavbar: boolean = false;
  beforeCreate() {
    this.$store.dispatch("listService");
    this.$store.dispatch("listAlbum");
    this.$store.dispatch("listTestimonials");
    this.$store.dispatch("listVision");
    this.$store.dispatch("loadMe");
    this.$store.dispatch("listAttribute");
    this.$store.dispatch("listProduct");
  }
  beforeMount() {
    if (this.$route.name === "dashboard") {
      this.activeNavbar = false;
    } else {
      this.activeNavbar = true;
    }
    // this.$router.push({ name: "dashboard" });
    // localStorage.setItem(
    //   "token",
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvYXV0aCIsImlhdCI6MTYyMDgwMjk2NiwiZXhwIjoxNjIwODA2NTY2LCJuYmYiOjE2MjA4MDI5NjYsImp0aSI6Ill4Q3BvaXJNUW1BeHJFNVAiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.eTSi0bM3ut5cI6BhADiRPKm90ZRpnQ4suXviK-wci5k"
    // );
  }
  beforeUpdate() {
    if (this.$route.name === "dashboard") {
      this.activeNavbar = false;
    } else {
      this.activeNavbar = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Fira+Sans+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Merriweather&family=PT+Sans+Narrow&family=Passion+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bungee&family=Holtwood+One+SC&family=Knewave&family=Metrophobic&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Assistant&family=Fjalla+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bungee+Shade&family=Erica+One&family=Modak&family=Sofadi+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Farro&display=swap");
</style>