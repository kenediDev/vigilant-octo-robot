<template>
  <div class="profile">
    <div
      class="background"
      style="
        background-image: url('https://www.braesidemotors.co.uk/wp-content/uploads/2018/10/servicing-maintenance.jpg');
      "
    ></div>
    <div class="header">
      <div class="author">
        <div class="author-group">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/businessman-707-1128970.png"
            alt=""
          />
          <div class="author-nickname">
            <div>Bengkel Mobil Sangkut Kota Lubuklinggau</div>
          </div>
        </div>
        <button>
          <i class="fas fa-edit"></i>
        </button>
      </div>
      <div class="description">
        Bengkel Mobil sangkut kini sudah menjadi bengkel mobil terbaik dikota
        lubuklinggau, untuk melayani anda ahli dalam memeliharaan untuk ban,
        layanan memeliharaan rem, baterai, shock, absorber, suspensi mobil,
        sistem pendingin udara, dan penggantian oli, dan kami menawarkan penuh
        dari mekanik terlatih dan proffesional yang merupakan spesialis di
        bidang masing - masing, mekanik kami siap memberikan anda saran,
        memberikan layanan terbaik dan dibengkel sangkut siap untuk melayan
        perbaikan kendaraan anda diluar lokasi kota lubuklinggau, dan kami akan
        mengirimkan mekanik yang handal untuk memperbaiki kendaraan anda.
      </div>
    </div>
    <ul class="breadcrumb-">
      <li>
        <a href="">Dashboard</a>
      </li>
      <li>
        <a href="">Beranda</a>
      </li>
    </ul>
    <service />
    <ul class="breadcrumb-" id="visi">
      <li>
        <a href="">Dashboard</a>
      </li>
      <li>
        <a href="">Beranda</a>
      </li>
      <li>
        <a href="">Visi</a>
      </li>
    </ul>
    <vision />
    <ul class="breadcrumb-">
      <li>
        <a href="">Dashboard</a>
      </li>
      <li>
        <a href="">Beranda</a>
      </li>
      <li>
        <a href="">Service</a>
      </li>
    </ul>
    <services />
    <ul class="breadcrumb-">
      <li>
        <a href="">Dashboard</a>
      </li>
      <li>
        <a href="">Beranda</a>
      </li>
      <li>
        <a href="">Tentang Kami</a>
      </li>
    </ul>
    <about />
    <ul class="breadcrumb-">
      <li>
        <a href="">Dashboard</a>
      </li>
      <li>
        <a href="">Beranda</a>
      </li>
      <li>
        <a href="">Tentang Kami</a>
      </li>
      <li>
        <a href="">Hubungi Kami</a>
      </li>
    </ul>
    <contact />
    <ul class="breadcrumb-">
      <li>
        <a href="">Dashboard</a>
      </li>
      <li>
        <a href="">Beranda</a>
      </li>
      <li>
        <a href="">Testimoni</a>
      </li>
    </ul>
    <album />
    <ul class="breadcrumb-">
      <li>
        <a href="">Dashboard</a>
      </li>
      <li>
        <a href="">Beranda</a>
      </li>
      <li>
        <a href="">Testimoni</a>
      </li>
    </ul>
    <testimoni />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import service from "../home/reason-choice.component.vue";
import vision from "../home/vision.component.vue";
import services from "../service/service.screen.vue";
import about from "../about/about.screen.vue";
import contact from "../contact/contact.screen.vue";
import testimoni from "../testimoni/testimoni.screen.vue";
import album from "../home/album.component.vue";

@Component({
  components: {
    service,
    vision,
    services,
    about,
    contact,
    testimoni,
    album,
  },
})
export default class ProfileComponent extends Vue {}
</script>
<style lang="scss" scoped>
.background {
  width: 100%;
  height: 400px;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header {
  .author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      border: none;
      outline: none;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(0, 171, 85);
      color: white;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
        rgb(145 158 171 / 24%) 0px 10px 10px -4px;
      -webkit-box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
        rgb(145 158 171 / 24%) 0px 10px 10px -4px;
      -moz-box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
        rgb(145 158 171 / 24%) 0px 10px 10px -4px;
      margin-right: 2rem;
      border-radius: 10px;
    }
  }
  .author-group {
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 20px;
    border-bottom: solid 1px rgb(104 119 133);
    img {
      width: 60px;
      height: 60px;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
      margin-right: 15px;
    }
    .author-nickname {
      color: black;
      font-family: "Be Vietnam", sans-serif;
      font-weight: bold;
    }
  }
  .description {
    margin-top: 0.35rem;
    font-family: "Be Vietnam", sans-serif;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 30px;
  }
}

.profile {
  margin: 0px 0px 0px 2px;
  background-color: white;
  position: relative;
}

.breadcrumb- {
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding: 0px 0px 0px 15px;
  li {
    display: inline-block;
    position: relative;
    background-color: transparent;
    padding: 5px 10px 5px 10px;
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      height: 50%;
      width: 100%;
      background: white;
      border-left: 1px solid rgb(0, 171, 85);
      border-right: 1px solid rgb(0, 171, 85);
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    }

    &::before {
      top: 0px;
      transform: skew(30deg);
      border-top: 1px solid rgb(0, 171, 85);
    }

    &::after {
      bottom: 0px;
      transform: skew(-30deg);
      border-bottom: 1px solid rgb(0, 171, 85);
    }
    a {
      color: rgb(0, 171, 85);
      text-decoration: none;
      position: relative;
      z-index: 1;
    }
  }
}

#visi {
    margin-top: 15px;
}
</style>