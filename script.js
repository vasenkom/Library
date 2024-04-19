const myLibrary = [];

function Book() {
    this.author = author;
    this.bookName = bookName;
    this.pagesNumber = pagesNumber;
    this.readStatus = this.readStatus; //if the book was read by user or no
}

function addBookToLibrary() {
    const cardJS = document.createElement("div");
    cardJS.classList.add("card");

    const imgJS = document.createElement("img");
    imgJS.classList.add("imgBook");
    imgJS.src = imgInputSRC;
    cardJS.appendChild(imgJS);

    const nameJS = document.createElement("p");
    nameJS.textContent = nameInputText;
    nameJS.classList.add("name");
    cardJS.appendChild(nameJS);

    const authorJS = document.createElement("p");
    authorJS.textContent = authorInputText;
    authorJS.classList.add("author");
    cardJS.appendChild(authorJS);
}