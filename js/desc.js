window.addEventListener('scroll', () => {
    const presentacion = document.querySelector('.presentacion');
    const distanciaDesdeLaCima = presentacion.getBoundingClientRect().top;
    const tamañoDeLaPantalla = window.innerHeight;
    
    if (distanciaDesdeLaCima < tamañoDeLaPantalla / 1.5) {
        presentacion.classList.add('mostrar');
    } else {
        presentacion.classList.remove('mostrar');
    }
});