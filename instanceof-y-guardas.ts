/**
 * instanceof y las guardas
 * - instanceof es una palabra clave de JavaScript que hereda TypeScript que permite comprobar si un objeto es de una clase concreta.
 * - Para comprobaciones más complejas que permitan distinguir si una variable es de un tipo u otro, TypeScript tiene las guardas.
 * */

class Vehicle {
  constructor(private color: string) {}

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }
}

class Building {
  constructor(private pisos: number) {}
}

let instanceVehicle = new Vehicle("Blanco");
instanceVehicle.setColor("Blanquito");
console.log(instanceVehicle.getColor());

// instanceof - comprobamos que la variable sea de una clase (de un tipo)
console.log(instanceVehicle instanceof Vehicle); // true
console.log(instanceVehicle instanceof Building); // false

interface Geometria {
  lados: number;
  pintar(): void;
}

interface Triangulo extends Geometria {
  base: number;
  altura: number;
}

interface Cuadrado extends Geometria {
  lado: number;
}

// guardas - comprobaciones mas complejas "x is a <NameInterface>"

function esGeometria(parametro: any): parametro is Geometria {
  return parametro.lados && parametro.pintar;
}
function esCuadrado(parametro: any): parametro is Cuadrado {
  return (
    esGeometria(parametro) && parametro.lados === 4 && (parametro as any).lado
  );
}
function esTriangulo(parametro: any): parametro is Triangulo {
  return (
    esGeometria(parametro) &&
    parametro.lados === 3 &&
    (parametro as any).base &&
    (parametro as any).altura
  );
}

function procesar(geo: Geometria) {
  if (esCuadrado(geo)) {
    geo.lado;
  } else if (esTriangulo(geo)) {
    geo.base;
    geo.altura;
  }
}
