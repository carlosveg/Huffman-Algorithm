const btnRun = document.getElementById('btnRun');

/* In this eventListener just execute the function that will trigger the creation of the frequency table */
const lettersFrequency = btnRun.addEventListener('click', createAll);

ScrollReveal().reveal('.showcase', { delay: 100 });
ScrollReveal().reveal('.blurred_text', {delay: 200});
ScrollReveal().reveal('.main-container', {delay: 200});