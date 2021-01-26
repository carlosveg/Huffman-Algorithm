/*
    ********************************************************************************************
    El archivo contendra las funciones que generaran frecuencias, tablas, texto codificado, etc.
    ********************************************************************************************

    Autores: Vazquez Villeda Juan Alberto, Vega Gloria Carlos Raymundo
    Fecha: 24-01-2021
    Version: 1.9
*/

/*
    RECIBE: Void
    DEVUELVE: Un objeto con los caracteres asociados su frecuencia de aparicion.
    DESCRIPCION: Obtiene el texto ingresado en la caja de texto, lo divide por caracteres y realiza el conteo de aparicion para cada caracter.
*/
const frequency = () => {
    const chain = document.getElementById('input').value;
    const splitted = chain.split('');

    const freq = splitted.reduce((count, el) => {
        count[el] = (count[el] || 0) + 1;

        return count;
    }, {});

    return freq;
}

/* Varible global, un objeto que contendra el caracter asociado a su codificacion en binario */
var encodingTable = {};
/*
    RECIBE: Referencia al arbol y el codigo en el estado actual.
    DEVUELVE: Void.
    DESCRIPCION: Por medio de recursividad recorre el arbol para asi generar el codigo binario para cada caracter.
*/
const generateEncoding = (tree, code = "") => {
    if (tree.left === null && tree.right === null) encodingTable[tree.key] = code;
    else {
        generateEncoding(tree.left, code + "0");
        generateEncoding(tree.right, code + "1");
    }
};

/*
    RECIBE: El objeto con la frecuencia de los caracteres y un objeto con el valor en binario de cada caracter.
    DEVUELVE: Void.
    DESCRIPCION: Genera codigo HMTL para asociar cada caracter con su frecuencia de aparicion y su codigo en binario, despues lo inyecta en el HTML.
*/
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

/*
    RECIBE: Void.
    DEVUELVE: Un String que sera el texto codificado.
    DESCRIPCION: Obtiene el texto de la caja de texto para hacer un recorrido caracter por caracter e ir concatenando el valor en binario asociado al caracter. 
*/
const generateEncodedString = () => {
    const input = document.getElementById("input").value;
    let encodedString = "";

    for (let i = 0; i < input.length; i++) {
        encodedString += "" + encodingTable[input[i]];
    }
    
    return encodedString;
};

/*
    RECIBE: String del texto codificado
    DEVUELVE: Void.
    DESCRIPCION: Inyecta el texto original y codificado en el HTML para su visualizacion en la pagina.
*/
const displayEncoded = (encodedString) => {
    const input = document.getElementById("input").value;
    const original_text = document.getElementById('original_text');
    const encoded_text = document.getElementById('encoded_text');

    original_text.innerHTML = input;
    encoded_text.innerHTML = encodedString;
};

/*
    RECIBE: Void.
    DEVUELVE: Void.
    DESCRIPCION: Muestra los datos (tabla de codificacion y texto codificado), el arbol generado una vez es presionado el boton.
*/
const display_elements = () => {
    document.getElementById("display_data").classList.remove('display_none');
    document.getElementById("mynetwork").classList.remove('display_none');
};

/*
    RECIBE: Void.
    DEVUELVE: Void.
    DESCRIPCION: Ejecuta las funciones para generar datos, arbol y mostrarlos en la pagina.
*/
const createAll = async () => {
    const freq = await frequency();
    const list = generateList(freq);
    const tree = await generateHuffmanTree(list);
    const dataAnimation = getDataAnimation(tree);
    setLevel(tree, dataAnimation);
    const data = formatingDataAnimation(dataAnimation);

    generateEncoding(tree);
    table(await sortedKeys(freq), await sortedKeys(encodingTable));
    displayEncoded(generateEncodedString());
    setDataAnimation(data);

    display_elements();
};