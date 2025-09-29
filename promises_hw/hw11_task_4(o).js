// Завдання 4 (Опціонально)

// Створіть 2 класи, які будуть мати в собі методи що реалізують
// функції з попереднього завдання.

//async function todo
class TodoService {
    async getTodo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error in GetTodo:", error);
            throw error;
        }
    }
}

//async function user
class UserService {
    async getUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error in GetUser:", error);
            throw error;
        }
    }
}

//use Promis all
async function asyncAll() {
    const todoService = new TodoService();
    const userService = new UserService();
    try {
        const [todo, user] = await Promise.all([todoService.getTodo(), userService.getUser()]);
        console.log("Promise All results:", todo, user);
    } catch (error) {
        console.error("Error in All:", error);
    }
}

//use Promis race
async function asyncRace() {
    const todoService = new TodoService();
    const userService = new UserService();
    try {
        const result = await Promise.race([todoService.getTodo(), userService.getUser()]);
        console.log("Promise Race results:", result);
    } catch (error) {
        console.error("Error in Race:", error);
    }
}

asyncAll();
asyncRace();
