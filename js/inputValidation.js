/*
    ******************************************************************
    El archivo contendra la validacion de la caja de texto y el boton.
    ******************************************************************

    Autores: Vazquez Villeda Juan Alberto, Vega Gloria Carlos Raymundo
    Fecha: 24-01-2021
    Version: 1.2
*/

const input = document.getElementById("input");

const regex = {
    chain: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}@~\(\)\[\];:''"",<>ñÑ\\-\s]{4,100}$/
};

const validateInput = (e) => {
    if (regex.chain.test(e.target.value)) {
        document.getElementById('input').classList.remove('invalid_input')
        document.getElementById('input').classList.add('valid_input');
        document.getElementById('validated_text').classList.add('display_none');
        document.getElementById('btnRun').removeAttribute('disabled');
    } else {
        document.getElementById('input').classList.add('invalid_input');
        document.getElementById('input').classList.remove('valid_input');
        document.getElementById('validated_text').classList.remove('display_none');
        document.getElementById('btnRun').setAttribute('disabled', true);
    }
};

input.addEventListener('keyup', validateInput);
input.addEventListener('blur', validateInput);