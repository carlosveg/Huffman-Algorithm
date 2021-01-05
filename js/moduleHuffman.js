const tbody = document.getElementById('tbody');
const thead = document.getElementById('thead');

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
const table = (lettersFrequency) => {
    let head = '';
    let body = '';

    for (let letter in lettersFrequency) {
        head += `<th>${letter}</th>`;
        body += `<td>${lettersFrequency[letter]}</td>`;
    };

    thead.innerHTML = head;
    tbody.innerHTML = body;
};

/*
    For this function it is necessary to implement the class 'tree' to build the tree.
*/
const huffmanTree = (params) => {
    let frequencies = Object.values(params);
    let sortedArray = frequencies.sort((a, b) => a - b);
    let arrayAux;

    while (frequencies.length > 1) {
        // Swap
        if (sortedArray[0] > sortedArray[1]) {
            aux = sortedArray[0];
            sortedArray[0] = sortedArray[1];
            sortedArray[1] = aux;
        }
        console.log(sortedArray);
        arrayAux = sortedArray.splice(0, 2); // We save the two deleted elements (the two minor ones).
        sortedArray.splice(0, 0, (arrayAux[0] + arrayAux[1]));
    }
    console.log(sortedArray);
};

/* This function executes all the functions that will be called from main.js */
const createAll = () => {
    const freq = frequency();
    table(freq);
    huffman(freq);
};