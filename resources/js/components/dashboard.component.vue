<template>
  <div class="dashboards">
    <div class="grids">
      <div class="cols">
        <div class="cols-image">
          <img :src="logo" alt="" />
        </div>
        <div class="cols-list">
          <div class="cols-list-header">
            <span>Dashboard</span>
          </div>
          <a
            href=""
            :class="
              choice === 'service' ? 'list-btn-active' : 'list-btn-unactive'
            "
          >
            <span class="btn-icons">
              <icon :src="service" class="icon-btn-acitve" />
            </span>
            <span>Service</span>
          </a>
          <a
            href=""
            :class="
              choice === 'testimoni' ? 'list-btn-active' : 'list-btn-unactive'
            "
          >
            <span class="btn-icons">
              <icon :src="testimonials" class="icon-btn-acitve" />
            </span>
            <span>Testimoni</span>
          </a>
          <a
            href=""
            :class="
              choice === 'vision' ? 'list-btn-active' : 'list-btn-unactive'
            "
          >
            <span class="btn-icons">
              <icon :src="vision" class="icon-btn-acitve" />
            </span>
            <span>Visi</span>
          </a>
          <a
            href=""
            :class="
              choice === 'album' ? 'list-btn-active' : 'list-btn-unactive'
            "
          >
            <span class="btn-icons">
              <icon :src="album" class="icon-btn-acitve" />
            </span>
            <span>Album</span>
          </a>
          <div class="list-button">
            <button class="dashboard-button">
              <span class="button-icon-">
                <icon :src="profile" class="button-icons" />
              </span>
              <span> Profil</span>
            </button>
            <button class="dashboard-button">
              <span class="button-icon-">
                <icon :src="email" class="button-icons" />
              </span>
              <span>Ubah Email</span>
            </button>
            <button class="dashboard-button">
              <span class="button-icon-">
                <icon :src="password" class="button-icons" />
              </span>
              <span>Ubah Kata Sandi</span>
            </button>
            <button class="dashboard-button">
              <span class="button-icon-">
                <icon :src="out" class="button-icons" />
              </span>
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </div>
      <div class="cols">
        <div class="cols-headers">
          <div class="cols-input">
            <icon :src="search" class="input-icon" />
            <input
              type="text"
              name="search"
              id="search"
              class="search"
              placeholder="Search"
              autocomplete="off"
            />
          </div>
          <div class="cols-group">
            <button>
              <icon :src="bell" class="button-icon" />
            </button>
            <div class="cols-images">
              <img
                src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"
                alt=""
              />
            </div>
            <button class="bars">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div class="cols-sub-headers">
          <button>Kembali ke beranda</button>
          <div class="metadata">
            <icon :src="clock" class="clock" />
            {{ new Date() | moment("LLLL") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import album from "./assets/album.svg";
import service from "./assets/ironing-board.svg";
import testimonials from "./assets/testimonials.svg";
import vision from "./assets/vision.svg";
import profile from "./assets/profile.svg";
import email from "./assets/email.svg";
import password from "./assets/privacy.svg";
import out from "./assets/logout.svg";
import bell from "./assets/bell.svg";
import search from "./assets/search.svg";
import clock from "./assets/digital-clock.svg";

@Component({})
export default class DashboardComponent extends Vue {
  logo: string = `http://${window.location.host}/image/default/Tanpa%20judul%20(5).png`;
  profile = profile;
  email = email;
  password = password;
  out = out;
  album = album;
  service = service;
  testimonials = testimonials;
  vision = vision;
  search = search;
  bell = bell;
  clock = clock;
  choice: string = "service";
  clickChoice(args: string) {
    this.choice = args;
  }
}
</script>

<style lang="scss" scoped>
.dashboards {
  background-color: white;
}
.cols-list {
  display: flex;
  flex-direction: column;
  .cols-list-header {
    font-weight: bold;
    font-family: "Roboto Slab", serif;
    padding: 0px 30px 0px 30px;
    margin-bottom: 15px;
  }
  a {
    margin-bottom: 1.5px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    text-decoration: none;
    padding: 0px 15px 0px 15px;
    .btn-icons {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      background-color: white;
      margin-right: 15px;
      .icon-btn-acitve {
        width: 20px;
        height: 20px;
      }
    }
  }
  .list-btn-unactive {
    color: rgb(99, 115, 129);
    &:hover {
      background-color: #29262608;
    }
  }
  .list-btn-active {
    background-color: rgba(0, 171, 85, 0.08);
    color: rgb(0, 171, 85);
    border-right: solid 2px rgb(0, 171, 85);
  }
  .list-button {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .dashboard-button {
      background-color: white;
      width: 80%;
      height: 36px;
      border: none;
      outline: none;
      margin-bottom: 5px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      text-align: left;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      padding: 0px 10px 0px 10px;
      border-right: solid 2px rgb(0, 171, 85);
      color: rgb(0, 171, 85);
      display: flex;
      align-items: center;
      border-left: solid 2px rgb(0, 171, 85);
      .button-icon- {
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        background-color: white;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        margin-right: 15px;
        .button-icons {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

.grids {
  display: flex;
  padding: 0px 30px 0px 30px;
  .cols {
    width: 80%;
    height: 100vh;
    &:first-child {
      position: sticky;
      position: -webkit-sticky;
      top: 20px;
      width: 340px;
      height: 94vh;
      border-radius: 15px;
      background-color: white;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      .cols-image {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 80%;
          height: 90px;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }
    &:last-child {
      margin-top: 20px;
      padding: 0px 20px 0px 20px;
    }
  }
}

.cols-headers {
  padding: 0px 20px 0px 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 80px;
  display: flex;
  background-color: rgb(0 171 85 / 32%);
  align-items: center;
  justify-content: space-between;
  .cols-input {
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    width: 400px;
    height: 34px;
    border-radius: 15px;
    overflow: hidden;
    .input-icon {
      width: 20px;
      height: 20px;
      margin: 0px 10px 0px 10px;
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }
  .cols-group {
    display: flex;
    align-items: center;
    button {
      border: none;
      outline: none;
      background-color: white;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      border-radius: 10px;
      .button-icon {
        width: 20px;
        height: 20px;
      }
    }
    .cols-images {
      width: 40px;
      height: 40px;
      border-radius: 15px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      padding: 3px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
      }
    }
  }
}

.cols-sub-headers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px 0px 0px;
  button {
    border: none;
    outline: none;
    background-color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    width: 180px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    font-weight: bold;
    font-family: "Roboto Condensed", sans-serif;
  }
  .metadata {
    cursor: default;
    .clock {
      width: 40px;
      height: 40px;
      margin-right: 15px;
    }
    font-family: "Roboto Condensed", sans-serif;
  }
}

.bars {
  display: none;
  visibility: hidden;
}

@media screen and (max-width: 943px) {
  .bars {
    visibility: visible;
    background-color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .grids {
    .cols {
      width: 100%;
      &:first-child {
        display: none;
        visibility: hidden;
      }
    }
  }
}

@media screen and (max-width: 719px) {
  .cols-headers {
    .cols-input {
      width: 300px;
    }
  }
}

@media screen and (max-width: 629px) {
  .grids {
    padding: 0;
    .cols {
      margin: 0 !important;
      width: 100%;
      padding: 0 !important;
    }
  }
  .cols-headers {
    border-radius: 0 !important;
  }
  .cols-sub-headers {
    padding: 15px 15px 0px 15px;
  }
}

@media screen and (max-width: 523px) {
  .cols-headers {
    .cols-input {
      width: 200px;
    }
  }
}

@media screen and (max-width: 475px) {
  .cols-sub-headers {
    flex-direction: column;
    padding: 0 !important;
    button {
      width: 100%;
      border-radius: 0;
      margin-bottom: 10px;
    }
  }
}

@media screen and (max-width: 419px) {
  .cols-headers {
    padding: 10px 0px 10px 0px;
    flex-direction: column;
    height: auto;
    .cols-input {
      width: 90%;
      height: 34px !important;
      margin-bottom: 10px;
    }
  }
}
</style>
