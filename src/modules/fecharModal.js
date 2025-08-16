const dialogContainer = document.getElementById("dialog");

addEventListener("keydown", (e) => { 
    if(e.key === "Escape") {
        dialogContainer.style.display = "none";
    }
})