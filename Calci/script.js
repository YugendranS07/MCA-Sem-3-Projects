const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const scientificSection = document.querySelector("#scientific-section");
const toggleScientific = document.querySelector("#toggleScientific");
const basicButton = document.querySelector("#basic"); // "Basic" button in scientific mode

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        } else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
        } else if (item.id == "sin") {
            display.innerText = Math.sin(parseFloat(display.innerText));
        } else if (item.id == "cos") {
            display.innerText = Math.cos(parseFloat(display.innerText));
        } else if (item.id == "tan") {
            display.innerText = Math.tan(parseFloat(display.innerText));
        } else if (item.id == "log") {
            display.innerText = Math.log10(parseFloat(display.innerText));
        } else if (item.id == "sqrt") {
            display.innerText = Math.sqrt(parseFloat(display.innerText));
        } else if (item.id == "pi") {
            display.innerText += Math.PI;
        } else if (item.id == "^") {
            display.innerText += "**";
        } else if (item.id == "e") {
            display.innerText += Math.E;
        } else if (item.id == "mod") {
            display.innerText += "%";
        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});

// Toggle the scientific section when "Scntfc" is clicked
toggleScientific.onclick = () => {
    scientificSection.style.display = "block";
    toggleScientific.style.display = "none"; // Hide "Scntfc" when in scientific mode
};

// Switch back to basic mode when "Basic" is clicked in the scientific section
basicButton.onclick = () => {
    scientificSection.style.display = "none";
    toggleScientific.style.display = "block"; // Show "Scntfc" when switching back to basic
};
