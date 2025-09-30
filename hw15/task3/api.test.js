const axios = require("axios");
const { fetchData } = require("./api");

// Мок Axios
jest.mock("axios");

describe("fetchData", () => {
    test("успішний запит повертає дані", async () => {
        // Налаштовуємо мок для успішного запиту
        const mockedData = { id: 1, title: "Test" };
        axios.get.mockResolvedValue({ data: mockedData });

        const data = await fetchData("https://jsonplaceholder.typicode.com/fake-endpoint");
        expect(data).toEqual(mockedData);
        expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/fake-endpoint");
    });

    test("невдалий запит повертає помилку", async () => {
        // Налаштовуємо мок для помилки
        const errorMessage = "Network Error";
        axios.get.mockRejectedValue(new Error(errorMessage));

        const data = await fetchData("https://jsonplaceholder.typicode.com/fake-endpoint");
        expect(data).toEqual({ error: errorMessage });
        expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/fake-endpoint");
    });
});
