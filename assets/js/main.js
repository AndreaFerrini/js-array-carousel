//Consegna:Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
//Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
//Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
//Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
//Bonus1: Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
//Bonus2: Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

const prev = document.querySelector(`.prev`)
const next = document.querySelector(`.next`)

console.log( prev, next )

next.addEventListener( `click`, function(){
    let activeItem = document.querySelector(`.item.active`)
    console.log( activeItem )

    let itemToActive = activeItem.nextElementSibling
    console.log( itemToActive )

    if( activeItem.classList.contains(`last`)) {
        itemToActive = document.querySelector(`.item.first`)
    }

    activeItem.classList.remove(`active`)

    itemToActive.classList.add(`active`)
})

prev.addEventListener( `click`, function(){
    let activeItem = document.querySelector(`.item.active`)
    console.log( activeItem )

    let itemToActive = activeItem.previousElementSibling
    console.log( itemToActive )

    if( activeItem.classList.contains(`first`)) {
        itemToActive = document.querySelector(`.item.last`)
    }

    activeItem.classList.remove(`active`)

    itemToActive.classList.add( `active` )
})