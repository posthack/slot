<script setup>
import { ref } from "vue";
import domtoimage from "dom-to-image-more";

// create a ref to the element we want to convert to an image
const element = ref(null);

const generateImage = async () => {
  console.log(element.value);
  const node = element.value;
  const dataUrl = await domtoimage.toPng(node);
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = dataUrl;
  link.click();
};
</script>

<template>
  <div ref="element" class="example">hello world!!!</div>
  <button @click="generateImage">Generate</button>
</template>

<style scoped>
.example {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 1px solid black;
  padding: 20px;
  font-size: 24px;
  display: inline-block;
  background-color: #fff;
}
</style>
