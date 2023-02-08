const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Validate form on submit
  if (!name || !email) {
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
  const nameRegex = /^[a-zA-Z]+$/;
  if (!name.match(nameRegex)) {
    alert("Please enter a valid name");
    return;
  }

  // Submit form data to http://judah.cedarville.edu/echo.php
  // ...
});