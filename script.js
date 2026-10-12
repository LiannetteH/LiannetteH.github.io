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
