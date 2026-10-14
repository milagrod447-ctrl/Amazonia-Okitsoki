document.addEventListener("DOMContentLoaded", function () {
    // 1. Menú móvil
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            navLinks.classList.toggle("active");
        });
    }

    // 2. Carrusel de la portada automático e infinito
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

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

        const activeVideo = slides[currentSlide].querySelector("video");
        if (activeVideo) {
            activeVideo.currentTime = 0;
            activeVideo.play().catch(e => console.log("Video autoplay:", e));
        }
    }

    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000); // Cambia automáticamente cada 5 segundos
    }

    function stopAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            showSlide(currentSlide + 1);
            startAutoSlide();
        });

        prevBtn.addEventListener("click", () => {
            showSlide(currentSlide - 1);
            startAutoSlide();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            startAutoSlide();
        });
    });

    startAutoSlide();

    // 3. Galería Viva continua sin barras plomas
    const row1 = document.getElementById("galleryRow1");
    const row2 = document.getElementById("galleryRow2");

    function autoScrollGallery(element, speed) {
        if (!element) return;
        setInterval(() => {
            element.scrollLeft += speed;
            if (element.scrollLeft >= element.scrollWidth - element.clientWidth) {
                element.scrollLeft = 0;
            }
        }, 20);
    }

    autoScrollGallery(row1, 1);
    autoScrollGallery(row2, 1.2);
});

// 4. Abrir imagen modal rebotando al hacer clic
function openModal(imageSrc, titleText) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");

    modalImg.src = imageSrc;
    modalTitle.textContent = titleText;
    modal.classList.add("open");
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("open");
}