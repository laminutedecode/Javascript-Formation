// La méthode reduce() est utilisée pour réduire les éléments d'un tableau à une seule valeur. Elle itère sur chaque élément du tableau et accumule un résultat en appliquant une fonction de réduction à chaque étape.

// La syntaxe de reduce() est la suivante : array.reduce(callback(accumulator, currentValue, index, array), initialValue), où callback est la fonction de réduction à appliquer, accumulator est la valeur accumulée à chaque étape, currentValue est la valeur de l'élément en cours de traitement, index est l'indice de l'élément en cours de traitement et array est le tableau sur lequel reduce() est appelée. L'argument initialValue est facultatif et représente la valeur initiale de l'accumulateur.

// Exemple 1 :

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);  // affiche 15

// Dans cet exemple, la méthode reduce() est utilisée pour calculer la somme de tous les nombres du tableau numbers. La fonction de rappel prend deux paramètres, accumulator qui représente la valeur accumulée à chaque étape et currentValue qui représente la valeur de l'élément en cours de traitement. La fonction de rappel retourne la somme de accumulator et currentValue. L'accumulateur est initialement défini à 0 avec l'argument initialValue de reduce().

// Exemple 2 :


let words = ['Hello', ' ', 'World', '!'];

let message = words.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, '');

console.log(message);  // affiche 'Hello World!'
// Dans cet exemple, la méthode reduce() est utilisée pour concaténer les mots du tableau words pour former une phrase. La fonction de rappel concatène accumulator et currentValue pour former le résultat accumulé. L'accumulateur est initialement une chaîne vide ('') avec l'argument initialValue de reduce().

// La méthode reduce() est puissante pour effectuer des calculs ou des opérations complexes sur les éléments d'un tableau et réduire le tableau à une seule valeur.