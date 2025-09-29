// В окремому файлі створіть клас "Електронна книга" (EBook),
// який буде успадковувати властивості та методи класу Book.
// Додайте до класу EBook нову властивість, наприклад, "формат файлу".
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся
// доступна інформація про екземляр EBook (все те саме що і для Book
// але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та
// викличте метод printInfo

import { Book } from "./Book.mjs";

export class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this._format = format;
    }

    get format() {
        return this._format;
    }

    set format(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Format must be a string and not empty");
        }
        this._format = value;
    }

    printInfo() {
        super.printInfo(); // вывод из Book
        console.log(`Format: ${this._format}`);
    }

    static fromBook(book, format) {
        if (!(book instanceof Book)) {
            throw new Error("The argument must be an instance of Book.");
        }
        return new EBook(book.title, book.author, book.year, format);
    }
}
