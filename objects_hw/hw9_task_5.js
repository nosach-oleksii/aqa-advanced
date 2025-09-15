// Завдання 5
// 1. Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, 
// name, email, age, тощо).
// 2. Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть 
// їхні значення в консоль.
// 3. Зробіть деструктуризацію в циклі.

const users = [
    { name: "Oleksii", email: "oleksii@dot.com", age: 18, phone: 123456789 },
    { name: "Mykola", email: "mykola@dot.com", age: 29, phone: 987654321 },
    { name: "Andrii", email: "andrii@dot.com", age: 40, phone: 2468013579 },
];

for (const { name, email, age, phone } of users) {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
    console.log("Phone:", phone);
    console.log("--------");
}