$( document ).ready(function() {
    var rdr = new FileReader();
    /** 
        Assuming the first row is the name of the columns we extract that row and create the table header.
        @return String html table header
     */
    function extract_header(columns) {
        var table_header = '<thead> <tr class="tableheader">';
        for (c = 0; c < columns.length; c++) {
            table_header += '<th>' + columns[c] + '</th>';
        }
        table_header += '</tr> </thead>';
        return table_header
    }
    
    $('#viewfile').click( async function () {
        rdr.onload = async function (e) {
          const $tableMain = $('#tableMain');
          //get the rows into an array
          var therows = e.target.result.split("\n");
          //build a new table row
          $tableMain.append(extract_header(therows[0].split(",")));
          const tbody = document.createElement('tbody');
          $tableMain.append(tbody);
          $tbody = $tableMain.children('tbody');

          var newrow='';
          

          
          //loop through the rows
          for (var row = 1; row < therows.length ; row++  ) {
            
            newrow += '<tr>';
            var columns = therows[row].split(",");
            for (c = 0; c < columns.length; c++) {
                newrow+="<td>" + columns[c]  +  "</td>";	
            }
            newrow += '</tr>';		
            
            $tbody.append(newrow);
            newrow = '';	
          }
          
        }
        rdr.readAsText($("#inputfile")[0].files[0]);
    });
});