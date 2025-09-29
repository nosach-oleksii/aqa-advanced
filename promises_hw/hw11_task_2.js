// Завдання 2

// В цьому завданні вам потрібно використовувати then() та catch()
// для обробки результатів виконання промісу

// 1. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
//
// <https://jsonplaceholder.typicode.com/todos/1>
//
// 2. Функція повинна повертати як результат Promise що повертає об’єкт todo
// 3. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
//
// <https://jsonplaceholder.typicode.com/users/1>
//
// 4. Функція повинна повертати як результат Promise що повертає об’єкт user
// 5. Викорситайте методи Promise.all та Promise.race передавши їм як
// аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення
// отримані від цих виразів до змінних

//function todo
function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error:", error);
            throw error;
        });
}

//function user
function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .catch((error) => {
            console.error("Error:", error);
            throw error;
        });
}
//use Promis all
const promisesAll = Promise.all([getTodo(), getUser()]);

promisesAll
    .then((result) => {
        const [todo, user] = result;
        console.log("Promise All results:", todo, user);
    })
    .catch((error) => {
        console.log("Error in promise All:", error);
    });

//use Promis race
const promisesRace = Promise.race([getTodo(), getUser()]);

promisesRace
    .then((result) => {
        console.log("Promise Race results:", result);
    })
    .catch((error) => {
        console.log("Error in promise Race:", error);
    });
