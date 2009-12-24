
/*
 * EPI API jQuery.graph() data source integration
 */
jQuery.fn.epiAPI = function(pyql, settings) {
  var config = { 'format': 'json' };
  if (settings) $.extend(config, settings);
  // var data = jQuery.epiAPIrequest(pyql, config);
  // Not using epiAPIrequest until I figure out how to make the javascript WAIT 
  // for the data.
  var processData = function (data) {
    jQuery.fn.graph.order.push('found data');
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
    // Pass datasets to .graph object 
    jQuery.fn.graph.data = dataSets;
    // Pass the headers to the .graph object
    jQuery.fn.graph.headers = data.headers;
    // Pass the info to the .graph object @todo
    // jQuery.fn.graph.data = data.info;
    // Required to return this in chain to continue down the chain.
  };
  $.get('http://epi.sdql.com/PyQL.' + config.format, { pyql: pyql }, processData, 'jsonp');
  // Set javascript into a loop while we wait for the return data
  jQuery.fn.graph.header = null;
  var i = 0;
  var count;
    
  while(i == 0) {
    
    if(jQuery.fn.graph.headers != null) { 
      jQuery.fn.graph.order.push('returning "this"');
      return this;  
    };
    
  }
};


