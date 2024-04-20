const myLibrary = [];
const dialogWindow = document.querySelector(".bookDialog");
const showDialogButton = document.querySelector(".addBtn");
const closeDialogButton = document.querySelector(".closeDialog");
const submitDialogForm = document.querySelector(".submitDialogForm");
const deleteBook = document.querySelector(".delete");
const cardBook = document.querySelector(".card")


//open the dialog
showDialogButton.addEventListener("click", () => {
    dialogWindow.showModal();
});
  
//close the dialog
closeDialogButton.addEventListener("click", () => {
    dialogWindow.close();
});

// delete (remove) the book
deleteBook.addEventListener("click", function() {
    cardBook.style.display = "none";
})

submitDialogForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    dialogWindow.close();
})

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
    imgJS.src = document.querySelector("#imgInput").value;
    cardJS.appendChild(imgJS);

    const nameJS = document.createElement("p");
    nameJS.textContent = document.querySelector("#nameInput").value;
    nameJS.classList.add("name");
    cardJS.appendChild(nameJS);

    const authorJS = document.createElement("p");
    authorJS.textContent = document.querySelector("#autorInput").value;
    authorJS.classList.add("author");
    cardJS.appendChild(authorJS);
}