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

var encodingTable = {};
var generateEncoding = (tree, code = "") => {
    if (tree.left === null && tree.right === null) encodingTable[tree.key] = code;
    else {
        generateEncoding(tree.left, code + "0");
        generateEncoding(tree.right, code + "1");
    }
};

/* Inject HTML */
/* Creating Frequency Table */
const table = (frequency, encoding) => {
    const tbody = document.getElementById('tbody');
    let letter = '';
    let body = '';

    for (let key in frequency) {
        body += `<tr><th>${key}</th>`;
        for (let code in encoding) {
            if (key == code) {
                body += `<td>${frequency[key]}</td><td>${encoding[code]}</td>`;
            }
        }
        body += `</tr>`;
    };

    tbody.innerHTML = body;
};

const generateEncodedString = () => {
    const input = document.getElementById("input").value;
    let encodedString = "";

    for (let i = 0; i < input.length; i++) {
        encodedString += "" + encodingTable[input[i]];
    }

    return encodedString;
};

/* This function executes all the functions that will be called from main.js */
const createAll = async () => {
    const freq = frequency();
    const list = await generateList(freq);
    const tree = await generateHuffmanTree(list);
    const dataAnimation = getDataAnimation(tree);
    const data = formatingDataAnimation(dataAnimation);

    generateEncoding(tree);
    table(await sortedKeys(freq), await sortedKeys(encodingTable));
    generateEncodedString();
    setDataAnimation(data);

    setLevel(tree, dataAnimation);
};