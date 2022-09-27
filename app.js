const btns = [...document.querySelectorAll(".header-info-2 > ul > li > button")]
let storeElements = document.querySelector(".books")
const storeElementsCopy = storeElements.cloneNode(true)
const box = document.querySelector(".box")
const section = document.querySelector("section")


const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

const form = document.querySelector("form")
const data = [...document.querySelectorAll("input")]

const userSection = document.querySelector(".user-section");
const userSectionCopy = userSection.cloneNode(true);

const bookBox = document.querySelector(".user-books")

// All books objects will be stored in this array;
let myLibrary = [];


userSection.style.display = "none";

function Book(title, author, numberOfPages, alreadyRead) {
    this.title = title.toUpperCase();
    this.author = author.toUpperCase();
    this.numberOfPages = numberOfPages;
    this.alreadyRead = alreadyRead.toUpperCase();
}


function addBookToLibrary() {
    // do stuff here
}

// Implementing submit event
form.addEventListener('submit', (event) => {

    // saving the input user submits;
    let userInput = [];
    data.forEach(elem => {
        userInput.push(elem.value);
        elem.value = "";
    });
    let [title, author, nop, read] = userInput;

    // passing the user input to constructor function
    let newBook = new Book(title, author, nop, read);
    myLibrary.push(newBook);

    // Display the book
    let userBookDiv = document.createElement("div")
    userBookDiv.className = "user-book"

    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")

    p1.innerHTML = `<span>${newBook.title}</span>`
    p2.innerHTML = `${newBook.author}`
    p3.innerHTML = `${newBook.numberOfPages}`
    p4.innerHTML = `${newBook.alreadyRead}`

    userBookDiv.appendChild(p1)
    userBookDiv.appendChild(p2)
    userBookDiv.appendChild(p3)
    userBookDiv.appendChild(p4)

    bookBox.appendChild(userBookDiv)


    console.log(myLibrary, userBookDiv);

    closeModal(modal)
    userSection.style.display = "block";
});


openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
        userSection.style.display = "none";

        // if we're in store button remove those books
        let storeElements = document.querySelectorAll(".box")
        storeElements.forEach(elem => elem.remove())

    })
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const closeBtn = document.querySelector(".x")
        userSection.style.display = "block";
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) {
        return
    }
    modal.classList.add("active")
    overlay.classList.add("active")


    // when modal opens disable btns
    btns.map(btn => btn.disabled = true)
}

function closeModal(closeBtn) {
    if (closeBtn == null) {
        return
    }
    closeBtn.classList.remove("active")
    overlay.classList.remove("active")

    // when modal closes buttons can be clicked
    btns.map(btn => btn.removeAttribute("disabled"));
}


btns.forEach(btn => btn.addEventListener("click", () => {
    let selectedBtn = btns.find(btn => btn.className.includes("selected"))
    selectedBtn.classList.remove("include")

    if (btn.textContent === "My Books") {
        if (!btn.className.includes("selected")) {
            // console.log("nothing else matters");
            btn.classList.add("selected")
            btns[2].classList.remove("selected")
            // storeElements.innerHTML = "";
            let storeElements = document.querySelectorAll(".box")
            storeElements.forEach(elem => elem.remove())

            userSection.style.display = "block";


        }

    } else if (btn.textContent === "Store") {
        if (!btn.className.includes("selected")) {
            btns[1].classList.remove("selected")
            btn.classList.add("selected")
            section.appendChild(box)
            let storeElements = document.querySelectorAll(".books")

            storeElements.forEach(elem => elem.remove())
            box.appendChild(storeElementsCopy)

            userSection.style.display = "none";
        }
    }
}))