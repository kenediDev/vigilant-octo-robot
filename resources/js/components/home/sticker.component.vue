<template>
  <div class="sticker">
    <div class="sticker-list">
      <div v-for="(items, index) in cars" :key="index">
        <img :src="items" alt="" />
      </div>
    </div>
    <div class="sticker-content">
      <div class="sticker-title">
        <h4>
          Benefit yang bisa kamu dapat kalau mobilmu dipasang stiker Bengkel
          mobil sangkut
        </h4>
      </div>
      <button>Cek Benefit</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["cars"]),
  },
})
export default class StickerComponent extends Vue {}
</script>

<style lang="scss" scoped>
.sticker {
  padding-top: 40px;
  background-color: white;
  .sticker-list {
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 1px;
      height: 1px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    // /* Handle */
    // &::-webkit-scrollbar-thumb {
    //   background: #888;
    // }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    img {
      animation: cars 2s infinite;
      width: 260px;
      height: 160px;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}

@keyframes cars {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(150px, 0);
  }

  80% {
    transform: translate(-150px, 0);
  }
}

.sticker-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #2b2a2a;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-top: 20px;
  .sticker-title {
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
    color: white;
  }
  button {
    border: none;
    outline: none;
    background-color: white;
    border-radius: 15px;
    width: 160px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    font-weight: bold;
  }
}
</style>