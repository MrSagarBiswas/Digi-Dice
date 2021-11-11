const dice = document.querySelector(".dice");

function diceRoll() {

    // Dice Click Animation
    dice.classList.remove("diceClicked");
    void dice.offsetWidth;
    dice.classList.add("diceClicked");

    // Remove Extra Class
    for (var i = 0; i < 6; i++) {
        document.querySelectorAll(".point")[i].classList.remove(document.querySelectorAll(".point")[i].classList[1]);
    }

    var point = Math.floor(Math.random() * 6) + 1;

    // Add Class
    if (point == 6) {
        for (var i = 0; i < 6; i++) {
            var j = i + 1;
            document.querySelectorAll(".point")[i].classList.add("point-" + j + "for6");
        }
    } else if (point == 4 || point == 5) {
        for (var i = 0; i < point; i++) {
            var j = i + 1;
            document.querySelectorAll(".point")[i].classList.add("point-" + j);
        }
    } else if (point == 3) {
        document.querySelectorAll(".point")[0].classList.add("point-2");
        document.querySelectorAll(".point")[1].classList.add("point-3");
        document.querySelectorAll(".point")[2].classList.add("point-5");
    } else if (point == 2) {
        document.querySelectorAll(".point")[0].classList.add("point-2");
        document.querySelectorAll(".point")[1].classList.add("point-3");
    } else if (point == 1) {
        document.querySelectorAll(".point")[0].classList.add("point-5");
    }

    var youget = "You Get: " + point;
    document.querySelector(".youget").textContent = youget;

}

dice.addEventListener("click", diceRoll);