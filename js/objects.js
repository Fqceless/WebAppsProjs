class plan {
    constructor(planName, catYear, major, minor, studentName, currYear, currTerm, courseArray) {
        this.planName = planName;
        this.catYear = catYear;
        this.major = major;
        this.minor = minor;
        this.studentName = studentName;
        this.currYear = currYear;
        this.currTerm = currTerm;
        this.courseArray = courseArray;
    }
}

class course{
    constructor(term, year, courseId, courseName, credits){
        this.term = term;
        this.year = year;
        this.courseId = courseId;
        this.courseName = courseName;
        this.credits = credits;
    }
}

class semester{
    constructor(term){
        this.term = term;
        this.courses = [];
    }
}

class year{
    constructor(yearNum){
        this.yearNum = yearNum;
        this.semesters = [
            new semester('Spring'),
            new semester('Summer'),
            new semester('Fall')
        ];
    }
}

let xhttpPlan = new XMLHttpRequest();
xhttpPlan.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(this.responseText);
    processResponse(response);
    
    // process the JSON data here
  }
};
xhttpPlan.open("GET", "http://judah.cedarville.edu/~knoerr/cs3220/termProject/getCombined.php", true);
xhttpPlan.setRequestHeader("Content-type", "application/json");
xhttpPlan.send();

let xhttpReqs = new XMLHttpRequest();
xhttpReqs.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(this.responseText);
    processResponse(response);
    
    // process the JSON data here
  }
};
xhttpReqs.open("GET", "http://judah.cedarville.edu/~knoerr/cs3220/termProject/getRequirements.php", true);
xhttpReqs.setRequestHeader("Content-type", "application/json");
xhttpReqs.send();

function processResponse(response){
    let userPlan = new plan(
        response.plan.name,
        response.plan.catYear,
        response.plan.major,
        'Biblical Studies',
        response.plan.student,
        response.plan.currYear,
        response.plan.currTerm,
        response.plan.courses
    );

    console.log(response.plan);
    console.log(userPlan);
}

//ANYTHING PAST HERE IS OBSOLETE, ONLY TO BE USED AS TEST DATA
/*let myPlan = new plan(
    'Test Plan',
    '2022',
    'Computer Science',
    'Biblical Studies',
    'Joseph Mother',
    '2023',
    'Spring'
);

let webApps = new course(
    'Spring',
    '2023',
    'CS-3220',
    'Web Applications',
    '3'
);

myPlan.courseArray.push(webApps);


console.log(myPlan);
console.log(webApps);


let yearsArray = [];

yearsArray[0] = new year(2021);
yearsArray[0].semesters[2].courses.push(new course(
    'Fall',
    '2021',
    'CS-1210',
    'C++ Programming',
    '2'
));

yearsArray[1] = new year(2022);
yearsArray[1].semesters[0].courses.push(new course(
    'Spring',
    '2022',
    'CS-1220',
    'Object-Oriented Design in C++',
    '3'
));
yearsArray[1].semesters[1].courses.push(new course(
    'Summer',
    '2022',
    'HUM-1400',
    'Introduction to the Humanities',
    '3'
));
yearsArray[1].semesters[2].courses.push(new course(
    'Fall',
    '2022',
    'CS-2210',
    'Data Structures Using Java',
    '3'
));


yearsArray[2] = new year(2023);
yearsArray[2].semesters[0].courses.push(new course(
    'Spring',
    '2023',
    'CS-3220',
    'Web Applications',
    '3'
));
yearsArray[2].semesters[1].courses.push(new course(
    'Summer',
    '2023',
    'GSS-1100',
    'Politics and American Culture',
    '3'
));
yearsArray[2].semesters[2].courses.push(new course(
    'Fall',
    '2023',
    'CS-3410',
    'Algorithms',
    '3'
));

yearsArray[3] = new year(2024);
yearsArray[3].semesters[0].courses.push(new course(
    'Spring',
    '2024',
    'CS-3510',
    'Compiler Theory and Practice',
    '3'
));
yearsArray[3].semesters[1].courses.push(new course(
    'Summer',
    '2024',
    'HIST-1110',
    'United States History I',
    '3'
));
yearsArray[3].semesters[2].courses.push(new course(
    'Fall',
    '2024',
    'CS-4810',
    'Software Engineering I',
    '3'
));
yearsArray[4] = new year(2025);
yearsArray[4].semesters[0].courses.push(new course(
    'Spring',
    '2025',
    'CS-4820',
    'Software Engineering II',
    '4'
));*/