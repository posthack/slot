import domtoimage from "dom-to-image-more";

export const generateImage = async (
  divId = "render-area",
  imageName = "image.png"
) => {
  const node = document.getElementById(divId);
  const dataUrl = await domtoimage.toPng(node);
  const link = document.createElement("a");
  link.download = imageName;
  link.href = dataUrl;
  link.click();
};
