"use strict";

let naamBestelTxt;
let emailBestelTxt;
let telBestelTxt;
let straatBestelTxt;
let postcodeBestelTxt;
let woonplaatsBestelTxt;
let fout = true;

function controleerNaam() {
    if (naamBestelTxt.length < 2) {
        document.getElementById("naam_error").innerHTML = "2 of meer letters invoeren!";
        fout = false;
    } else {
        document.getElementById("naam_error").innerHTML = "";
    }
}

function controleerEmail() {
    let emailRegEx = /^[^\W][\w.-]{1,29}[^\W]@[^\W][\w.-]{1,14}\.[\w]{2,3}$/;

    if (emailRegEx.test(emailBestelTxt) == false) {
        document.getElementById("email_error").innerHTML = "Foutief emailadres!";
        fout = false;
    } else {
        document.getElementById("email_error").innerHTML = "";
    }
}

function controleerTel() {
    let telRegEx = /[0-9]{9,10}/;

    if (telRegEx.test(telBestelTxt) == false) {
        document.getElementById("tel_error").innerHTML = "Foutief telefoonnummer!";
        fout = false;
    } else {
        document.getElementById("tel_error").innerHTML = "";
    }
}

function bezorgRadioKeuzeNee() {
    straatBestelTxt = document.getElementById("straat").disabled = true;
    postcodeBestelTxt = document.getElementById("postcode").disabled = true;
    woonplaatsBestelTxt = document.getElementById("woonplaats").disabled = true;
}

function bezorgRadioKeuzeJa() {
    straatBestelTxt = document.getElementById("straat").disabled = false;
    postcodeBestelTxt = document.getElementById("postcode").disabled = false;
    woonplaatsBestelTxt = document.getElementById("woonplaats").disabled = false;
}

function controleerStraat() {
    if (straatBestelTxt.length < 2) {
        document.getElementById("straat_error").innerHTML = "Foutieve straat en nummer!";
        fout = false;
    } else {
        document.getElementById("straat_error").innerHTML = "";
    }
}

function controleerPostcode() {
    let postcodeRegEx = /^(\d{4})$/;
    if (postcodeRegEx.test(postcodeBestelTxt) == false) {
        document.getElementById("postcode_error").innerHTML = "Foutieve postcode!";
        fout = false;
    } else {
        document.getElementById("postcode_error").innerHTML = "";
    }
}

function controleerWoonplaats() {
    if (woonplaatsBestelTxt.length < 2) {
        document.getElementById("woonplaats_error").innerHTML = "Foutieve woonplaats!";
        fout = false;
    } else {
        document.getElementById("woonplaats_error").innerHTML = "";
    }
}

function controle() {
    naamBestelTxt = document.getElementById("naam").value;
    emailBestelTxt = document.getElementById("email").value;
    telBestelTxt = document.getElementById("tel").value;
    straatBestelTxt = document.getElementById("straat").value;
    postcodeBestelTxt = document.getElementById("postcode").value;
    woonplaatsBestelTxt = document.getElementById("woonplaats").value;



    if (naamBestelTxt.length == 0) {
        document.getElementById("naam_error").innerHTML = "Verplicht!";
        fout = false;
    } else {
        controleerNaam();
    }

    if (emailBestelTxt.length == 0) {
        document.getElementById("email_error").innerHTML = "Verplicht!";
        fout = false;
    } else {
        controleerEmail();
    }

    if (telBestelTxt.length == 0) {
        document.getElementById("tel_error").innerHTML = "Verplicht!";
        fout = false;
    } else {
        controleerTel();
    }

    if (straatBestelTxt) {
        controleerStraat();
    }

    if (postcodeBestelTxt) {
        controleerPostcode();
    }

    if (woonplaatsBestelTxt) {
        controleerWoonplaats();
    }

}