let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

console.log(book.title);
console.log(book.author);
console.log(book.year);

book.genre = "Fiction";

book.year = 1961;

console.log(book);
let { title, author } = book;

console.log(title);
console.log(author);