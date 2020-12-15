"use strict";

let naamBestelTxt;
let emailBestelTxt;
let telBestelTxt;
let straatBestelTxt;
let postcodeBestelTxt;
let woonplaatsBestelTxt;
let bezorgJa;
let bezorgNee;
let bezorgen;
let broodjes;
let broodjeslijst;
let gebakjes;
let gebakjeslijst;
let koffies;
let koffielijst;
let broden;
let brodenlijst;
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

function geselecteerdeBroodjes(naam) {
	let broodjescheck = document.querySelectorAll('input[name="bestelBroodjes"]:checked');
	broodjes = [];
    broodjescheck.forEach((checkbox) => {
    	broodjes.push(checkbox.value);
    });
    return broodjes;
}

function geselecteerdeGebakjes(naam) {
	let gebakjescheck = document.querySelectorAll('input[name="bestelGebakjes"]:checked');
	gebakjes = [];
	gebakjescheck.forEach((checkbox) => {
		gebakjes.push(checkbox.value);
	});
	return gebakjes;
}

function geselecteerdeKoffies(naam){
	let koffiecheck = document.querySelectorAll('input[name="bestelKoffie"]:checked');
	koffies = [];
	koffiecheck.forEach((checkbox) => {
		koffies.push(checkbox.value);
	});
	return koffies;
}

function geselecteerdeBroden(naam){
	let brodencheck = document.querySelectorAll('input[name="bestelBrood"]:checked');
	broden = [];
	brodencheck.forEach((checkbox) => {
		broden.push(checkbox.value);
	});
	return broden;
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
    bezorgen = "Ja = " + bezorgJa + "\t" + "Nee = " + bezorgNee;
    broodjeslijst = geselecteerdeBroodjes(naam);
    gebakjeslijst = geselecteerdeGebakjes(naam);
    koffielijst = geselecteerdeKoffies(naam);
    brodenlijst = geselecteerdeBroden(naam);

    fout = true;

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

    if (bezorgJa == false && bezorgNee == false) {
        document.getElementById("bezorgen_error").innerHTML = "Verplicht!";
        fout = false;
    }

    if (bezorgJa == true) {
        bezorgJa = "Ja";
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
    } else {
        bezorgNee = "Nee";
    }

    if (fout) {
        let link = "mailto:" + encodeURIComponent("bestel@javathehutt.be;") +
            encodeURIComponent(document.getElementById('email').value) +
            "?cc=" + encodeURIComponent("info@javathehutt.be;") +
            "&subject=" + encodeURIComponent("Bestelling") +
            "&body=" +
            "Naam: " +
            encodeURIComponent(naamBestelTxt) +
            encodeURIComponent("\r\n") +
            "Email: " +
            encodeURIComponent(emailBestelTxt) +
            encodeURIComponent("\r\n") +
            "Telefoonnummer: " +
            encodeURIComponent(telBestelTxt) +
            encodeURIComponent("\r\n\n") +
            "Ik wil graag het volgende bestellen: " +
            encodeURIComponent("\r\n") +
            "Mocht u van een bepaald product meer aantallen willen, gelieve dit achter het product te noteren." +
            encodeURIComponent("\r\n\n") +
            "Broodje(s): " +
            encodeURIComponent("\r\n") +
            encodeURIComponent(broodjeslijst) +
            encodeURIComponent("\r\n\n") +
            "Gebakje(s): " +
            encodeURIComponent("\r\n") +
            encodeURIComponent(gebakjeslijst) +
            encodeURIComponent("\r\n\n") +
            "Koffie(s): " +
            encodeURIComponent("\r\n") +
            encodeURIComponent(koffielijst) +
            encodeURIComponent("\r\n\n") +
            "Brood(en): " +
            encodeURIComponent("\r\n") +
            encodeURIComponent(brodenlijst) +
            encodeURIComponent("\r\n\n") +
            "Bezorgen? " +
            encodeURIComponent(bezorgen) +
            encodeURIComponent("\r\n\n") +
            "Indien ja, dit is mijn bezorgadres: " +
            encodeURIComponent("\r\n") +
            "Straat en huisnr.: " +
            encodeURIComponent(straatBestelTxt) +
            encodeURIComponent("\r\n") +
            "Postcode en woonplaats: " +
            encodeURIComponent(postcodeBestelTxt) + " " + encodeURIComponent(woonplaatsBestelTxt);
        window.location.href = link;
    }
}