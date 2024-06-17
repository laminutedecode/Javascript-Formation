// La méthode forEach() est utilisée pour exécuter une fonction donnée sur chaque élément d'un tableau. Elle ne renvoie pas de nouveau tableau, mais elle parcourt tous les éléments du tableau et exécute la fonction spécifiée pour chaque élément.

// La syntaxe de forEach() est la suivante : array.forEach(callback(currentValue, index, array)), où callback est la fonction à exécuter pour chaque élément, currentValue est la valeur de l'élément en cours de traitement, index est l'indice de l'élément en cours de traitement et array est le tableau sur lequel forEach() est appelée.

// Exemple :

let fruits = ['pomme', 'banane', 'orange'];

fruits.forEach(function(fruit, index) {
  console.log('Fruit:', fruit, 'Index:', index);
});

// Dans cet exemple, forEach() est utilisée pour parcourir tous les éléments du tableau fruits et exécuter la fonction de rappel pour chaque élément. La fonction de rappel prend deux paramètres, fruit qui représente la valeur de l'élément en cours de traitement, et index qui représente l'indice de l'élément en cours de traitement. Dans l'exemple, la fonction de rappel affiche le fruit et son indice correspondant.

// La méthode forEach() est couramment utilisée pour effectuer des opérations sur chaque élément d'un tableau, comme l'affichage, la modification ou le calcul. Elle fournit une syntaxe simple et concise pour itérer sur un tableau.