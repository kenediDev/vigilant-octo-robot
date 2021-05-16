<template>
  <div
    class="auth"
    style="
      background-image: url('https://i.pinimg.com/originals/14/30/65/143065a3b811034bacc4dede2f261f5f.png');
    "
  >
    <form @submit.prevent="submit">
      <div class="field" id="field-input">
        <div class="field-icon"><i class="fas fa-user-circle"></i></div>
        <input
          type="text"
          name="username"
          id="username"
          class="username"
          placeholder="Nama Pengguna"
          required
          autocomplete="off"
          v-model="username"
        />
      </div>
      <div class="field" id="field-input">
        <div class="field-icon">
          <i class="fas fa-key"></i>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          class="password"
          placeholder="Kata sandi"
          required
          autocomplete="off"
          v-model="password"
        />
      </div>
      <div class="field" id="field-button">
        <button>Masuk</button>
      </div>
      <div class="field" id="field-button">
        <a href="#" @click="clickRouter('forgot')">Lupa kata sandi</a>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { AxiosResponse } from "axios";
import Vue from "vue";
import { Component, Emit } from "vue-property-decorator";

@Component({})
export default class LoginComponent extends Vue {
  username: string = "";
  password: string = "";

  @Emit()
  clickRouter(args: string) {
    this.$emit("clickRouter", args);
  }

  submit() {
    const data = {
      email: this.username,
      password: this.password,
    };
    this.$store
      .dispatch("login", data)
      .then((res: AxiosResponse<any>) => {
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
}
</script>

<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 80vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  form {
    .field {
      width: 400px;
      background-color: white;
      height: 40px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      overflow: hidden;
      .field-icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          font-size: 20px;
          color: tomato;
        }
      }
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
      }
    }
    #field-input {
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    }
    #field-button {
      justify-content: center;
      background-color: transparent;
      button {
        background-color: tomato;
        border: none;
        outline: none;
        cursor: pointer;
        width: 200px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        color: white;
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      }
      a {
        color: tomato;
        text-decoration: none;
        font-weight: bold;
        background-color: white;
        width: 200px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .auth {
    form {
      .field {
        width: 300px;
      }
    }
  }
}

@media screen and (max-width: 324px) {
  .auth {
    form {
      .field {
        width: 240px;
      }
    }
  }
}
</style>