const play = document.querySelector(".play");
const pullDown = document.querySelector(".indicaciones");
const game = document.querySelector(".game");
const juega = document.querySelector(".jugar");
const saludo = document.querySelector(".saludo");
const mensaje = document.querySelector(".mensaje");

var juego = false;
var turno = 0;
var tabla = new Array();

play.addEventListener('click', function () {
    pullDown.classList.add('pullDawn');
    juego = true;
    if (juego == true) {
        tabla[0] = document.getElementById("c1");
        tabla[1] = document.getElementById("c2");
        tabla[2] = document.getElementById("c3");
        tabla[3] = document.getElementById("c4");
        tabla[4] = document.getElementById("c5");
        tabla[5] = document.getElementById("c6");
        tabla[6] = document.getElementById("c7");
        tabla[7] = document.getElementById("c8");
        tabla[8] = document.getElementById("c9");
        for (var i = 0; i < 9; i++) {
            tabla[i].calssName = "btnInicial";
            tabla[i].value = "i";
        }
        turno = 1;
    }
    setTimeout(function () {
        pullDown.classList.add('hidden');
    }, 1000);
    setTimeout(function () {
        game.classList.add('show');
        juega.classList.add('showtext');
        saludo.classList.add('hidden');
    }, 1000);
});
function colocar(boton) {
    if (turno == 1 && boton.value == "i") {
        turno = 2;
        boton.value = "x"
        boton.classList.add("btnX");
    } else {
        if (turno == 2 && boton.value == "i") {
            turno = 1;
            boton.value = "o"
            boton.classList.add("btnO");
        }
    }
    setTimeout(function () {
        evaluar();
    }, 300)

}

function evaluar() {
    if ((tabla[0].value == "x" && tabla[1].value == "x" && tabla[2].value == "x")
        || (tabla[3].value == "x" && tabla[4].value == "x" && tabla[5].value == "x")
        || (tabla[6].value == "x" && tabla[7].value == "x" && tabla[8].value == "x")
        || (tabla[0].value == "x" && tabla[3].value == "x" && tabla[6].value == "x")
        || (tabla[1].value == "x" && tabla[4].value == "x" && tabla[7].value == "x")
        || (tabla[2].value == "x" && tabla[5].value == "x" && tabla[8].value == "x")
        || (tabla[0].value == "x" && tabla[4].value == "x" && tabla[8].value == "x")
        || (tabla[2].value == "x" && tabla[4].value == "x" && tabla[6].value == "x")
    ) {
        mensaje.innerHTML = "El jugador numero 1 a ganado";

    }
    if ((tabla[0].value == "o" && tabla[1].value == "o" && tabla[2].value == "o")
        || (tabla[3].value == "o" && tabla[4].value == "o" && tabla[5].value == "o")
        || (tabla[6].value == "o" && tabla[7].value == "o" && tabla[8].value == "o")
        || (tabla[0].value == "o" && tabla[3].value == "o" && tabla[6].value == "o")
        || (tabla[1].value == "o" && tabla[4].value == "o" && tabla[7].value == "o")
        || (tabla[2].value == "o" && tabla[5].value == "o" && tabla[8].value == "o")
        || (tabla[0].value == "o" && tabla[4].value == "o" && tabla[8].value == "o")
        || (tabla[2].value == "o" && tabla[4].value == "o" && tabla[6].value == "o")
    ) {
        mensaje.innerHTML = "El jugador numero 2 a ganado";
    }
}

