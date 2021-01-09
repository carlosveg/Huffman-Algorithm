const sorted = (param) => {
    //let len = (params) => {let c=0; for (let key in params) c++; return c;}
    let array = Object.entries(param);
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

const generateList = (param) => {
    let node_list = [];
    let sortedList = sorted(param);

    for (let key in sortedList) {
        let node = new Node();

        node.key = key;
        node.frequency = sortedList[key];

        node_list.push(node);
    }

    return node_list;
};

const generateHuffmanTree = (nodeList) => {
    while (nodeList.length > 1) {
        arrayAux = nodeList.splice(0, 2); // We save the two deleted elements (the two minor ones).

        let node = new Node();
        node.frequency = arrayAux[0].frequency + arrayAux[1].frequency;
        node.left = arrayAux[0];
        node.right = arrayAux[1];
        nodeList.splice(0, 0, node);
        
        nodeList = nodeList.sort((a, b) => a.frequency - b.frequency);
    }
    console.log(nodeList);
};