// $('div#graph3').graph({library: 'Flot'}).epiAPI(pyql);
// $('div#graph3').graph({ library: { name: 'Flot', options: graphingOption }, source: { name: 'epiAPI', options: sourceOptions } });
// for debugging
// jQuery.fn.graph.order = new Array();

// $('div#graph3').graph({graph-library: 'Flot', graph-options: '', data-source: 'epiAPI', data-source-options: ''});

//$('div#graph3').graph({ graphLibrary: 'Flot', graphOptions: null, dataSource: 'EPI API', dataSourceOptions: { pyql: pyql } });

jQuery.graph = {};

jQuery.graph.graphingLibraries = {};

jQuery.graph.graphingLibrary = {};

jQuery.graph.dataSources = {}

jQuery.graph.dataSource = {}

jQuery.fn.graph = function(graphSettings) {
  graphSettings.selection = this;  
  jQuery.graph.dataSource[jQuery.graph.dataSources[graphSettings.dataSource].callback](graphSettings);
  return this;
};

/*
 * Process handed of to this function in dataSource's specific function
 */

jQuery.graph.graphData = function(data, graphSettings) {
  // Look up the callback function
  
  // Remove spinner?
  
  // Launch the graph function with the data
  jQuery.graph.graphingLibrary[jQuery.graph.graphingLibraries[graphSettings.graphLibrary].callback](data, graphSettings);
};
