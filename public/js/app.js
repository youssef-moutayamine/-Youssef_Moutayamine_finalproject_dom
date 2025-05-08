// ^ Modal logique
let modalBtn = document.querySelector(".book-btn")
let myModal = document.getElementById("modal")
let hide = document.getElementById("hide")
let submit = document.getElementById("submit")
let pack = document.querySelector(".pack")

modalBtn.addEventListener("click", (e) => {
    let modalAtt = modalBtn.getAttribute("my-attribute");
    if (modalAtt === myModal.id) {
        pack.classList.add("backdrop")
        myModal.classList.remove("close")
        document.body.style.overflow = "hidden"

    }
})

hide.addEventListener("click", () => {
    myModal.classList.add("close")
    document.body.style.overflow = "auto"
    pack.classList.remove("backdrop")
})
submit.addEventListener("click", () => {
    myModal.classList.add("close")
    document.body.style.overflow = "auto"
    pack.classList.remove("backdrop")
})


