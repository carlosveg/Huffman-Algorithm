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
            rawNodes.push((leftChild.frequency).toString() + " " + (leftChild.key).toString());
            nodesTovisit.push(leftChild);
        }
        if (rightChild !== null) {
            rightChild.index = index;
            index += 1;
            rawEdges.push([visitedNode[0].index, rightChild.index]);
            rawNodes.push((rightChild.frequency).toString() + " " + (rightChild.key).toString());
            nodesTovisit.push(rightChild);
        }
    }

    return { rawEdges, rawNodes };
};

const formatingDataAnimation = (dataAnimation) => {
    let { rawEdges, rawNodes } = dataAnimation;
    let nodesProcessed = [];
    let edgesProcessed = [];

    for (const id in rawNodes) {
        let node = new Object();

        node.id = id;
        node.label = rawNodes[id];

        nodesProcessed.push(node);
    }

    for (let i = 0; i < rawEdges.length; i++) {
            let edge = new Object();

            edge.from = rawEdges[i][0];
            edge.to = rawEdges[i][1];

            edgesProcessed.push(edge);
    }

    var myJSON = JSON.stringify(nodesProcessed);
    var myJSON2 = JSON.stringify(edgesProcessed);

    console.log(myJSON);
    //console.log(edgesProcessed);

    return { myJSON, myJSON2 };
};

const getLevels = (node, index, level) => {
    if (node.left === null && node.right === null) return ;
    else if (node.index === index) return level;
    else {
        getLevels(node.left, index, level + 1);
        getLevels(node.right, index, level + 1);
    }
};

const setLevel = (tree, data) => {
    let levels = [];
    let { rawNodes } = data;

    for (let i = 0; i < rawNodes.length; i++) {
        levels.push(getLevels(tree, i, 0));
    }
    console.log(rawNodes);

    console.log(levels);
};