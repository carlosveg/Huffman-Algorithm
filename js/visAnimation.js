const setDataAnimation = (param) => {
  let { myJSON, myJSON2 } = param;
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
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 6 },
    { from: 3, to: 7 },
    { from: 3, to: 8 },
    { from: 6, to: 9 },
    { from: 6, to: 10 }
  ];

  nodes.add(myJSON);
  edges.add(myJSON2);

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
        label: true
      },
      shadow: true
    },
    edges: {
      color: 'red',
      scaling: {
        label: true,
      },
      shadow: true,
      smooth: true,
    },
    layout: {
      randomSeed: undefined,
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