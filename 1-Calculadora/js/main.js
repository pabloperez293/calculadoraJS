const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backSpace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerHTML = "Null";
      setTimeout(() => ((display.innerText = ""), 2000));
    } else {
      display.innerText += item.id;
    }
  };
});

// Switch para hacer el cambio de thema dark

const themeToggleBtn = document.querySelector(".themeToggler");
const calculator = document.querySelector(".calculator");

let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark=!isDark;
};
