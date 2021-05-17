<template>
  <div class="about">
    <img
      class="about-image"
      src="https://i2.wp.com/1-station.com/wp-content/uploads/2016/10/About-1-Station.jpg"
      alt=""
    />
    <div class="list-about">
      <div class="about-card">
        <h5 class="about-title">Tentang 1 Station</h5>
        <div class="about-description">
          Ngebengkel Bener? Ya 1 Station 1 Station berusaha untuk menyediakan
          pengerjaan servis dan perawatan kendaraan terbaik di Indonesia. Dengan
          8 store di Jakarta, Serpong dan Bekasi, kami memiliki tim yang terdiri
          dari mekanik berpengalaman dan pakar otomobil. Dipastikan Anda
          mendapat yang terbaik dari sisi kualitas, kecepatan dan nilai.
        </div>
      </div>
      <div class="about-card">
        <h5 class="about-title">Misi Kami</h5>
        <div class="about-description">
          Di 1 Station, kami ingin memberikan transparansi, kualitas tinggi dan
          perawatan mobil yang terjangkau pada pelanggan. Kami ingin membangun
          hubungan jangka panjang yang berkelanjutan dengan seluruh semua pihak
          yang berdasarkan pada kepercayaan, dalam arti yang paling murni dari
          kata tersebut. Buat janji sekarang juga !! Setiap anggota tim 1
          Station mendapat program pelatihan ketat dan dipilih secara seksama
          berdasarkan kinerja mereka, di atas keterampilan dan pengalaman
          mereka. Hasilnya, kami memiliki keahlian untuk melayani setiap mobil
          yang ada di Indonesia. Nilai Inti tim 1 Station: Kami selalu berusaha
          untuk sempurna pada saat melakukan pekerjaan Kami memastikan kualitas
          terbaik pada semua pekerjaan yang dilakukan Pelanggan selalu menjadi
          raja / ratu, jadi kami selalu memberikan layanan royal Kami selalu
          memberikan informasi yang terbuka dan transparan untuk pelanggan kami
          Semua kesepakatan yang dibuat dengan pelanggan sangat dihormati
          Pelanggan selalu dapat mempercayai perusahaan kami Rasakan pengalaman
          perawatan dan servis kendaraan kelas dunia , Buat janji sekarang juga
          !
        </div>
      </div>
      <div class="about-card">
        <h5 class="about-title">Tim Kami</h5>
        <div class="about-description">
          Tim 1 Station memahami bahwa bagi kebanyakan orang, perawatan mobil
          merupakan kebutuhan yang tidak dapat dihindari dan tidak disukai. Tim
          kami berusaha untuk merubah persepsi ini dengan mempermudah dan
          berusaha se-transparan mungkin, memberikan servis terbaik, dengan
          harga terbaik dan di lingkungan terbaik.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class AboutComponent extends Vue {}
</script>

<style lang="scss" scoped>
.about {
  .about-image {
    width: 100%;
    height: 500px;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .list-about {
    display: flex;
    padding: 20px 30px 60px 30px;
    flex-wrap: wrap;
    .about-card {
      width: 45%;
      display: flex;
      flex-direction: column;
      .about-card-title {
        font-weight: bold;
        font-family: "Roboto Slab", serif;
      }
    }
  }
}
</style>