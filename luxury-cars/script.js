const galleryImages = document.querySelectorAll(".detail-gallery img");
const imageDialog = document.querySelector(".image-dialog");

if (imageDialog) {
  const largeImage = imageDialog.querySelector("img");
  const closeButton = imageDialog.querySelector(".image-dialog-close");

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      largeImage.src = image.src;
      largeImage.alt = image.alt;
      imageDialog.showModal();
    });
  });

  closeButton.addEventListener("click", () => imageDialog.close());

  imageDialog.addEventListener("click", (event) => {
    if (event.target === imageDialog) imageDialog.close();
  });
}
