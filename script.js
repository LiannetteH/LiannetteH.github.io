/* 
 * SDC 355 Project - Week 1
 * Prompts visitors for their name and displays a custom message.
 */

// Ask visitor to enter their name.
let userName = prompt("What is your name?");

// Update welcome message
if (userName !== null && userName.trim() !== "") {
  document.getElementById("welcomeMessage").textContent =
    "Welcome to my portfolio, " + userName.trim() + "!";
} else {
  document.getElementById("welcomeMessage").textContent =
    "Welcome to my portfolio!";
}

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
const skillsLIst = document.getElementById("skillsList");

// Loop through array and create list items
skills.forEach(function(skill) {
  const listItem = document.createElement("li");

  listItem.textContent = skill;

  skillsList.appendChild(listItem);
});
