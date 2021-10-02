// Створити функцію яка б отримувала параметром масив з елементів різних типів (строки, масиви, числа, об’єкти і т.д),
// на виході має повернути строку у camel case (приклад строки у camel case: thisIsExampleOfTheCamelCase),
// яка б поєднувала в собі всі елементи масиву які є строками.

const arr = [1, "heLLo", " ", { film: "Dune" }, "MY", {}, 42, "", ["qwerty", 777, "filter"], "deAR", 23, "fRiEnD"];

function createCamelCase(arr) {
   let strArr = arr.filter((e) => typeof e == "string" && e !== "");
   let firstWord = strArr.splice(0, 1);
   return firstWord.map(l => l.toLowerCase()) + strArr.map(l => l[0].toUpperCase() + l.slice(1).toLowerCase()).join("").trim();
}

console.log(createCamelCase(arr));

// Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, і повертає масиву,
// у якому кожен елемент є літерою англійського алфавіту, відповідний конкретному елементу масива.
// Приклад [4, 3, 22, 11] - в результаті маємо отримати [d, c, v, k].

const arr = [10, 1, 22, 1, 19, 3, 18, 9, 16, 20];

function transformNumToChar(arr) {
   return arr.map(i => String.fromCharCode(i + 96));
}

console.log(transformNumToChar(arr));

// Створити функцію яка параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) і повертає новий об’єкт,
// який містить тільки числа більші рівні 0.

const obj = { a: 22, b: -11.35, c: 41.2, d: "hello" };

function createNumObj(obj) {
   const entriesArr = Object.entries(obj).filter(([key, value]) => value >= 0);
   return Object.fromEntries(entriesArr);
}

console.log(createNumObj(obj));