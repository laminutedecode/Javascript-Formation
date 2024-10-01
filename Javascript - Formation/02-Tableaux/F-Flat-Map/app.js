// La méthode flatMap() est une méthode introduite dans ECMAScript 2019 (ES10) pour les tableaux en JavaScript. Elle combine les fonctionnalités de map() et flat() en une seule méthode, permettant de mapper chaque élément du tableau à une fonction et de fusionner les résultats dans un nouveau tableau résultant.

// La syntaxe de flatMap() est la suivante :

// arr.flatMap(callback(currentValue[, index[, array]])[, thisArg]);

// arr est le tableau sur lequel la méthode flatMap() est appelée.
// callback est la fonction de rappel à exécuter pour chaque élément du tableau.
// currentValue est l'élément en cours de traitement.
// index (optionnel) est l'index de l'élément en cours de traitement.
// array (optionnel) est le tableau sur lequel flatMap() est appelée.
// thisArg (optionnel) est la valeur à utiliser comme this lors de l'exécution de la fonction de rappel.



// La méthode flatMap() itère sur chaque élément du tableau et applique la fonction de rappel spécifiée à chaque élément. La fonction de rappel peut retourner une valeur seule ou un tableau de valeurs. Les valeurs retournées sont ensuite fusionnées dans un nouveau tableau résultant. Si nécessaire, la méthode flatMap() aplatie le tableau résultant d'un niveau.

// Voici un exemple pour mieux comprendre son utilisation :


const numbers = [1, 2, 3, 4, 5];

const doubledAndSquared = numbers.flatMap((num) => [num * 2, num ** 2]);

console.log(doubledAndSquared);

// Dans cet exemple, nous avons un tableau numbers contenant des nombres. En utilisant flatMap(), nous appliquons une fonction de rappel qui double chaque nombre et calcule le carré de chaque nombre. Les valeurs retournées sont spécifiées comme un tableau [num * 2, num ** 2]. Le résultat est un nouveau tableau doubledAndSquared qui contient les valeurs doublées et les carrés des nombres d'origine :

// Comme tu peux le voir, le tableau résultant a été aplati d'un niveau, car chaque valeur retournée était déjà spécifiée comme un tableau.

// La méthode flatMap() est utile lorsque tu souhaites mapper et fusionner les éléments d'un tableau en une seule opération. Elle peut être utilisée pour transformer et manipuler facilement les données contenues dans un tableau.

