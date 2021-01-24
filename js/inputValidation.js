const input = document.getElementById("input");

const regex = {
    chain: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}@~\(\)\[\];:''"",<>ñÑ\\-\s]{4,100}$/
};

const validarInput = (e) => {
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

input.addEventListener('keyup', validarInput);
input.addEventListener('blur', validarInput);