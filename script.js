function clearErrors() {
  var errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function setError(id, error) {
  var element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}
let fromSubmit = false;

function validateForm(event) {
  event.preventDefault();
  clearErrors();

  let returnVal = true;

  var name = document.forms["myForm"]["fname"].value;
  if (name.length < 3) {
    setError("name", "*Length of name is too short");
    returnVal = false;
  }

  var email = document.forms["myForm"]["femail"].value;
  if (!email.includes("@")) {
    setError("email", "*Enter a valid email address");
    returnVal = false;
  }

  var phone = document.forms["myForm"]["fphone"].value;
  if (phone.length !== 10 || isNaN(phone)) {
    setError("phone", "*Phone number should be a 10-digit numeric value");
    returnVal = false;
  }

  var pass = document.forms["myForm"]["fpass"].value;
  var cpassword = document.forms["myForm"]["fcpass"].value;

  var passElement = document.forms["myForm"]["fpass"];
  var pass;
  if (passElement) {
    pass = passElement.value;
  } else {
    pass = "";
  }

  if (
    !pass ||
    pass.length < 8 ||
    !/[a-z]/.test(pass) ||
    !/[A-Z]/.test(pass) ||
    !/\d/.test(pass)
  ) {
    setError(
      "pass",
      "*Password must be at least 8 characters and include at least one lowercase letter, one uppercase letter, and one number"
    );
    returnVal = false;
  }

  var cpassword = document.forms["myForm"]["fcpass"].value;

  if (cpassword !== pass) {
    setError("cpass", "*Password and Confirm password should match");
    returnVal = false;
  }

  return returnVal;
}

var form = document.getElementById("form");

function myFunction(event) {
  console.log("button click");
  event.preventDefault();
  if (validateForm(event)) {
    alert("Form submitted succesfully!");
  }
}
