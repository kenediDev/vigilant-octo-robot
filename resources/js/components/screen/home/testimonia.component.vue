<template>
  <div>
    <div class="testimonis">
      <div class="testimoni-title">Apa Kata Mereka</div>
      <div class="testimoni">
        <div class="list-testimoni">
          <div v-for="(items, index) in listTestimoni" :key="index">
            <div class="testimoni-card">
              <div class="testimoni-card-header">
                <img :src="items.avatar" alt="" />
                <div class="testimoni-card-author">
                  <a href="">{{ items.name }}</a>
                  <span class="testimoni-card-metadata">{{
                    items.date | moment("from", "now")
                  }}</span>
                </div>
              </div>
              <div class="testimoni-card-comment">{{ items.comment }}</div>
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
    ...mapGetters(["listTestimoni"]),
  },
})
export default class TestimoniComponent extends Vue {}
</script>

<style lang="scss" scoped>
.testimonis {
  padding-bottom: 40px;
  padding-top: 40px;
  background-color: white;
  .testimoni-title {
    font-size: 30px;
    font-family: "Roboto Slab", serif;
    text-align: center;
    padding-bottom: 40px;
  }
}
.testimoni {
  max-height: 500px;
  overflow-y: auto;
  /* width */
  &::-webkit-scrollbar {
    width: 1px;
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
  .list-testimoni {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    .testimoni-card {
      width: 400px;
      word-wrap: break-word;
      background-color: white;
      border: solid 1px #00000014;
      padding: 10px;
      .testimoni-card-header {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        border-bottom: solid 1px #00000014;
        padding-bottom: 5px;
        img {
          width: 40px;
          height: 40px;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 80px;
          margin-right: 15px;
        }
        .testimoni-card-author {
          display: flex;
          flex-direction: column;
          line-height: 18px;
        }
      }
      .testimoni-card-comment {
        height: 70px;
        overflow-y: auto;
      }
    }
  }
}
</style>