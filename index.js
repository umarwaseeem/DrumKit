
var buttons = document.querySelectorAll(".drum");

// array of audio
var audio =
    [
        new Audio("sounds/crash.mp3"),
        new Audio("sounds/kick-bass.mp3"),
        new Audio("sounds/snare.mp3"),
        new Audio("sounds/tom-1.mp3"),
        new Audio("sounds/tom-2.mp3"),
        new Audio("sounds/tom-3.mp3"),
        new Audio("sounds/tom-4.mp3")
    ];

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {
        createSound(buttons[index].innerHTML);
        animate(buttons[index].innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    createSound(event.key);
    animate(event.key);
}
);

function animate(keyPressed) {
    document.querySelector("." + keyPressed).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + keyPressed).classList.remove("pressed");
    }, 100);
}

function createSound(keyPressed) {
    switch (keyPressed) {
        case "w":
            audio[0].play();
            break;
        case "a":
            audio[1].play();
            break;
        case "s":
            audio[2].play();
            break;
        case "d":
            audio[3].play();
            break;
        case "j":
            audio[4].play();
            break;
        case "k":
            audio[5].play();
            break;
        case "l":
            audio[6].play();
            break;
    }
}

