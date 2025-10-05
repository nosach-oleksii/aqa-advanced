// Завдання 1 Напишіть функцію за допомогою Axios, яка навмисно надсилає
// запит на неправильну URL-адресу, викликаючи помилку. Потім за допомогою
// Jest напишіть тест, який перевіряє, чи правильно обробляється помилка
// та чи повертається належне повідомлення про помилку.

const axios = require("axios");

async function fetchWithError() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/invalid-endpoint");
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = { fetchWithError };
