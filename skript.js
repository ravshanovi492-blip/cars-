function buyCar(name, price) {

    document.getElementById("carName").textContent = name;
    document.getElementById("carPrice").textContent = price;

    document.getElementById("modal").style.display = "flex";
}


function closeModal() {

    document.getElementById("modal").style.display = "none";
}


/* TASHQARINI BOSGANDA YOPISH */

document.getElementById("modal").addEventListener("click", function(event) {

    if(event.target === this) {
        closeModal();
    }

});


/* TEPAGA QAYTISH */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if(window.scrollY > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* KARTALAR ANIMATSIYASI */

const cards = document.querySelectorAll(
    ".car-card, .contact-card, .about-info div"
);

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if(entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(35px)";
    card.style.transition = "0.7s";

    observer.observe(card);

});