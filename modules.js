const content = document.getElementById("content-area");

const pages = {

home:`

<h2>Dashboard Home</h2>

<p>Welcome back Tanav 👋</p>

`,


profile:`

<div class="profile-page">

<div class="profile-header">

<div class="profile-image">

<img src="https://i.pravatar.cc/250?img=12">

</div>

<div class="profile-info">

<h1>Tanav</h1>

<h3>CSE AI & ML</h3>

<p>Roll No : 10G036</p>

<div class="profile-buttons">

<button>Edit Profile</button>

<button>Download ID</button>

</div>

</div>

</div>

<div class="profile-grid">

<div class="profile-card">

<h2>Personal Information</h2>

<table>

<tr>

<td><b>Email</b></td>

<td>tanav@gmail.com</td>

</tr>

<tr>

<td><b>Phone</b></td>

<td>9876543210</td>

</tr>

<tr>

<td><b>Semester</b></td>

<td>3</td>

</tr>

<tr>

<td><b>Blood Group</b></td>

<td>B+</td>

</tr>

<tr>

<td><b>DOB</b></td>

<td>10/06/2006</td>

</tr>

<tr>

<td><b>Address</b></td>

<td>Rajpura, Punjab</td>

</tr>

</table>

</div>

<div class="profile-card">

<h2>Academic Details</h2>

<h3>CGPA</h3>

<h1 style="color:#4f46e5;font-size:55px;">
8.91
</h1>

<p>Excellent Performance ⭐</p>

</div>

</div>

<div class="profile-card">

<h2>Skills</h2>

<div class="skill">

<span>HTML</span>

<div class="progress">

<div style="width:95%" class="green"></div>

</div>

</div>

<div class="skill">

<span>CSS</span>

<div class="progress">

<div style="width:90%" class="blue"></div>

</div>

</div>

<div class="skill">

<span>Java</span>

<div class="progress">

<div style="width:87%" class="orange"></div>

</div>

</div>

<div class="skill">

<span>Python</span>

<div class="progress">

<div style="width:82%" class="purple"></div>

</div>

</div>

<div class="skill">

<span>Artificial Intelligence</span>

<div class="progress">

<div style="width:80%" class="green"></div>

</div>

</div>

</div>

<div class="profile-grid">

<div class="profile-card">

<h2>Achievements</h2>

<ul>

<li>🏆 Web Development Workshop</li>

<li>🏆 AI Bootcamp</li>

<li>🏆 Attendance 90%+</li>

<li>🏆 Coding Contest Finalist</li>

</ul>

</div>

<div class="profile-card">

<h2>Documents</h2>

<ul>

<li>📄 Aadhaar Card</li>

<li>📄 Resume</li>

<li>📄 Semester Result</li>

<li>📄 Student ID</li>

</ul>

</div>

</div>

</div>

`,

attendance:`

<h2>Attendance</h2>

<p>Attendance module coming soon...</p>

`,

fees:`

<h2>Fee Management</h2>

<p>Fee portal coming soon...</p>

`,

performance:`

<h2>Performance Analytics</h2>

<p>Performance dashboard coming soon...</p>

`,

certificates:`

<h2>Certificates</h2>

<p>Certificates module coming soon...</p>

`,

documents:`

<h2>Documents</h2>

<p>Document manager coming soon...</p>

`,

ai:`

<h2>Campus AI Assistant</h2>

<p>AI Assistant coming soon...</p>

`,

settings:`

<h2>Settings</h2>

<p>Settings module coming soon...</p>

`

};

document.querySelectorAll(".menu-item").forEach(item=>{

item.onclick=()=>{

document.querySelectorAll(".menu-item")
.forEach(x=>x.classList.remove("active"));

item.classList.add("active");

const page=item.dataset.page;

content.innerHTML=pages[page];

}

});

content.innerHTML=pages.home;