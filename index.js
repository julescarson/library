let myLibrary = [];

//book instance creator function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//populate library
function addBookToLibrary(book) {
  myLibrary.push(book);
}

//sample entries
let twilight = new Book("Twilight", "Stephanie Meyer", 1000, "read");
let newMoon = new Book("Twilight - New Moon", "Stephanie Meyer", 1000, "read");
addBookToLibrary(twilight);
addBookToLibrary(newMoon);

//access DOM elements
let main = document.getElementById("main");

//div creator function
function createDiv(className) {
  let newDiv = document.createElement("div");
  newDiv.className = className;
  return newDiv;
}

//display books in library
for (book of myLibrary) {
  let testDiv = createDiv("book_card");
  testDiv.innerText = `${book.title}\n${book.author}\n${book.pages}\n${book.read}`;
  main.appendChild(testDiv);
}

//new book button
let book_button = document.createElement("button");
book_button.innerText = "Add Book";
book_button.id = "book_button";

let header = document.getElementById("header");
header.appendChild(book_button);

//dialog
let bookDialog = document.createElement("dialog");
book_button.appendChild(bookDialog);

let book_form = document.createElement("form");
bookDialog.appendChild(book_form);

//field creator function
function formField(name, type, placeholder) {
  let item = document.createElement("input");
  item.type = type;
  item.name = name;
  item.placeholder = placeholder;
  book_form.appendChild(item);
}

//new book fields
let title_field = formField("title", "text", "Book Title");
let author_field = formField("author", "text", "Author");
let pages_field = formField("pages", "text", "Number of Pages");
let read_field = formField("read", "text", "read");

//open/close form on click
let openClose = 0;
book_button.addEventListener("click", () => {
  if (openClose === 0) {
    bookDialog.show();
    openClose = 1;
  } else {
    bookDialog.close();
    openClose = 0;
  }
});
