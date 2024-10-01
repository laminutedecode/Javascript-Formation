// La méthode filter() est utilisée pour créer un nouveau tableau contenant uniquement les éléments d'un tableau d'origine qui satisfont à une condition spécifique. Elle renvoie un nouveau tableau composé des éléments filtrés.

// La syntaxe de filter() est la suivante : array.filter(callback(currentValue, index, array)), où callback est la fonction de test à appliquer à chaque élément, currentValue est la valeur de l'élément en cours de traitement, index est l'indice de l'élément en cours de traitement et array est le tableau sur lequel filter() est appelée.

// Exemple :

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);  // affiche [2, 4, 6]


// Dans cet exemple, la méthode filter() est utilisée pour filtrer les éléments du tableau numbers et ne conserver que les nombres pairs. La fonction de rappel fournie prend un paramètre number qui représente la valeur de l'élément en cours de traitement. Elle renvoie true si le nombre est pair (vérifié avec l'opérateur modulo %), ce qui signifie que l'élément sera inclus dans le nouveau tableau evenNumbers. Les nombres impairs ne satisfont pas la condition et seront exclus du nouveau tableau.

// La méthode filter() itère sur chaque élément du tableau d'origine et exécute la fonction de rappel sur chacun d'eux. Les éléments pour lesquels la fonction de rappel renvoie true sont inclus dans le nouveau tableau filtré.

// La méthode filter() est utile lorsque vous souhaitez extraire une sous-collection de valeurs d'un tableau en fonction d'un critère spécifique.