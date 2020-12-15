"use strict";

let voornaamTxt;
let naamTxt;
let emailTxt;
let onderwerpTxt;
let textareaTxt;

let allesCorrectIngevuld = true;

// controle voornaam

function controleVoornaam() {
  if (voornaamTxt.length < 2) {
    document.getElementById("voornaam_error").innerHTML =
      "Minstens 2 karakters lang!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("voornaam_error").innerHTML = "";
  }
}

// controle achternaam

function controleNaam() {
  if (naamTxt.length < 2) {
    document.getElementById("naam_error").innerHTML =
      "Minstens 2 karakters lang";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("naam_error").innerHTML = "";
  }
}

// controle emailadres

function controleEmail() {
  let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
  if (regExp.test(emailTxt) == false) {
    document.getElementById("email_error").innerHTML =
      "Gelieve een correct e-mailadres in te geven!";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("email_error").innerHTML = "";
  }
}

// controle onderwerp

function controleOnderwerp() {
  if (onderwerpTxt.length < 2) {
    document.getElementById("onderwerp_error").innerHTML =
      "Gelieve een onderwerp in te geven";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("onderwerp_error").innerHTML = "";
  }
}

// controle Textarea

function controleTextarea() {
  if (textareaTxt.length < 2) {
    document.getElementById("textarea_Txt").innerHTML =
      "Gelieve een boodschap in te geven";
    allesCorrectIngevuld = false;
  } else {
    document.getElementById("textarea_error").innerHTML = "";
  }
}

// hoofdfunctie controle

function controle() {
  voornaamTxt = document.getElementById("voornaam").value;
  naamTxt = document.getElementById("naam").value;
  emailTxt = document.getElementById("email").value;
  onderwerpTxt = document.getElementById("onderwerp").value;
  textareaTxt = document.getElementById("textarea").value;

  allesCorrectIngevuld = true;

  //controle voornaam
  if (voornaamTxt.length == 0) {
    document.getElementById("voornaam_error").innerHTML =
      "Gelieve uw voornaam in te geven.";
    allesCorrectIngevuld = false;
  } else {
    controleVoornaam();
  }

  // controle naam
  if (naamTxt.length == 0) {
    document.getElementById("naam_error").innerHTML =
      "Gelieve uw achternaam in te geven.";
    allesCorrectIngevuld = false;
  } else {
    controleNaam();
  }

  // contole email
  if (emailTxt.length == 0) {
    document.getElementById("email_error").innerHTML =
      "Gelieve een e-mailadres in te geven.";
    allesCorrectIngevuld = false;
  } else {
    controleEmail();
  }

  //controle onderwerp
  if (onderwerpTxt.length == 0) {
    document.getElementById("onderwerp_error").innerHTML =
      "Gelieve een onderwerp in te geven.";
    allesCorrectIngevuld = false;
  } else {
    controleOnderwerp();
  }

  // controle textarea
  if (textareaTxt.length == 0) {
    document.getElementById("textarea_error").innerHTML =
      "Gelieve een boodschap in te geven.";
    allesCorrectIngevuld = false;
  } else {
    controleTextarea();
  }

  if (allesCorrectIngevuld) {
    let mail =
      "mailto:" +
      encodeURIComponent("info@cvo.be") +
      "?cc=" +
      encodeURIComponent("kopie@cvo.be") +
      "&subject=" +
      encodeURIComponent("Formulier validatie") +
      "&body=" +
      "voornaam:" +
      encodeURIComponent(voornaamTxt) +
      encodeURIComponent("\r\n\n") +
      "achternaam:" +
      encodeURIComponent(naamTxt) +
      encodeURIComponent("\r\n\n") +
      "email:" +
      encodeURIComponent(emailTxt) +
      encodeURIComponent("\r\n\n") +
      "onderwerp:" +
      encodeURIComponent(onderwerpTxt) +
      encodeURIComponent("\r\n\n") +
      "textarea:" +
      encodeURIComponent(textareaTxt) +
      encodeURIComponent("\r\n\n");
    window.location.href = mail;
  }
}