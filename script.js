document.addEventListener('DOMContentLoaded', () => {

    // --- ANIMACIÓN DE SCROLL ---
    const elementosOcultos = document.querySelectorAll('.hidden');
    if (elementosOcultos.length > 0) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.remove('hidden');
                }
            });
        });
        elementosOcultos.forEach((el) => observador.observe(el));
    }

    // --- MENÚ DE HAMBURGUESA ---
    const toggleButton = document.querySelector('.header__toggle');
    const header = document.querySelector('.header');
    const menuLinks = document.querySelectorAll('.header__menu-link');

    if (toggleButton && header && menuLinks.length > 0) {
        toggleButton.addEventListener('click', () => {
            header.classList.toggle('menu-abierto');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('menu-abierto');
            });
        });
    }

    // --- FORMULARIO Y MODAL ---
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('success-modal');

    if (form && modal) 
    {
        const submitButton = form.querySelector('button[type="submit"]');
        const requiredFields = form.querySelectorAll('[required]');
        const closeModalButton = document.getElementById('close-modal-btn');

        // --- FUNCIONES PARA CONTROLAR EL MODAL ---
        const openModal = () => {
        modal.classList.remove('hidden');
        // Eliminamos los estilos en línea para permitir que el CSS haga la transición
        modal.style.opacity = ''; 
        modal.style.pointerEvents = '';
        };

        const closeModal = () => {
        modal.classList.add('hidden');
        // Volvemos a poner los estilos en línea para evitar el "FOUC" al recargar
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
        };

        // --- LÓGICA DE LA PÁGINA ---
    
        // Comprobar si debemos abrir el modal al cargar la página
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('success')) {
        openModal();
        }

        // Validar el formulario mientras se escribe
        function isFormValid() {
            for (const field of requiredFields) {
                if (field.value.trim() === '') return false;
            }
            return true;
        }

        form.addEventListener('input', () => {
            submitButton.disabled = !isFormValid();
        });
    
        // Cerrar el modal con el botón
        if (closeModalButton) {
            closeModalButton.addEventListener('click', closeModal);
        }
    
        // Cerrar el modal haciendo clic fuera
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});
