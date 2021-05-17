<template>
  <div class="testimoni">
    <div class="testimoni-content">
      <div class="testimoni-title">Testimoni</div>
      <h2 class="testimoni-sub-title">Klien & Umpan Balik yang Senang</h2>
    </div>
    <div class="testimoni-list">
      <div
        v-for="(items, index) in !active
          ? testimoni.data.slice(check, count)
          : testimoni.data"
        :key="index"
      >
        <div class="testimoni-card">
          <div class="testimoni-card-icons">
            <icon :src="qoute" class="testimoni-card-icon" />
          </div>
          <div class="testimoni-card-content">
            {{ items.comment }}
          </div>
          <div class="testimoni-card-author">
            <div class="testimoni-card-image">
              <img :src="items.avatar" alt="" />
            </div>
            <div class="testimoni-card-nickname">
              <a href="">{{ items.name }}</a>
              <span>{{ items.date | moment("from", "now") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!active">
      <div class="testimoni-dots" v-if="testimoni.data[0]">
        <i
          class="fas fa-arrow-left"
          id="testioni-dots-btn"
          @click="clickPrev()"
        ></i>
        <div class="testimoni-dots-group">
          <span
            class="fas fa-circle"
            :id="
              index === page
                ? 'testimoni-dots-btn-active'
                : 'testimoni-dots-btn'
            "
            v-for="(items, index) in testimoni.perPage()"
            :key="index"
            @click="clickCheck(index, testimoni.perPage())"
            >{{ items }}</span
          >
        </div>
        <i
          class="fas fa-arrow-right"
          id="testioni-dots-btn"
          @click="clickNext(testimoni.perPage())"
        ></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import quote from "../assets/quotation.svg";
import $ from "jquery";

@Component({
  computed: {
    ...mapGetters(["testimoni"]),
  },
})
export default class TestimoniComponent extends Vue {
  active: boolean = false;
  qoute = quote;
  check: number = 0;
  page: number = 0;
  count: number = 3;
  MoreThanOne: number = 3;
  scroll: number = 0;
  oneClick(args: number) {
    if (this.page !== args) {
      this.check = 3 * args;
      this.page = args;
      this.count = this.count + 3;
    }
  }
  prevOneClick(args: number) {
    this.check = this.check - 3;
    this.page = args;
    this.count = this.count - 3;
  }
  clickCheck(args: number, kwargs: any[]) {
    if (this.page <= args) {
      let _t: number = args;
      _t--;
      if (this.page === _t) {
        this.oneClick(args);
      } else {
        //   this get more one number
        this.page = args;
        this.check = 3 * this.page;
        this.MoreThanOne = this.MoreThanOne + this.check;
        this.count = this.MoreThanOne;
      }
      let page = 22 * this.page;
      this.scroll = page;

      // Reset Default
      this.MoreThanOne = 3;
    } else {
      let _l: number = args;
      _l++;
      if (this.page === _l) {
        this.prevOneClick(args);
      } else {
        //   this back more one number
        this.page = args;
        this.check = 3 * this.page;
        this.MoreThanOne = this.MoreThanOne + this.check;
        this.count = this.MoreThanOne;
      }
      this.scroll = this.scroll - (this.page + 24);
      this.MoreThanOne = 3;
    }
    let scroll = this.scroll;
    $(document).ready(function () {
      $(".testimoni-dots-group").scrollLeft(scroll);
    });
  }
  clickNext(args: any[]) {
    if (args[this.page]) {
      if (!this.page) {
        this.page++;
        this.check = 3;
        this.count = this.count + 3;
      } else {
        this.page++;
        this.check = 3 + this.check;
        this.count = this.count + 3;
      }
    }
  }
  clickPrev() {
    if (this.page !== 0) {
      this.page--;
      this.check = this.check - 3;
      this.count = this.count - 3;
    }
  }

  beforeUpdate() {
    if (this.$route.name === "testimoni") {
      this.active = true;
    } else {
      this.active = false;
    }
  }

  beforeMount() {
    if (this.$route.name === "testimoni") {
      this.active = true;
    } else {
      this.active = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.testimoni {
  background-color: white;
  padding-top: 50px;
  padding-bottom: 50px;
  .testimoni-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .testimoni-title {
      font-weight: bold;
      text-transform: uppercase;
      font-family: "Roboto Slab", serif;
    }
    .testimoni-sub-title {
      font-size: 28px;
      font-weight: bold;
      font-family: "Roboto Slab", serif;
      text-align: center;
    }
  }
}

.testimoni-list {
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.testimoni-card {
  width: 360px;
  margin: 0px 5px 30px 5px;
  background-color: white;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  padding: 10px 5px 10px 5px;
  position: relative;
  border-radius: 10px;
  .testimoni-card-icons {
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -20px;
    left: 20px;
    .testimoni-card-icon {
      width: 30px;
      height: 30px;
    }
  }
  .testimoni-card-content {
    margin-top: 25px;
    margin-bottom: 15px;
    padding: 20px;
    height: 90px;
    overflow-y: auto;
    color: #8d8d8d;
  }
  .testimoni-card-author {
    display: flex;
    align-items: center;
    padding: 0px 15px 0px 15px;
    .testimoni-card-image {
      width: 50px;
      height: 50px;
      padding: 10px;
      background-color: white;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      border-radius: 15px;
      margin-right: 15px;
      img {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 15px;
      }
    }
    .testimoni-card-nickname {
      display: flex;
      flex-direction: column;
      line-height: 20px;
      a {
        font-size: 20px;
        font-weight: bold;
        color: black;
        text-decoration: none;
      }
    }
  }
}

.testimoni-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  .testimoni-dots-group {
    display: flex;
    align-items: center;
    width: 160px;
    overflow-x: auto;
    padding-bottom: 4px;
    &::-webkit-scrollbar {
      width: 1px;
      height: 2px;
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
  #testimoni-dots-btn {
    cursor: pointer;
    color: #dfe0e3;
    border: solid 2px #dfe0e3;
    padding: 1px;
    margin-right: 3px;
    border-radius: 20px;
  }
  #testimoni-dots-btn-active {
    border: solid 2px rgb(3, 172, 14);
    padding: 1px;
    cursor: pointer;
    color: rgb(3, 172, 14);
    margin-right: 3px;
    border-radius: 20px;
  }
}

#testioni-dots-btn {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  background-color: white;
  color: rgb(3, 172, 14);
  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-left: 10px;
  }
}

@media screen and (max-width: 373px) {
  .testimoni-card {
    width: 300px;
    margin: 0;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 309px) {
  .testimoni-card {
    width: 260px;
  }
}
</style>