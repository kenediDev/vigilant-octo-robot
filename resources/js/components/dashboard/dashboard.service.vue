<template>
  <div class="nc-service">
    <div v-for="(items, index) in listService" :key="index">
      <div class="nc-service-card">
        <img :src="items.image" alt="" />
        <div class="nc-service-card-content">
          <div class="nc-service-card-group">
            <button @click="updateService(items)">Edit</button>
            <button @click="clickDestroy(items.id)">Hapus</button>
          </div>
          <div class="nc-service-card-title">
            {{ items.name }}
          </div>
          <div class="nc-service-card-description">{{ items.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AxiosResponse } from "axios";
import Vue from "vue";
import { Component, Emit } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Service } from "../../store/types/interface";

@Component({
  computed: {
    ...mapGetters(["listService"]),
  },
})
export default class DashboardService extends Vue {
  @Emit()
  updateService(args: Service) {
    this.$emit("updateService", args);
  }
  clickDestroy(args: string) {
    this.$store
      .dispatch("destroyService", args)
      .then((res: AxiosResponse<any>) => {
        this.$store.commit("MESSAGE", { message: res.data.message, valid: 1 });
        this.$store.commit("destroyService", args);
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
.nc-service {
  display: flex;
  flex-wrap: wrap;
  .nc-service-card {
    width: 330px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    margin: 3px;
    border-radius: 10px;
    overflow: hidden;
    .nc-service-card-content {
      padding: 10px;
    }
    .nc-service-card-group {
      display: flex;
      align-items: center;
      button {
        border: none;
        outline: none;
        background-color: white;
        width: 100px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        border-radius: 15px;
        font-weight: bold;
        &:last-child {
          background-color: #38c172;
          color: white;
          margin-left: 10px;
        }
      }
    }
    img {
      width: 100%;
      height: 200px;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .nc-service-card-title {
      font-family: "Anton", sans-serif;
      margin-top: 6px;
      margin-bottom: 6px;
    }
    .nc-service-card-description {
      height: 120px;
      overflow-y: auto;
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
</style>