<template>
  <div class="nc-album">
    <div v-for="(items, index) in listAlbum" :key="index">
      <div class="nc-album-card">
        <div
          class="nc-album-card-image"
          :style="'background-image:url(' + items.photo + ');'"
        >
          <div class="nc-album-card-group">
            <button><i class="fas fa-edit"></i></button
            ><button @click="clickDestroy(items.id)">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <div class="nc-album-card-content">
          <div class="nc-album-card-title">{{ items.title }}</div>
          <div class="nc-album-card-description">
            <p>{{ items.caption }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AxiosResponse } from "axios";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["listAlbum"]),
  },
})
export default class DashboardAlbum extends Vue {
  clickDestroy(args: number) {
    this.$store
      .dispatch("destroyAlbum", args)
      .then((res: AxiosResponse<any>) => {
        this.$store.commit("MESSAGE", { message: res.data.message, valid: 1 });
        this.$store.commit("destroyAlbum", args);
      })
      .catch((err) => {
        if (err.response.data === false) {
          localStorage.clear();
          window.location.reload();
        }
        this.$store.commit("MESSAGE", {
          message: err.response.data.message,
          valid: 2,
        });
      });
  }
}
</script>

<style lang="scss" scoped>
.nc-album {
  display: flex;
  flex-wrap: wrap;
  .nc-album-card {
    width: 360px;
    word-wrap: break-word;
    margin: 2px;
    border: solid 2px #38c1722e;
    background-color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    overflow: hidden;
    border-radius: 20px;
    .nc-album-card-image {
      width: 100%;
      height: 260px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      display: flex;
      align-items: flex-end;
      border-radius: 20px;
      .nc-album-card-group {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        margin-left: 10px;
        button {
          background-color: white;
          border-radius: 10px;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          outline: none;
          box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
          font-weight: bold;
          &:first-child {
            margin-left: 3px;
          }
          &:last-child {
            margin-left: 10px;
            background-color: #38c172;
            color: white;
          }
        }
      }
    }
    .nc-album-card-content {
      padding: 15px;
      .nc-album-card-title {
        font-family: "Anton", sans-serif;
        margin-bottom: 10px;
      }
      .nc-album-card-description {
        height: 140px;
        overflow-y: auto;
        color: #5c6a78;
        &::-webkit-scrollbar {
          width: 2px;
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
      }
    }
  }
}
</style>