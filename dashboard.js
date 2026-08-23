/* ==========================================
   CampusOne AI Dashboard
   dashboard.js
========================================== */

// ==========================================
// Mobile Sidebar
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        sidebar.classList.toggle("active");

    });

}

// ==========================================
// Dark Mode
// ==========================================

const themeBtn = document.getElementById("theme");

if (localStorage.getItem("dashboardTheme") === "dark") {

    document.body.classList.add("dark");

    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("dashboardTheme", "dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    else {

        localStorage.setItem("dashboardTheme", "light");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});

// ==========================================
// Attendance Chart
// ==========================================

const chartCanvas = document.getElementById("attendanceChart");

if (chartCanvas) {

    new Chart(chartCanvas, {

        type: "line",

        data: {

            labels: [

                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"

            ],

            datasets: [

                {

                    label: "Attendance",

                    data: [

                        85,
                        90,
                        88,
                        93,
                        92,
                        95

                    ],

                    borderColor: "#4F46E5",

                    backgroundColor: "rgba(79,70,229,.15)",

                    fill: true,

                    tension: .4,

                    pointRadius: 5,

                    pointBackgroundColor: "#4F46E5"

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    min: 70,

                    max: 100

                }

            }

        }

    });

}

// ==========================================
// Card Animation
// ==========================================

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = ".6s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, index * 120);

});

// ==========================================
// Panel Animation
// ==========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(".panel").forEach(panel => {

    panel.style.opacity = "0";

    panel.style.transform = "translateY(40px)";

    panel.style.transition = ".7s";

    observer.observe(panel);

});

// ==========================================
// Welcome Greeting
// ==========================================

const greeting = document.querySelector(".welcome h1 span");

if (greeting) {

    const hour = new Date().getHours();

    if (hour < 12) {

        greeting.innerHTML = "Good Morning ☀️";

    }

    else if (hour < 18) {

        greeting.innerHTML = "Good Afternoon 🌤️";

    }

    else {

        greeting.innerHTML = "Good Evening 🌙";

    }

}
// ==========================================
// Live Date & Time
// ==========================================

const welcomeSection = document.querySelector(".welcome");

if (welcomeSection) {

    const dateElement = document.createElement("p");
    dateElement.id = "liveDate";
    dateElement.style.marginTop = "15px";
    dateElement.style.fontWeight = "500";

    welcomeSection.firstElementChild.appendChild(dateElement);

    function updateDateTime() {

        const now = new Date();

        const options = {

            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"

        };

        dateElement.innerHTML =
            `<i class="fa-solid fa-calendar-days"></i>
             ${now.toLocaleDateString("en-US", options)}
             &nbsp;&nbsp;
             <i class="fa-solid fa-clock"></i>
             ${now.toLocaleTimeString()}`;

    }

    updateDateTime();

    setInterval(updateDateTime, 1000);

}

// ==========================================
// AI Assistant
// ==========================================

const aiButton = document.querySelector(".ai-btn");

if (aiButton) {

    aiButton.addEventListener("click", () => {

        alert(
`🤖 Campus AI

Hello Tanav!

Today's Suggestions

• Solve 3 Java DSA Problems

• Revise Database Management

• Complete AI Assignment

• Practice Aptitude for 30 Minutes

• Attendance: Excellent (92%)

Keep Going! 🚀`
        );

    });

}

// ==========================================
// Quick Actions
// ==========================================

document.querySelectorAll(".action").forEach(action => {

    action.addEventListener("click", () => {

        const title = action.querySelector("p").innerText;

        alert(title + " module will open here.");

    });

});

// ==========================================
// Sidebar Navigation
// ==========================================

const menuItems = document.querySelectorAll(".menu-item");
const contentArea = document.getElementById("content-area");

const pages = {

dashboard: `
<h2>🏠 Dashboard</h2>
<p>Welcome back, Tanav!</p>
`,

profile: `
<h2>👤 Student Profile</h2>
<p>Profile module will be added next.</p>
`,

attendance: `
<h2>📅 Attendance</h2>
<p>Attendance module will be added next.</p>
`,

fees: `
<h2>💰 Fee Management</h2>
<p>Fee Management module will be added next.</p>
`,

performance: `
<h2>📊 Performance</h2>
<p>Performance Analytics module will be added next.</p>
`,

certificates: `
<h2>🏆 Certificates</h2>
<p>Certificates module will be added next.</p>
`,

documents: `
<h2>📁 Documents</h2>
<p>Document module will be added next.</p>
`,

ai: `
<h2>🤖 Campus AI</h2>
<p>AI Assistant module will be added next.</p>
`,

settings: `
<h2>⚙️ Settings</h2>
<p>Settings module will be added next.</p>
`

};

if (contentArea) {

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(i => i.classList.remove("active"));

            item.classList.add("active");

            const page = item.dataset.page;

            if (pages[page]) {

                contentArea.innerHTML = pages[page];

            }

        });

    });

}

// ==========================================
// Progress Animation
// ==========================================

document.querySelectorAll(".progress-fill").forEach(bar => {

    const width = bar.style.width;

    bar.style.width = "0";

    setTimeout(() => {

        bar.style.transition = "1.2s";

        bar.style.width = width;

    }, 300);

});

// ==========================================
// Logout
// ==========================================

const logout = document.querySelector(".logout");

if (logout) {

    logout.addEventListener("click", () => {

        const answer = confirm("Do you want to logout?");

        if (answer) {

            window.location.href = "login.html";

        }

    });

}

// ==========================================
// Notification
// ==========================================

const notification = document.querySelector(".notification");

if (notification) {

    notification.addEventListener("click", () => {

        alert(
`Notifications

• Fee due in 10 days

• AI Workshop Certificate Added

• Attendance Updated

• Java Assignment Due Tomorrow`
        );

    });

}

console.log("CampusOne AI Dashboard Loaded Successfully 🚀");