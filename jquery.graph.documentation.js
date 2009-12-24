// Simple use of .graph() without webservice.

/*
SCHEMA FOR data IN $.graph({data})

var data = { 
            headers: [ column1, column2],
            data: [ [ column1row1, column2row1 ],
                    [ column1row2, column2row2 ],
                    [ column1row3, column2row3 ],
                    [ ... , ... ]
                  ],
            info: {
                    name: '...',
                    description: '...',
                    source: '...' // Ex. 'Data collected by EPA in 2008.'   
                  }
                  
*/

// Basic implementation

$('div#graph').graph({data: myData, type: 'flot'});

