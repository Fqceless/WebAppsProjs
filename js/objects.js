let plan = {
    planName: '',
    catYear: '',
    major: '',
    minor: '',
    studentName: '',
    currYear: '',
    currTerm: '',
    courseArray: []
};

let course = {
    term: '',
    year: '',
    courseNum: '',
    courseName: ''
};

let year = {
    year: '',
    springArray: [],
    summerArray: [],
    fallArray: []
};

let myPlan = plan;
myPlan.planName = 'Test Plan';
myPlan.catYear = '2022';
myPlan.major = 'Computer Science';
myPlan.minor = 'Biblical Studies';
myPlan.studentName = 'Joseph Mother';
myPlan.currYear = '2023';
myPlan.currTerm = 'Spring';

let webApps = course;
webApps.term = 'Spring';
webApps.year = '2023';
webApps.courseNum = 'CS-3220';
webApps.courseName = 'Web Applications';

myPlan.courseArray.push(webApps);

let year2023 = year;
year2023.year = '2023';
year2023.springArray.push(myPlan.courseArray[0]);

console.log(myPlan);
console.log(webApps);
console.log(year2023);


let semesters = [
    {
      term: 'Fall',
      year: 2021,
      courses: [
        {
          courseNum: 'CS-1210',
          courseName: 'C++ Programming',
          courseCredits: 3
        }
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

  