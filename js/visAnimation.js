const setDataAnimation = (param) => {
  let {
    nodesProcessed,
    edgesProcessed
  } = param;
  let nodes = new vis.DataSet();
  let edges = new vis.DataSet();

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
    height: '100%',
    width: '100%',
    locale: 'en',
    nodes: {
      borderWidth: 1,
      borderWidthSelected: 2,
      chosen: true,
      opacity: 1,
      font: {
        size: 25, // px
      },
      fixed: {
        x: true,
        y: true
      }
    },
    edges: {
      color: 'black',
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
        levelSeparation: 150,
        nodeSpacing: 150,
        treeSpacing: 200,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: true,
        direction: 'UD', // UD, DU, LR, RL
        sortMethod: 'directed' // hubsize, directed
      }
    },
    interaction: {
      dragNodes: false,
      dragView: true,
      hover: true,
      hoverConnectedEdges: true,
      selectConnectedEdges: true,
      tooltipDelay: 300,
      zoomSpeed: 1,
    },/* 
    configure: {
      enabled: true,
      filter: 'nodes',
      container: undefined,
      showButton: true
    } */
  };

  var network = new vis.Network(container, data, options);

};