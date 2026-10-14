    /* FUNCIONES JS PARA ABRIR Y CERRAR LA IMAGEN GRANDE AL MACHUCAR */
    function abrirModalImagen(ruta, texto) {
        var modal = document.getElementById('modalImagenVisor');
        var img = document.getElementById('imgModalAmpliada');
        var caption = document.getElementById('captionModal');
        modal.classList.add('activo');
        img.src = ruta;
        caption.innerText = texto;
    }

    function cerrarModalImagen() {
        var modal = document.getElementById('modalImagenVisor');
        modal.classList.remove('activo');
    }