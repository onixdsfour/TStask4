// Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea. У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення. У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі

abstract class Figure {
  abstract name: string;
  abstract color: string;
  public abstract calculateArea(): number;
}

interface IRectangle {
  name: string;
  color: string;
  width: number;
  height: number;
  calculateArea(): number;
  print(): void;
}
class Circle extends Figure {
  constructor(
    readonly name: string,
    readonly color: string,
    public radius: number
  ) {
    super();
    this.name = name;
    this.color = color;
  }

  public calculateArea(): number {
    return Math.pow(this.radius, 2) * 3.14;
  }
}

class Rectangle extends Figure implements IRectangle {
  constructor(
    readonly name: string,
    readonly color: string,
    public width: number,
    public height: number
  ) {
    super();
    this.name = name;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }

  public print(): void {
    console.log('area calculation formula: h * w');
  }
}

class Square extends Rectangle implements IRectangle {
  constructor(
    readonly name: string,
    readonly color: string,
    public width: number
  ) {
    super(name, color, width, width);
  }

  public override calculateArea(): number {
    return this.width * this.width;
  }

  override print(): void {
    console.log('area calculation formula: height * width');
  }
}

class Triangle extends Figure {
  constructor(
    readonly name: string,
    readonly color: string,
    public sideLenght: number,
    public height: number
  ) {
    super();
    this.name = name;
    this.color = color;
    this.sideLenght = sideLenght;
    this.height = height;
  }

  public calculateArea(): number {
    return (this.sideLenght * this.height) / 2;
  }
}

const a = new Triangle('redTriangle', 'red', 10, 8);
const b = new Square('blueSquare', 'blue', 13);
console.log('result:', a.calculateArea());
console.log('result:', b.calculateArea());
b.print();
