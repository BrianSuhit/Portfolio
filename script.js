// =====================================
// LÓGICA DE LA ANIMACIÓN DE SCROLL (Fade-in)
// =====================================
const elementosOcultos = document.querySelectorAll('.hidden');

const observador = new IntersectionObserver((entradas) => 
    {
    entradas.forEach((entrada) => 
        {
            if (entrada.isIntersecting) 
            {
            entrada.target.classList.remove('hidden');
            }
        });
    });

elementosOcultos.forEach((el) => observador.observe(el));


// =====================================
// LÓGICA DEL MENÚ DE HAMBURGUESA
// =====================================
const toggleButton = document.querySelector('.header__toggle');
const header = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.header__menu-link');

toggleButton.addEventListener('click', () => {
    header.classList.toggle('menu-abierto');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('menu-abierto');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        header.classList.remove('menu-abierto');
    }
});

// =====================================
// LÓGICA DEL FORMULARIO DE CONTACTO
// =====================================
const form  = document.getElementById('contact-form');
const submitButton  = document.querySelector('button[type="submit"]');
const requiredFields = form .querySelectorAll('[required]');

function isFormValid() {
    // Recorremos cada uno de los campos que seleccionamos antes
    for (const field of requiredFields) {
        // Si el valor del campo, sin espacios en blanco al principio o al final (.trim()), está vacío...
        if (field.value.trim() === '') {
            // ...entonces el formulario NO es válido. Devolvemos 'false' y la función termina aquí.
            return false;
        }
    }

    return true;
}

form.addEventListener('input', () => {
    // Cada vez que el usuario escribe algo en el formulario...

    // ...llamamos a nuestra función para ver si el formulario es válido ahora.
    if (isFormValid()) {
        // Si ES válido, habilitamos el botón.
        submitButton.disabled = false;
    } else {
        // Si NO es válido, lo deshabilitamos.
        submitButton.disabled = true;
    }
});
