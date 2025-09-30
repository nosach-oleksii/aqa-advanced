const { fetchWithHeadersAndParams } = require("./api");

describe("fetchWithHeadersAndParams", () => {
    let response;

    beforeAll(async () => {
        response = await fetchWithHeadersAndParams();
    });

    test("повертає статус 200", () => {
        expect(response.status).toBe(200);
    });

    test("дані відповіді містять userId = 1", () => {
        expect(response.data.every((post) => post.userId === 1)).toBe(true);
        expect(response.config.params.userId).toBe(1);
    });
});
