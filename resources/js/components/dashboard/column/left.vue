<template>
  <div class="nc-col">
    <img :src="logo" alt="" class="nc-logo" />
    <div class="nc-list">
      <div class="nc-list-avatar">
        <div class="nc-list-avatars">
          <img
            class="nc-list-image"
            src="https://awsimages.detik.net.id/community/media/visual/2020/08/13/avatar-the-last-airbender.webp"
            alt=""
          />
          <div class="nc-list-author">
            <a href="#">Nickname</a>
            <span>Admin</span>
          </div>
        </div>
        <i class="fas fa-cog"></i>
      </div>
      <div class="nc-list-title">Dashboard</div>
      <div class="nc-list-menu">
        <a href="" id="active">
          <i class="fas fa-cog"></i>
          <span>Service</span>
        </a>
        <a href="">
          <i class="fas fa-images"></i>
          <span>Album</span>
        </a>
        <a href="">
          <i class="fas fa-book"></i>
          <span>Visi</span>
        </a>
        <a href="">
          <i class="fas fa-paperclip"></i>
          <span>Testimoni</span>
        </a>
        <button @click="clickAdd()">
          Add
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";

@Component({})
export default class LeftColumn extends Vue {
  @Prop(String) logo: string;

  @Emit()
  clickAdd() {
    this.$emit("clickAdd");
  }
}
</script>

<style lang="scss" scoped>
.nc-logo {
  width: 100%;
  height: 80px;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.nc-list-avatar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  margin: 20px 20px 20px 20px;
  background-color: #0606060d;
  border-radius: 15px;
  .nc-list-avatars {
    display: flex;
    align-items: center;
    .nc-list-image {
      width: 50px !important;
      height: 50px !important;
      background-size: cover;
      border-radius: 10px;
      background-position: center;
      background-repeat: no-repeat;
      margin-right: 10px;
    }
    .nc-list-author {
      display: flex;
      flex-direction: column;
      line-height: 18px;
      cursor: default;
      a {
        cursor: default;
        text-decoration: none;
        color: black;
        font-weight: bold;
      }
      span {
        color: #06060678;
        font-weight: bold;
      }
    }
  }
  i {
    width: 32px;
    height: 32px;
    background-color: #38c172;
    color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
  }
}

.nc-list {
  .nc-list-title {
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 20px;
  }
  .nc-list-menu {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    a {
      span {
        width: 60%;
        padding: 0px 0px 0px 15px;
      }

      align-items: center;
      text-decoration: none;
      font-family: "Josefin Sans", sans-serif;
      font-weight: bold;
      display: flex;
      padding: 0px 20px 0px 20px;
      height: 40px;
      color: rgb(99, 115, 129);
      &:hover {
        background-color: #06060605;
        border-right: solid 2px #0606061f;
      }
      i {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border-radius: 10px;
      }
    }
    #active {
      color: #38c172;
      border-right: solid 2px #38c172;
      background-color: #38c1721f;
    }
    button {
      border: none;
      outline: none;
      cursor: pointer;
      padding: 7px 30px 7px 30px;
      background-color: white;
      color: #38c172;
      font-weight: bold;
      width: 80%;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      border-right: solid 2px #38c172;
    }
  }
}
</style>