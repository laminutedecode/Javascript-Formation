// La méthode copyWithin() est utilisée pour copier une portion d'un tableau et la coller à un autre emplacement dans le même tableau, en modifiant le tableau d'origine. Elle permet de remplacer une partie du tableau avec ses propres éléments.

// La syntaxe de copyWithin() est la suivante : array.copyWithin(target, start, end), où target est l'indice de destination où la portion copiée doit être collée, start est l'indice de départ de la portion à copier (inclus), et end est l'indice de fin de la portion à copier (exclus). Par défaut, start est 0 et end est array.length.

// Exemple 1 :

let numbers = [1, 2, 3, 4, 5];

numbers.copyWithin(0, 3);

console.log(numbers);  // affiche [4, 5, 3, 4, 5]
// Dans cet exemple, la méthode copyWithin(0, 3) est appelée sur le tableau numbers. La portion du tableau à partir de l'indice 3 (inclus) est copiée et collée à l'indice de destination 0, remplaçant ainsi les éléments du tableau d'origine. Les éléments [4, 5] sont copiés et remplacent les éléments [1, 2].

// Exemple 2 :

let numbers2 = [1, 2, 3, 4, 5];

numbers2.copyWithin(1, 2, 4);

console.log(numbers2);  // affiche [1, 3, 4, 4, 5]
// Dans cet exemple, la méthode copyWithin(1, 2, 4) est appelée sur le tableau numbers. La portion du tableau entre les indices 2 (inclus) et 4 (exclus) est copiée et collée à l'indice de destination 1, remplaçant ainsi les éléments du tableau d'origine. Les éléments [3, 4] sont copiés et remplacent les éléments [2, 3].

// La méthode copyWithin() est utile lorsque vous souhaitez remplacer une partie spécifique du tableau par ses propres éléments, sans créer un nouveau tableau.
