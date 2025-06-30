const canvas = document.querySelector("#canvasBox");
function initialCanvas(){
    for (let i = 0; i < 225; i++) {
        const square = document.createElement("div");
        square.classList.add("pixelClass");
        canvas.appendChild(square);
    };
    addMouseOver();
};
initialCanvas();

const sizeButton = document.querySelector("#canvasSizeButton");
sizeButton.addEventListener("click", promptSize);
function promptSize(){
    let size = prompt("Set canvas size (up to 100 squares): ");
    while (size < 1 || size > 100){
        size = prompt("Please choose size between 1 and 100: ");
    };
    putPixels(size);
};

function putPixels(canvasSize){
    deletePixelDivs();
    const canvasWidthAndHeight = (canvasSize * 15) + 4;
    canvas.style.width = `${canvasWidthAndHeight}px`;
    canvas.style.height = `${canvasWidthAndHeight}px`;    
    for (let i = 0; i < (canvasSize**2); i++) {
        const square = document.createElement("div");
        square.classList.add("pixelClass");
        canvas.appendChild(square);
    };
    addMouseOver();
};

function deletePixelDivs(){
    const pixels = document.querySelectorAll(".pixelClass");
    pixels.forEach(pixel => pixel.remove());
};

function addMouseOver(){
    const pixels = document.querySelectorAll(".pixelClass");
    pixels.forEach(pixel => pixel.addEventListener("mouseover",changePixelColor));
    function changePixelColor(){
        this.style.backgroundColor = "black";
    };
};
