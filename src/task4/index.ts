const arr = ['sdfsdf', 'sdfsdf', 42, true, { a: 54 }];
const obj = { a: 'hello', b: '23' };
const obj1 = { a: 26, b: 23 };

// Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком. Потім використовуйте її для звуження типу змінної.

function isString(item: unknown): item is string {
  return typeof item === 'string';
}

// У вас є масив з елементами різних типів. Напишіть функцію, яка приймає цей масив і фільтрує його так, щоб у підсумку в ньому залишилися тільки рядки. Використовуйте захисника типу для цього завдання.

function arrFilter(item: unknown[]): string[] {
  return item.filter(isString);
}

console.log('result of execution arrFilter function:', arrFilter(arr));

// У вас є об'єкт, який може містити довільні властивості. Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з властивостей, якщо воно існує і має певний тип.

type ObjExapmle = {
  a: string | number;
  b: string | number;
};

function hasPropInObject(entity: ObjExapmle): string | undefined {
  return 'a' in entity && typeof entity.a === 'string' ? entity.a : undefined;
}

console.log('result of execution arrFilter function:', hasPropInObject(obj));
console.log('result of execution arrFilter function:', hasPropInObject(obj1));

// Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта (наприклад, наявність певної властивості або її тип). Потім напишіть функцію, яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.

function hasNameProperty(obj: object): obj is { name: string } {
  return 'name' in obj && typeof obj.name === 'string';
}

function hasAgeProperty(obj: object): obj is { age: number } {
  return 'age' in obj && typeof obj.age === 'number';
}

function narrowingWithGuard(obj: object): string {
  if (hasNameProperty(obj)) {
    return `${obj.name}`;
  } else if (hasAgeProperty(obj)) {
    return `${obj.age}`;
  } else {
    return 'property not found';
  }
}

console.log('result of narrowingWithGuard:', narrowingWithGuard({ name: 'aleks', age: '25' }));
console.log('result of narrowingWithGuard:', narrowingWithGuard({ age: 26 }));
console.log('result of narrowingWithGuard:', narrowingWithGuard({ b: true }));

// У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число). Напишіть функцію, яка приймає цю змінну і виконує довільні операції, специфічні для кожного з типів.

function valueToUpercase(value: unknown): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value.toString().toUpperCase();
  } else {
    return 'value has incorect type';
  }
}

console.log('result of valueToUpercase:', valueToUpercase('hello'));
console.log('result of valueToUpercase:', valueToUpercase(654));
console.log('result of valueToUpercase:', valueToUpercase(true));

// Створіть захисник типу, який перевірятиме, чи є передане значення функцією. Потім напишіть функцію, яка використовує цей гард для звуження типу змінної і викликає передану функцію, якщо вона існує.

function isFunc(value: unknown): value is () => string {
  return typeof value === 'function';
}

console.log('result of isFunc', isFunc(45));
console.log('result of isFunc', isFunc(valueToUpercase));

function stringToUpperCase(value: string | (() => string)): string {
  if (isFunc(value)) {
    return value().toUpperCase();
  } else {
    return value.toUpperCase();
  }
}

function example(value: object): string {
  return value.toString();
}

console.log('result of stringToUpperCase:', stringToUpperCase('touppercase'));
console.log('result of stringToUpperCase:', stringToUpperCase(example({ a: 45 })));

// Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються на цій ієрархії.

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Admin extends User {
  access(): string {
    return `${this.name} access is allowed`;
  }
}

class TrialUser extends User {
  accessTrial(): string {
    return `${this.name} access is allowed for trial period`;
  }
}
function isAdmin(user: User): user is Admin {
  return user instanceof Admin;
}

function isTrialUser(user: User): user is TrialUser {
  return user instanceof TrialUser;
}

function accessType(user: User): string {
  if (isAdmin(user)) {
    return user.access();
  } else if (isTrialUser(user)) {
    return user.accessTrial();
  } else {
    return `${user.name} access denied`;
  }
}

console.log('result of accessType:', accessType(new Admin('alex')));
console.log('result of accessType:', accessType(new User('max')));
