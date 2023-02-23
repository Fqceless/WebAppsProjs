$(document).ready(function() {


    $.ajax({
        url: "http://judah.cedarville.edu/~knoerr/cs3220/termProject/getCombined.php",
        type: "GET",
        dataType: "json",
        success: function(response) {
            processCat(response);
        }
    });


    function processCat(response){
    let catalogTable = $('#catalogTable').DataTable({
      data: [],
      columns: [
        { data: 'id', title: 'Course ID' },
        { data: 'name', title: 'Course Name' },
        { data: 'credits', title: 'Credits' },
        // add more columns
      ]
    });
    for (let c in response.catalog.courses){
        catalogTable.data.push(response.catalog.courses[c]);
    }
    console.log(catalogTable.data);


    $('#searchBox').on('keyup', function() {
      catalogTable.search($(this).val()).draw();
    });
    }
  });