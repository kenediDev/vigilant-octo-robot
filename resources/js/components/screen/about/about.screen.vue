<template>
  <div>
    <div class="about" :id="active ? 'active' : ''">
      <img
        src="https://i2.wp.com/1-station.com/wp-content/uploads/2016/10/About-1-Station.jpg"
        alt=""
      />
      <div class="list-about">
        <div class="about-card">
          <div class="about-card-title">Tentang 1 Station</div>
          <div class="about-card-description">
            Ngebengkel Bener? Ya 1 Station 1 Station berusaha untuk menyediakan
            pengerjaan servis dan perawatan kendaraan terbaik di Indonesia.
            Dengan 8 store di Jakarta, Serpong dan Bekasi, kami memiliki tim
            yang terdiri dari mekanik berpengalaman dan pakar otomobil.
            Dipastikan Anda mendapat yang terbaik dari sisi kualitas, kecepatan
            dan nilai.
          </div>
        </div>
        <div class="about-card">
          <div class="about-card-title">Misi Kami</div>
          <div class="about-card-description">
            Di 1 Station, kami ingin memberikan transparansi, kualitas tinggi
            dan perawatan mobil yang terjangkau pada pelanggan. Kami ingin
            membangun hubungan jangka panjang yang berkelanjutan dengan seluruh
            semua pihak yang berdasarkan pada kepercayaan, dalam arti yang
            paling murni dari kata tersebut. Buat janji sekarang juga !! Setiap
            anggota tim 1 Station mendapat program pelatihan ketat dan dipilih
            secara seksama berdasarkan kinerja mereka, di atas keterampilan dan
            pengalaman mereka. Hasilnya, kami memiliki keahlian untuk melayani
            setiap mobil yang ada di Indonesia. Nilai Inti tim 1 Station: Kami
            selalu berusaha untuk sempurna pada saat melakukan pekerjaan Kami
            memastikan kualitas terbaik pada semua pekerjaan yang dilakukan
            Pelanggan selalu menjadi raja / ratu, jadi kami selalu memberikan
            layanan royal Kami selalu memberikan informasi yang terbuka dan
            transparan untuk pelanggan kami Semua kesepakatan yang dibuat dengan
            pelanggan sangat dihormati Pelanggan selalu dapat mempercayai
            perusahaan kami Rasakan pengalaman perawatan dan servis kendaraan
            kelas dunia , Buat janji sekarang juga !
          </div>
        </div>
        <div class="about-card">
          <div class="about-card-title">Tim Kami</div>
          <div class="about-card-description">
            Tim 1 Station memahami bahwa bagi kebanyakan orang, perawatan mobil
            merupakan kebutuhan yang tidak dapat dihindari dan tidak disukai.
            Tim kami berusaha untuk merubah persepsi ini dengan mempermudah dan
            berusaha se-transparan mungkin, memberikan servis terbaik, dengan
            harga terbaik dan di lingkungan terbaik.
          </div>
        </div>
      </div>
    </div>
    <div v-if="active" class="dashboard-active">
      <button>
        <i class="fas fa-edit"></i>
        <span>Edit</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class AboutScreen extends Vue {
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
.about {
  background-color: white;
  img {
    width: 100%;
    height: 600px;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .list-about {
    padding-top: 40px;
    padding-bottom: 60px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    .about-card {
      width: 45%;
      display: flex;
      flex-direction: column;
      margin: 0px 5px 0px 5px;
      .about-card-title {
        font-size: 20px;
        font-family: "Roboto Slab", serif;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
}

#active {
  padding-top: 20px;
}

.dashboard-active {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  button {
    border: none;
    outline: none;
    height: 28px;
    padding: 0px 15px 0px 15px;
    width: 200px;
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
    span {
      margin-left: 0.75rem;
      font-family: "Be Vietnam", sans-serif;
    }
  }
}
</style>