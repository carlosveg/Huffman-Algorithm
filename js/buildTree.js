/*
    *********************************************************************    
    El archivo contendra las funciones pertinentes para generar el arbol.
    *********************************************************************
    
    Autores: Vazquez Villeda Juan Alberto, Vega Gloria Carlos Raymundo
    Fecha: 21-01-2021
    Version: 1.8
*/

/*
	RECIBE: Un objeto desordenado.
    DEVUELVE: Un objeto ordenado por frecuencias de caracteres.
    DESCRIPCION: Transforma el objeto en un arreglo de arreglos, mismo que sera ordenado en base a las frecuencias de cada caracter.
*/
const sorted = (objectFrecuencies) => {
    let array = Object.entries(objectFrecuencies);
    let aux;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][1] < array[j][1]) {
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }

    return Object.fromEntries(array);
};

/*
    RECIBE: Un objeto desordenado.
    DEVUELVE: Un objeto ordenado lexicograficamente por los caracteres.
    DESCRIPCION: Transforma el objeto en un arreglo de arreglos, mismo que sera ordenado lexicograficamente por los caracteres.
*/
const sortedKeys = (objectFrecuencies) => {
    let array = Object.entries(objectFrecuencies);
    let aux;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][0] < array[j][0]) {
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }

    return Object.fromEntries(array);
};

/*
    RECIBE: Un objeto que contiene el caracter asociado a su frecuencia de aparicion.
    DEVUELVE: Una lista de nodos.
    DESCRIPCION: Genera una lista de nodos en el cual cada nodo contendra el caracter y su frecuencia de aparicion.
*/
const generateList = (objectFrecuencies) => {
    let node_list = [];
    let sortedList = sorted(objectFrecuencies);

    for (let key in sortedList) {
        let node = new Node();

        node.key = key;
        node.frequency = sortedList[key];

        node_list.push(node);
    }

    return node_list;
};

/*
    RECIBE: Una lista de nodos.
    DEVUELVE: El nodo raiz del arbol con la referencia a los demas nodos.
    DESCRIPCION: En base al algoritmo de Huffman se usan los 2 nodos de menos frecuencia y se generan los nuevos nodos para asi construir el arbol.
*/
const generateHuffmanTree = (nodeList) => {
    while (nodeList.length > 1) {
        arrayAux = nodeList.splice(0, 2); // Se hace pop de los 2 primeros elementos (los dos menores).

        let node = new Node();
        node.frequency = arrayAux[0].frequency + arrayAux[1].frequency;
        node.left = arrayAux[0];
        node.right = arrayAux[1];
        nodeList.splice(0, 0, node);

        nodeList = nodeList.sort((a, b) => a.frequency - b.frequency); // Reordenamos la lista de nodos para siempre ir tomando los de menor frecuencia.
    }

    return nodeList.pop();
};