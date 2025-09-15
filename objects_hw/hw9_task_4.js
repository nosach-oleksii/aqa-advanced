// Завдання 4
// 1. Створіть об'єкт person з такими властивостями:
//      a. firstName: рядок, представляє ім'я особи.
//      b. lastName: рядок, представляє прізвище особи.
//      c. age: число, представляє вік особи.
// 2. Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
// 3. Видаліть властивість age з об'єкта person.
// 4. Виведіть оновлений об'єкт person в консоль.

const person = {
    firstName: "Bruce",
    lastName: "Lee",
    age: 33
};

person.email = "bruce-lee@kungfu.yes";

delete person.age;

console.log(person);