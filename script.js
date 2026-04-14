function toggleMenu(icon) {
  icon.classList.toggle("active");

  const menu = document.getElementById("menu");
  menu.classList.toggle("active");

  const title = document.querySelector(".site-title");
  title.classList.toggle("dark");
}

const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(el => observer.observe(el));


let currentIndex = 0;
const images = document.querySelectorAll(".lightbox-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// OPEN LIGHTBOX
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

// SHOW IMAGE
function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

// CLOSE
function closeLightbox() {
  lightbox.style.display = "none";
}

// NAVIGATION
function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  showImage();
}


