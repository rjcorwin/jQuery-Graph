/*
 * Flot jQuery.graph() library integration
 */ 
jQuery.graph.typeFlot = function(object, data) {
  // Manipulate data structure to work with FLOT
  jQuery.fn.graph.order.push('in flot');
  var dataSets = new Array;
  for( var x in data) {
    dataSets.push(data[x]);
  }
  // Generate the graph
  // object.flot(data, options);
  // object.flot(data);
  // $.plot(object, data, options);
  // debugger;
  $.plot(object, dataSets, [ data['China'] ]);
};

