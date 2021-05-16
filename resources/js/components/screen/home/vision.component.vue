<template>
  <div>
    <div class="vision">
      <div class="vision-list">
        <div v-for="(items, index) in listVision" :key="index">
          <div class="vision-card">
            <div
              v-if="active"
              class="visi-dashboard-group"
              id="visi-dashboard-another"
            >
              <button>
                <i class="fas fa-edit"></i>
                <span>Edit</span>
              </button>
              <button>
                <i class="fas fa-trash"></i>
                <span>Hapus</span>
              </button>
            </div>
            <div class="vision-card-title">
              {{ items.name }}
            </div>
            <img :src="items.url" alt="" />
            <div class="vision-card-description">
              {{ items.description }}
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
    ...mapGetters(["listVision"]),
  },
})
export default class VisionComponent extends Vue {
  active: boolean = false;
  beforeMount() {
    if (this.$route.name === "dashboard") {
      this.active = true;
    } else {
      this.active = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.vision {
  background-color: white;
  padding-top: 50px;
  padding-bottom: 50px;
  .vision-list {
    display: flex;
    justify-content: space-around;
    .vision-card {
      width: 360px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
        height: 200px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
      .vision-card-title {
        margin-bottom: 10px;
        font-family: "Roboto Slab", serif;
        font-size: 16px;
        font-weight: bold;
      }
      .vision-card-description {
        padding-top: 5px;
      }
    }
  }
}

.visi-dashboard-group {
  display: flex;
  align-items: center;
  button {
    border: none;
    outline: none;
    height: 28px;
    padding: 0px 15px 0px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 171, 85);
    color: white;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
      rgb(145 158 171 / 24%) 0px 10px 10px -4px;
    -webkit-box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
      rgb(145 158 171 / 24%) 0px 10px 10px -4px;
    -moz-box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
      rgb(145 158 171 / 24%) 0px 10px 10px -4px;
    border-radius: 10px;
    margin-right: 2.5px;
    &:last-child {
      background-color: red;
      margin-left: 2.5px;
      color: white;
    }
    span {
      margin-left: 0.75rem;
      font-family: "Be Vietnam", sans-serif;
    }
  }
}

#visi-dashboard-another {
  margin-bottom: 10px;
}
</style>