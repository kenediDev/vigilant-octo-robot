<template>
  <div class="service">
    <div class="list-service">
      <div v-for="(items, index) in listService" :key="index">
        <div class="service-card">
          <img :src="items.url" alt="" />
          <div class="service-card-content">
            <div class="service-card-title">
              {{ items.name }}
            </div>
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
    ...mapGetters(["listService"]),
  },
})
export default class ServiceScreen extends Vue {}
</script>

<style lang="scss" scoped>
.service {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: white;
  .list-service {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .service-card {
      width: 360px;
      margin: 0px 8px 15px 8px;
      img {
        width: 100%;
        height: 180px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
      .service-card-content {
        .service-card-title {
          font-size: 18px;
          font-weight: bold;
          font-family: "Roboto Slab", serif;
          margin-bottom: 5px;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>