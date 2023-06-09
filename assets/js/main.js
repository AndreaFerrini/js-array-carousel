//Consegna:Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
//Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
//Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
//Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
//Bonus1: Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
//Bonus2: Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

const path = "./assets/img/"

let images = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
]

const immaginePrincipale = document.querySelector(`.items`);
const immaginiThumbs = document.querySelector(`.thumbs`)

console.log( immaginePrincipale, immaginiThumbs )

for( let i = 0; i < images.length; i++){

    immaginePrincipale.innerHTML += `
    <div class="item">
        <img src="${path}${images[i]}" alt="">
    </div>
    `
    immaginiThumbs.innerHTML += `
    <div class="thumb">
        <img src="${path}${images[i]}" alt="">
    </div>
    `
}

let active = 0

immaginePrincipale.getElementsByClassName('item')[active].classList.add('active')
immaginiThumbs.getElementsByClassName('thumb')[active].classList.add('active')


const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

prev.addEventListener('click', function(){
    if ( active == 0 ){
        active = images.length - 1
    } else {
        active--;
    }

    document.querySelector('.item.active').classList.remove('active');
    immaginePrincipale.getElementsByClassName('item')[active].classList.add('active')

    document.querySelector('.thumb.active').classList.remove('active');
    immaginiThumbs.getElementsByClassName('item')[active].classList.add('active')
})

next.addEventListener('click', function(){
    if ( active == images.length - 1 ){
        active = 0
    } else {
        active++;
    }

    document.querySelector('.item.active').classList.remove('active');
    immaginePrincipale.getElementsByClassName('item')[active].classList.add('active')

    document.querySelector('.thumb.active').classList.remove('active');
    immaginiThumbs.getElementsByClassName('thumb')[active].classList.add('active')
})