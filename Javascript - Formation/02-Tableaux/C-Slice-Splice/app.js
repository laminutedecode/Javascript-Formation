// La méthode slice() est utilisée pour extraire une portion d'un tableau existant et renvoie un nouveau tableau contenant les éléments extraits. Elle ne modifie pas le tableau d'origine.
// La syntaxe de slice() est la suivante : array.slice(start, end), où start est l'indice de début de l'extraction (inclus) et end est l'indice de fin de l'extraction (exclus). Si start ou end sont omis, la portion correspondante sera extraite depuis le début ou jusqu'à la fin du tableau.


let myFruits = ['pomme', 'banane', 'orange', 'kiwi', 'mangue'];
let portion = myFruits.slice(1, 4);
console.log(portion);  // affiche ['banane', 'orange', 'kiwi']
console.log(myFruits);  // affiche ['pomme', 'banane', 'orange', 'kiwi', 'mangue']
// Dans cet exemple, slice(1, 4) extrait les éléments de l'indice 1 (inclus) à l'indice 4 (exclus) du tableau fruits et renvoie un nouveau tableau contenant ces éléments.

// La méthode splice() est utilisée pour modifier un tableau existant en ajoutant, supprimant ou remplaçant des éléments. Elle renvoie un tableau contenant les éléments supprimés, le cas échéant.
// La syntaxe de splice() est la suivante : array.splice(start, deleteCount, item1, item2, ...), où start est l'indice de départ pour l'opération de modification, deleteCount est le nombre d'éléments à supprimer à partir de start, et item1, item2, etc. sont les éléments à ajouter à partir de start.

// Exemple 1 (Suppression d'éléments) :

let fruits = ['pomme', 'banane', 'orange', 'kiwi', 'mangue'];
let elementsSupprimes = fruits.splice(2, 2);
console.log(elementsSupprimes);  // affiche ['orange', 'kiwi']
console.log(fruits);  // affiche ['pomme', 'banane', 'mangue']


// Dans cet exemple, splice(2, 2) supprime 2 éléments à partir de l'indice 2 du tableau fruits (c'est-à-dire 'orange' et 'kiwi') et renvoie un nouveau tableau contenant ces éléments supprimés.

// Exemple 2 (Ajout d'éléments) :

let fruits2 = ['pomme', 'banane', 'mangue'];
fruits2.splice(1, 0, 'orange', 'kiwi');
console.log(fruits2);  // affiche ['pomme', 'orange', 'kiwi', 'banane', 'mangue']
// Dans cet exemple, splice(1, 0, 'orange', 'kiwi') ajoute les éléments 'orange' et 'kiwi' à partir de l'indice 1 du tableau fruits, sans supprimer aucun élément.

// Exemple 3 (Remplacement d'éléments) :

let fruits3 = ['pomme', 'banane', 'mangue'];
fruits3.splice(1, 2, 'orange', 'kiwi');
console.log(fruits3);  // affiche ['pomme', 'orange', 'kiwi']
// Dans cet exemple, splice(1, 2, 'orange', 'kiwi') remplace 2 éléments à partir de l'indice 1 du tableau fruits par les éléments 'orange' et 'kiwi'.

// La méthode splice() est plus flexible car elle permet d'effectuer des opérations d'ajout, de suppression et de remplacement d'éléments dans un tableau existant.