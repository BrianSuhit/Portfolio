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