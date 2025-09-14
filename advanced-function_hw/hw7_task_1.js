// Завдання 1
// 1. Створіть функцію handleNum яка буде приймати 3 параметри.
//      a. число
//      b. Колбек функцію яку треба викликати якщо передане число парне
//      c. Колбек функцію яку треба викликати якщо передане число непарне
// 2. Створіть ще дві функції які ви будете передавати у якості колбеків, 
// наприклад handleEven та handleOdd. Кожна з них має виводити просте 
// повідомлення в консоль. Наприклад handleEven буде виводити текст 
// “number is even”, a handleOdd буде виводити текст “number is odd”
// 3. Викличте функцію handleNum і передайте в якості аргументів довільне
//  число і дві функції які ви створили раніше

// колбек для парних чисел
function handleEven() {
    console.log("number is even");
}

// колбек для не парних чисел
function handleOdd() {
    console.log("number is odd");
}

// основна функція
function handleNum(num, callbackEven, callbackOdd){
    if (num % 2 === 0) {
        callbackEven();
    } else {
        callbackOdd();
    }
}

<<<<<<< HEAD
//виклик функцій
handleNum(5, handleEven, handleOdd)
handleNum(8, handleEven, handleOdd)
=======
// виклик функцій
handleNum(5, handleEven, handleOdd)
handleNum(8, handleEven, handleOdd)

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers)
>>>>>>> 7170ace (Test commit)
