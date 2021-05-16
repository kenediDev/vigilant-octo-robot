<template>
  <div>
    <div class="gri">
      <div class="co">
        <img :src="logo" alt="" class="logo" />
        <button class="button-profil">
          Profile <i class="fas fa-user-circle"></i>
        </button>
        <ul class="list">
          <li class="header">Dashboard</li>
          <li class="sub-header" id="active">
            <i class="fas fa-cogs"></i>
            <a href="">Service</a>
          </li>
          <li class="sub-header">
            <i class="fas fa-images"></i>
            <a href="">Album</a>
          </li>
          <li class="sub-header">
            <i class="fas fa-comments"></i>
            <a href="">Testimoni</a>
          </li>
          <li class="sub-header">
            <i class="fas fa-paperclip"></i>
            <a href="">Visi</a>
          </li>
        </ul>
        <div class="list-general">
          <button>Ubah Email <i class="fas fa-at"></i></button>
          <button>Ubah Kata Sandi <i class="fas fa-key"></i></button>
          <button>Keluar <i class="fas fa-sign-out-alt"></i></button>
        </div>
      </div>
      <div class="co">
        <profil />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import profil from "./dashboard/profile.component.vue";

@Component({
  components: {
    profil,
  },
})
export default class DashboardScreen extends Vue {
  logo: string = `http://${window.location.host}/image/default/Tanpa judul (5).png`;
}
</script>

<style lang="scss" scoped>
.gri {
  display: flex;
  .co {
    width: 100%;
    width: 80%;
    &:first-child {
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      background-color: white;
      width: 300px;
      height: 100vh;
      position: -webkit-sticky;
      position: sticky;
      top: 0;
    }
  }
}

.logo {
  width: 100%;
  height: 80px;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  .header {
    padding: 0px 15px 5px 15px;
    text-transform: uppercase;
    font-family: "Be Vietnam", sans-serif;
    font-weight: bold;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    cursor: default;
  }
  .sub-header {
    padding: 8px 15px 8px 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0.15rem;
    i {
      margin-right: 10px;
      color: rgb(104 119 133);
      width: 28px;
      height: 28px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    }
    a {
      color: rgb(104 119 133);
      text-decoration: none;
    }
    transition: 250ms ease-in-out;
    &:hover {
      background-color: rgba(0, 171, 85, 0.08);
      border-right: solid 2px rgb(0, 171, 85);
      i {
        color: rgb(0, 171, 85);
      }
    }
  }
  #active {
    background-color: rgba(0, 171, 85, 0.08);
    border-right: solid 2px rgb(0, 171, 85);
    i {
      color: rgb(0, 171, 85);
    }
  }
}

.button-profil {
  border: none;
  outline: none;
  background-color: rgb(0, 171, 85);
  color: white;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  width: 80%;
  padding: 5px 15px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  margin-bottom: 0.75rem;
  border-right: solid 2px white;
  i {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: rgb(0, 171, 85);
    border-radius: 5px;
  }
}

.list-general {
  display: flex;
  flex-direction: column;
  button {
    border: none;
    outline: none;
    background-color: white;
    color: rgb(0, 171, 85);
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    width: 80%;
    padding: 5px 15px 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-bottom: 0.3rem;
    border-right: solid 2px rgb(0, 171, 85);
  }
}
</style>