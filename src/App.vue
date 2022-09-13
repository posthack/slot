<script setup>
import { ref } from "vue";
import SingleCalendar from "@/components/SingleCalendar.vue";
import domtoimage from "dom-to-image-more";

const generateImage = async () => {
  const node = document.getElementById("render-area");
  const dataUrl = await domtoimage.toPng(node);
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = dataUrl;
  link.click();
};

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
}
</style>
