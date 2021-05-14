<template>
  <div>
    <div class="testimoni">
      <div class="list-testimoni">
        <div v-for="(items, index) in listTestimoni" :key="index">
          <div class="testimoni-card">
            <i class="fas fa-quote-left" id="testimoni-icon"></i>
            <div class="testimoni-card-image">
              <img :src="items.avatar" alt="" />
            </div>
            <div class="testimoni-card-author">
              <a href="">{{ items.name }}</a>
              <span class="testimoni-metadata">{{
                items.date | moment("from", "now")
              }}</span>
            </div>
            <div class="testimoni-card-comment">
              {{ items.comment }}
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
export default class TestimoniScreen extends Vue {}
</script>

<style lang="scss" scoped>
.testimoni {
  .list-testimoni {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .testimoni-card {
      position: relative;
      padding: 20px 0px 20px 0px;
      width: 240px;
      border: solid 1px #38c17252;
      height: 300px;
      margin: 5px;
      background-color: white;
      border-radius: 15px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      word-wrap: break-word;
      .testimoni-card-image {
        width: 65px;
        height: 65px;
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
          border-radius: 20px;
        }
      }
      .testimoni-card-author {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .testimoni-card-comment {
        padding: 0px 10px 0px 10px;
        height: 70px;
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
            background: #38c17252;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      }
    }
  }
}

#testimoni-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  color: rgb(80 173 42);
}
</style>