// Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.

type DeepReadonly<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};

const user = {
  name: 'John',
  age: 34,
  status: {
    active: true,
  },
};

const newReadonlyUser: DeepReadonly<typeof user> = user;
// newReadonlyUser.status.active = false; ===>>> expected error

// ___________________________________________________________________

// Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: DeepRequireReadonly<T[K]>;
};

// ___________________________________________________________________

// Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.

type ToUpperCase<T extends string> = `${Uppercase<T>}`;

type UpperCaseKeys<T> = {
  [K in keyof T & string as ToUpperCase<K>]: T[K];
};

type TypeAdmin = { name: string; age: number };
// const x: UpperCaseKeys<TypeAdmin> = { NAME: 'John', age: 45 }; ===> error, expected 'AGE';

// ____________________________________________________________________

// І саме цікаве. Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};

type TypeUser = {
  name: string;
  age: number;
};
const x: ObjectToPropertyDescriptor<TypeUser> = {
  name: { value: 'John', writable: true, enumerable: false, configurable: true },
  age: { value: '45', writable: false, enumerable: true, configurable: true },
};
