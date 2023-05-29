const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.2s ease forwards ${
                    index / 7 + 0.5
                }s `;
            }
        });
        burger.classList.toggle("toggle");
    });
    //
};

navSlide();

let navToggle = document.querySelector(".navtoggle");
let navWrapper = document.querySelector(".navwrapper");

function Pakketten() {
    var x = document.getElementById('Productenlijst-pakketten');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        document.getElementById("Productenlijst-pakketten").style.display = "flex";
        document.getElementById("Productenlijst-pakketten").style.justifyContent = "space-evenly";
        document.getElementById("Productenlijst-pakketten").style.flexWrap = "wrap";
        document.getElementById("Productenlijst-pakketten").style.width = "1200px";
        document.getElementById("Productenlijst-pakketten").style.margin = "0 auto";
    } else {
        x.style.display = 'none';
        document.getElementById("Productenlijst-pakketten").style.display = "none";
    }
}

function Laadpaal() {
    var x = document.getElementById('Productenlijst-laadpaal');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        document.getElementById("Productenlijst-laadpaal").style.display = "flex";
        document.getElementById("Productenlijst-laadpaal").style.justifyContent = "space-evenly";
        document.getElementById("Productenlijst-laadpaal").style.flexWrap = "wrap";
        document.getElementById("Productenlijst-laadpaal").style.width = "1200px";
        document.getElementById("Productenlijst-laadpaal").style.margin = "0 auto";
    } else {
        x.style.display = 'none';
        document.getElementById("Productenlijst-laadpaal").style.display = "none";
    }
}

function Accessoires() {
    var x = document.getElementById('Productenlijst-accessoires');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        document.getElementById("Productenlijst-accessoires").style.display = "flex";
        document.getElementById("Productenlijst-accessoires").style.justifyContent = "space-evenly";
        document.getElementById("Productenlijst-accessoires").style.flexWrap = "wrap";
        document.getElementById("Productenlijst-accessoires").style.width = "1200px";
        document.getElementById("Productenlijst-accessoires").style.margin = "0 auto";
    } else {
        x.style.display = 'none';
        document.getElementById("Productenlijst-accessoires").style.display = "none";
    }
}

// function Pakketten(IdBaseName, NumberOfButtons) {
//     for (x = 1; x <= NumberOfButtons; x++) {
//         CheckThisButton = IdBaseName + x;
//         ThisDiv = IdBaseName + x + 'Div';
//         if (document.getElementById(CheckThisButton).checked) {
//             document.getElementById(ThisDiv).style.display = "block";
//             document.getElementById("Productenlijst-pakketten").style.display = "flex";
//             document.getElementById("Productenlijst-pakketten").style.justifyContent = "space-evenly";
//             document.getElementById("Productenlijst-pakketten").style.flexWrap = "wrap";
//             document.getElementById("Productenlijst-pakketten").style.width = "1200px";
//             document.getElementById("Productenlijst-pakketten").style.margin = "0 auto";
//         } else {
//             document.getElementById(ThisDiv).style.display = "none";
//         }
//     }
//     return false;
// }function Laadpaal(IdBaseName, NumberOfButtons) {
//     for (x = 1; x <= NumberOfButtons; x++) {
//         CheckThisButton = IdBaseName + x;
//         ThisDiv = IdBaseName + x + 'Div';
//         if (document.getElementById(CheckThisButton).checked) {
//             document.getElementById(ThisDiv).style.display = "block";
//             document.getElementById("Productenlijst-laadpaal").style.display = "flex";
//             document.getElementById("Productenlijst-laadpaal").style.justifyContent = "space-evenly";
//             document.getElementById("Productenlijst-laadpaal").style.flexWrap = "wrap";
//             document.getElementById("Productenlijst-laadpaal").style.width = "1200px";
//             document.getElementById("Productenlijst-laadpaal").style.margin = "0 auto";
//         } else {
//             document.getElementById(ThisDiv).style.display = "none";
//         }
//     }
//     return false;
// }
//
// function Accessoires(IdBaseName, NumberOfButtons) {
//     for (x = 1; x <= NumberOfButtons; x++) {
//         CheckThisButton = IdBaseName + x;
//         ThisDiv = IdBaseName + x + 'Div';
//         if (document.getElementById(CheckThisButton).checked) {
//             document.getElementById(ThisDiv).style.display = "block";
//             document.getElementById("Productenlijst-accessoires").style.display = "flex";
//             document.getElementById("Productenlijst-accessoires").style.justifyContent = "space-evenly";
//             document.getElementById("Productenlijst-accessoires").style.flexWrap = "wrap";
//             document.getElementById("Productenlijst-accessoires").style.width = "1200px";
//             document.getElementById("Productenlijst-accessoires").style.margin = "0 auto";
//         } else {
//             document.getElementById(ThisDiv).style.display = "none";
//         }
//     }
//     return false;
// }