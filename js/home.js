"use strict";

let emailTxt;
let correct = true;

function controleEmail() {
  let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
  if (regExp.test(emailTxt) == false) {
    document.getElementById("email_error").innerHTML =
      "Gelieve een correct e-mailadres in te geven!";
    correct = false;
  } else {
    document.getElementById("email_error").innerHTML = "";
  }
}

function controle() {
  emailTxt = document.getElementById("e-mail").value;
  correct = true;

  if (emailTxt.length == 0) {
    document.getElementById("email_error").innerHTML =
      "Gelieve een correct e-mailadres in te geven.";
    correct = false;
  } else {
    controleEmail();
  }

  if (correct) {
    window.location.href = "subscribed.html";
  }
}
