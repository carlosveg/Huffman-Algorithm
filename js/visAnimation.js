/*
    *******************************************************************************************************************
    El archivo contendra los metodos propios de la libreria visjs asi como las configuraciones para generar la grafica.
    *******************************************************************************************************************

    Autores: Vazquez Villeda Juan Alberto, Vega Gloria Carlos Raymundo
    Fecha: 24-01-2021
    Version: 3.4
*/

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
    },
  };

  var network = new vis.Network(container, data, options);

};