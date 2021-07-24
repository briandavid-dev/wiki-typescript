/*
    Decorador de propiedades (attributos) y parametros
    - La función toma 3 parametros
      1 target: nombre de la clase tipado "Object"
      2 propertyKey: nombre del metodo, tipado como "string" o "symbol"
      3 parameterIndex: posición del parametro
*/

function DecoradorPropiedad(target: Object, propertyKey: string) {
  console.log("DPPropiedad ");
  console.log(target);
  console.log(propertyKey);
}

function DecoradorParametro(
  target: Object,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("DParametro ");
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

class Medico {
  especialidades: string;

  constructor(@DecoradorPropiedad especialidades: string) {
    this.especialidades = especialidades;
  }

  escribeReceta(
    address: string = "Diceciocho 620 1",
    @DecoradorParametro name: string
  ) {
    console.log("Escribe Receta " + name + " " + address);
  }

  getEspecialidades(): string {
    return this.especialidades;
  }
}

// new Medico("Medicina").escribeReceta("Santiago", "Magica");
let medico = new Medico("Medicina, Cirugia");
medico.escribeReceta("Santiago", "Magica");
console.log(medico.getEspecialidades());
