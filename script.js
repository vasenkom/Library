const myLibrary = [];
const dialogWindow = document.querySelector(".bookDialog");
const showDialogButton = document.querySelector(".addBtn");
const closeDialogButton = document.querySelector(".closeDialog");
const submitDialogForm = document.querySelector(".submitDialogForm");

//open the dialog
showDialogButton.addEventListener("click", () => {
    dialogWindow.showModal();
});
  
//close the dialog
closeDialogButton.addEventListener("click", () => {
    dialogWindow.close();
});

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