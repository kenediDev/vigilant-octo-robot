<template>
  <div>
    <div
      class="section-auth"
      style="
        background-image: url('https://www.clipartkey.com/mpngs/m/245-2450876_car-service-vector-png.png');
      "
    >
      <form @submit.prevent="submit">
        <div class="nc-field" id="nc-field-input">
          <div class="nc-field-icon">
            <i class="fas fa-user-circle"></i>
          </div>
          <input
            type="text"
            name="username"
            id="username"
            class="username"
            placeholder="Nama Pengguna"
            autocomplete="off"
            v-model="username"
          />
        </div>
        <div class="nc-field" id="nc-field-input">
          <div class="nc-field-icon">
            <i class="fas fa-key"></i>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            class="password"
            placeholder="Kata sandi"
            autocomplete="Kata Sandi"
            v-model="password"
          />
        </div>
        <div class="nc-field">
          <button>Masuk</button>
        </div>
        <div class="nc-field">
          <a href="#" @click="clickRouter('forgot')">Lupa kata sandi?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { AxiosResponse } from "axios";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class LoginScreen extends Vue {
  username: string;
  password: string;
  submit() {
    this.$store.commit("MESSAGE", { message: "", valid: 3 });
    const data = {
      email: this.username,
      password: this.password,
    };
    this.$store
      .dispatch("login", data)
      .then((res: AxiosResponse<any>) => {
        this.username = "";
        this.password = "";
        localStorage.setItem("token", res.data.token);
        window.location.reload();
      })
      .catch((err) => {
        this.$store.commit("MESSAGE", {
          message: err.response.data.message,
          valid: 2,
        });
      });
  }
  clickRouter(args: string) {
    this.$router.push({
      name: args,
    });
  }
}
</script>

<style lang="scss" scoped>
.section-auth {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #0000007a;
    padding: 30px;
    border-radius: 15px;
    .nc-field {
      margin-bottom: 15px;
      a {
        font-weight: bold;
        color: white;
      }
      button {
        width: 100px;
        height: 36px;
        background-color: white;
        border: solid 1px rgb(80 173 42);
        outline: none;
        cursor: pointer;
        color: rgb(80 173 42);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        transition: 500ms ease-in-out;
        &:hover {
          background-color: rgb(80 173 42);
          color: white;
        }
      }
    }
    #nc-field-input {
      width: 400px;
      height: 36px;
      background-color: white;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      border-radius: 15px;
      overflow: hidden;
      display: flex;
      align-items: center;
      .nc-field-icon {
        width: 40px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
      }
    }
  }
}
</style>