function toggleMenu(icon) {
  icon.classList.toggle("active");

  const menu = document.getElementById("menu");
  menu.classList.toggle("active");

  const title = document.querySelector(".site-title");
  title.classList.toggle("dark");
}



function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  setTimeout(() => lightbox.classList.add("show"), 10);

  lightboxImg.src = img.src;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("show");

  setTimeout(() => {
    lightbox.style.display = "none";
  }, 300);
}

