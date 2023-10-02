// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор. Калькулятор повинен мати методи для виконання арифметичних операцій: додавання, віднімання, множення та ділення. Потім створіть функцію calculate, яка приймає об'єкт цього типу та виконує операцію і повертає результат.
interface ICalculator {
  add: CalcFuntion;
  subtract: CalcFuntion;
  multiply: CalcFuntion;
  divide: CalcFuntion;
}
type CalcFuntion = (firstOperand: number, secondOperand: number) => number;

const calculator: ICalculator = {
  add: (firstOperand, secondOperand) => firstOperand + secondOperand,
  subtract: (firstOperand, secondOperand) => firstOperand - secondOperand,
  multiply: (firstOperand, secondOperand) => firstOperand * secondOperand,
  divide: (firstOperand, secondOperand) => {
    if (secondOperand) {
      return firstOperand / secondOperand;
    } else {
      throw new Error('division by "0" forbidden');
    }
  },
};
enum OperationsEnum {
  ADD = 'ADD',
  SUBTRACT = 'SUBTRACT',
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE',
}

function calculate(
  calculator: ICalculator,
  firstOperand: number,
  secondOperand: number,
  action: OperationsEnum
): number {
  if (action === OperationsEnum.ADD) {
    return calculator.add(firstOperand, secondOperand);
  } else if (action === OperationsEnum.SUBTRACT) {
    return calculator.subtract(firstOperand, secondOperand);
  } else if (action === OperationsEnum.DIVIDE) {
    return calculator.divide(firstOperand, secondOperand);
  } else {
    return calculator.multiply(firstOperand, secondOperand);
  }
}

console.log('result:', calculate(calculator, 6, 2, OperationsEnum.MULTIPLY));
// console.log('result:', calculate(calculator, 6, 0, OperationsEnum.DIVIDE));

// Уявіть, що ви створюєте інтерфейси для веб-сервісу, який надає інформацію про книги. Створіть інтерфейси Book, Author, і BookService, які описують структуру даних книжок, авторів і методи веб-сервісу для отримання інформації про книжки та авторів. Потім створіть об'єкт bookService, який імітує роботу веб-сервісу, і використовуйте інтерфейси для отримання інформації про книги та авторів.
// Домашку можна здати після терміну

interface IBook {
  title: string;
  author: IAuthor;
  genre: string;
}

interface IAuthor {
  name: string;
  books: IBook[];
}

interface IBookService {
  books: IBook[];
  addbook(book: IBook): void;
  findBookByTitle(title: string): IBook | undefined;
  findBooksByAuthor(authorName: string): IBook[] | [];
  findBooksByGenre(genre: string): IBook[] | [];
}

class Book implements IBook {
  title: string;
  author: IAuthor;
  genre: string;
  constructor(title: string, author: IAuthor, genre: string) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
}

class Author implements IAuthor {
  name: string;
  books: IBook[] | [];
  constructor(name: string, books: IBook[]) {
    this.name = name;
    this.books = books;
  }
}

class BookService implements IBookService {
  books: IBook[] = [];

  addbook(book: IBook): void {
    this.books = [...this.books, book];
  }

  findBookByTitle(title: string): IBook | undefined {
    return this.books.find(book => book.title === title);
  }

  findBooksByAuthor(authorName: string): IBook[] | [] {
    return this.books.filter(book => book.author.name === authorName);
  }

  findBooksByGenre(genre: string): IBook[] | [] {
    return this.books.filter(book => book.genre === genre);
  }
}

const author1 = new Author('Evgen', []);
const book1 = new Book('Two friends', author1, 'romantic');
const book2 = new Book('Cat', author1, 'romantic');
const bookService = new BookService();
bookService.addbook(book1);
bookService.addbook(book2);

console.log('search by title:', bookService.findBookByTitle('Two friends'));
console.log('search by title:', bookService.findBookByTitle('Dog'));
console.log('search by author:', bookService.findBooksByAuthor('Evgen'));
