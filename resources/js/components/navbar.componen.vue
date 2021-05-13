<template>
  <div class="nc-navbar">
    <img :src="logo" alt="" />
    <div class="nc-navbar-right">
      <a href="">Beranda</a>
      <a href="">Service</a>
      <a href="">Testimoni</a>
      <a href="">Tentang Kami</a>
      <a href="">Kontak</a>
      <div class="nc-divider"></div>
      <button>
        Log in
        <i class="fas fa-arrow-right"></i>
      </button>
      <i class="fas fa-bars" id="nc-bars"></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class NavbarComponent extends Vue {
  logo: string = `http://${window.location.host}/image/default/Tanpa judul (5).png`;
}
</script>

<style lang="scss" scoped>
.nc-navbar {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
  background-color: white;
  z-index: 99;
  img {
    height: 70px;
  }
  .nc-navbar-right {
    display: flex;
    align-items: center;
    a {
      margin: 0px 10px 0px 10px;
      color: #38c172;
      font-weight: bold;
    }
    .nc-divider {
      width: 2px;
      background-color: #0000004f;
      margin: 0px 20px 0px 20px;
      height: 32px;
    }
    button {
      border: none;
      outline: none;
      background-color: transparent;
      color: #38c172;
      text-transform: capitalize;
      font-weight: bold;
      width: 100px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      i {
        margin-left: 10px;
        color: #38c172;
      }
      transition: 500ms ease-in-out;
      &:hover {
        background-color: #38c722;
        color: white;
        i {
          color: white;
        }
      }
    }
  }
}

#nc-bars {
  display: none;
  visibility: hidden;
}

@media screen and (max-width: 919px) {
  #nc-bars {
    display: block;
    visibility: visible;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #38c722;
    color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
  }
  .nc-navbar {
    .nc-navbar-right {
      a {
        display: none;
        visibility: hidden;
      }
      .nc-divider {
        display: none;
        visibility: hidden;
      }
      button {
        display: none;
        visibility: hidden;
      }
    }
  }
}
</style>