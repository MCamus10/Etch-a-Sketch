const canvas = document.querySelector("#canvasBox");
function initialCanvas(){
    for (let i = 0; i < 256; i++) {
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
    opacity = 0.1;
};

function putPixels(canvasSize){
    deletePixelDivs();
    const pixelWidthAndHeight = 960/canvasSize;   
    for (let i = 0; i < (canvasSize**2); i++) {
        const square = document.createElement("div");
        square.classList.add("pixelClass");
        square.style.width = `${pixelWidthAndHeight}px`;
        square.style.height = `${pixelWidthAndHeight}px`;
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
    pixels.forEach(pixel => {
        pixel.dataset.activated = "false";
        pixel.addEventListener("mouseover",randomColor);
    });
};


let opacity = 0.1;
function randomColor(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    this.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    this.dataset.activated = "true";
    opacity += 0.1;
    if (opacity > 1) opacity = 1;
}; 
