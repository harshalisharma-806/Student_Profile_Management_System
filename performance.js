/* ==========================================
   CampusOne AI
   performance.js
========================================== */

// ==========================================
// CGPA Trend Chart
// ==========================================

const cgpaCanvas = document.getElementById("cgpaChart");

if (cgpaCanvas) {

    new Chart(cgpaCanvas, {

        type: "line",

        data: {

            labels: [

                "Semester 1",
                "Semester 2",
                "Semester 3"

            ],

            datasets: [

                {

                    label: "CGPA",

                    data: [

                        8.52,
                        8.78,
                        8.91

                    ],

                    borderColor: "#4F46E5",

                    backgroundColor: "rgba(79,70,229,.15)",

                    fill: true,

                    tension: .4,

                    pointRadius: 6,

                    pointBackgroundColor: "#4F46E5"

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

                    min: 7,

                    max: 10

                }

            }

        }

    });

}

// ==========================================
// Summary Card Animation
// ==========================================

document.querySelectorAll(".card").forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*150);

});

// ==========================================
// Scroll Reveal Animation
// ==========================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll(

".chart-card,.marks-table,.semester-performance,.assignments,.exam-schedule,.prediction,.recommendations,.skills,.achievements,.insights,.goals"

).forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition=".7s";

observer.observe(section);

});

// ==========================================
// Progress Bar Animation
// ==========================================

document.querySelectorAll(".fill").forEach(bar=>{

const width=getComputedStyle(bar).width;

bar.style.width="0";

setTimeout(()=>{

bar.style.transition="1.2s";

bar.style.width=width;

},500);

});

// ==========================================
// Counter Animation
// ==========================================

document.querySelectorAll(".card h2").forEach(counter=>{

const txt=counter.innerText;

const value=parseFloat(txt);

if(isNaN(value)) return;

let current=0;

const step=value/60;

function animate(){

current+=step;

if(current>value) current=value;

if(txt.includes("."))

counter.innerText=current.toFixed(2);

else

counter.innerText=Math.floor(current);

if(current<value)

requestAnimationFrame(animate);

}

animate();

});

// ==========================================
// Semester Cards
// ==========================================

document.querySelectorAll(".semester-card").forEach(card=>{

card.addEventListener("click",()=>{

alert(

card.querySelector("h3").innerText+

"\nCGPA : "+card.querySelector("h1").innerText

);

});

});

// ==========================================
// Exam Reminder
// ==========================================

document.querySelectorAll(".exam-card").forEach(card=>{

card.addEventListener("click",()=>{

alert(

"Upcoming Exam\n\n"+

card.querySelector("h3").innerText+

"\n"+

card.querySelector("p").innerText+

"\n"+

card.querySelector("span").innerText

);

});

});

// ==========================================
// AI Prediction
// ==========================================

const prediction=document.querySelector(".prediction-card");

if(prediction){

prediction.addEventListener("click",()=>{

alert(

"AI Prediction\n\nExpected CGPA : 9.10\n\nContinue your current preparation to achieve it."

);

});

}

// ==========================================
// Achievement Cards
// ==========================================

document.querySelectorAll(".achievement-card").forEach(card=>{

card.addEventListener("click",()=>{

alert(

card.querySelector("h3").innerText

);

});

});

// ==========================================
// Recommendation Items
// ==========================================

document.querySelectorAll(".recommendations li").forEach((item,index)=>{

item.style.opacity="0";

setTimeout(()=>{

item.style.transition=".5s";

item.style.opacity="1";

},index*200);

item.addEventListener("click",()=>{

alert(item.innerText);

});

});

// ==========================================
// Insight Cards
// ==========================================

document.querySelectorAll(".insight-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateX(10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateX(0px)";

});

});

// ==========================================
// Goal Progress Hover
// ==========================================

document.querySelectorAll(".goal").forEach(goal=>{

goal.addEventListener("mouseenter",()=>{

goal.querySelector(".progress").style.transform="scale(1.02)";

});

goal.addEventListener("mouseleave",()=>{

goal.querySelector(".progress").style.transform="scale(1)";

});

});

// ==========================================
// Console Message
// ==========================================

console.log("CampusOne AI Performance Module Loaded Successfully 🚀");