var acc = document.getElementsByClassName("accordion-toon-meer");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "inline";
            document.getElementById('pijl').src="assets/Arrow-down.png";
            document.getElementById('Productbeschrijving').style.height = "460px";
            document.getElementById('accordion-tekst').style.height = "460px";
            document.getElementById('accordion-toon-meer').style.bottom = "-23.5rem";
            // document.getElementById('accordion').innerText = "Toon meer";
        } else {
            panel.style.display = "block";
            document.getElementById('pijl').src="assets/Arrow-up.png";
            document.getElementById('Productbeschrijving').style.height = "100%";
            document.getElementById('accordion-tekst').style.height = "100%";
            document.getElementById('accordion-toon-meer').style.bottom = "-33.5rem";
            // document.getElementById('accordion').innerText = "Toon minder";
        }
    });
}