let myLibrary = [];
const dialogWindow = document.querySelector(".bookDialog");
const showDialogButton = document.querySelector(".addBtn");
const closeDialogButton = document.querySelector(".closeDialog");
const submitDialogFormButton = document.querySelector(".submitDialogForm");
const deleteBookButtons = document.querySelectorAll(".delete");
const cardBook = document.querySelector(".card");

//open the dialog
showDialogButton.addEventListener("click", () => {
  dialogWindow.showModal();
});

//close the dialog
closeDialogButton.addEventListener("click", () => {
  dialogWindow.close();
});

//delete (remove) the book - WORKS ONLY FOR EXAMPLE BOOK
deleteBookButtons.forEach((deleteBookButton) => {
  deleteBookButton.addEventListener("click", function () {
    document.querySelector(".card").style.display = "none";
  });
});

// function Books(name, author, img) {
//     this.name = name;
//     this.author = author;
//     this.img = img;
// }

class Books {
  constructor(name, author, img) {
    this.name = name;
    this.author = author;
    this.img = img;
  }
}

//press submit to add to the main page
submitDialogFormButton.addEventListener("click", function (event) {
  event.preventDefault();

  const imgInput = document.querySelector("#imgInput").value;
  const nameInput = document.querySelector("#nameInput").value;
  const authorInput = document.querySelector("#autorInput").value;

  const newBook = new Books(nameInput, authorInput, imgInput);
  myLibrary.push(newBook);

  addBookToMainPage();
  document.querySelector("#imgInput").value = "";
  document.querySelector("#nameInput").value = "";
  document.querySelector("#autorInput").value = "";

  dialogWindow.close();
});

function addBookToMainPage() {
  const cardHolder = document.querySelector(".cardHolder");
  cardHolder.textContent = "";

  myLibrary.forEach((book) => {
    const cardJS = document.createElement("div");
    cardJS.classList.add("card");

    //add the delete button with value "remove"
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    const deleteButtonText = document.createElement("p");
    deleteButtonText.textContent = "remove";
    deleteButton.appendChild(deleteButtonText);
    cardJS.appendChild(deleteButton);

    //add the img
    const imgJS = document.createElement("img");
    imgJS.classList.add("imgBook");
    imgJS.src = book.img;
    cardJS.appendChild(imgJS);

    //add the name of the book
    const nameJS = document.createElement("p");
    nameJS.textContent = book.name;
    nameJS.classList.add("name");
    cardJS.appendChild(nameJS);

    //add the author of the book
    const authorJS = document.createElement("p");
    authorJS.textContent = book.author;
    authorJS.classList.add("author");
    cardJS.appendChild(authorJS);

    //add checkbox
    const checkboxDivJS = document.createElement("div");
    checkboxDivJS.classList.add("readStatusDIV");
    const checkboxLabelJS = document.createElement("label");
    checkboxLabelJS.textContent = "read ";
    const checkboxJS = document.createElement("input");
    checkboxJS.type = "checkbox";
    checkboxJS.id = "readStatus";
    checkboxLabelJS.for = "readStatus";
    checkboxDivJS.appendChild(checkboxLabelJS);
    checkboxDivJS.appendChild(checkboxJS);
    cardJS.appendChild(checkboxDivJS);

    //add card to cardHolder div that already exists in html
    cardHolder.appendChild(cardJS);

    //delete (remove) the book - works for all the added by user books
    deleteButton.addEventListener("click", function () {
      cardHolder.removeChild(cardJS);
    });
  });
}
