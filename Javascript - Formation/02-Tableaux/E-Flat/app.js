// La méthode flat() est utilisée pour aplatir un tableau en créant un nouveau tableau qui contient tous les éléments des tableaux imbriqués à une profondeur spécifiée. Elle renvoie un nouveau tableau sans modifier le tableau d'origine.

// La syntaxe de flat() est la suivante : array.flat(depth), où depth est un nombre optionnel qui spécifie la profondeur de l'aplanissement. Par défaut, depth est de 1.

// Exemple 1 :


let arr = [1, 2, [3, 4]];
let flattened = arr.flat();
console.log(flattened);  // affiche [1, 2, 3, 4]
// Dans cet exemple, le tableau arr contient un tableau imbriqué [3, 4]. En utilisant flat() sans spécifier de profondeur, le tableau arr est aplati d'une profondeur, ce qui crée un nouveau tableau flattened qui contient tous les éléments des tableaux imbriqués.

// Exemple 2 :

let arr2 = [1, 2, [3, 4, [5, 6]]];
let flattened2 = arr2.flat(2);
console.log(flattened2);  // affiche [1, 2, 3, 4, 5, 6]

// Dans cet exemple, le tableau arr contient un tableau imbriqué [3, 4, [5, 6]]. En utilisant flat(2), le tableau arr est aplati jusqu'à une profondeur de 2, ce qui crée un nouveau tableau flattened contenant tous les éléments des tableaux imbriqués jusqu'à cette profondeur.

// La méthode flat() est très pratique lorsqu'on souhaite traiter des tableaux imbriqués et les convertir en un tableau à une dimension. Elle peut être utilisée avec des profondeurs différentes en fonction des besoins spécifiques.