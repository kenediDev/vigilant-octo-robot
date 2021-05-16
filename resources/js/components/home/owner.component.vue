<template>
  <div class="owner">
    <div class="owner-image">
      <img :src="owner" alt="" />
    </div>
    <div class="owner-content">
      <div class="owner-title">WELCOME TO AUTOREPAIR</div>
      <div class="owner-sub-title">
        We help more than 45 years serving customer car
      </div>
      <div class="owner-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div class="group">
        <button id="active">Misi Kami</button>
        <button>Visi Kami</button>
        <button>Nilai Kami</button>
      </div>
      <div class="owner-descriptions">
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of lorem ipsum.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class OwnerComponent extends Vue {
  owner: string = `http://${window.location.host}/image/owner/2018-03-07%20(1).png`;
}
</script>

<style lang="scss" scoped>
.owner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  padding-top: 60px;
  padding-bottom: 60px;
  img {
    width: 400px;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 15px;
  }
  .owner-content {
    width: 50%;
    padding: 0px 15px 0px 15px;
    .owner-title {
      font-size: 16px;
      font-weight: bold;
      font-family: "Roboto Slab", serif;
      text-transform: uppercase;
      color: #38c172;
    }
    .owner-sub-title {
      font-size: 20px;
      font-weight: bold;
      font-family: "Roboto Slab", serif;
    }
    .owner-description {
      font-size: 15px;
    }
  }
  .group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    button {
      border: none;
      outline: none;
      background-color: white;
      width: 120px;
      height: 34px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      font-weight: bold;
      margin-top: 10px;
      font-family: "Roboto Slab", serif;
      border-radius: 10px;
      transition: 500ms ease-in-out;
      &:hover {
        color: #38c172;
        border: solid 1px #38c172;
        background-color: white;
      }
    }
    #active {
      color: #38c172;
      border: solid 1px #38c172;
    }
  }
  .owner-descriptions {
    background-color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    padding: 10px;
    border-radius: 15px;
  }
}

@media screen and (max-width: 801px) {
  .owner {
    img {
      width: 300px;
      height: 300px;
    }
  }
}

@media screen and (max-width: 668px) {
  .owner {
    flex-direction: column;
    align-items: center;
    .owner-image {
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 320px;
        border-radius: 0;
      }
    }
    .owner-content {
      width: 100%;
    }
  }
}

@media screen and (max-width: 357px) {
  .owner {
    .owner-image {
      img {
        height: 180px;
      }
    }
    .owner-content {
      .group {
        flex-direction: column;
        button {
          width: 100%;
        }
      }
    }
    .owner-descriptions {
      padding: 8px;
    }
  }
}
</style>