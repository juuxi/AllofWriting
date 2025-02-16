"use strict";

window.addEventListener("DOMContentLoaded", () => {
});

const stickyMenu = () => {
    window.addEventListener("scroll", () => {
        let nav = document.querySelector("nav");
        let scrollHeight = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (scrollHeight > 50) {
            nav.classList.add("sticky");
        }
        else {
            nav.classList.remove("sticky");
        }
    });
}

stickyMenu();