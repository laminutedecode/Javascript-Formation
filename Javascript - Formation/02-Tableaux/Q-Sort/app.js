// En JavaScript, la méthode sort() est une méthode disponible sur les objets Array qui permet de trier les éléments d'un tableau de manière ascendante (par défaut) ou selon un ordre spécifié.

// Lorsque vous appelez la méthode sort() sur un tableau, elle trie les éléments du tableau directement, modifiant ainsi l'ordre des éléments d'origine. Par exemple :


const fruits = ['orange', 'apple', 'banana'];
fruits.sort();

console.log(fruits); // Affiche: ['apple', 'banana', 'orange']
// Dans cet exemple, les éléments du tableau fruits sont triés en ordre alphabétique.

// La méthode sort() utilise la comparaison des chaînes de caractères par défaut pour trier les éléments. Cependant, il est également possible de fournir une fonction de comparaison personnalisée en tant que paramètre pour définir l'ordre de tri souhaité.

// La fonction de comparaison personnalisée doit être une fonction qui accepte deux paramètres (généralement appelés a et b) représentant deux éléments à comparer. La fonction doit retourner un nombre négatif si a doit être classé avant b, un nombre positif si a doit être classé après b, ou zéro si a et b sont considérés égaux en termes de tri. Voici un exemple d'utilisation d'une fonction de comparaison personnalisée avec sort() :


const numbers = [10, 5, 8, 2, 3];
numbers.sort((a, b) => a - b);

console.log(numbers); // Affiche: [2, 3, 5, 8, 10]
// Dans cet exemple, les nombres sont triés par ordre croissant à l'aide de la fonction de comparaison (a, b) => a - b.

// Il est important de noter que la méthode sort() trie les éléments en place, modifiant le tableau d'origine. Si vous souhaitez conserver le tableau d'origine et obtenir un nouveau tableau trié, vous pouvez créer une copie du tableau avant d'appliquer la méthode sort().

