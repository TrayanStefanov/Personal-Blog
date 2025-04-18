window.onscroll = function () {
    scrollFunction();
};

let backToTop = document.getElementById("btn-back-to-top");

/* Checks if we have scrolled */

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

backToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/* Theme toggle */
document.addEventListener("DOMContentLoaded", (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById("darkModeSwitch");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = localStorage.getItem("bsTheme") || (prefersDarkScheme ? "dark" : "light");

    htmlElement.setAttribute("data-bs-theme", currentTheme);
    switchElement.checked = currentTheme === "dark";

    switchElement.addEventListener("change", function () {
        const newTheme = this.checked ? "dark" : "light";
        let newText = "";
        htmlElement.setAttribute("data-bs-theme", newTheme);
        if (newTheme == "dark") {
            newText = "Light Mode";
        } else { newText = "Dark Mode"; }
        document.getElementById("darkModeSwitch-text").innerHTML = newText;
        localStorage.setItem("bsTheme", newTheme);
    });
});

/* Page Navigation */

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        for (let j = 0; j < pages.length; j++) {
            if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
                pages[j].classList.add("active");
                navLinks[j].classList.add("active");
                window.scrollTo(0, 0);
            }
            else {
                pages[j].classList.remove("active");
                navLinks[j].classList.remove("active");
            }
        }
    });
}

const aboutlinks = document.querySelectorAll("[data-about-link]");


for (let i = 0; i < aboutlinks.length; i++) {
    aboutlinks[i].addEventListener("click", function () {
        for (let j = 0; j < pages.length; j++) {
            if (this.dataset.aboutLink === pages[j].dataset.page) {
                pages[j].classList.add("active");
                navLinks[j].classList.add("active");
                pages[0].classList.remove("active");
                window.scrollTo(0, 0);
            }
            else {
                navLinks[j].classList.remove("active");
            }
        }
    })
}

/* Recipe - extension */

const cards = document.querySelectorAll("[data-recipe]");
const recipes = document.querySelectorAll("[data-recipe-full]");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        for (let j = 0; j < recipes.length; j++) {
            if (this.dataset.recipe === recipes[j].dataset.recipeFull) {
                if (this.parentElement.parentElement.classList.contains("active")) {
                    cards[j].parentElement.parentElement.classList.remove("active");
                    recipes[j].classList.remove("active");
                }
                else {
                    cards[j].parentElement.parentElement.classList.add("active");
                    recipes[j].classList.add("active");
                    window.scrollTo(0, 0);
                }
            }
            else {
                cards[j].parentElement.parentElement.classList.remove("active");
                recipes[j].classList.remove("active");
            }
        }
    })
}

/* Outdoor read more toggle */

const outdoors = document.getElementsByClassName("read-more");
const outdoorsFull = document.getElementsByClassName("outdoor-article-full");

for (let i = 0; i < outdoors.length; i++) {
    outdoors[i].addEventListener("click", function () {
        outdoors[i].classList.add("d-none");
        outdoorsFull[i].classList.remove("d-none");
    })
}