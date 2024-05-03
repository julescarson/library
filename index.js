let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary(book) {
  myLibrary.push(book);
}

let twilight = new Book("Twilight", "Stephanie Meyer", 1000, "read");
let newMoon = new Book("Twilight - New Moon", "Stephanie Meyer", 1000, "read");

addBookToLibrary(twilight);
addBookToLibrary(newMoon);

let main = document.getElementById("main");

function createDiv(className) {
  let newDiv = document.createElement("div");
  newDiv.className = className;
  return newDiv;
}

let testDiv = createDiv("test");
testDiv.innerText = "test div";

main.appendChild(testDiv);
