<template>
  <div class="product">
    <div v-for="(items, index) in product" :key="index">
      <img :src="items" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["product"]),
  },
})
export default class ProductComponent extends Vue {}
</script>
<style lang="scss" scoped>
.product {
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 90%;
    height: 50px;
  }
}
</style>