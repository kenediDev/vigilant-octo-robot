<template>
  <div class="service">
    <div class="list-service">
      <div v-for="(items, index) in listService" :key="index">
        <div class="service-card">
          <img :src="items.url" alt="" />
          <div
            v-if="active"
            class="service-dashboard-group"
            id="service-dashboard-another"
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
          <div class="service-card-content">
            <div class="service-card-title">
              {{ items.name }}
            </div>
            <div class="service-card-description">{{ items.description }}</div>
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
    ...mapGetters(["listService"]),
  },
})
export default class ServiceScreen extends Vue {
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
.service {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: white;
  .list-service {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .service-card {
      width: 360px;
      margin: 0px 8px 15px 8px;
      img {
        width: 100%;
        height: 180px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
      .service-card-content {
        .service-card-title {
          font-size: 18px;
          font-weight: bold;
          font-family: "Roboto Slab", serif;
          margin-bottom: 5px;
          text-transform: uppercase;
        }
      }
    }
  }
}

.service-dashboard-group {
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

#service-dashboard-another {
  margin: 5px 0px 5px 0px;
}
</style>