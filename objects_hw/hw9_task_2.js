// Завдання 2
// 1. Створіть об'єкт book з такими властивостями:
//      a. title: рядок, представляє назву книги.
//      b. author: рядок, представляє автора книги.
//      c. year: рядок, представляє ім'я власника автомобіля
// 2. Деструктуризуйте назву та автора книги з об'єкта book.
// 3. Виведіть деструктуризовані змінні в консоль

const book = {
    title: "Some names of book",
    author: "Some Author",
    year: 2025,
};

const { title, author } = book;

console.log("Title:", title);
console.log("Author:", author);