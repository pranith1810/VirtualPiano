document.addEventListener("keydown",function (event) {
    if(event.code=="KeyA") {
        console.log("The 'A' Key is pressed");
        let audio =  new Audio("white_keys/A.mp3");
        audio.play();
    }
    else if(event.code=="KeyS") {
        console.log("The 'S' Key is pressed");
        let audio =  new Audio("white_keys/S.mp3");
        audio.play();
    }
    else if(event.code=="KeyD") {
        console.log("The 'D' Key is pressed");
        let audio =  new Audio("white_keys/D.mp3");
        audio.play();
    }
    else if(event.code=="KeyF") {
        console.log("The 'F' Key is pressed");
        let audio =  new Audio("white_keys/F.mp3");
        audio.play();
    }
    else if(event.code=="KeyG") {
        console.log("The 'G' Key is pressed");
        let audio =  new Audio("white_keys/G.mp3");
        audio.play();
    }
    else if(event.code=="KeyH") {
        console.log("The 'H' Key is pressed");
        let audio =  new Audio("white_keys/H.mp3");
        audio.play();
    }
    else if(event.code=="KeyJ") {
        console.log("The 'J' Key is pressed");
        let audio =  new Audio("white_keys/J.mp3");
        audio.play();
    }
    else if(event.code=="KeyW") {
        console.log("The 'W' Key is pressed");
        let audio =  new Audio("black_keys/W.mp3");
        audio.play();
    }
    else if(event.code=="KeyE") {
        console.log("The 'E' Key is pressed");
        let audio =  new Audio("black_keys/E.mp3");
        audio.play();
    }
    else if(event.code=="KeyT") {
        console.log("The 'T' Key is pressed");
        let audio =  new Audio("black_keys/T.mp3");
        audio.play();
    }
    else if(event.code=="KeyY") {
        console.log("The 'Y' Key is pressed");
        let audio =  new Audio("black_keys/Y.mp3");
        audio.play();
    }
    else if(event.code=="KeyU") {
        console.log("The 'U' Key is pressed");
        let audio =  new Audio("black_keys/U.mp3");
        audio.play();
    }

    else {
        console.log("Wrong key pressed.");
    }

});