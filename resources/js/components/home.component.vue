<template>
  <div>
    <div class="nc-grid">
      <div class="nc-col">
        <div class="nc-col-caption">
          <div class="nc-caption-">Bengkel mobil sangkut</div>
          <div class="nc-caption-s">
            Kota lubuklinggau <i class="fas fa-cogs"></i>
          </div>
        </div>
        <div class="nc-description">
          Bengkel Mobil sangkut kini sudah menjadi bengkel mobil terbaik dikota
          lubuklinggau, untuk melayani anda ahli dalam memeliharaan untuk ban,
          layanan memeliharaan rem, baterai, shock, absorber, suspensi mobil,
          sistem pendingin udara, dan penggantian oli, dan kami menawarkan penuh
          dari mekanik terlatih dan proffesional yang merupakan spesialis di
          bidang masing - masing, mekanik kami siap memberikan anda saran,
          memberikan layanan terbaik dan dibengkel sangkut siap untuk melayan
          perbaikan kendaraan anda diluar lokasi kota lubuklinggau, dan kami
          akan mengirimkan mekanik yang handal untuk memperbaiki kendaraan anda.
        </div>
        <div class="nc-group">
          <button>Telepon</button>
          <button>Buka Rute</button>
        </div>
      </div>
      <div
        class="nc-col"
        style="
          background-image: url('https://image.freepik.com/free-photo/asian-car-mechanic-auto-repair-shop-is-checking-engine-customers-who-use-cars-repair-services-mechanic-will-work-garage_140555-248.jpg');
        "
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class HomeComponent extends Vue {}
</script>

<style lang="scss" scoped>
.nc-grid {
  display: flex;
  .nc-col {
    width: 50%;
    height: 70vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0px 30px 0px 30px;
    &:last-child {
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .nc-col-caption {
      line-height: 36px;
      .nc-caption-,
      .nc-caption-s {
        cursor: default;
        font-size: 32px;
        font-family: "Bungee Shade", cursive;
        display: flex;
        align-items: center;
      }
      .nc-caption- {
        color: #e3932f;
      }
      i {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        font-size: 16px;
        border-radius: 10px;
        color: #e3932f;
        margin-left: 10px;
      }
    }
    .nc-description {
      font-weight: bold;
      font-size: 16px;
      font-family: "Sofadi One", cursive;
    }
    .nc-group {
      display: flex;
      align-items: center;
      margin-top: 10px;
      button {
        border: none;
        outline: none;
        background-color: white;
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        width: 120px;
        border-radius: 10px;
        height: 32px;
        font-weight: bold;
        &:last-child {
          margin-left: 15px;
          background-color: #e3932f;
          color: white;
          transition: 500ms ease-in-out;
          &:hover {
            background-color: white;
            color: #e3932f;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1148px) {
  .nc-grid {
    .nc-col {
      .nc-col-caption {
        .nc-caption-,
        .nc-caption-s {
          font-size: 28px;
        }
      }
    }
  }
}

@media screen and (max-width: 1020px) {
  .nc-grid {
    flex-direction: column;
    .nc-col {
      width: 100%;
      height: 100%;
      padding: 40px 20px 40px 20px;
      &:last-child {
        visibility: hidden;
        display: none;
      }
    }
  }
}

@media screen and (max-width: 494px) {
  .nc-grid {
    .nc-col {
      .nc-col-caption {
        .nc-caption-,
        .nc-caption-s {
          font-size: 24px;
        }
      }
    }
  }
}

@media screen and (max-width: 402px) {
  .nc-grid {
    .nc-col {
      .nc-col-caption {
        .nc-caption-,
        .nc-caption-s {
          font-size: 24px;
          i {
            display: none;
            visibility: hidden;
          }
        }
      }
    }
  }
}
</style>