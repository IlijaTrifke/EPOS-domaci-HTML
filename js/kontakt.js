const hamburger = document.querySelector(".hamburger");
const nav__links = document.querySelector(".nav__links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav__links.classList.toggle("active");
});
// document.querySelectorAll(".nav_linkss").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     nav__links.classList.remove("active");
//   })
// );

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

var isUsernameValid = false;
var isEmailValid = false;
var isPassword1Valid = false;
var isPassword2Valid = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  submitResults();
});

function submitResults() {
  if (isEmailValid && isPassword1Valid && isPassword2Valid && isUsernameValid) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;

    alert(
      "Uspešno ste se prijavili! \nVaše korisničko ime je: " +
        username.value +
        ", dok je vaša email adresa: " +
        email.value +
        "\nDatum prijave: " +
        today
    );

    document.getElementById("password").value = "";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password2").value = "";
  }
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Ukucaj korisničko ime");
    isUsernameValid = false;
  } else {
    setSuccess(username);
    isUsernameValid = true;
  }

  if (emailValue === "") {
    setError(email, "Ukucaj email");
    isEmailValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Email mora biti u dobrom formatu");
    isEmailValid = false;
  } else {
    setSuccess(email);
    isEmailValid = true;
  }

  if (passwordValue === "") {
    setError(password, "Ukucaj šifru");
    isPassword1Valid = false;
  } else if (passwordValue.length < 8) {
    setError(password, "Šifra mora imati bar 8 karaktera");
    isPassword1Valid = false;
  } else {
    setSuccess(password);
    isPassword1Valid = true;
  }

  if (password2Value === "") {
    setError(password2, "Potvrdi šifru");
    isPassword2Valid = false;
  } else if (password2Value !== passwordValue) {
    setError(password2, "Šifra se ne poklapa sa prethodnim poljem");
    isPassword2Valid = false;
  } else {
    setSuccess(password2);
    isPassword2Valid = true;
  }
};
