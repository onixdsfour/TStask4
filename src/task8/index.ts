// Фільтрація масиву
// Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.

function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
  return arr.filter(condition);
}

const testArray = ['john', 'kate', 'john'];
const testArray2 = ['john', 'kate', 'john', 34];

console.log(
  'result:',
  filterArray<string>(testArray, item => item === 'john')
);
console.log(
  'result:',
  filterArray(testArray2, item => item === 'john')
);

// Узагальнений стек
// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.

class Stack<T> {
  private value: T[];
  constructor(array: T[]) {
    this.value = array;
  }

  push(value: T): void {
    this.value.push(value);
  }

  peek(): T | undefined {
    return this.value[this.value.length - 1];
  }

  pop(): void {
    this.value.pop();
  }
}

const stringArray = new Stack<string>(['alex', 'kate', 'john']);
const numberArray = new Stack<number>([23, 35]);

console.log('peek result', stringArray.peek());
stringArray.push('tom');
console.log('push result', stringArray.peek());

// Узагальнений словник
// Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has. Обмежте ключі тільки валідними типами для об'єкта

type ValidObjKey = string | number | symbol;

class Dictionary<T> {
  constructor(private colection: { [key: ValidObjKey]: T }) {
    this.colection = colection;
  }

  set(key: ValidObjKey, value: T): void {
    this.colection[key] = value;
  }

  get(key: ValidObjKey): T | undefined {
    return this.colection[key];
  }

  has(key: ValidObjKey): boolean {
    return this.colection[key] !== undefined;
  }
}

const dictionary = new Dictionary<string>({ name: 'Alex' });

dictionary.set('surname', 'tomson');
dictionary.set(43, '43');
console.log('result', dictionary);
