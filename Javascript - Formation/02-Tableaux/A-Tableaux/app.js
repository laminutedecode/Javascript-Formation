// Un tableau est une structure de données utilisée pour stocker une collection d'éléments de manière ordonnée. En JavaScript, un tableau peut contenir des valeurs de différents types tels que des nombres, des chaînes de caractères, des objets, etc. Voici comment créer un tableau en JavaScript :


const tab = [1,2,3,4,5]
// index     0 1 2 3 4

const tab2 = ["jonathan", 3, {marque: 'clio', annee: 2015}]


// Tableaux multidimensions
const tabMulty = [1,2,3,4,[5,6,7,8]]


console.log(tab);
console.log(tab2);
console.log(tabMulty);
// acceder à une valeur d'un tableaux
console.log(tab[2]);

// changer la valeur d'un index
tab2[0] = "Nelya"
console.log(tab2);

// length = longueur du tableaux
console.log(tab.length);

// at = obtenir une valeur d'un tableau
// console.log(tab[tab.length - 3]);
console.log(tab.at(2));
console.log(tab.at(-2));