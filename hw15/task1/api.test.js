const { fetchWithError } = require("./api");

describe("fetchWithError", () => {
    let result;

    beforeAll(async () => {
        result = await fetchWithError();
    });

    test("повертає повідомлення про помилку при неправильному URL", () => {
        expect(result.response.status).toBe(404); // перевіряємо статус помилки
        expect(result.response.data).toBeDefined(); // перевіряємо, що є тіло відповіді
    });
    test("перевірка повідомленя", () => {
        expect(result.message).toBe("Request failed with status code 404"); // якийсь месседж
    });
});
