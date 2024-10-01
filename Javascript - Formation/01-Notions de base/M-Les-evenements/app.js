// La méthode addEventListener est une fonction intégrée en JavaScript qui permet d'ajouter un écouteur d'événements à un élément du DOM (Document Object Model). Elle permet d'associer une fonction de rappel (callback) à un événement spécifique, de sorte que la fonction sera exécutée lorsque l'événement se produit sur cet élément.

const button = document.querySelector('button');

function handleClick() {
  console.log('Le bouton a été cliqué !');
}

button.addEventListener('click', handleClick);


// Autres maniere de faire
// button.addEventListener('click', ()=> {
//     console.log('Le bouton a été cliqué !');
// });

// Événements de souris :
// click : Déclenché lorsqu'un élément est cliqué.
// dblclick : Déclenché lorsqu'un élément est double-cliqué.
// mousedown : Déclenché lorsqu'un bouton de la souris est enfoncé sur un élément.
// mouseup : Déclenché lorsqu'un bouton de la souris est relâché sur un élément.
// mousemove : Déclenché lorsque le curseur de la souris se déplace sur un élément.
// mouseenter : Déclenché lorsque le curseur de la souris entre dans un élément.
// mouseleave : Déclenché lorsque le curseur de la souris quitte un élément.
// mouseover : Déclenché lorsque le curseur de la souris survole un élément.
// mouseout : Déclenché lorsque le curseur de la souris quitte un élément.
// contextmenu : Déclenché lorsqu'un clic droit est effectué sur un élément.
// wheel : Déclenché lorsque la molette de la souris est tournée.
// dragstart : Déclenché lorsque l'utilisateur commence à faire glisser un élément.
// drag : Déclenché lorsque l'utilisateur fait glisser un élément.
// dragend : Déclenché lorsque l'utilisateur a terminé de faire glisser un élément.


// Événements de formulaire :
// submit : Déclenché lorsqu'un formulaire est soumis.
// input : Déclenché lorsqu'une valeur est saisie dans un élément de formulaire.
// change : Déclenché lorsque la valeur d'un élément de formulaire change.
// focus : Déclenché lorsqu'un élément de formulaire reçoit le focus.
// blur : Déclenché lorsqu'un élément de formulaire perd le focus.

const forme = document.querySelector('form');

forme.addEventListener('submit', (e)=> {
  e.preventDefault()
});

// Événements de média :
// play : Déclenché lorsqu'un élément multimédia (audio, vidéo) commence la lecture.
// pause : Déclenché lorsqu'un élément multimédia est mis en pause.
// ended : Déclenché lorsque la lecture d'un élément multimédia est terminée.
// volumechange : Déclenché lorsque le volume d'un élément multimédia change.

// Événements de clavier :
// keydown : Déclenché lorsqu'une touche du clavier est enfoncée.
// keyup : Déclenché lorsqu'une touche du clavier est relâchée.
// keypress : Déclenché lorsqu'une touche du clavier qui génère un caractère est enfoncée.


const input = document.getElementById('str');

input.addEventListener('keydown', ()=> {
  console.log('Tu as appuyer sur le clavier');
});