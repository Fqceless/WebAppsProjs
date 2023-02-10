let myform = document.getElementById("form");

myform.addEventListener("keydown", function (event) {
  event.preventDefault();
  
  let ligmaObject = {
    "fname":document.getElementById("fname").value,
    "email":document.getElementById("email").value,
    "startYear":document.getElementById("startYear").value,
    "lname":document.getElementById("lname").value,
  }

  validateFields(ligmaObject);
});

myform.addEventListener("submit", function (event) {
  event.preventDefault();


  let ligmaObject = {
    "fname":document.getElementById("fname").value,
    "email":document.getElementById("email").value,
    "startYear":document.getElementById("startYear").value,
    "lname":document.getElementById("lname").value,
  }

  if (validateFields(ligmaObject)){
    post('/all/', ligmaObject);
  }
});

function validateFields(obj){

  // Validate form filling
  //if (!obj.fname || !obj.email || !obj.startYear || !obj.lname) {
  //  alert("Please fill out all fields");
  //  return;
  //}

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!obj.email.match(emailRegex)) {
    alert("Please enter a valid email");
    return false;
  }

  return true;

}
