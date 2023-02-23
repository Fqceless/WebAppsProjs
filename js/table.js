$(document).ready(function() {
    $.ajax({
        url: "http://judah.cedarville.edu/~knoerr/cs3220/termProject/getCombined.php",
        type: "GET",
        dataType: "json",
        success: function(response) {
            processReqs(response);
        }
    });
    
    function processReqs(response){
        let catalogTable = $('#catalogTable').DataTable({
            data: [],
        columns: [
            { data: 'id', title: 'Course ID' },
            { data: 'name', title: 'Course Name' },
            { data: 'description', title: 'Course Name' },
            { data: 'credits', title: 'Credits' },
            // add more columns
        ]
        });

        console.log(catalogTable.data);
    
        $('#searchBox').on('keyup', function() {
        catalogTable.search($(this).val()).draw();
        });
    }
});
