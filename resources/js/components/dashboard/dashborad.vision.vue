<template>
  <div class="nc-vision">
    <div v-for="(items, index) in listVision" :key="index">
      <div class="nc-vision-card" style="">
        <div
          class="nc-vision-card-image"
          :style="'background-image: url(' + items.image + ')'"
        >
          <button @click="clickDropdown(items.id)">
            <i class="fas fa-cog"></i>
            <div
              :class="
                dropdown === items.id
                  ? 'nc-vision-dropdown'
                  : 'nc-vision-dropdown-hidden'
              "
            >
              <div class="nc-vision-dropdown-menu">
                <a>Edit</a>
                <a @click="clickDestroy(items.id)">Hapus</a>
              </div>
            </div>
          </button>
        </div>
        <div class="nc-vision-card-content">
          <div class="nc-vision-card-avatar">
            <img
              src="https://image.freepik.com/free-vector/woman-as-customer-service-vector_28257-8.jpg"
              alt=""
            />
          </div>
          <div class="nc-vision-card-title">{{ items.title }}</div>
          <div class="nc-vision-card-description">
            {{ items.caption }}
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
    ...mapGetters(["listVision"]),
  },
})
export default class DashboardVision extends Vue {
  dropdown: number = 0;
  clickDropdown(args: number) {
    if (this.dropdown) {
      if (this.dropdown !== args) {
        this.dropdown = args;
      } else {
        this.dropdown = 0;
      }
    } else {
      this.dropdown = args;
    }
  }
  clickDestroy(args: number) {
    this.$store
      .dispatch("destroyVision", args)
      .then((res: AxiosResponse<any>) => {
        this.$store.commit("MESSAGE", { message: res.data.message, valid: 1 });
        this.$store.commit("destroyVision", args);
        this.dropdown = 0;
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
.nc-vision {
  display: flex;
  flex-wrap: wrap;
}
.nc-vision-card {
  margin: 3px;
  width: 320px;
  word-wrap: break-word;
  position: relative;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  height: 420px;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  border: solid 1px #38c17238;
  .nc-vision-card-image {
    height: 200px;
    width: 100%;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    button {
      width: 40px;
      height: 40px;
      background-color: #38c172;
      border: none;
      outline: none;
      cursor: pointer;
      border-bottom-left-radius: 20px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      i {
        color: white;
      }
      .nc-vision-dropdown {
        position: absolute;
        top: 44px;
        right: 5px;
        flex-direction: column;
        background-color: white;
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        padding: 20px 0px 20px 0px;
        .nc-vision-dropdown-menu {
          display: flex;
          flex-direction: column;
          a {
            text-align: left;
            width: 80px;
            font-family: "Fira Sans Condensed", sans-serif;
            color: black;
            background-color: #38c172;
            padding: 0px 0px 0px 10px;
            text-decoration: none;
            color: white;
            margin-bottom: 4px;
          }
        }
      }
      .nc-vision-dropdown-hidden {
        display: none;
        visibility: hidden;
      }
    }
  }
  .nc-vision-card-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 36%;
    padding: 10px;
    .nc-vision-card-title {
      font-family: "Anton", sans-serif;
    }
    .nc-vision-card-avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin: auto;
        width: 60px;
        height: 60px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 80px;
      }
    }
    .nc-vision-card-description {
      height: 140px;
      overflow-y: auto;
      font-family: "Fira Sans Condensed", sans-serif;
      color: #00000082;
      &::-webkit-scrollbar {
        width: 2px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }
}

// <div class="nc-vision-dropdown">
//           <div class="nc-vision-dropdown-menu">
//             <a href="">Edit</a>
//             <a href="">Hapus</a>
//           </div>
//         </div>
</style>