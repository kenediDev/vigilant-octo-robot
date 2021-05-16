<template>
  <div class="consultation">
    <img
      src="http://csrautomotive.com/wp-content/uploads/2021/02/istockphoto-1165665234-612x612-1.jpg"
      alt=""
    />
    <div class="consultation-content">
      <div class="consultation-title">Konsultasi Gratis</div>
      <div class="consultation-phone">+62852-6848-8257</div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class Consultation extends Vue {}
</script>

<style lang="scss" scoped>
.consultation {
  display: flex;
  align-items: center;
  img {
    width: 50%;
    height: 500px;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .consultation-content {
    width: 50%;
    height: 500px;
    font-size: 40px;
    font-weight: bold;
    background-color: #f79f24;
    color: #343a40;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .consultation-title {
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 861px) {
  .consultation {
    flex-direction: column;
    img {
      width: 100%;
      height: 300px;
    }
    .consultation-content {
      width: 100%;
      height: 300px;
    }
  }
}

@media screen and (max-width: 403px) {
  .consultation {
    .consultation-content {
      font-size: 20px;
      height: 140px;
    }
  }
}
</style>