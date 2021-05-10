<template>
  <div
    :class="
      message.valid === 1
        ? 'nc-message'
        : message.valid === 2
        ? 'nc-message-error'
        : message.valid === 3
        ? 'nc-message-close'
        : 'nc-message-hidden'
    "
  >
    {{ message.message }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["message"]),
  },
})
export default class Message extends Vue {}
</script>

<style lang="scss" scoped>
.nc-message,
.nc-message-error,
#nc-message-close {
  position: fixed;
  right: 0px;
  width: 400px;
  padding: 10px 10px 10px 10px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: red;
  color: white;
  word-wrap: break-word;
}

.nc-message-hidden {
  display: none;
  visibility: hidden;
}

.nc-message {
  background-color: green;
  animation: message 2s forwards;
}

.nc-message-error {
  animation: message 2s forwards;
  background-color: red;
}

#nc-message-close {
  animation: message-close 2s forwards;
}

@keyframes message {
  from {
    right: -1200px;
    bottom: 0px;
  }
  to {
    right: 0px;
    bottom: 15px;
  }
}
</style>