
/*
 * EPI API jQuery.graph() data source integration
 */

jQuery.graph.dataSources['EPI API'] = { callback: 'epi'};

jQuery.graph.dataSource.epi = function(graphSettings) {
  var processData = function (data) {
    var dataSets = new Array;
    var dataSet = new Array;
    for (var propertyName in data.results) {
      var dataSet = new Array;
      // In the EPI API we know that the third field selected in the PyQL is the 
      // grouped field thus it is our label
      if (data.results[propertyName][2][0]) dataSet['label'] = data.results[propertyName][2][0] // : dataSet['label'] = 0;
      dataSet['data'] = new Array;
      for( var x in data.results[propertyName][0] ) {
        dataSet['data'][x] = [ data.results[propertyName][0][x], data.results[propertyName][1][x] ];
      }
      // Key the array by the label 
      dataSets[dataSet['label']] = dataSet;
    }
    jQuery.graph.graphData(dataSets, graphSettings)
  }; 
  $.get('http://epi.sdql.com/PyQL.json', { pyql: graphSettings.dataSourceOptions.pyql }, processData, 'jsonp');
  return this;
};


