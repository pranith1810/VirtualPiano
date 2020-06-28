let keya = document.getElementById("white1");
let keys = document.getElementById("white2");
let keyd = document.getElementById("white3");
let keyf = document.getElementById("white4");
let keyg = document.getElementById("white5");
let keyh = document.getElementById("white6");
let keyj = document.getElementById("white7");
let keyk = document.getElementById("white8");
let keyl = document.getElementById("white9");
let keyz = document.getElementById("white10");
let keyx = document.getElementById("white11");
let keyc = document.getElementById("white12");
let keyv = document.getElementById("white13");
let keyb = document.getElementById("white14");
let keyn = document.getElementById("white15");
let keym = document.getElementById("white16");

document.addEventListener("keydown",function (event) {
    if(event.code=="KeyA") {
        console.log("The 'A' Key is pressed");
        let audio =  new Audio("white_keys/A.mp3");
        audio.play();
        keya.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyS") {
        console.log("The 'S' Key is pressed");
        let audio =  new Audio("white_keys/S.mp3");
        audio.play();
        keys.style.backgroundColor= "#99FFFF";
    }
    else if(event.code=="KeyD") {
        console.log("The 'D' Key is pressed");
        let audio =  new Audio("white_keys/D.mp3");
        audio.play();
        keyd.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyF") {
        console.log("The 'F' Key is pressed");
        let audio =  new Audio("white_keys/F.mp3");
        audio.play();
        keyf.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyG") {
        console.log("The 'G' Key is pressed");
        let audio =  new Audio("white_keys/G.mp3");
        audio.play();
        keyg.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyH") {
        console.log("The 'H' Key is pressed");
        let audio =  new Audio("white_keys/H.mp3");
        audio.play();
        keyh.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyJ") {
        console.log("The 'J' Key is pressed");
        let audio =  new Audio("white_keys/J.mp3");
        audio.play();
        keyj.style.backgroundColor= "#99FFFF" ;
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
    else if(event.code=="KeyK") {
        console.log("The 'K' Key is pressed");
        let audio =  new Audio("white_keys/A.mp3");
        audio.play();
        keyk.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyL") {
        console.log("The 'L' Key is pressed");
        let audio =  new Audio("white_keys/S.mp3");
        audio.play();
        keyl.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyZ") {
        console.log("The 'Z' Key is pressed");
        let audio =  new Audio("white_keys/D.mp3");
        audio.play();
        keyz.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyX") {
        console.log("The 'X' Key is pressed");
        let audio =  new Audio("white_keys/F.mp3");
        audio.play();
        keyx.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyC") {
        console.log("The 'C' Key is pressed");
        let audio =  new Audio("white_keys/G.mp3");
        audio.play();
        keyc.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyV") {
        console.log("The 'V' Key is pressed");
        let audio =  new Audio("white_keys/H.mp3");
        audio.play();
        keyv.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyB") {
        console.log("The 'B' Key is pressed");
        let audio =  new Audio("white_keys/J.mp3");
        audio.play();
        keyb.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyN") {
        console.log("The 'N' Key is pressed");
        let audio =  new Audio("white_keys/A.mp3");
        audio.play();
        keyn.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyM") {
        console.log("The 'M' Key is pressed");
        let audio =  new Audio("white_keys/S.mp3");
        audio.play();
        keym.style.backgroundColor= "#99FFFF" ;
    }
    else if(event.code=="KeyQ") {
        console.log("The 'Q' Key is pressed");
        let audio =  new Audio("black_keys/Y.mp3");
        audio.play();
    }
    else if(event.code=="KeyR") {
        console.log("The 'R' Key is pressed");
        let audio =  new Audio("black_keys/U.mp3");
        audio.play();
    }
    else if(event.code=="KeyI") {
        console.log("The 'I' Key is pressed");
        let audio =  new Audio("black_keys/W.mp3");
        audio.play();
    }
    else if(event.code=="KeyO") {
        console.log("The 'O' Key is pressed");
        let audio =  new Audio("black_keys/E.mp3");
        audio.play();
    }
    else if(event.code=="KeyP") {
        console.log("The 'P' Key is pressed");
        let audio =  new Audio("black_keys/T.mp3");
        audio.play();
    }
    else {
        console.log("Wrong key pressed.");
    }

});
document.addEventListener("keyup",function (event) {
    if (event.code == "KeyA") {
        keya.style.backgroundColor = "white";
    }
    else if (event.code == "KeyS") {
        keys.style.backgroundColor = "white";
    }
    else if (event.code == "KeyD") {
        keyd.style.backgroundColor = "white";
    }
    else if (event.code == "KeyF") {
        keyf.style.backgroundColor = "white";
    }
    else if (event.code == "KeyG") {
        keyg.style.backgroundColor = "white";
    }
    else if (event.code == "KeyH") {
        keyh.style.backgroundColor = "white";
    }
    else if (event.code == "KeyJ") {
        keyj.style.backgroundColor = "white";
    }
    else if (event.code == "KeyK") {
        keyk.style.backgroundColor = "white";
    }
    else if (event.code == "KeyL") {
        keyl.style.backgroundColor = "white";
    }
    else if (event.code == "KeyZ") {
        keyz.style.backgroundColor = "white";
    }
    else if (event.code == "KeyX") {
        keyx.style.backgroundColor = "white";
    }
    else if (event.code == "KeyC") {
        keyc.style.backgroundColor = "white";
    }
    else if (event.code == "KeyV") {
        keyv.style.backgroundColor = "white";
    }
    else if (event.code == "KeyB") {
        keyb.style.backgroundColor = "white";
    }
    else if (event.code == "KeyN") {
        keyn.style.backgroundColor = "white";
    }
    else if (event.code == "KeyM") {
        keym.style.backgroundColor = "white";
    }
});