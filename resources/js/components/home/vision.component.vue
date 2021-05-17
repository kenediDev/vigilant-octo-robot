<template>
  <div class="vision">
    <div class="list-vision">
      <div v-for="(items, index) in vision" :key="index">
        <div class="vision-card">
          <div class="vision-card-title">
            {{ items.name }}
          </div>
          <img :src="items.url" alt="" />
          <div class="vision-card-content">
            {{ items.description }}
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
    ...mapGetters(["vision"]),
  },
})
export default class VisionComponent extends Vue {}
</script>


<style lang="scss" scoped>
.vision {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
  .list-vision {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .vision-card {
      width: 400px;
      .vision-card-title {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        font-weight: bold;
        font-family: "Roboto Slab", serif;
        margin-bottom: 10px;
      }
      img {
        width: 100%;
        height: 200px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
      .vision-card-content {
        padding: 10px;
      }
    }
  }
}

@media screen and (max-width: 435px) {
  .vision {
    .list-vision {
      .vision-card {
        width: 100%;
      }
    }
  }
}
</style>