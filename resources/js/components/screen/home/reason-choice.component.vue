<template>
  <div>
    <div class="choice-title">Alasan Memilih Kami</div>
    <div class="choice-list" :id="active ? 'choice-list-active' : ''">
      <div v-for="(items, index) in choice" :key="index">
        <div class="choice-card" :id="active ? 'choice-card-active' : ''">
          <div class="choice-image-card">
            <img :src="items.url" alt="" />
          </div>
          <div class="choice-content-card">
            <div class="choice-title-card">{{ items.name }}</div>
            <div class="choice-description-card">{{ items.description }}</div>
          </div>
          <div v-if="active" class="choice-dashboard-group">
            <button>
              <i class="fas fa-edit"></i>
              <span>Edit</span>
            </button>
            <button>
              <i class="fas fa-trash"></i>
              <span>Hapus</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="another-choice-list" :id="active ? 'list-active' : ''">
      <div v-for="(items, index) in anotherChoice" :key="index">
        <div class="choice-card">
          <div v-if="active" class="choice-dashboard-group" id="choice-dashboard-another">
            <button>
              <i class="fas fa-edit"></i>
              <span>Edit</span>
            </button>
            <button>
              <i class="fas fa-trash"></i>
              <span>Hapus</span>
            </button>
          </div>
          <div class="choice-image-card">
            <img :src="items.url" alt="" />
          </div>
          <div class="choice-content-card">
            <div class="choice-title-card">{{ items.name }}</div>
            <div class="choice-description-card">{{ items.description }}</div>
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
    ...mapGetters(["choice", "anotherChoice"]),
  },
})
export default class ChoiceComponent extends Vue {
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
.choice-title {
  padding: 40px 0px 40px 0px;
  text-align: center;
  font-size: 30px;
  font-family: "Roboto Slab", serif;
  background-color: white;
}

.choice-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  padding-bottom: 80px;
}

#choice-list-active {
  justify-content: space-around;
}

.choice-card {
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .choice-image-card {
    width: 70px;
    height: 70px;
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
    }
  }
  .choice-content-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    .choice-title-card {
      font-weight: bold;
      padding-top: 10px;
      padding-bottom: 10px;
      font-family: "Roboto Slab", serif;
    }
  }
}

.another-choice-list {
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  padding-top: 60px;
  padding-bottom: 60px;
  .choice-card {
    width: 300px;
    margin: 0px 10px 0px 10px;
    text-align: center;
    color: white;
    .choice-image-card {
      background-color: white;
    }
  }
}

#list-active {
  overflow-x: auto;
  justify-content: initial;
}

#choice-card-active {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 10px 10px -4px;
  -webkit-box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 10px 10px -4px;
  -moz-box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px,
    rgb(145 158 171 / 24%) 0px 10px 10px -4px;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.choice-dashboard-group {
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

#choice-dashboard-another {
  margin-bottom: 10px;
}
</style>