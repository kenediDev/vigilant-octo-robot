<template>
  <div>
    <div class="section-grid">
      <div class="section-col">
        <div class="header">
          <div class="sub-header">Bengkel mobil sangkut</div>
          <div class="sub-header">kota lubuklinggau</div>
        </div>
        <div class="description">
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
        <div class="group">
          <button>Telepon</button>
          <button>Buka Rute</button>
        </div>
      </div>
      <div
        class="section-col"
        style="
          background-image: url('https://www.braesidemotors.co.uk/wp-content/uploads/2018/10/servicing-maintenance.jpg');
        "
      ></div>
    </div>
    <attribute />
    <choice />
    <product />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import choice from "./home/reason-choice.component.vue";
import attribute from "./home/attribute.component.vue";
import product from "./home/product.component.vue";

@Component({
  components: {
    choice,
    attribute,
    product,
  },
})
export default class HomeScreen extends Vue {}
</script>

<style lang="scss" scoped>
.section-grid {
  display: flex;
  .section-col {
    width: 50%;
    height: 50vh;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    .header {
      line-height: 30px;
      margin-bottom: 15px;
      .sub-header {
        font-size: 30px;
        font-family: "Roboto Slab", serif;
        text-transform: capitalize;
        font-weight: bold;
      }
    }
    &:first-child {
      padding: 50px 0px 0px 30px;
    }
    .group {
      display: flex;
      align-items: center;
      margin-top: 15px;
      button {
        border: none;
        outline: none;
        width: 100px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(80 173 42);
        color: white;
        border-radius: 12px;
        &:last-child {
          margin-left: 15px;
          box-shadow: 0px 0px 10px -4px rgb(80 173 42);
          -webkit-box-shadow: 0px 0px 10px -4px rgb(80 173 42);
          -moz-box-shadow: 0px 0px 10px -4px rgb(80 173 42);
          transition: 500ms ease-in-out;
          &:hover {
            background-color: white;
            box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.75);
            color: rgb(80 173 42);
          }
        }
        &:first-child {
          background-color: white;
          color: rgb(80 173 42);
          border: solid 1px rgb(80 173 42);
        }
      }
    }
    .description {
      font-family: "Roboto", sans-serif;
    }
  }
}
</style>