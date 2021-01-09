/* Function To Get Frequency */
const frequency = () => {
    const chain = document.getElementById('input').value;
    const lowered = chain.toLowerCase();
    const splitted = lowered.split('');

    const freq = splitted.reduce((count, el) => {
        count[el] = (count[el] || 0) + 1;

        return count;
    }, {});

    return freq;
}

/* Inject HTML */
/* Creating Frequency Table */

/*
    we will add one more column that will be represent the encoding of each item
*/
const table = (lettersFrequency) => {
    let tbody = document.getElementById('tbody');
    let thead = document.getElementById('thead');
    let head = '';
    let body = '';

    for (let letter in lettersFrequency) {
        head += `<th>${letter}</th>`;
        body += `<td>${lettersFrequency[letter]}</td>`;
    };

    thead.innerHTML = head;
    tbody.innerHTML = body;
};

/* This function executes all the functions that will be called from main.js */
const createAll = () => {
    const freq = frequency();
    table(sorted(freq));
    generateHuffmanTree(generateList(freq));
};