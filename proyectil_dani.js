const readlineSync = require("readline-sync");

const ACELERACION = 40; // m/s^2
const SEPARADOR = "==================================";

function calculaCoordX(angulo, velocidad, tiempo) {
    return velocidad * Math.cos(angulo) * tiempo;
}

function calculaCoordY(angulo, velocidad, tiempo) {
    return (
        velocidad * Math.sin(angulo) * tiempo -
        0.5 * ACELERACION * Math.pow(tiempo, 2)
    );
}

function obtenerAnguloTiro() {
    const anguloTiroMsj = "Introduce el angulo de tiro: ";
    return readlineSync.question(anguloTiroMsj);
}

function obtenerVelocidadTiro() {
    const velocidadTiroMsj = "Introduce la velocidad inicial del tiro: ";
    return readlineSync.question(velocidadTiroMsj);
}

function mostrarCabeceraDatosIteracion() {
    console.log("\nInicio de lanzamiento");
    console.log(SEPARADOR);
    console.log("TIEMPO", "POSICION_X", "POSICION_Y");
}

function mostrarDatosIteracion(tiempo, coordenadaX, coordenadaY) {
    console.log(
        tiempo.toFixed(2),
        "\t",
        coordenadaX.toFixed(2),
        "\t",
        coordenadaY.toFixed(2)
    );
}

function mostrarDatosFinales(maxTiempo, maxCoordenadaX, maxCoordenadaY) {
    console.log("\nFin del lanzamiento");
    console.log(SEPARADOR);
    console.log(
        "Altura máxima:",
        maxCoordenadaY.toFixed(2),
        "---",
        "Distancia máxima:",
        maxCoordenadaX.toFixed(2),
        "---",
        "Tiempo total:",
        maxTiempo.toFixed(2)
    );
}

const anguloTiro = obtenerAnguloTiro();
const velocidadTiro = obtenerVelocidadTiro();

let tiempo = 0;
let coordenadaX = 0;
let coordenadaY = 0;
let alturaMaxima = 0;

mostrarCabeceraDatosIteracion();
do {
    tiempo += 0.1;
    coordenadaX = calculaCoordX(anguloTiro, velocidadTiro, tiempo);
    coordenadaY = calculaCoordY(anguloTiro, velocidadTiro, tiempo);

    if (alturaMaxima < coordenadaY) alturaMaxima = coordenadaY;

    mostrarDatosIteracion(tiempo, coordenadaX, coordenadaY);
} while (coordenadaY >= 0);

// El tiempo total y la distancia máxima siempre coinciden con el tiempo y la coordenadaX con las que acaba el bucle
mostrarDatosFinales(tiempo, coordenadaX, alturaMaxima);
