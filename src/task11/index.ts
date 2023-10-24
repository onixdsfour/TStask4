// Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, яке читається зліва направо і справа наліво однаково. Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним. Але. Паліндром можна отримати як результат операцій над іншими числами. Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами, але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром. Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох. Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці.... Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром, і властивість steps— це число викликів до знаходження паліндрома. Для того, щоб перевірити себе використовуйте число 196. Це так зване Lychrel number — число яке немає поліндрому

interface IResultObject {
  result: number | undefined;
  steps: number;
}

type PalindromeFunc = (item: number) => boolean;
type PalindromSearch = (item: number) => IResultObject;
// type PalindromSearchRecurs = (item: number, steps: number) => IResultObject | undefined;

const palindrom: PalindromeFunc = item => {
  return item.toString() === item.toString().split('').reverse().join('');
};

const palindromSearch: PalindromSearch = item => {
  let steps = 0;
  let resultItem = item;

  while (!palindrom(resultItem)) {
    steps++;
    const reverseItem = resultItem.toString().split('').reverse().join('');
    resultItem += parseInt(reverseItem);
    if (steps === 100) return { result: undefined, steps };
  }

  return { result: resultItem, steps };
};

// const palindromRecurs: PalindromSearchRecurs = (item, steps = 0) => {
//   let resultItem = item;
//   if (steps === 100) return { result: undefined, steps };

//   if (palindrom(resultItem)) {
//     return { result: resultItem, steps };
//   } else {
//     steps++;
//     const reverseItem = resultItem.toString().split('').reverse().join('');
//     resultItem += parseInt(reverseItem);
//     palindromRecurs(resultItem, steps);
//   }
// };

console.log('result:', palindromSearch(348));
console.log('result:', palindromSearch(196));

// Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву. Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний масив[1, 2, 3], функція має повернути масив, що містить[1, 2, 3],[1, 3, 2],[2, 1, 3],[2, 3, 1],[2, 3, 1],[3, 1, 2]і[3, 2, 1].

// const variativeArray = <T>(items: T[]): T[][] => {
//   const resultArray: T[][] = [];

//   items.forEach((item, index) => {
//     const
//   })
// }

const generateAllPermutations = <T>(uniqueElements: T[]): T[][] => {
  if (uniqueElements.length === 1) {
    return [uniqueElements];
  }

  const permutations: T[][] = [];

  uniqueElements.forEach((currentElement, i) => {
    const remainingElements = [...uniqueElements.slice(0, i), ...uniqueElements.slice(i + 1)];
    const remainingPermutations = generateAllPermutations(remainingElements);

    remainingPermutations.forEach(permutation => {
      permutations.push([currentElement, ...permutation]);
    });
  });

  return permutations;
};

const inputArray = [1, 2, 3];
const allPermutations = generateAllPermutations(inputArray);
// console.log(allPermutations);
