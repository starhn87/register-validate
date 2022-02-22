const elInputUsername = document.querySelector("#username");
const elFailureUsername = document.querySelector(".failure-username");
const elSuccessUsername = document.querySelector(".success-username");
const elInputPhoneNumber = document.querySelector("#phoneNumber");
const elFailurePhoneNumber = document.querySelector(".failure-phoneNumber");
const elSuccessPhoneNumber = document.querySelector(".success-phoneNumber");
const elPassword1 = document.querySelector("#password1");
const elPassword2 = document.querySelector("#password2");
const elFailurePassword = document.querySelector(".failure-password");
const elSuccessPassword = document.querySelector(".success-password");
const registerButton = document.querySelector("#registerButton");

const PHONE_NUMBER_REGEXP = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

function validateUsername() {
  if (elInputUsername.value.trim() === "") {
    elSuccessUsername.classList.add("hide");
    elFailureUsername.classList.add("hide");
  } else if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessUsername.classList.remove("hide");
    elFailureUsername.classList.add("hide");
  } else {
    elSuccessUsername.classList.add("hide");
    elFailureUsername.classList.remove("hide");
  }
}

function isMoreThan4Length(value) {
  return value.length >= 4;
}

function validatePhoneNumber() {
  if (elInputPhoneNumber.value.trim() === "") {
    elFailurePhoneNumber.classList.add("hide");
    elSuccessPhoneNumber.classList.add("hide");
  } else if (!PHONE_NUMBER_REGEXP.test(elInputPhoneNumber.value)) {
    elFailurePhoneNumber.classList.remove("hide");
    elSuccessPhoneNumber.classList.add("hide");
  } else {
    elFailurePhoneNumber.classList.add("hide");
    elSuccessPhoneNumber.classList.remove("hide");
  }
}

function validatePassword() {
  if (elPassword1.value !== elPassword2.value) {
    elFailurePassword.classList.remove("hide");
    elSuccessPassword.classList.add("hide");
  } else {
    elFailurePassword.classList.add("hide");
    elSuccessPassword.classList.remove("hide");
  }
}

function toggleRegisterButton() {
  if (
    !elSuccessPassword.classList.contains("hide") &&
    !elSuccessPhoneNumber.classList.contains("hide") &&
    !elSuccessUsername.classList.contains("hide")
  ) {
    registerButton.removeAttribute("disabled");
  } else {
    registerButton.setAttribute("disabled", "disabled");
  }
}

elInputUsername.addEventListener("keyup", validateUsername);
elInputPhoneNumber.addEventListener("keyup", validatePhoneNumber);
elPassword2.addEventListener("keyup", validatePassword);
document.addEventListener("keyup", toggleRegisterButton);
