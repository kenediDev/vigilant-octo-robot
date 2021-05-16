<template>
  <div
    :class="
      message.valid === 1
        ? 'message'
        : message.valid === 2
        ? 'message-error'
        : message.valid === 3
        ? 'message-close'
        : 'message-hidden'
    "
  >
    {{ message.message }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["message"]),
  },
})
export default class MessageComponent extends Vue {}
</script>

<style lang="scss" scoped>
.message,
.message-error,
.message-close {
  width: 400px;
  padding: 5px 10px 5px 10px;
  background-color: red;
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  transition: 1s ease-in-out;
}

.message,
.message-error {
  animation: message 1s forwards;
}

.message {
  background-color: green;
}

.message-error {
  background-color: red;
}

.message-close {
  animation: message-close 1s forwards;
}

.message-hidden {
  display: none;
  visibility: hidden;
}

@keyframes message {
  from {
    right: -1200px;
    top: 5px;
  }
  to {
    right: 0;
    top: 5px;
  }
}

@keyframes message-close {
  from {
    right: 0;
    top: 5px;
  }
  to {
    right: -1200px;
    top: 5px;
  }
}
</style>