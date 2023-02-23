$(document).ready(function() {

    yearsArray = [];

    let xhttpPlan = new XMLHttpRequest();
    xhttpPlan.onreadystatechange = function() {
    if (this.status == 200) {
        let response = JSON.parse(this.responseText);
        processPlan(response);
        
        // process the JSON data here
    }
    };
    xhttpPlan.open("GET", "http://judah.cedarville.edu/~knoerr/cs3220/termProject/getCombined.php", true);
    xhttpPlan.setRequestHeader("Content-type", "application/json");
    xhttpPlan.send();

    let xhttpReqs = new XMLHttpRequest();
    xhttpReqs.onreadystatechange = function() {
    if ( this.status == 200) {
        let response = JSON.parse(this.responseText);
        //processReqs(response);
        
        // process the JSON data here
    }
    };
    xhttpReqs.open("GET", "http://judah.cedarville.edu/~knoerr/cs3220/termProject/getRequirements.php", true);
    xhttpReqs.setRequestHeader("Content-type", "application/json");
    xhttpReqs.send();

    function processPlan(response){
        let currMaxYear = response.plan.catYear;
        for (let c in response.plan.courses){
            if (response.plan.courses[c].year > currMaxYear){
                currMaxYear = response.plan.courses[c].year;
            }
        }
        for (i = response.plan.catYear; i <= currMaxYear; i++){
            yearsArray.push(new year(i));
        }

        for (let c in response.plan.courses){
            for (let y of yearsArray){
                if(response.plan.courses[c].year == y.yearNum){
                    switch(response.plan.courses[c].term){
                        case('Spring'): 
                            y.semesters[0].courses.push(response.plan.courses[c]);
                            break;
                        case('Summer'): 
                            y.semesters[1].courses.push(response.plan.courses[c]);
                            break;
                        case('Fall'): 
                            y.semesters[2].courses.push(response.plan.courses[c]);
                            break;
                        default: break;
                    }
                }
            }
        }
        
        
    }
    


    for (let y of yearsArray) {
        for(let s of y.semesters){
            if(y == yearsArray[0]){
                s = y.semesters[2];
            }
            let monthbox = `
            <div class="Monthbox" id="${s.term}${y.yearNum}">
            <h1>${s.term} ${y.yearNum}</h1>
            <ul>
            `;
        
            for (let course of s.courses) {
                monthbox += `
                <li>${course.id}</li>
                `;
            }
        
            monthbox += `
            </ul>
            </div>
            `;

            document.write(monthbox);

            if(y == yearsArray[0] || y == yearsArray[yearsArray.length - 1]){
                break;
            }
        }
    }
});