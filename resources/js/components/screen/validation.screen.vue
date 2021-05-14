<template>
  <div>
    <div
      :class="
        message.valid === 1
          ? 'section-message'
          : message.valid === 2
          ? 'section-message-error'
          : message.valid === 3
          ? 'section-message-close'
          : 'section-message-hidden'
      "
    >
      {{ message.message }}
    </div>
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
export default class ValidationScreen extends Vue {}
</script>

<style lang="scss" scoped>
.section-message,
.section-message-error,
.section-message-close {
  width: 400px;
  position: absolute;
  top: 80px;
  right: 0;
  padding: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  color: white;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
}

.section-message-hidden {
  display: none;
  visibility: hidden;
}

.section-message {
  background-color: green;
  animation: message 1s forwards;
}

.section-message-error {
  background-color: red;
  animation: message 1s forwards;
}

#section-message-close {
  animation: message-close 1s forwards;
}

@keyframes message {
  from {
    right: -1200px;
    top: 80px;
  }
  to {
    right: 0;
    top: 80px;
  }
}

@keyframes message-close {
  from {
    right: 0;
    top: 80px;
  }
  to {
    right: -1200px;
    top: 80px;
    display: none;
    visibility: hidden;
  }
}
</style>