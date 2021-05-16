<template>
  <div class="project">
    <div class="project-group">
      <div class="project-value">45</div>
      <div class="project-title">Tahun Pengalaman</div>
    </div>
    <div class="project-group">
      <div class="project-value">8,500</div>
      <div class="project-title">Proyek Selesai</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ProductComponent extends Vue {}
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 40px 10px 40px 10px;
  background-color: #212529;
  .project-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 10px 0px 10px;
    .project-value {
      font-size: 30px;
      font-weight: bold;
      color: #0fff0b;
    }
    .project-title {
      font-size: 20px;
      font-weight: bold;
      font-family: "Roboto Slab", serif;
      color: white;
    }
  }
}

@media screen and (max-width: 382px) {
  .project {
    .project-group {
      margin-bottom: 15px;
    }
  }
}
</style>