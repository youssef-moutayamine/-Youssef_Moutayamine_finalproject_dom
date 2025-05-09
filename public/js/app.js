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



// filter buttons

document.addEventListener('click', () => {
    let filterButtons = document.querySelectorAll('.filter-button');
    let menuItems = document.querySelectorAll('.menu-list .items');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {

            filterButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            menuItems.forEach(item => {
                const category = item.querySelector('.pictures').getAttribute('data-name');

                if (filterValue === 'all' || filterValue === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
// *carousel testimonial
let currentcaro = 0;
let slides2 = document.querySelectorAll('.review-card');
let slidesToShow = 3;

function showSlides(startIndex) {
    slides2.forEach((slide, i) => {
        slide.style.display = (i >= startIndex && i < startIndex + slidesToShow) ? 'block' : 'none';
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentcaro = (currentcaro + 1) % slides2.length;
    if (currentcaro + slidesToShow > slides2.length) currentcaro = 0;
    showSlides(currentcaro);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentcaro = (currentcaro - 1 + slides2.length) % slides2.length;
    if (currentcaro < 0) currentcaro = slides2.length - slidesToShow;
    showSlides(currentcaro);
});

setInterval(() => {
    currentcaro = (currentcaro + 1) % slides2.length;
    if (currentcaro + slidesToShow > slides2.length) currentcaro = 0;
    showSlides(currentcaro);
}, 3000);

showSlides(currentcaro);


let list = document.getElementById("list");
console.log(list);

let navLinks = document.querySelector('.navigation');
console.log(navLinks);

list.addEventListener('click', () => {
    navLinks.classList.toggle("right");

});



