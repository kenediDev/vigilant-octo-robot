<template>
  <div class="contact">
    <div class="contact-title">
      <i class="fas fa-id-card-alt"></i>
      <span>Hubungi Kami</span>
    </div>
    <div class="list-contact">
      <div class="contact-address">
        <i class="fas fa-map-pin"></i>
        <div class="contact-address-content">
          <div class="contact-address-title">Alamat Bengkel Mobil Sangkut</div>
          <div class="contact-address-description">
            Mobil Sangkut, Lubuklinggau, Jl Yos Sudarso Kelurahan Watervang
            Kecamatan Lubukli Bengkel, Watervang, Lubuk Linggau Tim. I, Kota
            Lubuklinggau, Sumatera Selatan 31628
          </div>
        </div>
      </div>
      <div class="contact-phone">
        <i class="fas fa-phone-volume"></i>
        <div class="contact-phone-numbers">+62852-6848-8257</div>
      </div>
    </div>
    <div class="contact-titles">Kita ada disini</div>
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
export default class ContactComponent extends Vue {}
</script>

<style lang="scss" scoped>
.contact {
  background-color: white;
}
.contact-title {
  padding: 15px 15px 15px 30px;
  font-family: "Roboto Slab", serif;
  border-bottom: solid 1px #00000014;

  i {
    font-size: 30px;
    font-weight: bold;
  }
  span {
    font-size: 30px;
    margin-left: 10px;
  }
}
.list-contact {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 10px 40px 10px;
  .contact-address {
    display: flex;
    align-items: center;
    i {
      font-size: 30px;
      font-weight: bold;
      color: red;
    }
    .contact-address-content {
      margin-left: 15px;
      .contact-address-title,
      .contact-address-description {
        font-size: 16px;
        font-weight: bold;
        font-family: "Roboto Slab", serif;
      }
      .contact-address-title {
        color: rgb(80 173 42);
      }
      .contact-address-description {
        color: rgb(115 118 122);
      }
    }
  }
  .contact-phone {
    margin-top: 15px;
    display: flex;
    align-items: center;
    i {
      font-size: 30px;
      font-weight: bold;
      color: green;
    }
    .contact-phone-numbers {
      color: rgb(80 173 42);
      margin-left: 15px;
      font-size: 16px;
      font-weight: bold;
      font-family: "Roboto Slab", serif;
    }
  }
}

.contact-titles {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-family: "Roboto Slab", serif;
  text-transform: capitalize;
  margin-bottom: 10px;
}

.map {
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
}
</style>