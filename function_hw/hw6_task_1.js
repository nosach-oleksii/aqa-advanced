// Завдання 1
// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, 
// перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть 
//     результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, 
//     function expression, arrow function)

// function declaration
function getAreaRectangle1(width, height) {
    const area = width * height;
    return area;
}

const result = getAreaRectangle1(3, 5);
console.log('Area:', result);

// function expression
const getAreaRectangle2 = function(width, height) {
    return "Area: " + width * height;
};

console.log(getAreaRectangle2(5, 7));

// arrow function
const getAreaRectangle3 = (width, height) => {return "Area: " + width * height;};
console.log(getAreaRectangle3(2, 8));