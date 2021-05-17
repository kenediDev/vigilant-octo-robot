<template>
  <div>
    <div class="contact">
      <div class="contact-header">
        <div class="contact-icons">
          <icon :src="map" class="contact-icon" />
        </div>
        <h4>Hubungi Kami</h4>
      </div>
      <div class="contact-content">
        <div class="contact-group">
          <div class="contact-box-icon">
            <icon :src="address" class="contact-icon-" />
          </div>
          <div class="contact-contents">
            <div class="contact-title">Alamat Bengkel Mobil Sangkut</div>
            <div class="contact-description">
              Mobil Sangkut, Lubuklinggau, Jl Yos Sudarso Kelurahan Watervang
              Kecamatan Lubukli Bengkel, Watervang, Lubuk Linggau Tim. I, Kota
              Lubuklinggau, Sumatera Selatan 31628
            </div>
          </div>
        </div>
        <div class="contact-group">
          <div class="contact-box-icon">
            <icon :src="phone" class="contact-icon-" />
          </div>
          <div class="contact-contents">
            <div class="contact-title">Nomor Telepon</div>
            <div class="contact-description">+62852-6848-8257</div>
          </div>
        </div>
      </div>
    </div>
    <l-map :zoom="zoom" :center="center" class="map">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker
        :lat-lng="[-3.277172931762514, 102.89721314952342]"
        :icon="icon"
      />
    </l-map>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import map from "./assets/placeholder.svg";
import address from "./assets/placeholder (2).svg";
import phone from "./assets/smartphone (1).svg";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import { icon } from "leaflet";

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data() {
    return {
      zoom: 16,
      center: [-3.2773900308819237, 102.89643123445194],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: icon({
        iconUrl:
          "https://cdn3.iconfinder.com/data/icons/bunch-of-stuff/126/slice87-512.png",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
    };
  },
})
export default class ContactComponent extends Vue {
  map = map;
  phone = phone;
  address = address;
}
</script>

<style lang="scss" scoped>
.contact {
  padding-top: 20px;
  background-color: white;
  .contact-header {
    display: flex;
    height: 80px;
    padding: 0px 20px 0px 20px;
    align-items: center;
    .contact-icons {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      margin-right: 20px;
    }
    .contact-icon {
      width: 40px;
      height: 40px;
    }
    h4 {
      font-weight: bold;
    }
  }
}

.contact-content {
  width: 80%;
  margin: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  .contact-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .contact-box-icon {
      width: 50px;
      height: 50px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      margin-right: 15px;
      .contact-icon- {
        width: 40px;
        height: 40px;
      }
    }
    .contact-contents {
      display: flex;
      flex-direction: column;
      .contact-title {
        font-weight: bold;
        font-family: "Roboto Slab", serif;
      }
    }
  }
}

.map {
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
}
</style>