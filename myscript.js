//alert("hello");
const musicSound = new Audio("music.mp3");
const gameOverSound = new Audio("deadth.mp3");
let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 1;
counter = 0;

hole.addEventListener("animationiteration", () => {
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(function () {


    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }
    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500 - characterTop);


    if ((character > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        gameOverSound.play();
        musicSound.pause();
        alert("Game Over score:" + counter)
        character.style.top = 100 + "px";
        counter = 0;
    }

}, 10);


function jump() {
    jumping = 1;
    musicSound.play();

    let jumpCount = 0;
    let jumpIngIntraval = setInterval(function () {

        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
        }

        if (jumpCount > 20) {
            clearInterval(jumpIngIntraval);
            jumping = 0;
            jumpCount = 0;
        }

        jumpCount++
    }, 10)
}
