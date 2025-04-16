window.onscroll = function() {
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

    switchElement.addEventListener("change", function (){
        const newTheme = this.checked ? "dark" : "light";
        let newText = "";
        htmlElement.setAttribute("data-bs-theme", newTheme);
        if(newTheme == "dark") {
            newText = "Light Mode";
        } else {newText = "Dark Mode";}
        document.getElementById("darkModeSwitch-text").innerHTML = newText;
        localStorage.setItem("bsTheme", newTheme);
    });
});

/* Page Navigation */

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click" , function() {
        for (let i = 0; i < pages.length; i++) {
            if(this.innerHTML.toLowerCase() === pages[i].dataset.page){
                pages[i].classList.add("active");
                navLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            }
            else {
                pages[i].classList.remove("active");
                navLinks[i].classList.remove("active");
            }
        }
    });
}