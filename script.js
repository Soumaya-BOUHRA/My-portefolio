/* =========================================
   PORTFOLIO SCRIPT - MODERNE
   ========================================= */

/* =========================
   1. NAVBAR SCROLL EFFECT
========================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(0, 29, 57, 0.85)";
        header.style.backdropFilter = "blur(10px)";
        header.style.transition = "0.4s";
    } else {
        header.style.backgroundColor = "";
    }
});


/* =========================
   2. SMOOTH SCROLL LINKS
========================= */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});


/* =========================
   3. TYPING EFFECT
========================= */
const text = "Software Engineer & Graphic Designer";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (!typingElement) return;

    typingElement.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(() => {
            index = 0;
            typeEffect();
        }, 2000);
    }
}

typeEffect();


/* =========================
   4. SCROLL REVEAL EFFECT
========================= */
const revealElements = document.querySelectorAll(
    "#about, #abouts, .expertise-card, #contact, #home .image, #home .section-heading"
);

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "0.8s ease";
        }
    });
}

/* Initial state */
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* =========================
   5. BUTTON HOVER SOUND FEEL (UX)
========================= */
document.querySelectorAll(".btn, form button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});


/* =========================
   6. ACTIVE LINK ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});