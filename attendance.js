/* ==========================================
   CampusOne AI
   attendance.js
========================================== */

// ==========================================
// Attendance Chart
// ==========================================

const chartCanvas = document.getElementById("attendanceChart");

if (chartCanvas) {

    new Chart(chartCanvas, {

        type: "bar",

        data: {

            labels: [

                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4"

            ],

            datasets: [

                {

                    label: "Attendance %",

                    data: [

                        96,
                        91,
                        94,
                        89

                    ],

                    backgroundColor: [

                        "#4F46E5",
                        "#06B6D4",
                        "#22C55E",
                        "#F59E0B"

                    ],

                    borderRadius: 10

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

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

        card.style.transform = "translateY(0px)";

    }, index * 150);

});

// ==========================================
// Scroll Animation
// ==========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

".chart-card,.attendance-table,.calendar-section,.weekly-report,.alerts,.goals,.statistics,.attendance-achievements,.recent,.tips"

).forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = ".7s";

    observer.observe(section);

});

// ==========================================
// Calendar Hover
// ==========================================

document.querySelectorAll(".day").forEach(day => {

    day.addEventListener("click", () => {

        if (

            day.classList.contains("heading")

        ) return;

        alert("Attendance Date : " + day.innerText);

    });

});

// ==========================================
// Goal Animation
// ==========================================

document.querySelectorAll(".fill").forEach(bar => {

    const width = getComputedStyle(bar).width;

    bar.style.width = "0";

    setTimeout(() => {

        bar.style.transition = "1.2s";

        bar.style.width = width;

    }, 500);

});

// ==========================================
// Attendance Counter
// ==========================================

document.querySelectorAll(".card h2").forEach(counter => {

    const text = counter.innerText;

    const number = parseInt(text);

    if (isNaN(number)) return;

    let count = 0;

    const increment = Math.ceil(number / 50);

    function update() {

        count += increment;

        if (count > number)

            count = number;

        if (text.includes("%"))

            counter.innerText = count + "%";

        else

            counter.innerText = count;

        if (count < number)

            requestAnimationFrame(update);

    }

    update();

});

// ==========================================
// Alerts
// ==========================================

document.querySelectorAll(".alert").forEach(alertBox => {

    alertBox.addEventListener("click", () => {

        const subject = alertBox.querySelector("h3").innerText;

        alert(subject + " attendance details opened.");

    });

});

// ==========================================
// Statistics Hover
// ==========================================

document.querySelectorAll(".stat-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});

// ==========================================
// Achievement Click
// ==========================================

document.querySelectorAll(".badge").forEach(badge => {

    badge.addEventListener("click", () => {

        alert(

            badge.querySelector("h3").innerText

        );

    });

});

// ==========================================
// Activity Click
// ==========================================

document.querySelectorAll(".activity-item").forEach(item => {

    item.addEventListener("click", () => {

        alert(

            item.querySelector("h3").innerText

        );

    });

});

// ==========================================
// Tips Animation
// ==========================================

document.querySelectorAll(".tips li").forEach((tip, index) => {

    tip.style.opacity = "0";

    setTimeout(() => {

        tip.style.transition = ".6s";

        tip.style.opacity = "1";

    }, index * 250);

});

console.log("Attendance Module Loaded Successfully 🚀");