<template>
  <div>
    <div class="section-navbar">
      <img :src="logo" alt="" />
      <div class="section-navbar-right">
        <a href="#" @click="clickRouter('home')">Beranda</a>
        <a href="#" @click="clickRouter('service')">Service</a>
        <a href="#" @click="clickRouter('testimoni')">Testimoni</a>
        <a href="#" @click="clickRouter('about')">Tentang Kami</a>
        <a href="#" @click="clickRouter('contact')">Kontak</a>
        <div class="divider"></div>
        <button @click="clickRouter('login')" v-if="!token" class="btn-web">
          <span>Masuk</span><i class="fas fa-arrow-right"></i>
        </button>
        <button v-else class="bars">
          <i class="fas fa-bars"></i>
        </button>
        <button class="btn-mobile">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
@Component({
  computed: {
    ...mapGetters(["token"]),
  },
})
export default class NavbarComponent extends Vue {
  logo: string = `http://${window.location.host}/image/default/Tanpa judul (5).png`;
  clickRouter(args: string) {
    this.$router.push({
      name: args,
    });
  }
}
</script>

<style lang="scss" scoped>
.section-navbar {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  img {
    height: 80px;
  }
  .section-navbar-right {
    display: flex;
    align-items: center;
    a {
      margin: 0px 15px 0px 0px;
      color: rgb(115 118 122);
      text-decoration: none;
    }
    .divider {
      width: 1px;
      height: 40px;
      background-color: rgb(224 224 224);
      margin: 0px 20px 0px 15px;
    }
    button {
      width: 100px;
      height: 32px;
      border: none;
      outline: none;
      background-color: transparent;
      border: solid 1px rgb(80 173 42);
      color: rgb(80 173 42);
      transition: 500ms ease-in-out;
      &:hover {
        background-color: rgb(80 173 42);
        color: white;
      }
      font-weight: bold;
      border-radius: 15px;
      i {
        margin-left: 15px;
      }
    }
  }
}

.bars {
  width: 32px !important;
  height: 32px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none !important;
  &:hover {
    background-color: white !important;
    color: rgb(80 173 42) !important;
  }
  i {
    margin: 0 !important;
    font-size: 18px !important;
  }
}

.btn-mobile {
  display: none;
  visibility: hidden;
}

@media screen and (max-width: 757px) {
  .bars,
  .btn-web {
    display: none;
    visibility: hidden;
  }
  .btn-mobile {
    visibility: visible;
    display: block;
    border: none !important;
    background-color: transparent !important;
    font-size: 20px;
    &:hover {
      background-color: white !important;
      color: rgb(80 173 42) !important;
    }
  }
  .section-navbar {
    .section-navbar-right {
      a {
        display: none;
        visibility: hidden;
      }
      .divider {
        display: none;
        visibility: hidden;
      }
    }
  }
}
</style>