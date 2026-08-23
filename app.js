/* ==========================================
   CampusOne AI
   app.js
========================================== */

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

// ===============================
// Dark Mode
// ===============================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeToggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }

        else {

            localStorage.setItem("theme", "light");

            themeToggle.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}

// ===============================
// Scroll To Top
// ===============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    }

    else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Navbar Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.08)";

    }

    else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

".feature-card,.stat-card,.ai-card,.info-box,.about-content"

).forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = ".7s";

    observer.observe(el);

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(

".hero-stats h2,.stat-card h2"

);

counters.forEach(counter => {

    const text = counter.innerText;

    const number = parseInt(text.replace(/\D/g, ""));

    if (isNaN(number)) return;

    let current = 0;

    const increment = Math.ceil(number / 80);

    function update() {

        current += increment;

        if (current > number)

            current = number;

        const suffix = text.replace(/[0-9]/g, "");

        counter.innerText = current + suffix;

        if (current < number)

            requestAnimationFrame(update);

    }

    update();

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent.");

        form.reset();

    });

}

// ===============================
// Newsletter
// ===============================

const newsletterBtn = document.querySelector(

".newsletter-box button"

);

if (newsletterBtn) {

    newsletterBtn.addEventListener("click", () => {

        const input = document.querySelector(

            ".newsletter-box input"

        );

        if (input.value.trim() === "") {

            alert("Please enter your email.");

        }

        else {

            alert(

                "🎉 Successfully subscribed!"

            );

            input.value = "";

        }

    });

}

// ===============================
// Hero Button
// ===============================

const heroButton = document.querySelector(

".student-card button"

);

if (heroButton) {

    heroButton.addEventListener("click", () => {

        window.location.href = "login.html";

    });

}

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(

".nav-links a"

);

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") === "#" + current

        ) {

            link.classList.add("active");

        }

    });

});

console.log("CampusOne AI Loaded Successfully 🚀");