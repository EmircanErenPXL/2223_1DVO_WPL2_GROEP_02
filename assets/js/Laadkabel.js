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

let acc = document.getElementsByClassName("accordion-toon-meer");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "inline";
            document.getElementById('pijl').src = "assets/images/Arrow-down.png";
            document.getElementById('Productbeschrijving').style.height = "460px";
            document.getElementById('accordion-tekst').style.height = "460px";
            document.getElementById('accordion-tekst').style.overflow = "hidden";
            document.getElementById('accordion-toon-meer').style.bottom = "-23.5rem";
            // document.getElementById('accordion').innerText = "Toon meer";
        } else {
            panel.style.display = "block";
            document.getElementById('pijl').src = "assets/images/Arrow-up.png";
            document.getElementById('Productbeschrijving').style.height = "700px";
            document.getElementById('accordion-tekst').style.height = "700px";
            document.getElementById('accordion-tekst').style.overflow = "auto";
            document.getElementById('accordion-toon-meer').style.bottom = "-38.5rem";
            // document.getElementById('accordion').innerText = "Toon minder";
        }
    });
}

// rating sterren
let stars = document.querySelectorAll(".Beoordeling span");
let products = document.querySelectorAll(".Beoordeling");
let ratings = [];

for (let star of stars) {
    star.addEventListener("click", function () {
        let children = star.parentElement.children;
        for (let child of children){
            if (child.getAttribute("data-clicked")){
                return false;
            }
        }

        this.setAttribute("data-clicked", "true");
        let rating = this.dataset.rating;
        let productId = this.parentElement.dataset.productid;
        console.log(rating, productId);

        let data = {
            "stars": rating,
            "product-id": productId
        }
        ratings.push(data);
        localStorage.setItem("rating", JSON.stringify(ratings));
    });
}

if (localStorage.getItem("rating")){
    ratings = JSON.parse(localStorage.getItem("rating"));
    for (let rating of ratings){
        for (let product of products){
            if (rating["product-id"] === product.dataset.productid){
                let reversedStars = Array.from(product.children).reverse();
                let index = parseInt(rating["stars"]) - 1;
                reversedStars[index].setAttribute("data-clicked", "true");
            }
        }
    }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}