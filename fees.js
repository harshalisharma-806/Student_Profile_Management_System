/* ==========================================
   CampusOne AI
   Fee Management JavaScript
========================================== */

// ==========================================
// Fee Analytics Chart
// ==========================================

const feeChart = document.getElementById("feeChart");

if (feeChart) {

    new Chart(feeChart, {

        type: "doughnut",

        data: {

            labels: [

                "Paid",
                "Pending"

            ],

            datasets: [

                {

                    data: [

                        107500,
                        12500

                    ],

                    backgroundColor: [

                        "#22C55E",
                        "#F59E0B"

                    ],

                    borderWidth:0

                }

            ]

        },

        options: {

            responsive:true,

            plugins:{

                legend:{

                    position:"bottom"

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
// Scroll Animation
// ==========================================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll(

".chart-card,.payment-history,.payment-methods,.qr-card,.fee-breakdown,.reminder,.receipts,.scholarship,.statistics,.timeline,.payment-status,.tips"

).forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition=".7s";

observer.observe(section);

});

// ==========================================
// Payment Method Buttons
// ==========================================

document.querySelectorAll(".method-card button").forEach(button=>{

button.addEventListener("click",()=>{

const method=button.parentElement.querySelector("h3").innerText;

alert(

"Redirecting to "+method+" payment gateway..."

);

});

});

// ==========================================
// QR Download
// ==========================================

const qrButton=document.querySelector(".qr-card button");

if(qrButton){

qrButton.addEventListener("click",()=>{

alert(

"QR Code downloaded successfully."

);

});

}

// ==========================================
// Receipt Download
// ==========================================

document.querySelectorAll(".receipt-card button").forEach(button=>{

button.addEventListener("click",()=>{

const semester=

button.parentElement.querySelector("h3").innerText;

alert(

semester+" Receipt Downloaded."

);

});

});

// ==========================================
// Reminder
// ==========================================

const reminderButton=document.querySelector(".reminder-card button");

if(reminderButton){

reminderButton.addEventListener("click",()=>{

alert(

"Opening Payment Portal..."

);

});

}

// ==========================================
// Counter Animation
// ==========================================

document.querySelectorAll(".card h2").forEach(counter=>{

const text=counter.innerText;

const value=parseInt(text.replace(/[^\d]/g,""));

if(isNaN(value)) return;

let count=0;

const increment=Math.ceil(value/80);

function update(){

count+=increment;

if(count>value) count=value;

if(text.includes("₹"))

counter.innerText="₹"+count.toLocaleString();

else if(text.includes("Days"))

counter.innerText=count+" Days";

else

counter.innerText=count;

if(count<value)

requestAnimationFrame(update);

}

update();

});

// ==========================================
// Timeline Hover
// ==========================================

document.querySelectorAll(".timeline-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateX(10px)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="translateX(0px)";

});

});

// ==========================================
// Statistics Hover
// ==========================================

document.querySelectorAll(".stat-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});

// ==========================================
// Scholarship Card
// ==========================================

const scholarship=document.querySelector(".scholarship-card");

if(scholarship){

scholarship.addEventListener("click",()=>{

alert(

"Currently no scholarship is active.\n\nMaintain CGPA above 9.0 to become eligible."

);

});

}

// ==========================================
// Financial Tips Animation
// ==========================================

document.querySelectorAll(".tips li").forEach((tip,index)=>{

tip.style.opacity="0";

setTimeout(()=>{

tip.style.transition=".5s";

tip.style.opacity="1";

},index*200);

});

// ==========================================
// Console Message
// ==========================================

console.log("CampusOne AI Fee Management Loaded Successfully 🚀");