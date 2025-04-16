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