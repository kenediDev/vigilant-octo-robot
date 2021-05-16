<template>
  <div>
    <navbars />
    <router-view></router-view>
    <footers />
    <message />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import navbars from "./navbar.component.vue";
import message from "./screen/validation.screen.vue";
import footers from "./screen/home/footer.component.vue";

@Component({
  components: {
    navbars,
    message,
    footers,
  },
})
export default class BaseComponent extends Vue {
  beforeMount() {
    if (localStorage.getItem("token")) {
      this.$store.commit("TOKEN", localStorage.getItem("token"));
    }
    this.$store.dispatch("listDefault");
    this.$store.dispatch("listImage");
  }
}
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab:wght@400;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam&display=swap');
// font-family: 'Roboto', sans-serif;
// font-family: 'Roboto Slab', serif;
// font-family: 'Be Vietnam', sans-serif;
</style>