// Завдання 3

// Виконайте завдання 2 але використовуючи конструкцію async/await 
// для функції що виконує запити

//async function todo
async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in GetTodo:', error);
        throw error;
      }
}

//async function user
async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in GetUser:', error);
        throw error;
      }
}

//use Promis all
async function asyncAll() {
    try {
        const [todo, user] = await Promise.all([getTodo(), getUser()]);
        console.log("Promise All results:", todo, user);
    } catch (error) {
        console.error("Error in All:", error);
    }
}

//use Promis race
async function asyncRace() {
    try {
        const result = await Promise.race([getTodo(), getUser()]);
        console.log("Promise Race results:", result);
    } catch (error) {
        console.error("Error in Race:", error);
    }
}

asyncAll();
asyncRace();