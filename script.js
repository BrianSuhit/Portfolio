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

// =====================================
// SEGURO PARA EL RESIZE DE VENTANA
// =====================================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        header.classList.remove('menu-abierto');
    }
});
