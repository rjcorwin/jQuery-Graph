// $('div#graph3').graph({library: 'Flot'}).epiAPI(pyql);
// $('div#graph3').graph({ library: { name: 'Flot', options: graphingOption }, source: { name: 'epiAPI', options: sourceOptions } });


// $('div#graph3').graph({library: 'Flot', graph-options: '', source: 'epiAPI', source-options: ''}).epiAPI(pyql);


jQuery.fn.graph = function(type) {
  var data = jQuery.fn.graph.data;
  return this.each(function(){
    // Apply graph to this
    // if type is 'flot' then look use flot plug in object  
    var graphType = 'type' + type.library;
    //this.graph[graphType](data, options);
    jQuery.graph[graphType](this, data);
  });
};

jQuery.graph = {};

jQuery.fn.graph.order = new Array();

jQuery.fn.graph.data = function() {
 return this;
};


