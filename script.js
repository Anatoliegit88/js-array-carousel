// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// creare un array con una lista di 5 immagini al interno,e aggiungere un carosell
//const oceanImg = document.getElementById(immage1);
//console.log(oceanImg);

// Inserire le immagini in modo dinamico

const images = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

const itemsContainer = document.querySelector(".items");
const thumbsContainer = document.querySelector(".thumbs");
let itemsList = "";
let thumbslist = "";
for (let i = 0; i < images.length; i++) {
  // creo le immagini
  itemsList += `<div class="item">
                  <img src="${images[i]}" alt="imaage" />
                </div>`;
  // creo le thumbs
  thumbslist += `<div class="thumb active">
                    <img src="${images[i]}" alt="imaage" />
                  </div>`;
}
itemsContainer.innerHTML += itemsList;
thumbsContainer.innerHTML += thumbslist;

// Lo stao iniziale dello slider
const sliderItems = document.getElementsByClassName("item");
const thumbItems = document.getElementsByClassName("thumb");
let activeItem = 0;
sliderItems[activeItem].classList.add("active");
thumbItems[activeItem].classList.add("active");

// Navigazione
const btnUp = document.querySelector(".btn-up");
btnUp = addEventListener("click", function () {
  // Tolgo active
  sliderItems[activeItem].classList.remove("active");
  thumbItems[activeItem].classList.remove("active");

  // Vado avanti fino al penultimo elemento
  if (activeItem < sliderItems.length - 1) {
    // Incremento la posizione
    activeItem++;
  } else {
    activeItem = 0;
  }
  // Aggiungo active alla nuova posizione
  sliderItems[activeItem].classList.add("active");
  thumbItems[activeItem].classList.add("active");
});

const btndown = document.querySelector(".btn-down");
btndown = addEventListener("click", function () {
  sliderItems[activeItem].classList.remove("active");
  thumbItems[activeItem].classList.remove("active");
  // Vado indietro fino al secondo elemento
  if (activeItem > 0) {
    activeItem--;
  } else {
    // Altrimenti riparto dall'ultima elemento
    activeItem = sliderItems.length - 1;
  }
  sliderItems[activeItem].classList.add("active");
  thumbItems[active].classList.add("active");
});

// Aggiungere vista dello thumb al click

for (let i = 0; i < thumbItems.length; i++) {
  const thisThumb = thumbItems[i];
  thisThumb.addEventListener("click", function () {
    // Cancellare active da slider item e thumb
    sliderItems[activeItem].classList.remove("active");
    thumbItems[activeItem].classList.remove("active");
    // Aggiorna la posizione
    activeItem = i;
    // Aggiungere active alla immagine del item e thumb
    sliderItems[activeItem].classList.add("active");
    thumbItems[activeItem].classList.add("active");
  });
}
