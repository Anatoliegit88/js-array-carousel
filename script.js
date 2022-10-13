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

const immagesArray = [];
immagesArray[0] = new Image();
immagesArray[0].src = "consegna/img/01.jpg";
immagesArray[1] = new Image();
immagesArray[1].src = "consegna/img/02.jpg";
immagesArray[2] = new Image();
immagesArray[2].src = "consegna/img/03.jpg";
immagesArray[3] = new Image();
immagesArray[3].src = "consegna/img/04.jpg";
immagesArray[4] = new Image();
immagesArray[4].src = "consegna/img/05.jpg";
immagesArray[4].class = "visible-immage";
console.log(immagesArray);

const imgCarousel = document.querySelector("img-carousel");
for (let i = 0; i < immagesArray.length; i++) {
  const oneImg = immagesArray[i];
  const element = `<div class="img-carousel">
  <img src="${oneImg}" alt="" />
</div>
`;
  imgcontainer.innerHTML += element;
}

// const vediArray = document.getElementById("contenitore");
// console.log(vediArray);

// for (let i = 0; i < immagesArray.length; i++) {
//   currentImmage = immagesArray[i];
//   console.log(currentImmage);
// }
