
var countDisplayer = document.getElementById("count-displayer");
var addCountBtn = document.getElementById("add-count-btn");

var count = 0;

function myAddCount() {
    count++;
    countDisplayer.textContent = count;
}

addCountBtn.addEventListener("click", myAddCount);
