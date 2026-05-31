let count = 0;

function addToCart() {
    count++;
    document.getElementById("cart-count").innerText = count;
}

// NAVBAR BACKGROUND ON SCROLL
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});


// CARD ANIMATION ON SCROLL
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});


// ACTIVE NAV LINK ON SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.href.includes(current)) {
            link.classList.add("active");
        }
    });
});


// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
