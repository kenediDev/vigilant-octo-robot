<template>
  <div class="service">
    <div class="list-service">
      <div v-for="(items, index) in service" :key="index">
        <div class="service-card">
          <img :src="items.url" alt="" />
          <div class="service-card-content">
            <div class="service-card-title">{{ items.name }}</div>
            <div class="service-card-description">{{ items.description }}</div>
          </div>
        </div>
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
    ...mapGetters(["service"]),
  },
})
export default class ServiceComponent extends Vue {}
</script>

<style lang="scss" scoped>
.service {
  padding-top: 30px;
  padding-bottom: 60px;
  background-color: white;
  .list-service {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .service-card {
      width: 360px;
      margin: 0px 10px 10px 10px;
      img {
        width: 100%;
        height: 180px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
      }
      .service-card-content {
        display: flex;
        flex-direction: column;
        .service-card-title {
          font-weight: bold;
          font-family: "Roboto Slab", serif;
        }
      }
    }
  }
}

@media screen and (max-width: 391px) {
  .service {
    padding-top: 0;
    .list-service {
      .service-card {
        width: 100%;
        margin: 0;
        margin-bottom: 10px;
        .service-card-content {
          padding: 0px 5px 0px 5px;
        }
      }
    }
  }
}
</style>