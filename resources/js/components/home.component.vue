<template>
  <div>
    <div class="nc-home">
      <div class="nc-grid">
        <div class="nc-col">
          <div class="nc-section">
            <div class="nc-section-title">
              <div>bengkel mobil sangkut</div>
              <div>kota lubuklinggau</div>
            </div>
            <div class="nc-section-description">
              Bengkel Mobil sangkut kini sudah menjadi bengkel mobil terbaik
              dikota lubuklinggau, untuk melayani anda ahli dalam memeliharaan
              untuk ban, layanan memeliharaan rem, baterai, shock, absorber,
              suspensi mobil, sistem pendingin udara, dan penggantian oli, dan
              kami menawarkan penuh dari mekanik terlatih dan proffesional yang
              merupakan spesialis di bidang masing - masing, mekanik kami siap
              memberikan anda saran, memberikan layanan terbaik dan dibengkel
              sangkut siap untuk melayan perbaikan kendaraan anda diluar lokasi
              kota lubuklinggau, dan kami akan mengirimkan mekanik yang handal
              untuk memperbaiki kendaraan anda.
            </div>
            <div class="nc-section-group">
              <button>Telepon</button>
              <button>Buka Rute</button>
            </div>
          </div>
        </div>
        <div
          class="nc-col"
          style="
            background-image: url('http://www.ahgautoservice.com.au/uploads/1/0/5/8/105872333/your-car-service-in-perth_orig.jpg');
          "
        ></div>
      </div>
    </div>
    <div class="nc-product">
      <img
        v-for="(items, index) in listProduct"
        :key="index"
        :src="items"
        alt=""
      />
    </div>
    <div class="nc-section-service-title">Alasan Memilih Kami</div>
    <div class="nc-section-service">
      <div v-for="(items, index) in listService" :key="index">
        <div class="nc-section-service-card">
          <div class="nc-section-service-card-image">
            <img :src="items.image" alt="" />
          </div>
          <div class="nc-section-service-card-content">
            <div class="nc-section-service-card-title">{{ items.name }}</div>
            <div class="nc-section-service-card-description">
              {{ items.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nc-section-service-bottom">
      <div class="nc-section-service">
        <div v-for="(items, index) in listService.slice(0, 3)" :key="index">
          <div class="nc-section-service-card">
            <div class="nc-section-service-card-image">
              <img :src="items.image" alt="" />
            </div>
            <div class="nc-section-service-card-content">
              <div class="nc-section-service-card-title" id="title">
                {{ items.name }}
              </div>
              <div class="nc-section-service-card-description" id="description">
                {{ items.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nc-section-list-attribute">
      <div v-for="(items, index) in listDefault" :key="index">
        <div class="nc-section-image">
          <img :src="items" alt="" />
        </div>
      </div>
    </div>
    <div class="nc-section-sticker">
      <span>
        Benefit yang bisa kamu dapat kalau mobilmu dipasang stiker Bengkel Mobil
        Sangkut
      </span>
      <button>Cek Benefit</button>
    </div>
    <div class="nc-testimonials-s">
      <div class="nc-testimonials-title">Apa Kata Mereka</div>
    </div>
    <div class="nc-section-testimonials">
      <div v-for="(items, index) in listTestimonials" :key="index">
        <div class="nc-testimonials-card">
          <div class="nc-testimonials-card-author">
            <img :src="items.avatar" alt="" />
            <div class="nc-testimonials-card-nick">
              <a href="#">{{ items.name }}</a>
              <span>{{ items.from }}</span>
            </div>
          </div>
          <div class="nc-testimonials-card-message">
            {{ items.comment }}
          </div>
        </div>
      </div>
    </div>
    <div class="nc-section-vision">
      <div class="nc-section-visions">
        <div v-for="(items, index) in listVision" :key="index">
          <div class="nc-section-vision-card">
            <div class="nc-section-vision-title">
              {{ items.title }}
            </div>
            <img :src="items.image" alt="" />
            <div class="nc-section-vision-description">
              {{ items.caption }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nc-section-history">Cerita Kami</div>
    <ul>
      <li v-for="(items, index) in listAlbum" :key="index">
        <img :src="items.photo" alt="" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters([
      "listService",
      "listProduct",
      "listDefault",
      "listTestimonials",
      "listVision",
      "listAlbum",
    ]),
  },
})
export default class HomeComponent extends Vue {}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Shrikhand&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime&family=Roboto&display=swap");

.nc-grid {
  display: flex;
  .nc-col {
    width: 50%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    .nc-section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0px 20px 0px 20px;
      .nc-section-title {
        line-height: 30px;
        font-size: 30px;
        font-weight: bold;
        font-family: "Shrikhand", cursive;
        text-transform: capitalize;
      }
      .nc-section-description {
        font-size: 16px;
      }
      .nc-section-group {
        display: flex;
        align-items: center;
        margin-top: 10px;
        button {
          border: none;
          outline: none;
          width: 120px;
          box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
          font-weight: bold;
          border-radius: 10px;
          height: 36px;
          &:first-child {
            background-color: #333333;
            color: white;
          }
          &:last-child {
            margin-left: 15px;
            background-color: white;
            color: #38c172;
            box-shadow: 0px 0px 10px -2px #38c172;
            -webkit-box-shadow: 0px 0px 10px -2px #38c172;
            -moz-box-shadow: 0px 0px 10px -2px #38c172;
            transition: 500ms ease-in-out;
            &:hover {
              background-color: white;
              color: #333333;
              box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
              -webkit-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
              -moz-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.75);
            }
          }
        }
      }
    }
  }
}

.nc-product {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  padding-top: 40px;
  padding-bottom: 40px;
  img {
    margin: 5px;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.nc-section-service-title {
  text-align: center;
  background-color: white;
  font-size: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.nc-section-service {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  padding-bottom: 80px;
  &:last-child {
    background-color: transparent;
  }
  .nc-section-service-card {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    border-radius: 15px;
    padding: 15px;
    .nc-section-service-card-image {
      box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.75);
      border-radius: 20px;
      margin-bottom: 15px;
      padding: 15px;
      width: 70px;
      height: 70px;
      background-color: white;
      img {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .nc-section-service-card-content {
      .nc-section-service-card-title {
        text-align: center;
        margin: 5px 0px 5px 0px;
        font-family: "Roboto", sans-serif;
      }
      .nc-section-service-card-description {
        text-align: center;
      }
    }
  }
}

.nc-section-service-bottom {
  background-color: #343535;
  #title {
    color: white;
  }
  #description {
    color: white;
  }
}

.nc-section-sticker {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    font-size: 28px;
    text-transform: capitalize;
    text-align: center;
  }
  button {
    border: none;
    outline: none;
    background-color: #3490dc;
    color: white;
    width: 180px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px -2px #3490dc;
    -webkit-box-shadow: 0px 0px 10px -2px #3490dc;
    -moz-box-shadow: 0px 0px 10px -2px #3490dc;
    margin-top: 15px;
    border-radius: 15px;
  }
}

@media screen and (max-width: 540px) {
  .nc-section-sticker {
    span {
      font-size: 16px;
    }
  }
}

.nc-section-list-attribute {
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding: 60px 0px 60px 0px;
  /* width */
  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  // /* Handle */
  // &::-webkit-scrollbar-thumb {
  //   background: #888;
  // }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .nc-section-image {
    width: 240px;
    height: 240px;
    margin: 0px 15px 0px 15px;
    animation: cars 3s infinite;
    img {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}

@keyframes cars {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(150px, 0);
  }

  80% {
    transform: translate(-150px, 0);
  }
}

.nc-testimonials-s {
  background-color: white;
}

.nc-testimonials-title {
  padding: 30px 0px 0px 0px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  border-bottom: solid 2px #38c172;
  width: 280px;
  margin: auto;
  cursor: default;
  background-color: white;
}

.nc-section-testimonials {
  padding-top: 30px;
  padding-bottom: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 98%;
  margin: auto;
  .nc-testimonials-card {
    display: flex;
    border: solid 0.8px #e5e5e5;
    flex-direction: column;
    width: 400px;
    word-wrap: break-word;
    background-color: white;
    padding: 20px;
    .nc-testimonials-card-author {
      display: flex;
      align-items: center;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      padding: 5px 15px 5px 15px;
      border-radius: 15px;
      margin-bottom: 10px;
      img {
        width: 50px;
        height: 50px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 15px;
        margin-right: 20px;
      }
      .nc-testimonials-card-nick {
        display: flex;
        flex-direction: column;
        a {
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow-y: hidden;
        }
      }
    }
    .nc-testimonials-card-message {
      height: 80px;
      overflow-y: auto;
      /* width */
      &::-webkit-scrollbar {
        width: 1px;
        height: 1px;
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

@media screen and (max-width: 431px) {
  .nc-section-testimonials {
    .nc-testimonials-card {
      width: 100%;
      word-break: break-all;
      word-wrap: break-word;
      margin: auto;
      margin: 0 !important;
    }
  }
  .nc-section-service {
    .nc-section-service-card {
      width: 100%;
      margin: 0;
      margin-bottom: 10px;
    }
  }
}

.nc-section-vision {
  background-color: white;
  padding-bottom: 200px;
  padding-top: 120px;
  .nc-section-visions {
    display: flex;
    justify-content: center;
    .nc-section-vision-card {
      margin: 0px 15px 0px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      word-wrap: break-word;
      word-break: break-all;
      .nc-section-vision-title {
        font-size: 20px;
        font-weight: bold;
      }
      img {
        width: 100%;
        height: 200px;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
      .nc-section-vision-description {
        padding: 5px 10px 5px 10px;
      }
    }
  }
}

@media screen and (max-width: 1075px) {
  .nc-section-vision {
    .nc-section-visions {
      flex-wrap: wrap;
      .nc-section-vision-card {
        width: 460px;
      }
    }
  }
}

@media screen and (max-width: 521px) {
  .nc-section-vision {
    .nc-section-visions {
      flex-wrap: wrap;
      .nc-section-vision-card {
        width: 100%;
        margin: 0;
        margin-bottom: 10px;
      }
    }
  }
}

@media screen and (max-width: 443px) {
  .nc-grid {
    .nc-col {
      height: 100%;
      padding-top: 40px;
      &:last-child {
        margin-top: 20px;
        height: 200px;
      }
    }
  }
  .nc-testimonials-title {
    width: 100%;
  }

  .nc-product {
    img {
      margin: 0;
      width: 98%;
    }
  }
  .nc-grid {
    .nc-col {
      .nc-section {
        padding: 0px 5px 0px 5px;
      }
    }
  }
}

@media screen and (max-width: 893px) {
  .nc-grid {
    flex-direction: column;
    .nc-col {
      width: 100%;
    }
  }
}

// BASIC

.nc-section-history {
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  background-color: white;
  font-size: 30px;
  cursor: default;
  font-weight: bold;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  height: 40vh;
  flex-grow: 1;
  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
}

li:last-child {
  // There's no science in using "10" here. In all my testing, this delivered the best results.
  flex-grow: 10;
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
    img {
      width: 100%;
      max-height: 75vh;
      min-width: 0;
    }
  }
}
</style>