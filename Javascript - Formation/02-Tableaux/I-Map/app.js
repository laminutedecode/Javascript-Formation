// La méthode map() est utilisée pour créer un nouveau tableau en appliquant une fonction de transformation à chaque élément d'un tableau existant. Elle renvoie un nouveau tableau contenant les résultats de l'application de la fonction sur chaque élément.

// La syntaxe de map() est la suivante : array.map(callback(currentValue, index, array)), où callback est la fonction de transformation à appliquer, currentValue est la valeur de l'élément en cours de traitement, index est l'indice de l'élément en cours de traitement et array est le tableau sur lequel map() est appelée.


let numbers = [1, 2, 3];

let squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers);  // affiche [1, 4, 9]

// Dans cet exemple, la méthode map() est utilisée pour transformer chaque élément du tableau numbers en calculant le carré de chaque nombre à l'aide de la fonction de rappel fournie. Le résultat est stocké dans un nouveau tableau squaredNumbers.

// La fonction de rappel dans cet exemple prend un paramètre number qui représente la valeur de l'élément en cours de traitement. Elle renvoie le carré de number. La méthode map() applique cette fonction de rappel à chaque élément du tableau numbers et crée un nouveau tableau squaredNumbers contenant les carrés correspondants.

// La méthode map() est utile lorsque vous avez besoin de transformer chaque élément d'un tableau en appliquant une certaine logique ou une opération de calcul, et de stocker les résultats dans un nouveau tableau.