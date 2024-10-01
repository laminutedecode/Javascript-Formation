
// Les fonctions Math.min() et Math.max() en JavaScript sont utilisées respectivement pour trouver la valeur minimale et maximale parmi un ensemble de nombres donnés.

// La fonction Math.min() renvoie le plus petit nombre parmi les arguments qui lui sont passés, tandis que la fonction Math.max() renvoie le plus grand nombre parmi les arguments.


console.log(Math.min(2, 5, 1, 8, 3));    // Affiche 1 (le plus petit nombre parmi les arguments)
console.log(Math.max(2, 5, 1, 8, 3));    // Affiche 8 (le plus grand nombre parmi les arguments)


// Dans ces exemples, nous utilisons Math.min() pour trouver le plus petit nombre parmi les arguments 2, 5, 1, 8 et 3. La fonction renvoie 1, car c'est le plus petit nombre parmi ces valeurs. Ensuite, nous utilisons Math.max() pour trouver le plus grand nombre parmi les mêmes arguments, et la fonction renvoie 8, car c'est le plus grand nombre.

// Il est important de noter que les fonctions Math.min() et Math.max() peuvent également être utilisées avec un tableau de nombres. Dans ce cas, vous pouvez utiliser la syntaxe des tableaux pour passer les valeurs :

var nombres = [2, 5, 1, 8, 3];
console.log(Math.min(...nombres));    // Affiche 1 (le plus petit nombre parmi les valeurs du tableau)
console.log(Math.max(...nombres));    // Affiche 8 (le plus grand nombre parmi les valeurs du tableau)

// Ici, nous utilisons l'opérateur de décomposition (...) pour étaler les éléments du tableau nombres en tant qu'arguments individuels pour les fonctions Math.min() et Math.max().

// Il convient de noter que si vous utilisez ces fonctions avec des arguments non numériques, ils seront automatiquement convertis en nombres avant d'être évalués. Cependant, si la conversion n'est pas possible, elles renverront NaN (Not a Number).

// En résumé, Math.min() et Math.max() sont des fonctions JavaScript utilisées respectivement pour trouver le plus petit et le plus grand nombre parmi les arguments ou les valeurs d'un tableau.