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

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') 
        {
            modal.classList.remove('hidden');
        }


        // Función de validación (interna a este bloque)
        function isFormValid() {
            for (const field of requiredFields) {
                if (field.value.trim() === '') return false;
            }
            return true;
        }

        // Habilitar/Deshabilitar el botón al escribir
        form.addEventListener('input', () => {
            submitButton.disabled = !isFormValid();
        });

        // form.addEventListener('submit', (event) => {
        //     event.preventDefault();
            
        //     modal.classList.remove('hidden');
        //     form.reset();
        //     submitButton.disabled = true;
        // });

        // Cerrar el modal
        if (closeModalButton) {
            closeModalButton.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }
        
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }

});
