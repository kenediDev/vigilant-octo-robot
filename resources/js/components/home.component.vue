<template>
  <div>
    <div
      class="header"
      @mouseover="mouseOver()"
      :style="'background-image:url(' + car[carousel] + ');'"
    >
      <div class="content">
        <div class="contents">
          <div class="title">
            <span>Bengkel Mobil Sangkut</span>
            <span>Kota Lubuklinggau</span>
          </div>
          <div class="description">
            Bengkel Mobil sangkut kini sudah menjadi bengkel mobil terbaik
            dikota lubuklinggau, untuk melayani anda ahli dalam memeliharaan
            untuk ban, layanan memeliharaan rem, baterai, shock, absorber,
            suspensi mobil, sistem pendingin udara, dan penggantian oli, dan
            kami menawarkan penuh dari mekanik terlatih dan proffesional yang
            merupakan spesialis di bidang masing - masing, mekanik kami siap
            memberikan anda saran, memberikan layanan terbaik dan dibengkel
            sangkut siap untuk melayan perbaikan kendaraan anda diluar lokasi
            kota lubuklinggau, dan kami akan mengirimkan mekanik yang handal
            untuk memperbaiki kendaraan anda.
          </div>
          <div class="group">
            <button>Telepon</button>
            <button>Buka Rute</button>
          </div>
        </div>
      </div>
    </div>
    <product />
    <reason />
    <owner />
    <project />
    <consultation />
    <testimoni />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import reason from "./home/reason.component.vue";
import product from "./home/product.component.vue";
import owner from "./home/owner.component.vue";
import project from "./home/project.component.vue";
import consultation from "./home/consultation.component.vue";
import testimoni from "./home/testimoni.component.vue";

@Component({
  components: {
    reason,
    product,
    owner,
    project,
    consultation,
    testimoni,
  },
  computed: {
    ...mapGetters(["car"]),
  },
})
export default class LoginComponent extends Vue {
  carousel: number = 0;
  chance: boolean = true;
  mouseOver() {
    if (this.chance) {
      if (this.carousel <= 2) {
        this.carousel++;
      }
      if (this.carousel === 2) {
        this.chance = false;
      }
    } else {
      if (this.carousel >= 0) {
        this.carousel--;
      }
      if (this.carousel === 0) {
        this.chance = true;
      }
    }
    console.log(this.carousel, this.chance);
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 90vh;
  width: 100%;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    background-color: #0000004a;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 30px;
    .contents {
      flex-direction: column;
      width: 50%;
      .title {
        font-size: 30px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        color: white;
        font-family: "Roboto Slab", serif;
      }
      .description {
        color: white;
        font-size: 16px;
      }
      .group {
        margin-top: 15px;
        display: flex;
        align-items: center;
        button {
          border: none;
          outline: none;
          background-color: white;
          box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
          width: 120px;
          height: 32px;
          border-radius: 5px;
          font-weight: bold;
          &:first-child {
            margin-right: 15px;
          }
          &:last-child {
            background-color: rgb(3, 172, 14);
            color: white;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 964px) {
  .header {
    .content {
      .contents {
        width: 80%;
      }
    }
  }
}

@media screen and (max-width: 602px) {
  .header {
    height: 70vh;
    .content {
      padding: 15px;
      .contents {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 490px) {
  .header {
    height: 100%;
    .content {
      height: 100%;
      .contents {
        width: 100%;
        .title {
          font-size: 22px;
        }
        .description {
          font-size: 14px;
        }
      }
    }
  }
}
</style>