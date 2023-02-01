// alert("Select your difficulty level to start the game")
var start = new Date().getTime();
var difficulty = 0;
var points = 0;

// delay();
function delay() {
    setTimeout(function () {
        document.getElementById("shape").style.left = Math.random() * 80 + "%";
        document.getElementById("shape").style.top = Math.random() * 80 + "%";
        document.getElementById("shape").style.display = "block";
        start = new Date().getTime();
    }, (Math.random() * difficulty));
}

document.getElementById("easy").onclick = function () {
    difficulty = 2000;
    document.getElementById("difficulty").innerHTML = "Easy";
    delay();
}
document.getElementById("mid").onclick = function () {
    difficulty = 1000;
    document.getElementById("difficulty").innerHTML = "Medium";
    delay();
}
document.getElementById("hard").onclick = function () {
    difficulty = 500;
    document.getElementById("difficulty").innerHTML = "Hard";
    delay();
}

document.getElementById("Extreme").onclick = function () {
    difficulty = 50;
    document.getElementById("shape").style.height = "10 px";
    document.getElementById("shape").style.width = "10 px";
    document.getElementById("difficulty").innerHTML = "Extreme";
    delay();
}


document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    points += 1;
    document.getElementById("points").innerHTML = points;
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("time-taken").innerHTML = timeTaken + "s";
    delay();
}


document.getElementById("refresh-btn").onclick = function () {
    location.reload();
}