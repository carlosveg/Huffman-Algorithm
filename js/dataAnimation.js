/*
    ******************************************************************************************************************************************
    El archivo contendra las funciones que se encargaran de dar formato a los datos para enviarlos a la biblioteca visjs y generar la grafica.
    ******************************************************************************************************************************************

    Autores: Vazquez Villeda Juan Alberto, Vega Gloria Carlos Raymundo
    Fecha: 22-01-2021
    Version: 2.3.1
*/

/*
    RECIBE: Nodo raiz del arbol.
    DEVUELVE: Un objeto con los nodos y aristas, aun sin procesar.
    DESCRIPCION: Se realiza un recorrido de profundidad por el arbol para asociar un index y las etiquetas que contendra cada nodo; de igual forma se crea una referencia de las aristas con un formato de [origen, destino].
*/
const getDataAnimation = (tree) => {
    let rawNodes = [];
    let rawEdges = [];
    let index = 0;
    let nodesTovisit = []; // Will be treated as a queue

    tree.index = index;
    index += 1;
    rawNodes.push((tree.frequency).toString());
    nodesTovisit.push(tree);

    while (nodesTovisit.length > 0) {
        let visitedNode = nodesTovisit.splice(0, 1);
        let leftChild = visitedNode[0].left;
        let rightChild = visitedNode[0].right;

        if (leftChild !== null) {
            leftChild.index = index;
            index += 1;
            rawEdges.push([visitedNode[0].index, leftChild.index]);
            if (leftChild.left !== null) rawNodes.push((leftChild.frequency).toString() + " " + (leftChild.key).toString());
            else rawNodes.push((leftChild.frequency).toString() + " '" + (leftChild.key).toString() + "'");
            nodesTovisit.push(leftChild);
        }
        if (rightChild !== null) {
            rightChild.index = index;
            index += 1;
            rawEdges.push([visitedNode[0].index, rightChild.index]);
            if (rightChild.left !== null) rawNodes.push((rightChild.frequency).toString() + " " + (rightChild.key).toString());
            else rawNodes.push((rightChild.frequency).toString() + " '" + (rightChild.key).toString() + "'");
            nodesTovisit.push(rightChild);
        }
    }

    return {
        rawEdges,
        rawNodes
    };
};

/* Varbiable global, arreglo que contendra el nivel de cada nodo */
var levels = [];
/*
    RECIBE: Nodo, indice del nodo y el nivel del nodo en el arbol.
    DEVUELVE: Void.
    DESCRIPCION: De forma recursiva se le asocia el nivel al que pertenece cada nodo dentro del arbol.
*/
const getLevels = (node, index, level) => {
    if (node !== null) {
        if (node.index === index) levels.push(level);
        getLevels(node.left, index, level + 1);
        getLevels(node.right, index, level + 1);
    }
};

/*
    RECIBE: Referencia al nodo raiz y un arreglo del cual obtendra los nodos.
    DEVUELVE: Void.
    DESCRIPCION: Dada la cantidad de nodos que contendra el arbol se asociaran niveles a cada nodo
*/
const setLevel = (tree, data) => {
    let {
        rawNodes
    } = data;

    for (let i = 0; i < rawNodes.length; i++) getLevels(tree, i, 0);
};

/*
    RECIBE: Objeto con nodos y aristas sin procesar.
    DEVUELVE: Objeto con nodos y aristas procesados
    DESCRIPCION: Se le asocia a cada nodo un id, etiqueta y nivel, de igual forma se da formato a las aristas.
*/
const formatingDataAnimation = (dataAnimation) => {
    let {
        rawEdges,
        rawNodes
    } = dataAnimation;
    let nodesProcessed = [];
    let edgesProcessed = [];
    let i = 0;

    for (const id in rawNodes) {
        let node = new Object();

        node.id = id;
        node.label = rawNodes[id];
        node.level = levels[i++];

        nodesProcessed.push(node);
    }

    for (let i = 0; i < rawEdges.length; i++) {
        let edge = new Object();

        edge.from = rawEdges[i][0];
        edge.to = rawEdges[i][1];

        edgesProcessed.push(edge);
    }

    return {
        nodesProcessed,
        edgesProcessed
    };
};