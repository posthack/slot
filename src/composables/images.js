import domtoimage from "dom-to-image-more";

export const generateImage = async () => {
  const node = document.getElementById("render-area");
  const dataUrl = await domtoimage.toPng(node);
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = dataUrl;
  link.click();
};
