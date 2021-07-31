/**
 * Casteos con as
 * Casteo: es cuando convertimos variables de un tipo en otro tipo
 * */

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

function procesar(geo: Geometria) {
  if (geo.lados === 4) {
    let cuadrado = geo as Cuadrado;
    cuadrado.lado;
  } else if (geo.lados === 3) {
    let triangulo = geo as Triangulo;
    triangulo.base;
  }
}
