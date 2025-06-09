
const updateSubmitButton = () => {
    const submitButton = document.getElementById("submit");
    const selectedTable = document.querySelector('input[name="table"]:checked');
    if (submitButton) {
        submitButton.disabled = !selectedTable;
    }
}

// ^ Modal logic
document.addEventListener("DOMContentLoaded", () => {
    let modalBtn = document.querySelector(".book-btn");
    let myModal = document.getElementById("modal");
    let hide = document.getElementById("hide");
    let submit = document.getElementById("submit");
    let pack = document.querySelector(".pack");

    if (modalBtn) {
        modalBtn.addEventListener("click", () => {
            pack.classList.add("backdrop");
            myModal.classList.remove("close");
            document.body.style.overflow = "hidden";
        });
    }

    if (hide) {
        hide.addEventListener("click", () => {
            myModal.classList.add("close");
            document.body.style.overflow = "auto";
            pack.classList.remove("backdrop");
        });
    }

    if (pack) {
        pack.addEventListener("click", (e) => {
            if (e.target === pack) {
                myModal.classList.add("close");
                document.body.style.overflow = "auto";
                pack.classList.remove("backdrop");
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && myModal && !myModal.classList.contains("close")) {
            myModal.classList.add("close");
            document.body.style.overflow = "auto";
            pack.classList.remove("backdrop");
        }
    });

    if (submit) {
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            const selectedTable = document.querySelector('input[name="table"]:checked');
            if (selectedTable) {
                const tableText = selectedTable.nextElementSibling.textContent;
                alert(`${tableText} reserved successfully!`);
                myModal.classList.add("close");
                document.body.style.overflow = "auto";
                pack.classList.remove("backdrop");
                selectedTable.checked = false;
                updateSubmitButton();
            } else {
                alert("Please select a table first!");
            }
        });
    }

    const radioButtons = document.querySelectorAll('input[name="table"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', updateSubmitButton);
    });

    updateSubmitButton();
});



// !filter buttons

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

let navLinks = document.querySelector('.navigation');

list.addEventListener('click', () => {
    navLinks.classList.toggle("right");

});


// ~ special filter

document.addEventListener('DOMContentLoaded', function() {
    
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    
    // Function to switch tabs
    function switchTab(targetTabId) {
        
        tabItems.forEach(function(item) {
            item.classList.remove('active');
        });
        
        tabPanels.forEach(function(panel) {
            panel.classList.remove('active');
        });
        
        // Add active class to clicked tab
        const clickedTab = document.querySelector(`[data-tab="${targetTabId}"]`);
        if (clickedTab) {
            clickedTab.classList.add('active');
        }
        
        const targetPanel = document.getElementById(targetTabId);
        if (targetPanel) {
            targetPanel.classList.add('active');
        } else {
        }
    }
    
    tabItems.forEach(function(item, index) {
        
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tabId = this.getAttribute('data-tab');
            if (tabId) {
                switchTab(tabId);
            }
        });
    });
    
});

const specialsTabs = document.querySelectorAll('.tab-item');
const specialsPanels = document.querySelectorAll('.tab-panel');

specialsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        specialsTabs.forEach(t => t.classList.remove('active'));
        specialsPanels.forEach(p => p.classList.remove('active'));
        
        tab.classList.add('active');
        
        const panelId = tab.getAttribute('data-tab');
        const panel = document.getElementById(panelId);
        if (panel) {
            panel.classList.add('active');
        }
    });
});

if (specialsTabs.length > 0) {
    specialsTabs[0].click();
}