/*
FILE NAME: scripts/bryggeLaug.js
WRITTEN BY: Sander Bjerklund Lindberg
WHEN: November 2017
PURPOSE: Adds bryggelaug to the page
 */

//Referanser til HTML elementer
let cover = document.getElementById("cover");
let wrapperLaug = document.getElementById("wrapperLaug");
let overlayBack = document.getElementById("overlay-back");

//Objekt over alle bryggelaugene i Gløshaugen bryggeforum
let bryggelaug = [{
        //Online
        name: "Ontap",
        linjeforening: "Online",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 33,
        logo: "ontap.png",
        leder: "Aslak Hollund",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Volvox&Alkymisten
        name: "Invitro",
        linjeforening: "Volvox&Alkymisten",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 5,
        logo: "invitro.png",
        leder: "Charlie Shea",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Aarhønen
        name: "AarhøneKroa Pikobryggeri",
        linjeforening: "Aarhønen",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 6,
        logo: "aarhonekroa.png",
        leder: "Sondre Evjen",
        kontaktinfo: {
            telefon: 12345678,
            epost: "test@test.no"
        }
    },

    {
        //Delta
        name: "Delta Bryggelaug",
        linjeforening: "Delta",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 15,
        logo: "sample.jpg",
        leder: "Martin Madsen",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Janus
        name: "Indøk Ølbryggelaug",
        linjeforening: "Janus",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 11,
        logo: "sample.jpg",
        leder: "Marius Hofgaard",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Smørekommen
        name: "Maskins BrüggeCom",
        linjeforening: "Smørekoppen",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 123456,
        leder: "Ola Nordmann",
        logo: "sample.jpg",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Omega
        name: "Omega Haandbrygercommitée",
        linjeforening: "Omega",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 12,
        leder: "Nicholas Fraser Ødegård",
        logo: "omega.png",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Timini
        name: "Nanobryggeriet",
        linjeforening: "Timini",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 6,
        logo: "sample.jpg",
        leder: "Leik Isdal",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Emil
        name: "Ølkom",
        linjeforening: "Emil",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 123456,
        logo: "sample.jpg",
        leder: "Ola Nordmann",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Nabla
        name: "Nablas Ølbryggerlaug",
        linjeforening: "Nabla",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 39,
        logo: "sample.jpg",
        leder: "Camilla Idina Elvebakken",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Abakus
        name: "Ababrygg",
        linjeforening: "Abakus",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 45,
        logo: "sample.jpg",
        leder: "Vemdund Santi",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Hoiskolens Chemikerforening
        name: "CHØLeSCAB",
        linjeforening: "Høiskolens Chemikerforening",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 12,
        logo: "sample.jpg",
        leder: "Henrik Kiær",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Mannhullet
        name: "Mannhullet",
        linjeforening: "Mannhullet",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 25,
        logo: "mannhullet.jpg",
        leder: "Ola Nordmann",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    },

    {
        //Emil
        name: "Fylkesbrygg",
        linjeforening: "Emil",
        styremedlemmer: "Styremedlem 1, styremedlem 2, styremedlem 3, styremedlem 4 ....",
        medlemmer: 4,
        logo: "sample.jpg",
        leder: "Håkon Eidsvik",
        kontaktinfo: {
            telefon: 123456789,
            epost: "test@test.no"
        }
    }
];

//Funksjon for å fjerne "popup" av bruggelaug
function clickOverlay() {
    cover.innerHTML = "";
    cover.style.display = overlayBack.style.display = "none";
    cover.style.visibility = overlayBack.style.visibility = "hidden";

}

/*Loopen looper igjennom objektet og lager en div + img elementer og putter riktig bilde inn i riktig img-element, basert
på plassen i objektet. */

for (let i = 0; i < bryggelaug.length; i++) {
    let img = document.createElement("img");
    let div = document.createElement("div");


    img.setAttribute("class", "bryggelaugImg");
    img.setAttribute("onclick", "clickLaug()");
    img.setAttribute("id", i.toString());
    img.setAttribute("alt", bryggelaug[i].logo);
    img.setAttribute("src", "images/logoer/" + bryggelaug[i].logo);

    div.setAttribute("class", "bryggelaugDiv");

    div.innerHTML = "<h2 class='bryggeluagHeader'>" + bryggelaug[i].name + "</h2>";

    div.appendChild(img);
    wrapperLaug.appendChild(div);

    //Lager en referanse til bildet som er lagt til hver gang loopen kjører.
    let x = document.getElementById(i.toString());
    //Setter en "onclick" på dette bildet. Denne funksjonen sører for at "popup" virker.
    x.onclick = function () {
        let img = document.createElement("img");
        let div = document.createElement("div");
        let divKontakt = document.createElement("div");

        img.setAttribute("src", "images/logoer/" + bryggelaug[this.id].logo);
        img.setAttribute("id", i.toString());
        img.setAttribute("class", "coverImg");
        img.setAttribute("alt", bryggelaug[i].logo);

        cover.appendChild(img);

        div.setAttribute("id", "infoDiv");
        div.innerHTML = "<b>Navn: </b>" + bryggelaug[this.id].name;
        div.innerHTML += "<br><b>Linjeforening: </b>" + bryggelaug[this.id].linjeforening;
        div.innerHTML += "<br><b>Styremedlemmer: </b>" + bryggelaug[this.id].styremedlemmer;
        div.innerHTML += "<br><b>Antall medlemmer: </b>" + bryggelaug[this.id].medlemmer;
        div.innerHTML += "<br><b>Leder: </b>" + bryggelaug[this.id].leder;

        divKontakt.setAttribute("id", "contactDiv");
        divKontakt.innerHTML += "<h3>Kontakt</h3>";
        divKontakt.innerHTML += "<b>Telefon: </b>" + bryggelaug[this.id].kontaktinfo.telefon;
        divKontakt.innerHTML += "<br><b>Epost: </b><a href='mailto:" + bryggelaug[i].kontaktinfo.epost +
            "'>" + bryggelaug[this.id].kontaktinfo.epost + "</a>";

        div.appendChild(divKontakt);
        cover.appendChild(div);

        cover.style.display = overlayBack.style.display = "block";
        cover.style.visibility = overlayBack.style.visibility = "visible";
    }
}