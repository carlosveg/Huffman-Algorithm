// create an array with nodes
var nodes = new vis.DataSet([
    { id: 98, label: 'coches', likes: 2512, group: 'start' },
    { id: 0, label: 'rap', likes: 2512, group: 'end' },
    { id: 1, label: 'coches_rs', likes: 2512, group: 'end' },
    { id: 58, label: 'cochesabandonados', likes: 2512, group: 'end' },
    { id: 99, label: 'picoftheday', likes: 2512, group: 'end' },
    { id: 100, label: 'design', likes: 2512, group: 'end' },
    { id: 183, label: 'cochesaescala', likes: 2512, group: 'end' },
    { id: 184, label: 'cochesantiguos', likes: 2512, group: 'end' },
    { id: 185, label: 'cochesbaratos', likes: 2512, group: 'end' },
    { id: 186, label: 'cochesboda', likes: 2512, group: 'end' },
    { id: 187, label: 'cochesclasicos', likes: 2512, group: 'end' },
    { id: 188, label: 'cochesclassicos', likes: 2512, group: 'end' },
    { id: 189, label: 'cochescolombia', likes: 2512, group: 'end' },
    { id: 190, label: 'cochesdeboda', likes: 2512, group: 'end' },
    { id: 191, label: 'cochesdelujo', likes: 2512, group: 'end' },
    { id: 192, label: 'cochesdeocasion', likes: 2512, group: 'end' },
    { id: 193, label: 'cochesdeportivos', likes: 2512, group: 'end' },
    { id: 194, label: 'cochesdeseguidoresdgr', likes: 2512, group: 'end' },
    { id: 195, label: 'cochese', likes: 2512, group: 'end' },
    { id: 196, label: 'cocheselectricos', likes: 2512, group: 'end' },
    { id: 197, label: 'cocheseléctricos', likes: 2512, group: 'end' },
    { id: 198, label: 'cochesespaña', likes: 2512, group: 'end' },
    { id: 199, label: 'cochesespeciales', likes: 2512, group: 'end' },
    { id: 200, label: 'cochesincarnet', likes: 2512, group: 'end' }
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
  { from: 98, to: 0 },
  { from: 98, to: 1 },
  { from: 98, to: 58 },
  { from: 98, to: 99 },
  { from: 98, to: 100 },
  { from: 98, to: 183 },
  { from: 98, to: 184 },
  { from: 98, to: 185 },
  { from: 98, to: 186 },
  { from: 98, to: 187 },
  { from: 98, to: 188 },
  { from: 98, to: 189 },
  { from: 98, to: 190 },
  { from: 98, to: 191 },
  { from: 98, to: 192 },
  { from: 98, to: 193 },
  { from: 98, to: 194 },
  { from: 98, to: 195 },
  { from: 98, to: 196 },
  { from: 98, to: 197 },
  { from: 98, to: 198 },
  { from: 98, to: 199 },
  { from: 98, to: 200 }
  ]);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  
  var options = {
    nodes: {
      // margin: 110,
      shape: 'circle',
      font: {
        size: 11,
        color: 'white',
      },
      mass: 0.5,
      // scaling: {
      //     label: {
      //         enabled: true,
      //         min: 20,
      //         max: 20
      //     },
      // },
      widthConstraint: 80,
    },
    edges: {
      smooth: false,
      arrows: {
        to: {
          enabled: true,
        },
      },
      physics: false,
    },
    interaction:{tooltipDelay:3600000, hover: true},
    layout: {
      improvedLayout: false,
      hierarchical: {
        enabled: false,
        sortMethod: 'directed'
      },

    },
    physics: { // TODO: adaptive physics settings based on size of graph rendered
      enabled: true,
      adaptiveTimestep: true,
      // stabilization: {
      // 	iterations: 100000,
      // 	fit: true
      // },
      barnesHut: {
        avoidOverlap: 0.8
      },
    },
    groups: {
      'start': {
        // shape: 'circle',
        title: null,
        color:{
          border:'#009688',
          background:'#009688',
          highlight:{ background:'#202443',border:'#202443'},
        },
        shadow:{
          enabled: true,
          color: 'rgba(94, 105, 119, 0.5)',
          size:10,
          x:0,
          y:3
        },
        // font: {
        //     size: 59
        // },
        margin: 10,
        // padding: 10
      }
    }
  };
  var network = new vis.Network(container, data, options);