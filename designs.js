
function changeColor() {         // color fucntion
    const color = document.getElementById("colorPicker").value;
    this.style.background = color;
}

function makeGrid() {     //  create makeGrid. Clear and create table based on user inputs 
    const gridHeight = document.getElementById("input_height").value;     // height
    const gridWidth = document.getElementById("input_width").value;        // width
    const pixelCanvas = document.getElementById("pixel_canvas");            // pixel
    pixelCanvas.innerText=""; // empty table   
    
    for (let h=0; h<gridHeight; ++h) {
        const row = pixelCanvas.insertRow(-1); // insert new row for last position
        for (let w=0; w<gridWidth; ++w) {
            const cell = row.insertCell(-1); 
            cell.onclick = changeColor;
        }
    }
    event.preventDefault();
}
