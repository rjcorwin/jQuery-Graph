
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
