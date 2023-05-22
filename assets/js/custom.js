let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.1;
    } else {
      preloader.style.display = 'none';
    }
}, 100)});

document.addEventListener("DOMContentLoaded", function() {
  var accordionTitles = document.getElementsByClassName("accordion-title");

  for (var i = 0; i < accordionTitles.length; i++) {
    accordionTitles[i].addEventListener("click", function() {
      var accordionItem = this.getAttribute("data-tab");
      var accordionContent = document.getElementById(accordionItem);

      // Toggle the accordion content
      if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
      } else {
        accordionContent.style.display = "block";
      }

      // Collapse other accordion items
      var siblings = this.parentNode.parentNode.children;
      for (var j = 0; j < siblings.length; j++) {
        if (siblings[j] !== this.parentNode) {
          var siblingAccordionContent = siblings[j].querySelector(".accordion-content");
          siblingAccordionContent.style.display = "none";

          var siblingAccordionTitle = siblings[j].querySelector(".accordion-title");
          siblingAccordionTitle.classList.remove("active-title");
          siblingAccordionTitle.querySelector("i.cross-faq").classList.remove("chevron-top");
        }
      }

      // Toggle active title class and chevron icon
      this.classList.toggle("active-title");
      this.querySelector("i.cross-faq").classList.toggle("chevron-top");
    });
  }
});
