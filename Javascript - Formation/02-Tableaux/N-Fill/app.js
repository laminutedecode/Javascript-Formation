// La méthode fill() est utilisée pour remplir tous les éléments d'un tableau avec une valeur donnée, en modifiant le tableau d'origine. Elle permet de mettre à jour les éléments du tableau en leur attribuant une valeur spécifique.

// La syntaxe de fill() est la suivante : array.fill(value, start, end), où value est la valeur avec laquelle remplir les éléments du tableau, start est l'indice de début (inclus) à partir duquel remplir les éléments (par défaut 0), et end est l'indice de fin (exclus) jusqu'auquel remplir les éléments (par défaut array.length).

// Exemple 1 :


let numbers = [1, 2, 3, 4, 5];

numbers.fill(0);

console.log(numbers);  // affiche [0, 0, 0, 0, 0]
// Dans cet exemple, la méthode fill(0) est appelée sur le tableau numbers. Tous les éléments du tableau sont remplis avec la valeur 0, modifiant ainsi le tableau d'origine.

// Exemple 2 :

let numbers2 = [1, 2, 3, 4, 5];

numbers2.fill(0, 2, 4);

console.log(numbers2);  // affiche [1, 2, 0, 0, 5]
// Dans cet exemple, la méthode fill(0, 2, 4) est appelée sur le tableau numbers. Seuls les éléments entre les indices 2 (inclus) et 4 (exclus) sont remplis avec la valeur 0, tandis que les autres éléments restent inchangés.

// La méthode fill() est utile lorsque vous souhaitez mettre à jour tous les éléments d'un tableau avec une valeur spécifique sans créer un nouveau tableau.