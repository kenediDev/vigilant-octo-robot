<template>
  <div>
    <div
      class="section-forgot"
      style="
        background-image: url('https://image.freepik.com/free-vector/car-service-repair-workers-fixing-car-business-illustration_114835-122.jpg');
      "
    >
      <form @submit.prevent="submit">
        <div class="nc-field" id="nc-field-input">
          <div class="nc-field-icon">
            <i class="fas fa-search"></i>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            class="search"
            placeholder="Silahkan masukkan akun anda"
            autocomplete="off"
            v-model="email"
          />
        </div>
        <div class="nc-field">
          <button>Reset Kata Sandi</button>
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
export default class ForgotScreen extends Vue {
  email: string = "";
  submit() {
    const data = {
      email: this.email,
    };
    this.$store
      .dispatch("forgot", data)
      .then((res: AxiosResponse<any>) => {
        this.$store.commit("MESSAGE", { message: res.data.message, valid: 1 });
        this.email = "";
      })
      .catch((err) => {
        this.$store.commit("MESSAGE", {
          message: err.response.data.message,
          valid: 2,
        });
      });
  }
}
</script>
<style lang="scss" scoped>
.section-forgot {
  width: 100%;
  height: 80vh;
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
        width: 160px;
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