const btns = [...document.querySelectorAll(".header-info-2 > ul > li > button")]
let storeElements = document.querySelector(".books")
const storeElementsCopy = storeElements.cloneNode(true)
const box = document.querySelector(".box")
const section = document.querySelector("section")


const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

const form = document.querySelector("form")
const data = document.querySelectorAll("input")

// const btn1 = document.querySelector(".my-books")
// const btn2 = document.querySelector(".store")



openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);

        // when modal opens disable btns
        btns.map(btn => btn.disabled=true)

        // Implementing submit event
        form.addEventListener('submit', (event) => {

            // print the input user submits;
            data.forEach(elem => console.log(elem.value))
        });


        // if we're in store button remove those books
        let storeElements = document.querySelectorAll(".box")
        storeElements.forEach(elem => elem.remove())
        
    })
})


closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const closeBtn = document.querySelector(".x")
        closeModal(modal);

        // when modal closes buttons can be clicked
        btns.map(btn => btn.removeAttribute("disabled"));

    })
})

function openModal(modal){
    if (modal == null){
        return
    }
    modal.classList.add("active")
    overlay.classList.add("active")
}

function closeModal(closeBtn){
    if (closeBtn == null){
        return
    }
    closeBtn.classList.remove("active")
    overlay.classList.remove("active")
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

            // let books = document.createElement("div")
            // box.appendChild(books)
            // let book = document.createElement("div")
            
            // let p1 = document.createElement("p")
            // let p2 = document.createElement("p")
            // let p3 =  document.createElement("p")
            // let p4 =  document.createElement("p")

            // p1.textContent = "Hobbit"
            // p2.textContent = "JRR Tolkien"
            // p3.textContent = "253"
            // p4.textContent = "Status: Not Read"


            // book.className = "book"
            // book.classList.add("custom")

            // books.appendChild(book)

            // book.appendChild(p1)
            // book.appendChild(p2)
            // book.appendChild(p3)
            // book.appendChild(p4)



            //  book = document.createElement("img")
            // book.src = "images/book-1.png"
            // book.className = "book"
            // books.appendChild(book)
        }

    } else if (btn.textContent === "Store") {
        if (!btn.className.includes("selected")) {
            btns[1].classList.remove("selected")
            btn.classList.add("selected")
            section.appendChild(box)
            let storeElements = document.querySelectorAll(".books")
            storeElements.forEach(elem => elem.remove())
            box.appendChild(storeElementsCopy)

        }
    }
}))

