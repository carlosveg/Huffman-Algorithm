const input = document.getElementById('input');
const regex = {
    chain: /^[a-zA-Z]{4,10}$/
};

const validarInput = (e) => {
    if (regex.chain.test(e.target.value)) {
        document.getElementById('input').classList.remove('invalid_input')
        document.getElementById('input').classList.add('valid_input');
        document.getElementById('btnRun').removeAttribute('disabled');
    } else {
        document.getElementById('input').classList.add('invalid_input');
        document.getElementById('input').classList.remove('valid_input');
        document.getElementById('btnRun').setAttribute('disabled', true);
    }
};

input.addEventListener('keyup', validarInput);
input.addEventListener('blur', validarInput);