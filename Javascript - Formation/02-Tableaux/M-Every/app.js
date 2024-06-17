// La méthode every() est utilisée pour vérifier si tous les éléments d'un tableau satisfont à une condition donnée. Elle renvoie true si tous les éléments du tableau passent le test défini par une fonction, sinon elle renvoie false.

// La syntaxe de every() est la suivante : array.every(callback(element, index, array)), où callback est la fonction de test à appliquer à chaque élément, element est la valeur de l'élément en cours de traitement, index est l'indice de l'élément en cours de traitement et array est le tableau sur lequel every() est appelée.

// Exemple :

let numbers = [2, 4, 6, 8, 10];

let allEven = numbers.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven);  // affiche true
// Dans cet exemple, la méthode every() est utilisée pour vérifier si tous les nombres du tableau numbers sont pairs. La fonction de rappel fournie prend un paramètre number qui représente la valeur de l'élément en cours de traitement. Elle renvoie true si le nombre est pair (vérifié avec l'opérateur modulo %). La méthode every() vérifie que la fonction de rappel renvoie true pour tous les éléments du tableau, et elle renvoie true si c'est le cas.

// Si au moins un élément du tableau ne satisfait pas la condition définie dans la fonction de rappel, la méthode every() renverra false. Elle parcourt les éléments du tableau jusqu'à ce qu'un élément ne passe pas le test, puis elle s'arrête et renvoie false.

// La méthode every() est utile lorsque vous souhaitez vérifier si tous les éléments d'un tableau respectent une certaine condition.