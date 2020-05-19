
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!

    for (let i = 0; i < height; i++) {
        let bricks ="";
        for (let j = i + 2; j > 0; j--) {
            bricks += "#";
        }
        console.log(bricks);
    }

    
    for (let i = 0; i < height; i++) {
        let bricks ="";
        for (let j = height + 1; j > 0; j--) {
            if (j <= i + 2) {
                bricks += "#";
            } else {
                bricks += " ";
            }
        }
        console.log(bricks);
    }
    
}

function drawPyramid1(height) {
    if (height > 0) {
        document.getElementById("construction").style.display = "none";
    } 
    const container = document.getElementById("pyramid");
    for (let i = 0; i < height; i++) {
        const p = document.createElement("P");
        let bricks ="";
        for (let j = height + 1; j > 0; j--) {
            if (j <= i + 2) {
                bricks += "#";
            } else {
                bricks += "&nbsp;";
            }
        }
        p.innerHTML = bricks;
        container.appendChild(p);
    }
    
}

function drawPyramid2(height) {
    if (height > 0) {
        document.getElementById("construction").style.display = "none";
    }
    //Get a reference to the container div
    const container = document.getElementById("pyramid");
    for (let i = 0; i < height; i++) {
        //Create a <br> tag to break onto the next line
        const br = document.createElement("BR");
        
        for (let j = height + 1; j > 0; j--) {
            //For each "brick" start with an emply div
            const div = document.createElement("DIV");
            if (j <= i + 2) {
                //Add the .brick class if it's going to be a brick
                div.classList.add("brick");
                //Append the brick div to the container
                container.appendChild(div);
            } else {
                //Add the .space ckass if it's going to be an empty space
                div.classList.add("space");
                //Append the space div to the container
                container.appendChild(div);
            }
        }
        //After creating one row, append the <br> tag to move to the next line
        container.appendChild(br);
    }
    
}

drawPyramid1(20);
drawPyramid2(20);
