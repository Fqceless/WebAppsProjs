const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const startYear = document.getElementById("startYear").value;
  const lname = document.getElementById("lname").value;

  // Validate form on submit
  if (!fname || !email || !startYear || !lname) {
    alert("Please fill out all fields");
    return;
  }

  // Validate email using regex
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email");
    return;
  }

  // Validate name using regex
  const fnameRegex = /^[a-z ]+$/i;
  if (!fname.match(fnameRegex)) {
    alert("Please enter a valid name");
    return;
  }

  // Validate name using regex
  const startYearRegex = /^"20"+[1-9]{2}+$/;
  if (!startYear.match(startYearRegex)) {
    alert("Please enter a valid year");
    return;
  }

  // Validate name using regex
  const lnameRegex = /^[a-z ]+$/i;
  if (!lname.match(lnameRegex)) {
    alert("Please enter a valid name");
    return;
  }

  // Submit form data to http://judah.cedarville.edu/echo.php
  // ...
});