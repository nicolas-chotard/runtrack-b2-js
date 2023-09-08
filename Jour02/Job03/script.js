
var textDisplayer = document.getElementById("text-displayer");
var inputText = document.getElementById("input-text");

function myDisplayText() {
    var inputValue = inputText.value;
    textDisplayer.textContent = inputValue;
}

function myTurnBold() {
    textDisplayer.style.fontWeight = "bold";
    textDisplayer.style.fontStyle = "normal";
}

function myTurnItalic() {
    textDisplayer.style.fontStyle = "italic";
    textDisplayer.style.fontWeight = "normal";
}

function myClearText() {
    textDisplayer.textContent = "";
    textDisplayer.style.fontWeight = "normal";
    textDisplayer.style.fontStyle = "normal";
    inputText.value = "";
}

