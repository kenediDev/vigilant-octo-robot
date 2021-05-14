<template>
  <div>
    <div class="choice-title">Alasan Memilih Kami</div>
    <div class="choice-list">
      <div v-for="(items, index) in choice" :key="index">
        <div class="choice-card">
          <div class="choice-image-card">
            <img :src="items.url" alt="" />
          </div>
          <div class="choice-content-card">
            <div class="choice-title-card">{{ items.name }}</div>
            <div class="choice-description-card">{{ items.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="another-choice-list">
      <div v-for="(items, index) in anotherChoice" :key="index">
        <div class="choice-card">
          <div class="choice-image-card">
            <img :src="items.url" alt="" />
          </div>
          <div class="choice-content-card">
            <div class="choice-title-card">{{ items.name }}</div>
            <div class="choice-description-card">{{ items.description }}</div>
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
    ...mapGetters(["choice", "anotherChoice"]),
  },
})
export default class ChoiceComponent extends Vue {}
</script>

<style lang="scss" scoped>
.choice-title {
  padding: 40px 0px 40px 0px;
  text-align: center;
  font-size: 30px;
  font-family: "Roboto Slab", serif;
  background-color: white;
}

.choice-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  padding-bottom: 80px;
}

.choice-card {
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .choice-image-card {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    border-radius: 15px;
    img {
      width: 50px;
      height: 50px;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .choice-content-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    .choice-title-card {
      font-weight: bold;
      padding-top: 10px;
      padding-bottom: 10px;
      font-family: 'Roboto Slab', serif;
    }
  }
}

.another-choice-list {
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  padding-top: 60px ;
  padding-bottom: 60px;
  .choice-card {
      width: 300px;
      margin: 0px 10px 0px 10px;
      text-align: center;
      color: white;
      .choice-image-card {
          background-color: white;
      }
  }
}
</style>