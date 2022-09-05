"use strict"


// Creates new grid
function createGrid(number) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 1; i <= number*number; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-box")
        gridContainer.appendChild(div);
    }

    // Adds grid size to text
    document.querySelector(".grid-dimensions").textContent = `${number}x${number}`;
}
// Adds black color to new div
function changeColor(event){
    event.target.style.backgroundColor = "black";
}

// Resets div and asks for new value
function resetGrid(){
    let num = prompt("Please enter grid size less than or equal to 100:");
    if (num === undefined || num === null || num === "") {
        return;
    }

    while (num > 100){
        num = prompt("Number too big! Please enter grid size less than or equal to 100:");
    }

    const gridContainer = document.querySelector(".grid-container");
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    // Adds black div when pressing mouse
    createGrid(num);
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mousemove", changeColor)});
}

// Clear div section
function clearGrid(){
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
}

let gridNumber = 16;
createGrid(gridNumber);
let gridBoxList = document.querySelectorAll(".grid-box");
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mousemove", changeColor)});