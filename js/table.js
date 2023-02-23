$(document).ready(function() {
    $.ajax({
        url: "http://judah.cedarville.edu/~knoerr/cs3220/termProject/getCombined.php",
        type: "GET",
        dataType: "json",
        success: function(response) {
            processReqs(response);
        }
    });
    courselist = {}
    function processReqs(response){
        courselist = response.catalog.courses;
    }
    let catalogTable = $('#catalogTable').DataTable({
        data: [courselist],
    columns: [
        { data: 'id', title: 'Course ID' },
        { data: 'name', title: 'Course Name' },
        { data: 'description', title: 'Description' },
        { data: 'credits', title: 'Credits' },
        // add more columns
    ]
    });

    $('#searchBox').on('keyup', function() {
    catalogTable.search($(this).val()).draw();
    });

});