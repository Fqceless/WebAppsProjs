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
        data: [
            {
                "id": "CS-1210",
                "name": "C++ Programming",
                "description": "Feeble effort to teach programming",
                "credits": 2
            },
            {
                "id": "CS-1220",
                "name": "Object-Oriented DesignD",
                "description": "Why do we still teach C++",
                "credits": 3
            },
            {
                "id": "CS-2210",
                "name": "Data Structures Using Java",
                "description": "What an awesome prof!!!!",
                "credits": 3
            },
            {
                "id": "CS-3210",
                "name": "Programming Language Survey",
                "description": "Three cheers for Prof Dude",
                "credits": 3
            },
            {
                "id": "CS-3220",
                "name": "Web Applicationss",
                "description": "Who won the Medal of Honor at Gettysburg",
                "credits": 3
            },
            {
                "id": "CS-3310",
                "name": "Operating Systems",
                "description": "Forget Windows; Let's do Linux!",
                "credits": 3
            },
            {
                "id": "CS-3350",
                "name": "Foundations of Computer Security",
                "description": "Authentication",
                "credits": 3
            },
            {
                "id": "CS-3410",
                "name": "Algorithms",
                "description": "The heart of Computer Science",
                "credits": 3
            },
            {
                "id": "CS-3510",
                "name": "Compiler Theory & Practice",
                "description": "The BEST! Way Cool!",
                "credits": 3
            },
            {
                "id": "CS-3610",
                "name": "Database Organization & Design",
                "description": "What's a left join?",
                "credits": 3
            },
            {
                "id": "CS-4410",
                "name": "Parallel Computing",
                "description": "Impossible",
                "credits": 3
            },
            {
                "id": "CS-4430",
                "name": "Machine Learning for Intelligent Agents",
                "description": "AI",
                "credits": 3
            },
            {
                "id": "CS-4710",
                "name": "Computer Graphics",
                "description": "Just games",
                "credits": 3
            },
            {
                "id": "CS-4730",
                "name": "Virtual Reality Applications",
                "description": "Is it real?",
                "credits": 3
            },
            {
                "id": "CS-4810",
                "name": "Software Engineering I",
                "description": "Love Senior Design!",
                "credits": 3
            },
            {
                "id": "CS-4820",
                "name": "Software Engineering II",
                "description": "To infinity and beyond",
                "credits": 4
            },
            {
                "id": "CY-1000",
                "name": "Introduction to Cybersecurity",
                "description": "Attack!",
                "credits": 3
            },
            {
                "id": "CY-2310",
                "name": "Cyber Forensics",
                "description": "Investigate!",
                "credits": 3
            },
            {
                "id": "CY-3320",
                "name": "Linux System Programming",
                "description": "Control!",
                "credits": 3
            },
            {
                "id": "CY-3420",
                "name": "Cyber Defense",
                "description": "Defend!",
                "credits": 3
            },
            {
                "id": "CY-4310",
                "name": "Cyber Operations",
                "description": "Adversarial Mindset",
                "credits": 3
            },
            {
                "id": "CY-4330",
                "name": "Software Security",
                "description": "buffer overflow",
                "credits": 3
            },
            {
                "id": "CY-4810",
                "name": "Secure Software Engineering I",
                "description": "Love Senior Design!",
                "credits": 3
            },
            {
                "id": "CY-4820",
                "name": "Secure Software Engineering II",
                "description": "To infinity and beyond",
                "credits": 4
            },
            {
                "id": "EGCP-1010",
                "name": "Digital Logic Design",
                "description": "Cool course with AND, OR, and NOT",
                "credits": 3
            },
            {
                "id": "EGCP-3010",
                "name": "Advanced Digital Logic Design",
                "description": "I AM ROBOT",
                "credits": 3
            },
            {
                "id": "EGCP-2120",
                "name": "Microcontrollers",
                "description": "They are really tiny",
                "credits": 3
            },
            {
                "id": "EGCP-3210",
                "name": "Computer Architecture",
                "description": "Build the Pipeline!",
                "credits": 3
            },
            {
                "id": "EGCP-4210",
                "name": "Advanced Computer Architecture",
                "description": "We love Tomasulo",
                "credits": 3
            },
            {
                "id": "EGCP-4310",
                "name": "Computer Networks",
                "description": "Networking is very importing for finding a job",
                "credits": 3
            },
            {
                "id": "EGGN-3110",
                "name": "Professional Ethics",
                "description": "Politicians need to take this course!",
                "credits": 3
            },
            {
                "id": "EGGN-4010",
                "name": "Senior Seminar",
                "description": "Wrong Major!",
                "credits": 0
            },
            {
                "id": "MATH-1710",
                "name": "Calculus I",
                "description": "A weedout course",
                "credits": 5
            },
            {
                "id": "MATH-1720",
                "name": "Calculus II",
                "description": "For the few who passed Calc I",
                "credits": 5
            },
            {
                "id": "MATH-2520",
                "name": "Discrete Math w\/ Prob",
                "description": "We should always be discrete",
                "credits": 3
            },
            {
                "id": "MATH-3500",
                "name": "Number Theory",
                "description": "Why?",
                "credits": 3
            },
            {
                "id": "MATH-3610",
                "name": "Linear Algebra",
                "description": "As opposed to non-linear algegra?",
                "credits": 3
            },
            {
                "id": "MATH-3760",
                "name": "Numerical Analysis",
                "description": "Painful!",
                "credits": 3
            },
            {
                "id": "PHYS-2110",
                "name": "General Physics I",
                "description": "Distance, Velocity, Acceleration",
                "credits": 4
            },
            {
                "id": "PHYS-2120",
                "name": "General Physics II",
                "description": "Why do we take this again?",
                "credits": 4
            },
            {
                "id": "BTGE-1725",
                "name": "The Bible and the Gospel",
                "description": "Truly why we are here",
                "credits": 3
            },
            {
                "id": "BTGE-2730",
                "name": "Old Testament Literature",
                "description": "In the Beginning!",
                "credits": 3
            },
            {
                "id": "BTGE-2740",
                "name": "New Testament Literature",
                "description": "In the Beginning Part 2!",
                "credits": 3
            },
            {
                "id": "BTGE-3755",
                "name": "Theology I",
                "description": "Let's learn about God",
                "credits": 3
            },
            {
                "id": "BTGE-3765",
                "name": "Theology II",
                "description": "Let's learn more about God",
                "credits": 3
            },
            {
                "id": "CHEM-1050",
                "name": "Chemistry for Engineers",
                "description": "The lab is fun!",
                "credits": 3.5
            }

        ],
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