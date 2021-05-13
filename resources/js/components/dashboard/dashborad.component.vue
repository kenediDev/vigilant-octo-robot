<template>
  <div>
    <div class="nc-grid">
      <left
        :logo="logo"
        v-on:clickAdd="clickAdd()"
        v-on:changeChoiceScreen="changeChoiceScreen($event)"
        :choice="choiceScreen"
      />
      <right
        :choice="choiceScreen"
        v-on:updateAlbum="updateAlbum($event)"
        v-on:updateService="updateService($event)"
        v-on:updateTestimonials="updateTestimonials($event)"
        v-on:updateVision="updateVision($event)"
      />
    </div>
    <modal
      :add="add"
      :addChoice="addChoice"
      :title="title"
      :description="description"
      :photo="photo"
      :photo_url="photo_url"
      :plus="plus"
      :from="from"
      v-on:changeFrom="changeFrom($event)"
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
import {
  Album,
  Service,
  Testimonials,
  Vision,
} from "../../store/types/interface";

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
  from: string = "";
  description: string = "";
  photo: any = "";
  photo_url: any = "";
  choiceScreen: string = "";
  plus: string =
    "https://icons.iconarchive.com/icons/icons8/ios7/256/User-Interface-Plus-icon.png";

  changeChoiceScreen(args: string) {
    this.choiceScreen = args;
  }

  clearInput() {
    this.id = 0;
    this.title = "";
    this.description = "";
    this.photo = "";
    this.photo_url = "";
    this.from = "";
  }

  changeFrom(args) {
    this.from = args.target.value;
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

  updateAlbum(args: Album) {
    this.id = args.id;
    this.title = args.title;
    this.description = args.caption;
    this.photo_url = `http://${window.location.host}/${args.photo}`;
    this.add = 1;
    this.addChoice = "album";
  }

  updateService(args: Service) {
    this.id = args.id;
    this.title = args.name;
    this.description = args.description;
    this.photo_url = `http://${window.location.host}/${args.image}`;
    this.add = 1;
    this.addChoice = "service";
  }

  updateVision(args: Vision) {
    this.id = args.id;
    this.title = args.title;
    this.description = args.caption;
    this.photo_url = args.image;
    this.add = 1;
    this.addChoice = "vision";
  }

  updateTestimonials(args: Testimonials) {
    this.id = args.id;
    this.title = args.name;
    this.description = args.comment;
    this.from = args.from;
    this.photo_url = `http://${window.location.host}/${args.avatar}`;
    this.add = 1;
    this.addChoice = "testimoni";
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
      width: 400px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      background-color: white;
      position: sticky;
      position: -webkit-sticky;
      top: 10px;
    }
    &:last-child {
      width: 100%;
    }
  }
}
</style>