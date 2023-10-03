var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = ['sdfsdf', 'sdfsdf', 42, true, { a: 54 }];
var obj = { a: 'hello', b: '23' };
var obj1 = { a: 26, b: 23 };
// Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком. Потім використовуйте її для звуження типу змінної.
function isString(item) {
    return typeof item === 'string';
}
// У вас є масив з елементами різних типів. Напишіть функцію, яка приймає цей масив і фільтрує його так, щоб у підсумку в ньому залишилися тільки рядки. Використовуйте захисника типу для цього завдання.
function arrFilter(item) {
    return item.filter(isString);
}
console.log('result of execution arrFilter function:', arrFilter(arr));
function hasPropInObject(entity) {
    return 'a' in entity && typeof entity.a === 'string' ? entity.a : undefined;
}
console.log('result of execution arrFilter function:', hasPropInObject(obj));
console.log('result of execution arrFilter function:', hasPropInObject(obj1));
// Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта (наприклад, наявність певної властивості або її тип). Потім напишіть функцію, яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.
function hasNameProperty(obj) {
    return 'name' in obj && typeof obj.name === 'string';
}
function hasAgeProperty(obj) {
    return 'age' in obj && typeof obj.age === 'number';
}
function narrowingWithGuard(obj) {
    if (hasNameProperty(obj)) {
        return "".concat(obj.name);
    }
    else if (hasAgeProperty(obj)) {
        return "".concat(obj.age);
    }
    else {
        return 'property not found';
    }
}
console.log('result of narrowingWithGuard:', narrowingWithGuard({ name: 'aleks', age: '25' }));
console.log('result of narrowingWithGuard:', narrowingWithGuard({ age: 26 }));
console.log('result of narrowingWithGuard:', narrowingWithGuard({ b: true }));
// У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число). Напишіть функцію, яка приймає цю змінну і виконує довільні операції, специфічні для кожного з типів.
function valueToUpercase(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value.toString().toUpperCase();
    }
    else {
        return 'value has incorect type';
    }
}
console.log('result of valueToUpercase:', valueToUpercase('hello'));
console.log('result of valueToUpercase:', valueToUpercase(654));
console.log('result of valueToUpercase:', valueToUpercase(true));
// Створіть захисник типу, який перевірятиме, чи є передане значення функцією. Потім напишіть функцію, яка використовує цей гард для звуження типу змінної і викликає передану функцію, якщо вона існує.
function isFunc(value) {
    return typeof value === 'function';
}
console.log('result of isFunc', isFunc(45));
console.log('result of isFunc', isFunc(valueToUpercase));
function stringToUpperCase(value) {
    if (isFunc(value)) {
        return value().toUpperCase();
    }
    else {
        return value.toUpperCase();
    }
}
function example(value) {
    return value.toString();
}
console.log('result of stringToUpperCase:', stringToUpperCase('touppercase'));
console.log('result of stringToUpperCase:', stringToUpperCase(example({ a: 45 })));
// Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються на цій ієрархії.
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.access = function () {
        return "".concat(this.name, " access is allowed");
    };
    return Admin;
}(User));
var TrialUser = /** @class */ (function (_super) {
    __extends(TrialUser, _super);
    function TrialUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrialUser.prototype.accessTrial = function () {
        return "".concat(this.name, " access is allowed for trial period");
    };
    return TrialUser;
}(User));
function isAdmin(user) {
    return user instanceof Admin;
}
function isTrialUser(user) {
    return user instanceof TrialUser;
}
function accessType(user) {
    if (isAdmin(user)) {
        return user.access();
    }
    else if (isTrialUser(user)) {
        return user.accessTrial();
    }
    else {
        return "".concat(user.name, " access denied");
    }
}
console.log('result of accessType:', accessType(new Admin('alex')));
console.log('result of accessType:', accessType(new User('max')));
