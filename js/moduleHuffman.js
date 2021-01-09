//import Node from './tree'
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
    A new class will be implemented to make a new frequency table and build the tree.
*/

/*
    For this function it is necessary to implement the class 'tree' to build the tree.
*/
const huffmanTree = (params) => {
    let frequencies = Object.values(params);
    let sortedArray = frequencies.sort((a, b) => a - b);
    let arrayAux;
    let tree = [];
    let aux = [];

    while (frequencies.length > 1) {
        let node = new Node();

        console.log(sortedArray);
        arrayAux = sortedArray.splice(0, 2); // We save the two deleted elements (the two minor ones).
        node.frequency = arrayAux[0] + arrayAux[1];
        node.left = arrayAux[0];
        node.right = arrayAux[1];
        sortedArray.splice(0, 0, (arrayAux[0] + arrayAux[1]));
        tree.push(node);
        aux = tree.pop();
        console.log("Node0: ", node.left);
        console.log("Node1: ", node.right);

        sortedArray = frequencies.sort((a, b) => a - b);
    }
    console.log(sortedArray);
};

/* This function executes all the functions that will be called from main.js */
const createAll = () => {
    const freq = frequency();
    table(freq);
    huffmanTree(freq);
};