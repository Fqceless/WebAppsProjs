$(document).ready(function() {


    $.ajax({
        url: "http://judah.cedarville.edu/~knoerr/cs3220/termProject/getCombined.php",
        type: "GET",
        dataType: "json",
        success: function(response) {
            processCat(response);
        }
    });
    courselist = [];
    function processReqs(response){
        for (c2use in response.catalog.courses)
        courselist[c2use] = response.catalog.courses[c2use];
    }
    console.log(data);


    function processCat(response){
    let catalogTable = $('#catalogTable').DataTable({
        data: courselist,
    columns: [
        { data: 'id', title: 'Course ID' },
        { data: 'name', title: 'Course Name' },
        { data: 'credits', title: 'Credits' },
        // add more columns
      ]
    });


    $('#searchBox').on('keyup', function() {
      catalogTable.search($(this).val()).draw();
    });
}
  });