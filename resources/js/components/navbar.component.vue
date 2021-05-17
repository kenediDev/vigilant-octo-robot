<template>
  <div>
    <div class="navbar-top">
      <img :src="logo" alt="" class="navbar-brand" />
      <div class="navbar-top-group">
        <div class="navbar-top-button">
          <icon :src="map" class="icon" />
          <div class="navbar-top-button-group">
            <span class="navbar-top-button-title">Alamat</span>
            <span class="navbar-top-button-description"
              >Mobil Sangkut, Lubuklinggau, Jl Yos Sudarso Kelurahan Watervang
              Kecamatan Lubukli Bengkel, Watervang, Lubuk Linggau Tim. I, Kota
              Lubuklinggau, Sumatera Selatan 31628</span
            >
          </div>
        </div>
        <div class="navbar-top-button">
          <icon :src="phone" class="icon" />
          <div class="navbar-top-button-group">
            <span class="navbar-top-button-title">Nomor Telepon</span>
            <span class="navbar-top-button-description" id="phone"
              >+62852-6848-8257</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="navbar-left">
        <a href="#" class="web" @click="clickRouter('home')">Beranda</a>
        <a href="#" class="web" @click="clickRouter('service')">Service</a>
        <a href="#" class="web" @click="clickRouter('testimoni')">Testimoni</a>
        <a href="#" class="web" @click="clickRouter('about')">Tentang Kami</a>
        <a href="#" class="web" @click="clickRouter('contact')">Kontak</a>
        <a href="#" class="mobile" @click="clickDrawer()">
          <i class="fas fa-bars"></i>
        </a>
      </div>
      <div class="navbar-right">
        <button v-if="!token" @click="clickRouter('login')">
          <span>Masuk</span>
          <i class="fas fa-arrow-right"></i>
        </button>
        <a v-else class="button-dashboard" @click="clickRouter('dashboard')">
          <icon :src="dashboard" class="dashboard-icon" />
        </a>
      </div>
    </div>
    <div
      :class="
        drawer === 1
          ? 'drawer'
          : drawer === 2
          ? 'drawer-close'
          : 'drawer-hidden'
      "
    >
      <div class="drawer-image">
        <img :src="logo" alt="" />
        <button @click="clickDrawer()">
          <i class="fas fa-arrow-left"></i>
        </button>
      </div>
      <div class="drawer-list">
        <a href="#" @click="clickRouter('home')" class="anchor-mobile"
          >Beranda</a
        >
        <a href="#" @click="clickRouter('service')" class="anchor-mobile"
          >Service</a
        >
        <a href="#" @click="clickRouter('testimoni')" class="anchor-mobile"
          >Testimoni</a
        >
        <a href="#" @click="clickRouter('about')" class="anchor-mobile"
          >Tentang Kami</a
        >
        <a href="#" @click="clickRouter('contact')" class="anchor-mobile"
          >Kontak</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import phone from "./assets/smartphone.svg";
import map from "./assets/map.svg";
import bars from "./assets/list.svg";
import dashboard from "./assets/dashboard (1).svg";

@Component({})
export default class NavbarComponent extends Vue {
  @Prop(String) token: string;

  dashboard = dashboard;

  phone = phone;
  map = map;
  bars = bars;
  logo: string = `http://${window.location.host}/image/default/Tanpa%20judul%20(5).png`;
  drawer: number = 0;
  clickDrawer() {
    if (!this.drawer) {
      this.drawer = 1;
    } else {
      if (this.drawer === 1) {
        this.drawer = 2;
      } else {
        this.drawer = 1;
      }
    }
  }
  clickRouter(args: string) {
    this.$router.push({ name: args });
  }
}
</script>


<style lang="scss" scoped>
a {
  text-decoration: none;
}
.navbar-top {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90px;
  background-color: white;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  .navbar-brand {
    height: 100%;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .navbar-top-group {
    display: flex;
    align-items: center;
    .navbar-top-button {
      display: flex;
      align-items: center;
      margin-right: 15px;
      .icon {
        width: 28px;
        height: 28px;
        margin-right: 18px;
      }
      .navbar-top-button-group {
        display: flex;
        flex-direction: column;
        .navbar-top-button-title {
          font-weight: bold;
          font-family: "Roboto Slab", serif;
          color: #808080;
        }
        span {
          color: black;
        }
        .navbar-top-button-description {
          width: 200px;
          height: 40px;
          overflow-y: auto;
        }
      }
    }
  }
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #2d2a2a;
  height: 60px;
  .navbar-left {
    a {
      margin-right: 10px;
      font-family: "Roboto Slab", serif;
      color: white;
    }
  }
  .navbar-right {
    button {
      border: none;
      outline: none;
      width: 120px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2d2a2a;
      border: solid 1px white;
      color: white;
      border-radius: 10px;
      font-weight: bold;
      span {
        margin-right: 10px;
      }
      transition: 500ms ease-in-out;
      &:hover {
        background-color: white;
        color: #2d2a2a;
      }
    }
  }
}

@media screen and (max-width: 812px) {
  .navbar-top {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding-bottom: 40px;
    .navbar-brand {
      height: 90px;
    }
    .navbar-top-group {
      justify-content: space-around;
      flex-direction: row;
      display: flex;
      align-items: center;
      width: 100%;
      .navbar-top-button {
        margin: 0;
        #phone {
          width: 140px;
        }
      }
    }
  }
}

@media screen and (max-width: 552px) {
  .navbar-top {
    padding-bottom: 0px;
    .navbar-top-group {
      align-items: initial;
      width: auto;
      flex-direction: column;
      height: 100%;
      .navbar-top-button {
        &:first-child {
          margin-bottom: 15px;
        }
      }
    }
  }
}

.mobile {
  display: none;
  visibility: hidden;
}

@media screen and (max-width: 628px) {
  .navbar {
    justify-content: space-between;
    padding: 0px 30px 0px 30px;
    .navbar-left {
      .web {
        display: none;
        visibility: hidden;
      }
      .mobile {
        display: block;
        visibility: visible;
        i {
          font-size: 26px;
        }
      }
    }
  }
}

// Drawer
.drawer,
.drawer-close {
  position: fixed;
  top: 0;
  width: 300px;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  .drawer-image {
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 200px;
      height: 80px;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    button {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      background-color: white;
      color: rgb(3, 172, 14);
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 10px;
    }
  }
  .drawer-list {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    a {
      background-color: white;
      height: 36px;
      width: 200px;
      padding: 0px 15px 0px 15px;
      display: flex;
      align-items: center;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      color: rgb(3, 172, 14);
      border-right: solid 2px rgb(3, 172, 14);
      margin-bottom: 5px;
      text-decoration: none;
      font-weight: bold;
    }
  }
}

.drawer {
  animation: drawer 1s forwards;
}

.drawer-close {
  animation: drawer-close 1s forwards;
}

.drawer-hidden {
  display: none;
  visibility: hidden;
}

@keyframes drawer {
  from {
    left: -1200px;
    top: 0;
  }
  to {
    left: 0;
    left: 0;
  }
}

@keyframes drawer-close {
  from {
    left: 0;
    left: 0;
  }
  to {
    left: -1200px;
    top: 0;
  }
}

@media screen and (max-width: 310px) {
  .drawer {
    width: 100%;
  }
}

.button-dashboard {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
}

.dashboard-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>