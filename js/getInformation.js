let myform = document.getElementById("form");


myform.addEventListener("submit", function (event) {
  event.preventDefault();

  
  if (ValidateForm == 1) {
    alert("Please fill out all fields");
    return;
  }

  
  else if (ValidateForm == 2) {    
    alert("Please enter a valid email");
    return;
  }
  

  post('',{fname,email,startYear,lname})
});
myform.addEventListener("keyup", function (event) {
  event.preventDefault();
    
  ValidateForm();
    
});

function ValidateForm(){
  fname = document.getElementById("fname").value;
    email = document.getElementById("email").value;
    startYear = document.getElementById("startYear").value;
    lname = document.getElementById("lname").value;

  //Validate form filling
  if (!fname || !email || !startYear || !lname) {
    return 1;
  }

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailRegex)) {    
    return 2;
  }
  //good
  return 0;
}