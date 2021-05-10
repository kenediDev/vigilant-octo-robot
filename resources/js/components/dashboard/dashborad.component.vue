<template>
  <div>
    <div class="nc-grid">
      <left :logo="logo" v-on:clickAdd="clickAdd()" />
      <right />
    </div>
    <modal
      :add="add"
      :addChoice="addChoice"
      :title="title"
      :description="description"
      :photo="photo"
      :photo_url="photo_url"
      :plus="plus"
      v-on:changeTitle="changeTitle($event)"
      v-on:changeDescription="changeDescription($event)"
      v-on:changePhoto="changePhoto($event)"
      v-on:clickAddChoice="clickAddChoice($event)"
      v-on:clearInput="clearInput()"
      v-on:clickAdd="clickAdd()"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import modal from "./dashborad.modal.vue";
import left from "./column/left.vue";
import right from "./column/right.vue";

@Component({
  components: {
    modal,
    left,
    right,
  },
})
export default class DashboardComponent extends Vue {
  logo: string = `http://${window.location.host}/image/default/Tanpa judul (5).png`;
  add: number = 0;
  addChoice: string = "album";
  id: number = 0;
  title: string = "";
  description: string = "";
  photo: any = "";
  photo_url: any = "";
  plus: string =
    "https://icons.iconarchive.com/icons/icons8/ios7/256/User-Interface-Plus-icon.png";

  clearInput() {
    this.id = 0;
    this.title = "";
    this.description = "";
    this.photo = "";
    this.photo_url = "";
  }

  changeTitle(args) {
    this.title = args.target.value;
  }
  changeDescription(args) {
    this.description = args.target.value;
  }
  changePhoto(photo) {
    this.photo = photo;
    this.photo_url = URL.createObjectURL(photo);
  }

  clickAddChoice(args: string) {
    this.addChoice = args;
  }

  // add this is controller open and close modal

  clickAdd() {
    if (!this.add) {
      this.add = 1;
    } else if (this.add === 1) {
      this.add = 2;
    } else {
      this.add = 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.nc-grid {
  display: flex;
  .nc-col {
    height: 100vh;
    &:first-child {
      width: 300px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      background-color: white;
    }
  }
}
</style>