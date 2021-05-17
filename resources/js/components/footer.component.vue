<template>
  <footer>
    <div class="nc-section-footer">
      <img :src="logo" alt="" />
      <div class="nc-section">
        <div class="nc-section-ul">Bengkel Mobil Sangkut</div>
        <div class="nc-section-li">
          <a href="">Tentang Bengkel Sangkut</a>
        </div>
        <div class="nc-section-li"><a href="">Karir</a></div>
        <div class="nc-section-li"><a href="">Blog</a></div>
      </div>
      <div class="nc-section">
        <div class="nc-section-ul">Hubungi Kita</div>
        <div class="nc-section-li">
          Mobil Sangkut, Lubuklinggau, Jl Yos Sudarso Kelurahan Watervang
          Kecamatan Lubukli Bengkel, Watervang, Lubuk Linggau Tim. I, Kota
          Lubuklinggau, Sumatera Selatan 31628
        </div>
        <div class="nc-section-li">+62852-6848-8257</div>
        <div class="nc-section-li">Jam Buka ( 09 : 00 - 17 : 00 )</div>
      </div>
      <div class="nc-section">
        <div class="nc-section-ul">Ikuti Kami</div>
        <div id="nc-section-li">
          <div class="nc-section-li">
            <a href="">
              <i class="fab fa-facebook"></i>
            </a>
          </div>
          <div class="nc-section-li">
            <a href=""> <i class="fab fa-twitter"></i></a>
          </div>
          <div class="nc-section-li">
            <a href=""> <i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="nc-license">© 2009 - 2021, Bengkel Mobil Sangkut</div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({})
export default class FooterComponent extends Vue {
  logo: string = `http://${window.location.host}/image/default/Tanpa judul (5).png`;
}
</script>

<style lang="scss" scoped>
footer {
  height: 600px;
  background-color: #343a40;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;
  .nc-section-footer {
    display: flex;
    justify-content: center;
    img {
      width: 180px;
      height: 80px;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .nc-section {
      margin: 0px 15px 0px 15px;
      width: 250px;
      word-wrap: break-word;
      color: white;
      .nc-section-ul {
        color: white;
        font-weight: bold;
        font-size: 20px;
      }
      .nc-section-li {
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
    #nc-section-li {
      display: flex;
      align-items: center;
      a {
        margin: 0px 10px 0px 10px;
        width: 30px;
        height: 30px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        &:first-child {
          margin: 0px 10px 0px 0px;
        }
        .fab.fa-facebook {
          color: blue;
          font-size: 20px;
        }
        .fab.fa-twitter {
          color: skyblue;
          font-size: 20px;
        }
        .fab.fa-instagram {
          color: red;
          font-size: 20px;
        }
      }
    }
  }
  .nc-license {
    margin-top: 40px;
    text-align: center;
    color: white;
  }
}
@media screen and (max-width: 833px) {
  footer {
    height: 100%;
    padding-bottom: 40px;
    padding-top: 40px;
    .nc-section-footer {
      flex-wrap: wrap;
      .nc-section {
        margin: 15px;
      }
    }
  }
}
</style>
