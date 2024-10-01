// En JavaScript, une fonction de rappel (callback function) est une fonction qui est passée en tant qu'argument à une autre fonction et qui est exécutée ultérieurement, souvent après une certaine opération asynchrone ou une action spécifique. Les fonctions de rappel sont largement utilisées pour la programmation asynchrone et pour gérer des événements. 

// ############ Passage de fonctions en tant qu'arguments :
// En JavaScript, les fonctions sont des objets de première classe, ce qui signifie qu'elles peuvent être traitées comme n'importe quelle autre valeur. Cela permet de les passer en tant qu'arguments à d'autres fonctions.


function effectuerAction(action) {
  console.log("En train de faire quelque chose...");
  action(); // Exécute la fonction de rappel
}

function afficherMessage() {
  console.log("Action terminée !");
}

effectuerAction(afficherMessage); // Utilise afficherMessage comme fonction de rappel


// ############ Exécution ultérieure :
// L'idée principale des fonctions de rappel est de permettre l'exécution ultérieure d'une fonction, généralement après une opération asynchrone, telle qu'une requête AJAX, une animation ou un événement utilisateur.

function effectuerRequeteAjax(url, callback) {
  // Effectue une requête AJAX vers l'URL donnée
  // Appelle la fonction de rappel avec les données récupérées
}

function afficherDonnees(data) {
  console.log(data);
}

effectuerRequeteAjax("https://exemple.com/api", afficherDonnees);


// ############ Gestion des événements :
// Les fonctions de rappel sont couramment utilisées pour gérer les événements dans les interfaces utilisateur. Par exemple, lorsqu'un bouton est cliqué, une fonction de rappel associée est exécutée.

const bouton = document.querySelector("#monBouton");

function gestionnaireClic() {
  console.log("Le bouton a été cliqué !");
}

bouton.addEventListener("click", gestionnaireClic);


//############  Fonctions anonymes :
// Les fonctions de rappel peuvent également être déclarées directement en tant que fonctions anonymes (fonctions sans nom) directement lors du passage en argument.

function effectuerAction(action) {
  console.log("En train de faire quelque chose...");
  action(); // Exécute la fonction de rappel
}

effectuerAction(function() {
  console.log("Action terminée !");
});

// Les fonctions de rappel sont un concept clé en JavaScript, utilisé pour gérer des opérations asynchrones, des événements et pour créer un code plus modulaire et réutilisable. Elles permettent d'ajouter une logique personnalisée à une fonction en lui permettant d'exécuter une autre fonction lorsque cela est approprié.