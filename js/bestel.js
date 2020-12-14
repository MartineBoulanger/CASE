"use strict";

let naamBestelTxt;
let emailBestelTxt;
let telBestelTxt;
let straatBestelTxt;
let postcodeBestelTxt;
let woonplaatsBestelTxt;
let bezorgJa;
let bezorgNee;
let broodjesArray;
let telBroodjes;
let broodje1;
let broodje2;
let broodje3;
let broodje4;
let broodje5;
let broodje6;
let broodje7;
let broodje8;
let broodje9;
let aantalBroodjes;
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
    bezorgJa = document.getElementById("bezorgja").checked;
    bezorgNee = document.getElementById("bezorgnee").checked;
    broodjesArray = document.getElementByClass("broodjeschecked");
    telBroodjes = 0;



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

    let lengteBroodjes = broodjesArray.length
    for (let i = 0; i < lengteBroodjes; i++) {
        if (broodjesArray[i].checked) {
            telBroodjes++;
        }
    }
    if (broodjesArray.checked) {
        broodje1 = "naam " + broodjesArray[0].checked;
        broodje2 = "naam " + broodjesArray[1].checked;
        broodje3 = "naam " + broodjesArray[2].checked;
        broodje4 = "naam " + broodjesArray[3].checked;
        broodje5 = "naam " + broodjesArray[4].checked;
        broodje6 = "naam " + broodjesArray[5].checked;
        broodje7 = "naam " + broodjesArray[6].checked;
        broodje8 = "naam " + broodjesArray[7].checked;
        broodje9 = "naam " + broodjesArray[8].checked;
        if (broodje1.checked) {
        	aantalBroodjes = document.getElementById("broodje1").value;
        }
        if (broodje2.checked) {
        	aantalBroodjes = document.getElementById("broodje2").value;
        }
        if (broodje3.checked) {
        	aantalBroodjes = document.getElementById("broodje3").value;
        }
        if (broodje4.checked) {
        	aantalBroodjes = document.getElementById("broodje4").value;
        }
        if (broodje5.checked) {
        	aantalBroodjes = document.getElementById("broodje5").value;
        }
        if (broodje6.checked) {
        	aantalBroodjes = document.getElementById("broodje6").value;
        }
        if (broodje7.checked) {
        	aantalBroodjes = document.getElementById("broodje7").value;
        }
        if (broodje8.checked) {
        	aantalBroodjes = document.getElementById("broodje8").value;
        }
        if (broodje9.checked) {
        	aantalBroodjes = document.getElementById("broodje9").value;
        }
    }

    if (bezorgJa == false && bezorgNee == false) {
    	document.getElementById("bezorgen_error").innerHTML = "Verplicht!";
    	fout = false;
    }

    if (bezorgJa == true) {
        if (straatBestelTxt.length == 0) {
        	document.getElementById("straat_error").innerHTML = "Verplicht!";
        	fout = false;
        } else {
        	controleerStraat();
        }
        if (postcodeBestelTxt.length == 0) {
        	document.getElementById("postcode_error").innerHTML = "Verplicht!";
        	fout = false;
        } else {
        	controleerPostcode();
        }
        if (woonplaatsBestelTxt.length == 0) {
        	document.getElementById("woonplaats_error").innerHTML = "Verplicht!";
        	fout = false;
        } else {
        	controleerWoonplaats();
        }
    } 


    if (fout) {
    	let link = "mailto:" + encodeURIComponent("bestel@javathehutt.be;")
			+ encodeURIComponent(document.getElementById('email').value)
			+ "?cc=" + encodeURIComponent("info@javathehutt.be;")
			+ "&subject=" + encodeURIComponent("Bestelling")
			+ "&body="
			+ "Naam: "
			+ encodeURIComponent(naamBestelTxt)
			+ encodeURIComponent("\r\n")
			+ "Email: "
			+ encodeURIComponent(emailBestelTxt)
			+ encodeURIComponent("\r\n")
			+ "Telefoonnummer: "
			+ encodeURIComponent(telBestelTxt)
			+ encodeURIComponent("\r\n\n")
			+ "Ik wil graag het volgende bestellen: "
			+ encodeURIComponent("\r\n\n")
			+ "Broodje(s): "
			+ encodeURIComponent(broodje1) + " aantal: " + encodeURIComponent(aantalBroodjes) + " 	"
			+ encodeURIComponent("\r\n")
			+ encodeURIComponent(broodje2) + " aantal: " + encodeURIComponent(aantalBroodjes) + " 	"
			+ encodeURIComponent("\r\n")
			+ encodeURIComponent(broodje3) + " aantal: " + encodeURIComponent(aantalBroodjes) + " 	"
			+ encodeURIComponent("\r\n")
			+ encodeURIComponent(broodje4) + " aantal: " + encodeURIComponent(aantalBroodjes) + " 	"
			+ encodeURIComponent("\r\n")
			+ encodeURIComponent(broodje5) + " aantal: " + encodeURIComponent(aantalBroodjes) + " 	"
			+ encodeURIComponent("\r\n")
			+ encodeURIComponent(broodje6) + " aantal: " + encodeURIComponent(aantalBroodjes) + " 	"
			+ encodeURIComponent("\r\n")
			+ encodeURIComponent(broodje7) + " aantal: " + encodeURIComponent(aantalBroodjes) + " 	"
			+ encodeURIComponent("\r\n")
			+ encodeURIComponent(broodje8) + " aantal: " + encodeURIComponent(aantalBroodjes) + " 	"
			+ encodeURIComponent("\r\n")
			+ encodeURIComponent(broodje9) + " aantal: " + encodeURIComponent(aantalBroodjes) + " 	"
			+ encodeURIComponent("\r\n\n")
			+ "Bezorgen? "
			+ encodeURIComponent(bezorgJa) + encodeURIComponent(bezorgNee)
			+ encodeURIComponent("\r\n\n")
			+ "Indien ja, dit is mijn bezorgadres: "
			+ encodeURIComponent("\r\n")
			+ "Straat en huisnr.: "
			+ encodeURIComponent(straatBestelTxt)
			+ encodeURIComponent("\r\n")
			+ "Postcode en woonplaats: "
			+ encodeURIComponent(postcodeBestelTxt) + encodeURIComponent(woonplaatsBestelTxt);
		window.location.href = link;
    }

}