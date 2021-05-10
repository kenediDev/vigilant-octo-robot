<template>
  <div
    :class="
      add === 1 ? 'nc-modal' : add === 2 ? 'nc-modal-close' : 'nc-modal-hidden'
    "
  >
    <div class="nc-modal-backgs"></div>
    <div class="nc-modal-backgss"></div>

    <div class="nc-modal-group">
      <span></span>
      <div class="nc-modal-group-btn">
        <button
          @click="clickAddChoice('album')"
          :class="addChoice === 'album' ? 'nc-modal-choice' : ''"
        >
          Album
        </button>
        <button
          @click="clickAddChoice('service')"
          :class="addChoice === 'service' ? 'nc-modal-choice' : ''"
        >
          Service
        </button>
        <button
          @click="clickAddChoice('vision')"
          :class="addChoice === 'vision' ? 'nc-modal-choice' : ''"
        >
          Visi
        </button>
        <button
          @click="clickAddChoice('testimoni')"
          :class="addChoice === 'testimoni' ? 'nc-modal-choice' : ''"
        >
          Testimoni
        </button>
      </div>
      <button class="nc-modal-times"><i class="fas fa-times"></i></button>
    </div>
    <form @submit.prevent="submit">
      <div class="nc-field" id="nc-field-file">
        <div class="upload-btn-wrapper">
          <input
            type="file"
            name=""
            id=""
            ref="photo"
            @change="changeImage()"
          />
          <img :src="photo_url ? photo_url : plus" alt="" />
        </div>
      </div>
      <div class="nc-field" id="nc-field-input">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          :value="title"
          @input="changeTitle($event)"
        />
      </div>
      <div class="nc-field" id="nc-field-textarea">
        <textarea
          name="caption"
          id="caption"
          cols="30"
          rows="10"
          :value="description"
          @input="changeDescription($event)"
          placeholder="Caption"
        ></textarea>
      </div>
      <div class="nc-field" id="nc-field-button">
        <button type="submit">Simpan</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { AxiosResponse } from "axios";
import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";

@Component({})
export default class DashboardModal extends Vue {
  @Prop(Number) id: number;
  @Prop(String) title: string;
  @Prop(String) description: string;
  @Prop() photo: any;
  @Prop(String) photo_url: string;
  @Prop(String) plus: string;

  @Prop(Number) add: number;
  @Prop(String) choice: string;
  @Prop(String) addChoice: string;
  @Emit()
  clickAdd() {
    this.$emit("clickAdd");
  }
  @Emit()
  changeTitle(args) {
    this.$emit("changeTitle", args);
  }
  @Emit()
  changeDescription(args) {
    this.$emit("changeDescription", args);
  }
  @Emit()
  changePhoto(args) {
    this.$emit("changePhoto", args);
  }
  @Emit()
  clickAddChoice(args: string) {
    this.$emit("clickAddChoice", args);
  }
  @Emit()
  clearInput() {
    this.$emit("clearInput");
  }

  changeImage() {
    this.changePhoto((this.$refs.photo as any).files[0]);
  }

  submit() {
    switch (this.addChoice) {
      case "album":
        this.album();
        break;
      case "service":
        this.service();
        break;
      case "vision":
        break;
      case "testimoni":
        break;
      default:
        break;
    }
  }

  //   Modal Create Album

  album() {
    const data = new FormData();
    data.append("title", this.title);
    data.append("caption", this.description);
    data.append("photo", this.photo);
    if (this.id) {
    } else {
      this.$store
        .dispatch("createAlbum", data)
        .then((res: AxiosResponse<any>) => {
          this.clearInput();
          this.clickAdd();
          this.$store.commit("MESSAGE", {
            message: res.data.message,
            valid: 1,
          });
        })
        .catch((err) => {
          if (err.response.data === false) {
            localStorage.clear();
            window.location.reload();
          }
          this.$store.commit("MESSAGE", {
            message: err.response.data.message,
            valid: 2,
          });
        });
    }
  }

  service() {
    const data = new FormData();
    data.append("name", this.title);
    data.append("description", this.description);
    data.append("image", this.photo);
    if (this.id) {
    } else {
      this.$store
        .dispatch("createService", data)
        .then((res: AxiosResponse<any>) => {
          this.clearInput();
          this.clickAdd();
          this.$store.commit("MESSAGE", {
            message: res.data.message,
            valid: 1,
          });
        })
        .catch((err) => {
          if (err.response.data === false) {
            localStorage.clear();
            window.location.reload();
          }
          this.$store.commit("MESSAGE", {
            message: err.response.data.message,
            valid: 2,
          });
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.nc-modal,
.nc-modal-close {
  overflow: hidden;
  width: 60%;
  height: 70vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .nc-modal-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .nc-modal-group-btn {
      display: flex;
      align-items: center;
      button {
        width: 120px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-image: 10px;
        background-color: white;
        margin: 0px 5px 0px 5px;
        border: none;
        outline: none;
        border-radius: 10px;
        font-weight: bold;
        font-family: "Josefin Sans", sans-serif;
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      }
      .nc-modal-choice {
        transition: 250ms ease-in;
        background-color: #38c172;
        color: white;
        box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      }
    }
    .nc-modal-times {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      i {
        font-size: 20px;
      }
    }
  }
}

.nc-modal-backgs {
  width: 120px;
  height: 120px;
  background-color: #38c172;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-right-radius: 80px;
}

.nc-modal-backgss {
  width: 120px;
  height: 120px;
  background-color: #38c172;
  position: absolute;
  bottom: 0;
  right: 0;
  border-top-left-radius: 80px;
}

form {
  margin-top: 15px;
  .nc-field {
    margin-bottom: 10px;
  }
  #nc-field-input {
    width: 400px;
    height: 32px;
    background-color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    border-radius: 15px;
    overflow: hidden;
    input {
      padding: 0px 20px 0px 20px;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }
  #nc-field-textarea {
    width: 400px;
    height: 160px;
    background-color: white;
    box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    border-radius: 15px;
    overflow: hidden;
    textarea {
      padding: 15px;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      resize: none;
    }
  }
  #nc-field-button {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 160px;
      height: 32px;
      background-color: #38c172;
      color: white;
      border: none;
      outline: none;
      border-radius: 10px;
      box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
    }
  }
  #nc-field-file {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 80px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 80px;
  height: 80px;
}

.upload-btn-wrapper input[type="file"] {
  width: 80px;
  height: 80px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.nc-modal {
  animation: modal 2s forwards;
}

.nc-modal-close {
  animation: modal-close 2s forwards;
}

.nc-modal-hidden {
  display: none;
  visibility: hidden;
}

@keyframes modal {
  from {
    top: -1200px;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  to {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes modal-close {
  from {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  to {
    top: -1200px;
    left: 50%;
    transform: translate(-50%, 50%);
  }
}
</style>