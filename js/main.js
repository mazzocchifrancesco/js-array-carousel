// variabili
let imgHtml = "";

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

document.getElementById("caroselloImg").innerHTML += imgHtml;
document.getElementById("thumbnails").innerHTML += imgHtml;


// display prima img
let currentImg = 0;

const images = document.querySelectorAll("#caroselloImg > img");
const imagesThumb = document.querySelectorAll("#thumbnails img");

imagesThumb[currentImg].classList.add("selected");
images[currentImg].classList.add("active");

// bottoni
const prevBtn = document.getElementById("prev");

prevBtn.addEventListener("click", function () {
    if (currentImg < imgPath.length - 1) {
        images[currentImg].classList.remove("active");
        imagesThumb[currentImg].classList.remove("selected");
        currentImg++;
        images[currentImg].classList.add("active");
        imagesThumb[currentImg].classList.add("selected");
    }

    else if (currentImg == imgPath.length - 1) {
        images[currentImg].classList.remove("active");
        imagesThumb[currentImg].classList.remove("selected");
        currentImg=0;
        images[currentImg].classList.add("active");
        imagesThumb[currentImg].classList.add("selected");
    }
});

const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", function () {
    if (currentImg > 0) {
        images[currentImg].classList.remove("active");
        imagesThumb[currentImg].classList.remove("selected");
        currentImg--;
        images[currentImg].classList.add("active");
        imagesThumb[currentImg].classList.add("selected");
    }
    else if (currentImg == 0) {
        images[currentImg].classList.remove("active");
        imagesThumb[currentImg].classList.remove("selected");
        currentImg=imgPath.length-1;
        images[currentImg].classList.add("active");
        imagesThumb[currentImg].classList.add("selected");
    }
});