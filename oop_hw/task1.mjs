import { Book } from "./Book.mjs";
import { EBook } from "./EBook.mjs";

// Creating books
const book1 = new Book("Kobzar", "T. Shevchenko", 1840);
const book2 = new Book("Pride and Prejudice", "Jane Austen", 1813);
const book3 = new EBook("Clean Code", "Robert Martin", 2008, "PDF");

// Calling printInfo
book1.printInfo();
book2.printInfo();
book3.printInfo();

// Check getter & setter
book1.title = "Kobzar (updated)";
console.log(book1.title);

// Static method: find oldest book
const oldest = Book.findOldestBook([book1, book2, book3]);
console.log("Oldest book:");
oldest.printInfo();

// Static method for EBook: create from Book
const ebookFromBook = EBook.fromBook(book2, "EPUB");
ebookFromBook.printInfo();
