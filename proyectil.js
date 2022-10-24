function calculaCoordX(angulo, velocidad, tiempo) {
    let x = velocidad * Math.cos(angulo) * tiempo;
    return x;

}

function calculaCoordY(angulo, velocidad, tiempo) {
    let a = 40;
    let y = (velocidad * Math.sin(angulo) * tiempo) - 1 / 2 * a * (tiempo * tiempo);
    return y;

}

const readlineSync = require("readline-sync");
let anguloTiro = readlineSync.question("Introduce el angulo de tiro: ");
let velocidadTiro = readlineSync.question("Introduce la velocidad inicial del tiro: ");
let tiempo = 0;
let cordenadaY;
let cordenadaX;


while (cordenadaY <= 0); {
    tiempo += 0.1;
    cordenadaY = calculaCoordY(anguloTiro, velocidadTiro, tiempo);
    cordenadaX = calculaCoordX(anguloTiro, velocidadTiro, tiempo);
    console.log("TIEMPO", tiempo, "\tPOSICION_X", cordenadaX, "\tPOSICION_Y", cordenadaY,);
}

console.log("Fin del lanzamiento");