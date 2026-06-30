// DARK MODE
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// POPUP DESTINATION
function openPopup(title, text) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupText").innerText = text;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// CLOSE POPUP WHEN CLICK OUTSIDE
window.onclick = function(event) {
    let popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// AUTO SLIDER
const slides = document.querySelectorAll(".slide");
let index = 0;

function autoSlide() {
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    index++;
    if (index > slides.length) {
        index = 1;
    }

    slides[index - 1].style.display = "block";
}

setInterval(autoSlide, 2500);
autoSlide();

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");
});

// SCROLL ANIMATION
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        let top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.7s ease";
});