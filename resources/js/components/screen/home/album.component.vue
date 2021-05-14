<template>
  <div>
    <div class="album">
      <div class="album-title">Cerita Kita</div>
      <ul>
        <li v-for="(items, index) in listAlbum" :key="index">
          <img :src="items.image" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["listAlbum"]),
  },
})
export default class AlbumComponent extends Vue {}
</script>

<style lang="scss" scoped>
// BASIC

ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

li {
  height: 40vh;
  flex-grow: 1;
}

li:last-child {
  // There's no science in using "10" here. In all my testing, this delivered the best results.
  flex-grow: 10;
}

img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}

// ADVANCED

// Portrait

@media (max-aspect-ratio: 1/1) {
  li {
    height: 30vh;
  }
}

// Short screens

@media (max-height: 480px) {
  li {
    height: 80vh;
  }
}

// Smaller screens in portrait

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul {
    flex-direction: row;
  }

  li {
    height: auto;
    width: 100%;
  }
  img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}

.album-title {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: "Roboto Slab", serif;
  padding-bottom: 40px;
  padding-top: 40px;
  background-color: white;
}
</style>