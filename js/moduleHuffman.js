/* Function To Get Frequency */
const frequency = () => {
    const chain = document.getElementById('input').value;
    //const lowered = chain.toLowerCase();
    const splitted = chain.split('');

    const freq = splitted.reduce((count, el) => {
        count[el] = (count[el] || 0) + 1;

        return count;
    }, {});

    return freq;
}

var encodingTable = {};
const generateEncoding = (tree, code = "") => {
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

const display_elements = () => {
    document.getElementById("display_table").classList.remove('display_none');
    document.getElementById("mynetwork").classList.remove('display_none');
};

/* This function executes all the functions that will be called from main.js */
const createAll = async () => {
    const freq = await frequency();
    const list = generateList(freq);
    const tree = await generateHuffmanTree(list);
    const dataAnimation = getDataAnimation(tree);
    setLevel(tree, dataAnimation);
    const data = formatingDataAnimation(dataAnimation);

    display_elements();

    generateEncoding(tree);
    table(await sortedKeys(freq), await sortedKeys(encodingTable));
    generateEncodedString();
    setDataAnimation(data);
};