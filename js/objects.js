class plan {
    constructor(planName, catYear, major, minor, studentName, currYear, currTerm) {
        this.planName = planName;
        this.catYear = catYear;
        this.major = major;
        this.minor = minor;
        this.studentName = studentName;
        this.currYear = currYear;
        this.currTerm = currTerm;
        this.courseArray = [];
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

class year{
    constructor(yearNum){
        this.yearNum = yearNum;
        this.springArray = [];
        this.summerArray = [];
        this.fallArray = [];
    }
}

let myPlan = new plan(
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

let year2023 = new year(2023);
year2023.springArray.push(myPlan.courseArray[0]);

console.log(myPlan);
console.log(webApps);
console.log(year2023);


let semesters = [
    {
        yearNum: 2021,
        fallArray: [

        ]
    },
    {
      term: 'Spring',
      year: 2022,
      courses: []
    },
    {
      term: 'Fall',
      year: 2023,
      courses: []
    }
  ];

  for (let semester of semesters) {
    let monthbox = `
    <div class="Monthbox" id="${semester.term}${semester.year}">
    <h1>${semester.term} ${semester.year}</h1>
    <ul>
    `;
    
    for (let course of semester.courses) {
    monthbox += `
    <li>${course.courseNum} ${course.courseName} ${course.courseCredits}</li>
    `;
    }
    
    monthbox += `
    </ul>
    </div>
    `;
    
    document.write(monthbox);
    }