"use strict";

let naamReserveerTxt;
let emailReserveerTxt;
let telReserveerTxt;
let datumReserveerTxt;
let geselecteerdeTijd;
let tijdReserveerTxt;
let geselecteerdeWaarvoor;
let waarvoorReserveerTxt;
let personenReserveerTxt;
let fout = true;

function controleerNaam() {
	if (naamReserveerTxt.length < 2) {
		document.getElementById("naam_error").innerHTML = "2 of meer letters invoeren!";
		fout = false;
	} else{
		document.getElementById("naam_error").innerHTML = "";
	}
}

function controleerEmail() {
	let emailRegEx = /^[^\W][\w.-]{1,29}[^\W]@[^\W][\w.-]{1,14}\.[\w]{2,3}$/;

	if (emailRegEx.test(emailReserveerTxt) == false) {
		document.getElementById("email_error").innerHTML = "Foutief emailadres!";
		fout = false;
	} else{
		document.getElementById("email_error").innerHTML = "";
	}
}

function controleerTel() {
	let telRegEx = /[0-9]{9,10}/;

	if (telRegEx.test(telReserveerTxt) == false) {
		document.getElementById("tel_error").innerHTML = "Foutief telefoonnummer!";
		fout = false;
	} else{
		document.getElementById("tel_error").innerHTML = "";
	}
}

function controleerDatum() {
	if (naamReserveerTxt.length < 2) {
		document.getElementById("datum_error").innerHTML = "Geen geldige datum!";
		fout = false;
	} else{
		document.getElementById("datum_error").innerHTML = "";
	}
}

function verstuur(){
	naamReserveerTxt = document.getElementById("naam").value;
	emailReserveerTxt = document.getElementById("email").value;
	telReserveerTxt = document.getElementById("tel").value;
	datumReserveerTxt = document.getElementById("datum").value;
	geselecteerdeTijd = document.getElementById("tijd").selectedIndex;
	tijdReserveerTxt = document.getElementById("tijd").value;
	geselecteerdeWaarvoor = document.getElementById("waarvoor").selectedIndex;
	waarvoorReserveerTxt = document.getElementById("waarvoor").value;
	personenReserveerTxt = document.getElementById("personen").value;

	fout = true;

	if (naamReserveerTxt.length == 0) {
		document.getElementById("naam_error").innerHTML = "Verplicht!";
		fout = false;
	} else{
		controleerNaam();
	}

	if (emailReserveerTxt.length == 0) {
		document.getElementById("email_error").innerHTML = "Verplicht!";
		fout = false;
	} else{
		controleerEmail();
	}

	if (telReserveerTxt.length == 0) {
		document.getElementById("tel_error").innerHTML = "Verplicht!";
		fout = false;
	} else{
		controleerTel();
	}

	if (datumReserveerTxt.length == 0) {
		document.getElementById("datum_error").innerHTML = "Verplicht!";
		fout = false;
	} else{
		controleerDatum();
	}

	if (geselecteerdeTijd == 0) {
		document.getElementById("tijd_error").innerHTML = "Verplicht!";
		fout = false;
	} else{
		document.getElementById("tijd_error").innerHTML = "";
	}

	if (geselecteerdeWaarvoor == 0) {
		document.getElementById("waarvoor_error").innerHTML = "Verplicht!";
		fout = false;
	} else{
		document.getElementById("waarvoor_error").innerHTML = "";
	}

	if (personenReserveerTxt.length == 0) {
		document.getElementById("personen_error").innerHTML = "Verplicht!";
		fout = false;
	} else{
		document.getElementById("personen_error").innerHTML = "";
	}

	if (fout) {
		let linkmail = "mailto:" + encodeURIComponent("reserveer@javathehutt.be;")
			+ encodeURIComponent(document.getElementById('email').value)
			+ "?cc=" + encodeURIComponent("info@javathehutt.be;")
			+ "&subject=" + encodeURIComponent("Reservering")
			+ "&body="
			+ "Ik wil graag een reservatie doen op naam van "
			+ encodeURIComponent(naamReserveerTxt) + "."
			+ encodeURIComponent("\r\n")
			+ "Mijn telefoonnummer i.v.m. vragen is "
			+ encodeURIComponent(telReserveerTxt) + "."
			+ encodeURIComponent("\r\n")
			+ "Mocht ik telefonisch niet te bereiken zijn, dan kunt u een email sturen naar "
			+ encodeURIComponent(emailReserveerTxt) + "."
			+ encodeURIComponent("\r\n\n")
			+ "Ik wil graag reserveren op "
			+ encodeURIComponent(datumReserveerTxt)
			+ " van "
			+ encodeURIComponent(tijdReserveerTxt)
			+ " voor "
			+ encodeURIComponent(personenReserveerTxt)
			+ " personen."
			+ encodeURIComponent("\r\n")
			+ "Deze reservering is voor een "
			+ encodeURIComponent(waarvoorReserveerTxt) + ".";
		window.location.href = linkmail;
	}
}