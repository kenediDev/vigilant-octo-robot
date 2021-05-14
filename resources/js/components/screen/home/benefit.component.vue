<template>
  <div class="benefit">
    <div class="benefit-title">
      Benefit yang bisa kamu dapat kalau mobilmu dipasang stiker Bengkel mobil
      sangkut
    </div>
    <button class="btn-benefit">Cek Benefit</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class BenefitComponent extends Vue {}
</script>

<style lang="scss" scoped>
.benefit-title {
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
  text-transform: capitalize;
  font-family: "Roboto Slab", serif;
}

.btn-benefit {
  width: 120px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  margin: auto;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
}

.benefit {
  padding-bottom: 40px;
  background-color: white;
}
</style>