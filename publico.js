/* =========================================================
   JAVASCRIPT EXTERNO - AMAZONÍA OKITSOKI
   ========================================================= */

document.addEventListener('DOMContentLoaded', function() {
    // Control del menú responsivo para móviles
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });

        const enlaces = navLinks.querySelectorAll('a');
        enlaces.forEach(enlace => {
            enlace.addEventListener('click', function() {
                navLinks.classList.remove('open');
            });
        });
    }
});

// Función para abrir la imagen modal en pantalla completa al hacer clic
function abrirModalImagen(ruta, texto) {
    const modal = document.getElementById('modalImagenVisor');
    const img = document.getElementById('imgModalAmpliada');
    const caption = document.getElementById('captionModal');
    
    if (modal && img && caption) {
        modal.classList.add('activo');
        img.src = ruta;
        caption.innerText = texto;
    }
}

// Función para cerrar la imagen modal
function cerrarModalImagen() {
    const modal = document.getElementById('modalImagenVisor');
    if (modal) {
        modal.classList.remove('activo');
    }
}