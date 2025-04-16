document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");

    button.addEventListener("click", function () {
        const nameDisplay = document.createElement("p");
        nameDisplay.textContent = "Trần Nhựt Thiên";
        document.body.appendChild(nameDisplay);
    });
});
