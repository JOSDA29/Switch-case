let anguloUno = Number(parseFloat(prompt("Ingrese el primer angulo")));
let anguloDos = Number(parseFloat(prompt("Ingrese el segundo angulo")));
let anguloTres = Number(parseFloat(prompt("Ingrese el tercer angulo")));
let suma = anguloUno+anguloDos+anguloTres;
let resultado = suma == 180;
switch (resultado) {
    case true:
        console.log("Los angulos si corresponden a los de un triangulo");
        break;
    default: 
        console.log("Los angulos no corresponden a los de un triangulo");
        break;
};