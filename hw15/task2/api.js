// Завдання 2

// Назва: Testing Request Headers and Params Складність: середній

// Створіть функцію за допомогою Axios, щоб зробити запит, який містить
// кастомні хедери та параметри URL-адреси. Напишіть тест Jest, щоб
// переконатися, що заголовки та параметри правильно включені в запит.

const axios = require("axios");

// Робимо запит з кастомними хедерами та параметрами
async function fetchWithHeadersAndParams() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            headers: {
                "X-Custom-Header": "myHeaderValue",
            },
            params: {
                userId: 1,
            },
        });
        return response;
    } catch (error) {
        return error.response || { status: 500, data: { message: error.message } };
    }
}

module.exports = { fetchWithHeadersAndParams };
