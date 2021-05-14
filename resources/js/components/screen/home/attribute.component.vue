<template>
  <div>
    <div class="attribute">
      <div v-for="(items, index) in listDefault" :key="index">
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
    ...mapGetters(["listDefault"]),
  },
})
export default class AttributeComponent extends Vue {}
</script>

<style lang="scss" scoped>
.attribute {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
  img {
      margin: 0px 15px 0px 15px;
  }
}
</style>