/*Завдання 2: Конкатенація радків та шаблонний рядок

Створіть дві змінні, які містять імена двох осіб. 
Використовуючи конкатенацію рядків, створіть новий рядок, 
який містить вітання для обох осіб. Виведіть результат в консоль. 
Потім використайте шаблонний рядок для створення того ж вітання. 
Виведіть результат в консоль.*/

let nameOne = "Donald";
let nameTwo = "Joe";

//конкатенацію рядків
let greetingConcatenation = "Hello, " + nameOne + " and " + nameTwo + "! Happy birthday to you!";

console.log(greetingConcatenation);

//шаблонний рядок
let greetingTemplate = `We wish ${nameOne} and ${nameTwo} good health!`;

console.log(greetingTemplate);
