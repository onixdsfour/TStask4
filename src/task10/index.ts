// Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції. Як параметр типу повинен обов'язково виступати функціональний тип.

// type ReturnFuncType<T> = T extends (param: any) => any ? ReturnType<T> : undefined;
type ReturnFuncType<T> = T extends (...params: any) => infer R ? R : undefined;

function funcA(): boolean {
  return true;
}

function funcB(param: string): string {
  return '';
}

function funcC(paramA: number, paramB: []): string[] {
  return [''];
}

let testA: ReturnFuncType<typeof funcA>;
let testB: ReturnFuncType<typeof funcB>;
let testC: ReturnFuncType<typeof funcC>;

// Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним) та повертає кортеж, де перше значення - це тип, що функція повертає, а другий - тип її параметру

type TupleFuncType<T> = T extends (param: infer U) => infer R ? [R, U] : undefined;

let testE: TupleFuncType<typeof funcA>;
let testF: TupleFuncType<typeof funcB>;
let testD: TupleFuncType<typeof funcC>;
