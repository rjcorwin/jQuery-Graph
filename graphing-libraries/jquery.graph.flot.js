/*
 * Flot jQuery.graph() library integration
 */ 
 
jQuery.graph.graphingLibraries['Flot'] = { callback: 'flot'};

jQuery.graph.graphingLibrary.flot = function(data, graphSettings) {
  var defaultConfig = {
    legend: {
        show: true,
        margin: [10, 10],
        backgroundOpacity: 0.5,
        position: 'nw',
    },
    points: {
     show: false,
     radius: 3
    },
    lines: {
      show: true,
      lineWidth: 10
    }
  }
  if (graphSettings.graphOptions == null) graphSettings.graphOptions = defaultConfig;
  // Manipulate data structure to work with FLOT
  var dataSets = new Array;
  for( var x in data) {
    dataSets.push(data[x]);
  }
  $.plot(graphSettings.selection, dataSets, graphSettings.graphOptions);
};

