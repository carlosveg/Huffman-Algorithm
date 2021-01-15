const getDataAnimation = (tree) => {
    let nodes = [];
    let edges = [];
    let index = 0;
    let nodesTovisit = []; // Will be treated as a queue

    tree.index = index;
    index += 1;
    nodes.push((tree.frequency).toString());
    nodesTovisit.push(tree);

    while (nodesTovisit.length > 0) {
        let visitedNode = nodesTovisit.splice(0, 1);
        let leftChild = visitedNode[0].left;
        let rightChild = visitedNode[0].right;

        if (leftChild !== null) {
            leftChild.index = index;
            index += 1;
            edges.push([visitedNode[0].index, leftChild.index]);
            nodes.push((leftChild.frequency).toString() + " " + (leftChild.key).toString());
            nodesTovisit.push(leftChild);
        }
        if (rightChild !== null) {
            rightChild.index = index;
            index += 1;
            edges.push([visitedNode[0].index, rightChild.index]);
            nodes.push((rightChild.frequency).toString() + " " + (rightChild.key).toString());
            nodesTovisit.push(rightChild);
        }
    }

    return [edges, nodes];
};

const formatingDataAnimation = (dataAnimation) => {
    let [edges, nodes] = dataAnimation;
    var nodesAnimation = new vis.DataSet();
    
    var edgesAnimation = new vis.DataSet();

    console.log("Edges", edges);
    console.log("Nodes", Object.entries(nodes));
};