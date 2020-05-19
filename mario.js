// Grabbing all the resources
const range = document.getElementById("height");
const heightNumSpan = document.getElementById("height_num");
const selectSymbol = document.getElementById("symbol");

// Default Value at launch
range.value = 5;

// Event for range change
range.addEventListener("input", (e) => {
    heightNumSpan.textContent = e.target.value;
    drawPyramid(parseInt(e.target.value), selectSymbol.value);
});

// Event for select change
selectSymbol.addEventListener("change", (e) => {
    drawPyramid(parseInt(range.value), e.target.value);
});

// Function that redraws the pyramid on screen
function drawPyramid(height, symbol) {
    // Grab the container
    const container = document.getElementById("pyramid");
    // Empty the container if it already contains something
    container.innerHTML = "";

    // Build the pyramid
    for (let i = 0; i < height; i++) {
        // Create a <p> tag
        const p = document.createElement("P");
        // This text will be appended to the <p> tag
        let bricks = "";
        for (let j = height + 1; j > 0; j--) {
            if (j <= i + 2) {
                // Append either the symbol for the brick
                bricks += symbol;
            } else {
                // Or append an empty space
                bricks += "&nbsp;";
            }
        }
        // Apend the text to the <p> tag
        p.innerHTML = bricks;
        // Append the <p> tag to the container
        container.appendChild(p);
    }
    
}

// Initial Values at Launch
const rangeVal = parseInt(range.value);
heightNumSpan.textContent = rangeVal;
drawPyramid(rangeVal, selectSymbol.value);
