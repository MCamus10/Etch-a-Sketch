const sizeButton = document.querySelector("#canvasSizeButton");
sizeButton.addEventListener("click", promptSize);
function promptSize(){
    let size = prompt("Set canvas size (up to 100 squares): ");
    while (size < 1 || size > 100){
        size = prompt("Please choose size between 1 and 100: ");
    };
    putPixels(size);
};

const canvas = document.querySelector("#canvasBox");
function initialCanvas(){
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.classList.add("pixelClass");
        canvas.appendChild(square);
    };
};
initialCanvas();

function putPixels(canvasSize){
    cleanPixelDivs();
    const canvasWidthAndHeight = (canvasSize * 20) + 4;
    canvas.style.width = `${canvasWidthAndHeight}px`;
    canvas.style.height = `${canvasWidthAndHeight}px`;    
    for (let i = 0; i < canvasSize**2; i++) {
        const square = document.createElement("div");
        square.classList.add("pixelClass");
        canvas.appendChild(square);
    };
};

function cleanPixelDivs(){
    const pixels = document.querySelector(".pixelClass");
    pixels.forEach(pixel => pixel.remove());
}

const pixels = document.querySelectorAll(".pixelClass");
pixels.forEach(pixel => pixel.addEventListener("mouseover",changePixelColor));
function changePixelColor(){
     this.style.backgroundColor = "black";
};

