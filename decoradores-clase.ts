/*
    Decoradores de clase
    Es aplicado al constructor de la clase y puede ser usado para observar, 
    modificar o reemplazar la definicion inicial de la clase.
    Su único algumento es "target" que vedría siendo la clase decorada, tipado como "Function" o "any"

*/

function DecoradorSuma(target: Function) {
  console.log("DecoradorSuma");
  target.prototype.metodo2 = function () {
    console.log("Metodo 2");
  };
}

function DecoradorResta(target: Function) {
  console.log("DecoradorResta");
  target.prototype.metodo3 = function () {
    console.log("Metodo 3");
  };
}

function DecoradorConParametro(parametro1: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log(parametro1);
  };
}

@DecoradorConParametro("Hola Brayan 1")
@DecoradorSuma
@DecoradorResta
class Productos {
  constructor() {
    console.log("constructor");
  }

  medodo1() {}
}

let productos = new Productos();
productos.metodo2();
productos.metodo3();
