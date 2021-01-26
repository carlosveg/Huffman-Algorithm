/*
    *************************************************************************************
    El archivo contendra el eventListener del boton y metodos de la libreria ScrollReveal
    *************************************************************************************

    Autores: Vazquez Villeda Juan Alberto, Vega Gloria Carlos Raymundo
    Fecha: 24-01-2021
    Version: 1.3
*/

const btnRun = document.getElementById('btnRun');

/* Creamos el eventListener que disparara el boton al hacerle click */
const lettersFrequency = btnRun.addEventListener('click', createAll);

ScrollReveal().reveal('.showcase', { delay: 100 });
ScrollReveal().reveal('.blurred_text', {delay: 200});
ScrollReveal().reveal('.main-container', {delay: 200});