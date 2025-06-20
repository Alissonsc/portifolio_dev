let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
    }
}

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
}
menu.onscroll = () => {
    navbar.classList.remove("active");
}