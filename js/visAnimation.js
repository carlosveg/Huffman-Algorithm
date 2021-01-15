var nodes = new vis.DataSet([
  { id: 1, label: 'Node 1', level: 1 },
  { id: 2, label: 'Node 2', level: 2 },
  { id: 3, label: 'Node 3', level: 2 },
  { id: 4, label: 'Node 4', level: 3 },
  { id: 5, label: 'Node 5', level: 3 }
]);

// create an array with edges
var edges = new vis.DataSet([
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 2, to: 5 }
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
  nodes,
  edges
};
var options = {
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
    improvedLayout: true,
    hierarchical: {
      enabled: true,
      levelSeparation: 75,
      nodeSpacing: 100,
      treeSpacing: 200,
      blockShifting: true,
      edgeMinimization: true,
      parentCentralization: true,
      direction: 'UD',        // UD, DU, LR, RL
      sortMethod: 'directed'   // hubsize, directed
    }
  }
};

var network = new vis.Network(container, data, options);