const form = document.querySelector("#form");
const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValidate = false;
let isMatched = false;

const validateForm = function () {
  // Using Constraint API
  isValid = form.checkValidity();
  if (!isValid) {
    // Style main message for an error
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    isMatched = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    isMatched = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  // If form is valid and password match
  if (isValid && isMatched) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
};

const storeFormData = function () {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // DO stg with user data
  console.log(user);
};

const processFormData = function (e) {
  e.preventDefault();
  validateForm();
  // Submit Data if Valid
  if (isValid && isMatched) {
    storeFormData();
  }
};

////////////////////////////////////////////
// Event listener
form.addEventListener("submit", processFormData);
