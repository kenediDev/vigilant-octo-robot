<template>
  <div>
    <div class="nc-testimonials">
      <div v-for="(items, index) in listTestimonials" :key="index">
        <div class="nc-testimonials-card">
          <button class="nc-testimonials-btn" @click="clickDropdown(items.id)">
            <i class="fas fa-cog"></i>
          </button>
          <div
            :class="
              dropdown === items.id
                ? 'nc-testimonials-dropdown'
                : 'nc-testimonials-dropdown-hidden'
            "
          >
            <div class="nc-testimonials-dropdown-menu">
              <a href="#">Edit</a>
              <a href="#" @click="clickDestroy(items.id)">Hapus</a>
            </div>
          </div>
          <div class="nc-testimonials-card-image">
            <img :src="items.avatar" alt="" />
          </div>
          <div class="nc-testimonials-card-content">
            <div class="nc-testimonials-title">{{ items.name }}</div>
            <div class="nc-testimonials-card-description">
              <p>
                {{ items.comment }}
              </p>
            </div>
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
    ...mapGetters(["listTestimonials"]),
  },
})
export default class DashboardTestimonials extends Vue {
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
      .dispatch("destroyTestimonials", args)
      .then((res: AxiosResponse<any>) => {
        this.$store.commit("MESSAGE", { message: res.data.message, valid: 1 });
        this.$store.commit("destroyTestimonials", args);
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
.nc-testimonials {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .nc-testimonials-card {
    margin: 4px;
    position: relative;
    width: 320px;
    padding-top: 80px;
    .nc-testimonials-card-image {
      width: 60px;
      height: 60px;
      position: absolute;
      top: 30%;
      border-radius: 40px;
      overflow: hidden;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      img {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    .nc-testimonials-card-content {
      background-color: white;
      color: black;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      padding: 10px;
      border-radius: 20px;
      .nc-testimonials-title {
        font-family: "Anton", sans-serif;
        text-align: center;
        padding: 20px 0px 10px 0px;
      }
      .nc-testimonials-card-description {
        height: 80px;
        overflow-y: auto;
        font-family: "Fira Sans Condensed", sans-serif;
        word-wrap: break-word;
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
    .nc-testimonials-btn {
      position: absolute;
      top: 0;
      right: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      background-color: white;
      border: none;
      outline: none;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      i {
        color: #38c172;
      }
    }
    .nc-testimonials-dropdown {
      transition: 1s ease-in;
      position: absolute;
      display: flex;
      visibility: visible;
      top: 40px;
      right: 0px;
      background-color: white;
      width: 120px;
      border-radius: 15px;
      padding: 10px 10px 15px 10px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      .nc-testimonials-dropdown-menu {
        display: flex;
        flex-direction: column;
        a {
          text-decoration: none;
          color: #38c172;
          margin-bottom: 5px;
        }
      }
    }
    .nc-testimonials-dropdown-hidden {
      display: none;
      visibility: hidden;
    }
  }
}
</style>