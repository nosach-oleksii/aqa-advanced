// Створити тестовий сценарій за допомогою пекеджу axios.

// Використати безкоштовне і відкрите АПІ - JSONPlaceholder.

// Задача:

// створити 5 запитів за допомогою методів GET, POST
// обов'язково має бути перевірка респонсу - response status,
// data на коректність згідно з документацією по АПІ

const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

test("Get all posts [/posts] and verify number", async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  const responseBody = response.data;
  console.log(response.data);
  expect(responseBody).toHaveLength(100);
  expect(response.status).toEqual(200);
});

test("Get all posts [/posts] and verify userId. id, title", async () => {
  const response = await axios.get(`${BASE_URL}/posts/1`);
  const responseBody = response.data;
  expect(responseBody.userId).toBe(1);
  expect(responseBody.id).toBe(1);
  expect(responseBody.title).toBe(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  );
});

test("Get all posts [/posts] and verify comments, postId", async () => {
  const response = await axios.get(`${BASE_URL}/comments?postId=1`);
  const responseBody = response.data;
  expect(responseBody[0].postId).toBe(1);
  expect(responseBody[0].body).toBe(
    "laudantium enim quasi est quidem magnam voluptate ipsam eos\n" +
      "tempora quo necessitatibus\n" +
      "dolor quam autem quasi\n" +
      "reiciendis et nam sapiente accusantium"
  );
});

test("Create new post [/posts] and verify respons is successful", async () => {
  const response = await axios.post(`${BASE_URL}/posts`, {
    title: "New post Alex",
    body: "Ni hao",
    userId: 1,
  });
  console.log(response.data);
  expect(response.status).toEqual(201);
  expect(response.data).toHaveProperty("id");
  expect(response.data.title).toBe("New post Alex");
});

test("Create update post [/posts] and verify respons is successful", async () => {
  const response = await axios.put(`${BASE_URL}/posts/1`, {
    title: "Update post Alex",
    body: "Ni hao Alex",
    userId: 1,
  });
  console.log(response.data);
  expect(response.data.title).toBe("Update post Alex");
  expect(response.data.body).toBe("Ni hao Alex");
});
