var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d");

var larguraCarro = 150;
var alturaCarro = 100;

var fundoCanvas = "fundo.jpg";
var imagemCarro = "carro.jpg";

var carroX = 10;
var CarroY = 10;

function add() {
    fundoCanvasTag = new Image();
    fundoCanvasTag.onload = uploadFundo;
    fundoCanvasTag.src = fundoCanvas;

    CarroTag = new Image();
    CarroTag.onload = uploadCarro;
    CarroTag.src = imagemCarro;
}
function uploadFundo() {
    ctx.drawImage(fundoCanvasTag, 0, 0, canvas.width, canvas.height);




}

function uploadCarro() {
    ctx.drawImage(CarroTag, carroX, CarroY, larguraCarro, alturaCarro);
}
window.addEventListener("keydown", teclaPressionada);

function teclaPressionada(e) {
    var keyPressed = e.keyCode;
    if (keyPressed == "37") {
        left();
    }
    if (keyPressed == "38") {
        up();
    } if (keyPressed == "39") {
        right();
    } if (keyPressed == "40") {
        down();
    }
}


function left() {
    if (carroX > 0) {
        carroX = carroX - 10;
        uploadFundo();
        uploadCarro();
    }
}

function right() {
    if (carroX < 700) {
        carroX = carroX + 10;
        uploadFundo();
        uploadCarro();
    }
}

function down() {
    if (CarroY < 400) {
        CarroY = CarroY + 10;
        uploadFundo();
        uploadCarro();
    }
}

function up() {
    if (CarroY > 0) {
        CarroY = CarroY - 10;
        uploadFundo();
        uploadCarro();
    }
}