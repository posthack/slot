<script setup>
import { ref } from "vue";
import SingleCalendar from "@/components/SingleCalendar.vue";
import { generateImage } from "@/composables/images.js";

const days = ref(1);
const increaseDays = () => {
  if (days.value < 3) {
    days.value++;
  }
};

const decreaseDays = () => {
  if (days.value > 1) {
    days.value--;
  }
};
</script>

<template>
  <div class="app">
    <div class="render-area" id="render-area">
      <single-calendar v-for="el in days" :key="el" :day="el - 1" />
    </div>
    <div class="buttons">
      <button @click.prevent="increaseDays" :disabled="days === 3">
        Add day
      </button>
      <button @click.prevent="decreaseDays" :disabled="days === 1">
        Remove day
      </button>
      <button @click.prevent="generateImage">Generate image</button>
    </div>
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.render-area {
  display: flex;
  padding: 40px;
  background-color: #fff;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
}

.buttons {
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
  button {
    padding: 0 20px;
    height: 48px;
    background-color: #271f27;
    border: 0;
    border-radius: 8px;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    box-shadow: inset 0 1px 0 0 rgb(255 255 255 / 20%);
    &:hover {
      background-color: lighten(#271f27, 5%);
    }
    &:disabled {
      filter: contrast(0.7);
      cursor: not-allowed;
    }
  }
}
</style>
