document.addEventListener("DOMContentLoaded", function () {
  // Menú hamburguesa para celulares
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", () => {
          navLinks.classList.toggle("open");
      });
  }

  // Carrusel de la portada (Imagen -> Video -> Imagen)
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove("active");
          const video = slide.querySelector("video");
          if (video) video.pause();
          if (dots[i]) dots[i].classList.remove("active");
      });

      currentSlide = (index + totalSlides) % totalSlides;
      
      slides[currentSlide].classList.add("active");
      if (dots[currentSlide]) dots[currentSlide].classList.add("active");

      // Reproducir video automáticamente si toca la diapositiva del video
      const activeVideo = slides[currentSlide].querySelector("video");
      if (activeVideo) {
          activeVideo.play().catch(e => console.log("Autoplay bloqueado:", e));
      }
  }

  if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", () => {
          showSlide(currentSlide + 1);
      });

      prevBtn.addEventListener("click", () => {
          showSlide(currentSlide - 1);
      });
  }

  dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
          showSlide(index);
      });
  });

  // Cambio automático cada 6 segundos
  setInterval(() => {
      showSlide(currentSlide + 1);
  }, 6000);
});