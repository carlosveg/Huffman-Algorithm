const btnRun = document.getElementById('btnRun');
const tbody = document.getElementById('tbody');
const thead = document.getElementById('thead');

/* Function To Get Frequency */
const lettersFrequency = btnRun.addEventListener('click', () => {
    const chain = document.getElementById('input').value;
    const lowered = chain.toLowerCase();
    const splitted = lowered.split('');

    const frequency = splitted.reduce((count, el) => {
        count[el] = (count[el] || 0) + 1;

        return count;
    }, {});

    //document.getElementById('input').value = "";
    console.log(frequency);

    table(frequency);
    return frequency;
});

/* Inject HTML */
/* Creating Frequency Table */
const table = (lettersFrequency) => {
    let head = '';
    let body = '';

    for (const letter in lettersFrequency) {
        head += `<th>${letter}</th>`;
        body += `<td>${lettersFrequency[letter]}</td>`;
        //html = html.concat(`<tr><th>${letter}</th><td>${lettersFrequency[letter]}</td></tr>`);
    };

    thead.innerHTML = head;
    tbody.innerHTML = body;
};