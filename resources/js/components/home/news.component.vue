<template>
  <div class="news">
    <h6 class="news-title">Berita & Blog</h6>
    <h3 class="news-description">Berita terbaru dari blog kami</h3>
    <div class="news-list">
      <div v-for="(items, index) in blog" :key="index">
        <div class="news-card">
          <icon :src="post" class="news-card-icon" />
          <img :src="items.background" alt="" />
          <div class="news-card-author">
            <div class="news-card-author-image">
              <img :src="items.avatar" alt="" />
            </div>
            <div class="news-card-nickname">
              <a href="">{{ items.name }}</a>
              <span class="news-metadata">{{
                items.date | moment("from", "now")
              }}</span>
            </div>
          </div>
          <div class="news-card-content">
            <p>{{ items.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="news-button-more">
      <button>Lihat lebih banyak</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import post from "../assets/blog.svg";

@Component({
  computed: {
    ...mapGetters(["blog"]),
  },
})
export default class NewsComponent extends Vue {
  post = post;
}
</script>

<style lang="scss" scoped>
.news {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
  .news-title {
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: #50ad2a;
    font-family: "Roboto Slab", serif;
  }
  .news-description {
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
  }
}

.news-list {
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
  flex-wrap: wrap;
  .news-card {
    position: relative;
    width: 360px;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding-bottom: 30px;
    .news-card-icon {
      background-color: white;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      padding: 5px;
      border-radius: 15px;
      position: absolute;
      top: 52%;
      left: 90%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      z-index: 1;
      cursor: pointer;
      transition: 500ms ease-in-out;
      &:hover {
        background-color: rgb(3, 172, 14);
      }
    }
    img {
      width: 100%;
      height: 200px;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .news-card-author {
      display: flex;
      margin-top: 5px;
      margin-bottom: 5px;
      padding: 0px 10px 0px 10px;
      .news-card-author-image {
        width: 50px;
        height: 50px;
        padding: 5px;
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        margin-right: 15px;
        border-radius: 15px;
        img {
          width: 100%;
          height: 100%;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 15px;
        }
      }
      .news-card-nickname {
        display: flex;
        flex-direction: column;
      }
    }
    .news-card-content {
      padding: 0px 10px 20px 10px;
      height: 90px;
      overflow-y: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
}

.news-button-more {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  button {
    border: none;
    outline: none;
    background-color: rgb(3, 172, 14);
    color: white;
    width: 180px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    transition: 500ms ease-in-out;
    &:hover {
      background-color: white;
      color: rgb(3, 172, 14);
      border-radius: 15px;
    }
  }
}

@media screen and (max-width: 399px) {
  .news-list {
    .news-card {
      margin: 0;
      margin-bottom: 10px;
      width: 100%;
    }
  }
}
</style>