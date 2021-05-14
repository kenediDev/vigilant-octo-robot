<template>
  <div>
    <div class="vision">
      <div class="vision-list">
        <div v-for="(items, index) in listVision" :key="index">
          <div class="vision-card">
            <div class="vision-card-title">
              {{ items.name }}
            </div>
            <img :src="items.url" alt="" />
            <div class="vision-card-description">
              {{ items.description }}
            </div>
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
    ...mapGetters(["listVision"]),
  },
})
export default class VisionComponent extends Vue {}
</script>

<style lang="scss" scoped>
.vision {
  background-color: white;
  padding-top: 50px;
  padding-bottom: 50px;
  .vision-list {
    display: flex;
    justify-content: space-around;
    .vision-card {
      width: 360px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
        height: 200px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
      .vision-card-title {
        margin-bottom: 10px;
        font-family: "Roboto Slab", serif;
        font-size: 16px;
        font-weight: bold;
      }
      .vision-card-description {
        padding-top: 5px;
      }
    }
  }
}
</style>