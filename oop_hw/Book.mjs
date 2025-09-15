// 1. Створіть клас "Книга" (Book) з властивостями, такими як "назва",
// "автор" і "рік видання". Додайте метод до класу Book, який буде
// виводити повний опис книги наприклад printInfo. Створіть кілька
// об'єктів цього класу та викличте printInfo для кожного екземпляру.

// 3. Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей
// класу Book та EBook. В сеттерах необхідно додати валідацію для переданих
//  значень. Використовуйте їх для зміни та отримання значень властивостей.
// 4. Створіть статичний метод в класі Book, який буде приймати масив
// об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання.
// Викличте його в коді передавши масив книг (серед них мають бути
// екземляри обох класів Book та EBook)
// 5. Створіть статичний метод для EBook який буде приймати як аргументи
// екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр
// класу EBook

export class Book {
	constructor(title, author, year) {
		this._title = title;
		this._author = author;
		this._year = year;
	}

	// getters
	get title() {
		return this._title;
	}
	get author() {
		return this._author;
	}
	get year() {
		return this._year;
	}

	// setters
	set title(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Title must be string and not empty');
		}
		this._title = value;
	}
	set author(value) {
		if (typeof value !== 'string' || value.trim() === '') {
			throw new Error('Author must be string and not empty');
		}
		this._author = value;
	}
	set year(value) {
		if (!Number.isInteger(value) || value <= 0) {
			throw new Error('Year must be positive number');
		}
		this._year = value;
	}

	printInfo() {
		console.log(`Book: "${this._title}", Author: ${this._author}, Year: ${this._year}`);
	}

	static findOldestBook(books) {
		return books.reduce((oldest, book) => {
			return book.year < oldest.year ? book : oldest;
		});
	}
}
