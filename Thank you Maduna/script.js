
const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", function () {
    if (surpriseMessage.hidden) {
        surpriseMessage.hidden = false;
        surpriseButton.textContent = "Close My Special Message ↑";
    } else {
        surpriseMessage.hidden = true;
        surpriseButton.textContent = "Open My Special Message ♡";
    }
});
