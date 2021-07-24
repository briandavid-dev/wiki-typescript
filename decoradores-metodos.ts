/*
    Decorador de metodos
    - Tiene como objetivo observar, modificar o reemplazar.
    - La función toma 3 parametros
      1 target: metodo decorado, generalmente tipado "Object"
      2 propertyKey: nombre del metodo, tipado como "string" o "symbol"
      3 descriptor: "Property Descriptor" del objeto (value, writable, enumerable, configurable) tipado como PropertyDescriptor
    Retorna una funcion
*/

function DecoradorMetodo(esModificable: boolean){
  return function(target: any, nombrePropiedad: string, descriptor: PropertyDescriptor){
      descriptor.writable = esModificable;
  }
}

function Log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  descriptor.value = function(...args: any[]) {
      console.log(args)
  }
  return descriptor;
}

class Nevera {

  tienePuerta: boolean;

  constructor(tienePuerta: boolean) {
      this.tienePuerta = tienePuerta;
      console.log("C Nevera")
  }

  @Log
  @DecoradorMetodo(true)
  abrirPuerta(...args: any[]): void {
      console.log("Abrir puerta 1",args)
  }

}

let nevera = new Nevera(true);
nevera.abrirPuerta();
nevera.abrirPuerta = function() {
  console.log("Abrir Puerta 2");
}
nevera.abrirPuerta();
nevera.abrirPuerta = function() {
  console.log("Abrir Puerta 3");
}
nevera.abrirPuerta();


new Nevera(true).abrirPuerta("Hola", true, 1, {a:1});

