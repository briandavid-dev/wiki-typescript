interface Shape {
  readonly sides: number;
  area(): number;
  perimeter(): number;
}

function process(shape: Shape) {
  console.log("********* shape");
  console.log(shape.sides);
  console.log(shape.area());
  console.log(shape.perimeter());
}

/** Otra Forma Ejemplo */

const shape: Shape = {
  sides: 1,
  area: function () {
    return 10;
  },
  perimeter: function () {
    return 20;
  },
};

process(shape);

/** Forma implementando interfaz en clase */

class Rectangle implements Shape {
  constructor(
    private readonly width: number,
    private readonly height: number
  ) {}

  sides: number = 4;

  area(): number {
    return 51;
  }

  perimeter(): number {
    return 52;
  }
}

process(new Rectangle(100, 100));
