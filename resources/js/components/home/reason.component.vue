<template>
  <div class="reason">
    <div class="reason-title">Alasan Memilih Kami</div>
    <div class="reasons">
      <div v-for="(items, index) in choice" :key="index">
        <div class="reason-card">
          <div class="reason-card-icons">
            <icon class="reason-card-icon" :src="items.url" />
          </div>
          <div class="reason-card-content">
            <div class="reason-card-title">{{ items.name }}</div>
            <div class="reason-card-description">{{ items.description }}</div>
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
    ...mapGetters(["choice"]),
  },
})
export default class ReasonComponent extends Vue {}
</script>

<style lang="scss" scoped>
.reason {
  background-color: white;
  .reason-title {
    padding-top: 60px;
    padding-bottom: 60px;
    font-size: 30px;
    text-align: center;
    text-transform: capitalize;
    font-family: "Roboto Slab", serif;
  }
  .reasons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .reason-card {
      display: flex;
      width: 400px;
      margin-bottom: 25px;
      .reason-card-icons {
        width: 50px;
        height: 50px;
        border-radius: 15px;
        padding: 10px;
        background-color: white;
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        .reason-card-icon {
          width: 50px;
          height: 50px;
        }
      }
      .reason-card-title {
        font-weight: bold;
        font-family: "Roboto Slab", serif;
      }
    }
  }
}

@media screen and (max-width: 407px) {
  .reason {
    .reasons {
      .reason-card {
        width: 96%;
        .reason-card-icons {
            margin: 0px 10px 0px 10px;
        }
      }
    }
  }
}
</style>