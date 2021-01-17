const setDataAnimation = (param) => {
  let { nodesProcessed, edgesProcessed } = param;
  let nodes = new vis.DataSet();
  let edges = new vis.DataSet();

  var nodes2 = [
    { id: 0, label: "10" },
    { id: 1, label: "4 " },
    { id: 2, label: "6 " },
    { id: 3, label: "2 " },
    { id: 4, label: "2 d" },
    { id: 5, label: "2 s" },
    { id: 6, label: "4 " },
    { id: 7, label: "1 a" },
    { id: 8, label: "1 r" },
    { id: 9, label: "2 g" },
    { id: 10, label: "2 f" }
  ];

  // create an array with edges
  var edges2 = [
    { from: 0, to: 1, id: "b19dd139-b6e4-4fc1-b81d-bae941c5c4b0" },
    { from: 0, to: 2, id: "e460a7d4-5214-4c9c-97c8-fb26784cc5fd" },
    { from: 1, to: 3, id: "c80bab71-79c0-4caf-82af-9f493156cd8b" },
    { from: 1, to: 4, id: "87df0eae-f57b-4a41-886f-d95578ec1dd8" },
    { from: 2, to: 5, id: "255c1d4e-30f9-4736-ad75-c49bb3ae6d93" },
    { from: 2, to: 6, id: "51d8c219-ee59-4358-9b0d-f6609b11860e" },
    { from: 3, to: 7, id: "856a8ec2-0125-4ddc-a6cc-cc5532bcd42f" },
    { from: 3, to: 8, id: "adb2362a-19cf-4b91-bd16-158e2a9880b9" },
    { from: 6, to: 9, id: "b9e5cdba-bd2b-478a-b7d9-6a208ad8b63d" },
    { from: 6, to: 10, id: "b3d2336f-542a-4f28-8302-57b31bbcf93f" }
  ];

  nodes.add(nodesProcessed);
  edges.add(edgesProcessed);

  // create a network
  let container = document.getElementById('mynetwork');

  // provide the data in the vis format
  let data = {
    nodes,
    edges
  };
  let options = {
    nodes: {
      fixed: false,
      font: '12px arial red',
      scaling: {
        label: false
      },
      shadow: true
    },
    edges: {
      color: 'red',
      scaling: {
        label: false,
      },
      shadow: true,
      smooth: true,
    },
    layout: {
      //randomSeed: undefined,
      improvedLayout: false,
      hierarchical: {
        enabled: true,
        levelSeparation: 75,
        nodeSpacing: 100,
        treeSpacing: 200,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: true,
        direction: 'UD', // UD, DU, LR, RL
        sortMethod: 'directed' // hubsize, directed
      }
    }
  };

  var network = new vis.Network(container, data, options);

};