/* 
 * SDC 355 Project - Week 3
 * Add a new project announcement, change 2 elements, and add a delay message
 */

// Select modal and Close button
const welcomeModal = document.getElementById("welcomeModal");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", function() {
  welcomeModal.classList.add("hidden");
});

// Updated welcome message
document.getElementById("welcomeMessage").textContent = 
  "Welcome to my portfolio!";

const projectCount = document.querySelectorAll("#projects tbody tr").length;

// Select the two Featured Content divs
const universityResources = document.getElementById("universityResources");

const personalProjects = document.getElementById("personalProjects");

// Determine which resources should appear
if (projectCount < 3) {
  universityResources.hidden = false;
  personalProjects.hidden = false;
} else {
    universityResources.hidden = true;
    personalProjects.hidden = false;
}

// Array for technical skills
const skills = [
  "C", "HTML", "CSS", "GitHub", "SQL", "Java", "Python", "JavaScript"];

// Select skills list from the About section
const skillsList = document.getElementById("skillsList");

// Loop through array and create list items
skills.forEach(function(skill) {
  const listItem = document.createElement("li");

  listItem.textContent = skill;

  skillsList.appendChild(listItem);
});

// Dark mode checkbox
const darkModeToggle = document.getElementById("darkModeToggle");

// load saved preference
const savedTheme = localStorage.getItem("darkMode");

// Apply saved theme
if (savedTheme === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeToggle.checked = true;
} else {
  document.body.classList.remove("dark-mode");
  darkModeToggle.checked = false;
}

// save preference when checkbox changes
darkModeToggle.addEventListener("change", function() {
  if (darkModeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

// Contact Form interaction - week 3
const contactForm = document.querySelector(".contact-form");
const submitButton = document.getElementById("submitButton");
const formStatus = document.getElementById("formStatus");

// listen for form submission
contactForm.addEventListener("submit", function(event) {
  // prevent page from refreshing and get visitor's name
  event.preventDefault();

  const senderName = document.getElementById("senderName").value.trim();

  // validate form and disable button during waiting period
  if (!contactForm.reportValidity() || senderName === "") {
    return;
  }

submitButton.disabled = true;

// display loading message
formStatus.textContent = "Sending message...";
formStatus.className = "form-loading";

// delay 2.5 seconds before showing confirmation
setTimeout(function() {
  formStatus.textContent = 
  "Thank you, " + senderName + "! " +
  "Your message has been submitted successfully.";

  formStatus.className = "form-success";

  // re-enable submit button
  submitButton.disabled = false;
}, 2500);
});

// select project section and create a new paragraph
const projectSection = document.getElementById("projects");
const projectAnnouncement = document.createElement("p");

projectAnnouncement.textContent = 
  "Check out my latest project! I am continuing to add new features " + 
  "as I learn more about using JavaScript, HTML, and CSS.";

// give paragraph a CSS class and insert into project section
projectAnnouncement.classList.add("project-announcement");

projectSection.appendChild(projectAnnouncement);

// select project heading and update
const projectHeading = document.querySelector("#projects h2");

projectHeading.textContent = "My Projects";

// select about section and add CSS class
const aboutSection = document.getElementById("about");

aboutSection.classList.add("about-highlight");





