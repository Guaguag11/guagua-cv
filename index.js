let nightButton = document.querySelector(".header__button-night");
let dayButton = document.querySelector(".header__button-day");
let bodyCv = document.querySelector("body");
let content = document.querySelector(".container");


nightButton.addEventListener("click", function(){
bodyCv.classList.toggle("night__mode-body");
content.classList.toggle("night__mode-content");
console.log("modo nocturno activado");

nightButton.style.display="none";
dayButton.style.display="block";
});

dayButton.addEventListener("click", function(){
bodyCv.classList.toggle("night__mode-body");
content.classList.toggle("night__mode-content");
console.log("modo nocturno desactivado");

dayButton.style.display="none";
nightButton.style.display="block";
});

//POP UP IMAGE
let nodalImage = document.querySelector(".image");
let imagePop = document.querySelector(".header__image");
let closeButton = document.querySelector(".image__pop-close");


imagePop.addEventListener("click", function () {
    console.log("agrandar imagen");
    nodalImage.classList.toggle("image__visible");
});

closeButton.addEventListener("click", function(){
console.log("se cerró imagen");
nodalImage.classList.toggle("image__visible");
});
