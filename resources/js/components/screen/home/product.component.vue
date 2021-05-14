<template>
  <div>
    <div class="product">
      <div v-for="(items, index) in listImage" :key="index">
        <img :src="items" alt="" />
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
    ...mapGetters(["listImage"]),
  },
})
export default class ProductComponent extends Vue {}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: white;
  /* width */
  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  img {
    width: 400px;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    animation: cars 3s infinite;
    margin: 0px 15px 0px 15px;
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
</style>