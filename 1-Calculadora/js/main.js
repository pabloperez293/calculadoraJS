// References to the main elements
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Secure function for evaluating mathematical expressions
const safeEval = (expression) => {
  try {
    
    return Function('"use strict"; return (' + expression + ')')();
  } catch {
    return "Error"; 
};
// Iterate over each button to assign events

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backSpace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = safeEval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerHTML = "Null";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

// Change theme dark

const themeToggleBtn = document.querySelector(".themeToggler");
const calculator = document.querySelector(".calculator");
const togglerIcon = document.querySelector(".fa-solid");

let isDark = true;

// Event to toggle theme

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
  // Change icon
  if (isDark) {
    togglerIcon.className = "fa-solid fa-moon";
  } else {
    togglerIcon.className = "fa-solid fa-sun";
  }
}}
