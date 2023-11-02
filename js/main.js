// variabili
let imgHtml = "";
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");




// inserimento immagini

imgPath = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

// creazione stringa
for (let i = 0; i < imgPath.length; i++) {
    const percorsoImmagine = imgPath[i];
    imgHtml += `<img src="${percorsoImmagine}">`;
}

// inserimento stringa in html

document.getElementById("carosello-img").innerHTML = imgHtml;

// display prima img
let currentImg = 0;
const images = document.querySelectorAll("#carosello-img img");
images[currentImg].classList.add("active");

// bottoni

nextBtn.addEventListener("click", function () {
    if (currentImg < imgPath.length - 1) {
        images[currentImg].classList.remove("active");
        currentImg++;
        images[currentImg].classList.add("active");
    }

    else if (currentImg == imgPath.length - 1) {
        images[currentImg].classList.remove("active");
        currentImg=0;
        images[currentImg].classList.add("active");
    }
});

prevBtn.addEventListener("click", function () {
    if (currentImg > 0) {
        images[currentImg].classList.remove("active");
        currentImg--;
        images[currentImg].classList.add("active");
    }
    else if (currentImg == 0) {
        images[currentImg].classList.remove("active");
        currentImg=imgPath.length-1;
        images[currentImg].classList.add("active");
    }
});