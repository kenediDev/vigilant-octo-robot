<template>
  <div class="nc-col">
    <div class="nc-dashboard-header">
      <div class="nc-dashboard-input">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          autocomplete="off"
        />
      </div>
      <div class="nc-dashboard-right">
        <button>
          <i class="fas fa-envelope"></i>
        </button>
        <button>
          <i class="fas fa-bell"></i>
        </button>
        <img
          src="https://previews.123rf.com/images/onoontour/onoontour1508/onoontour150800007/43565698-pest-control-service-logo-cartoon-vector-illustration.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="nc-dashboard-content">
      <div class="nc-dashboard-content-title">
        bengkel mobil sangkut kota lubuklinggau
      </div>
      <div class="nc-dashboard-content-metadata">
        <i class="fas fa-calendar-alt"></i>
        <span class="nc-dashboard-moment">
          {{ new Date() | moment("dddd, MMMM Do YYYY") }}
        </span>
      </div>
    </div>
    <div class="nc-dashboard-screen">
      <album v-if="choice === 'album'" v-on:updateAlbum="updateAlbum($event)" />
      <vision
        v-else-if="choice === 'vision'"
        v-on:updateVision="updateVision($event)"
      />
      <service
        v-else-if="choice === 'service'"
        v-on:updateService="updateService($event)"
      />
      <testimonials
        v-else-if="choice === 'testimoni'"
        v-on:updateTestimonials="updateTestimonials($event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";
import service from "../dashboard.service.vue";
import testimonials from "../dashboard.testimonials.vue";
import vision from "../dashborad.vision.vue";
import album from "../dashboard.album.vue";
import {
  Album,
  Service,
  Testimonials,
  Vision,
} from "../../../store/types/interface";

@Component({
  components: {
    service,
    testimonials,
    vision,
    album,
  },
})
export default class RightColumn extends Vue {
  @Prop(String) choice: string;

  @Emit()
  updateAlbum(args: Album) {
    this.$emit("updateAlbum", args);
  }

  @Emit()
  updateService(args: Service) {
    this.$emit("updateService", args);
  }
  @Emit()
  updateVision(args: Vision) {
    this.$emit("updateVision", args);
  }
  @Emit()
  updateTestimonials(args: Testimonials) {
    this.$emit("updateTestimonials", args);
  }
}
</script>

<style lang="scss" scoped>
.nc-dashboard-header {
  display: flex;
  justify-content: space-between;
  height: 100px;
  background-color: #00ff5a7a;
  padding: 0px 30px 0px 30px;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-top: 30px;
  .nc-dashboard-input {
    width: 400px;
    height: 32px;
    background-color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    overflow: hidden;
    input {
      padding: 0px 15px 0px 15px;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }
  .nc-dashboard-right {
    display: flex;
    align-items: center;
    height: 32px;
    button {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: none;
      outline: none;
      cursor: pointer;
      margin: 0px 5px 0px 5px;
      background-color: white;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      i {
        color: #637381;
      }
    }
    img {
      margin-left: 20px;
      border-radius: 20px;
      width: 46px;
      height: 46px;
      background-position: center;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    }
  }
}

.nc-dashboard-content {
  padding: 20px 30px 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nc-dashboard-content-title {
    line-height: 40px;
    font-family: "Fredoka One", cursive;
    font-size: 40px;
    text-transform: capitalize;
    width: 460px;
  }
  .nc-dashboard-content-metadata {
    background-color: white;
    color: black;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    padding: 5px 20px 5px 20px;
    border-radius: 15px;
    i {
      font-size: 30px;
    }
    .nc-dashboard-moment {
      font-size: 20px;
      font-weight: bold;
      font-family: "Fira Sans Condensed", sans-serif;
    }
  }
}

.nc-dashboard-screen {
  padding: 0px 10px 0px 10px;
}
// <div class="nc-dashboard-header">
//       <input type="text" name="search" id="search" placeholder="Search" />
//       <div class="nc-dashboard-right">
//         <button>
//           <i class="fas fa-envelope"></i>
//         </button>
//         <button>
//           <i class="fas fa-bell"></i>
//         </button>
//         <img
//           src="https://previews.123rf.com/images/onoontour/onoontour1508/onoontour150800007/43565698-pest-control-service-logo-cartoon-vector-illustration.jpg"
//           alt=""
//         />
//       </div>
//     </div>
</style>