// La fonction Math.ceil() en JavaScript est utilisée pour arrondir un nombre à l'entier supérieur le plus proche. Elle renvoie le plus petit entier supérieur ou égal au nombre donné.


console.log(Math.ceil(4.3));  // Affiche 5 (arrondi à l'entier supérieur)
console.log(Math.ceil(9.9));  // Affiche 10 (arrondi à l'entier supérieur)
console.log(Math.ceil(-2.5)); // Affiche -2 (arrondi à l'entier supérieur)

// Dans ces exemples, nous utilisons Math.ceil() pour arrondir les nombres donnés à l'entier supérieur le plus proche. La fonction renvoie le résultat arrondi.

// Il est important de noter que Math.ceil() renvoie toujours un nombre de type number. Si l'argument donné est déjà un entier, la fonction renvoie simplement cet entier sans effectuer de changement. Si l'argument est NaN (Not a Number), la fonction renverra également NaN.


console.log(Math.ceil(7));    // Affiche 7 (l'argument est déjà un entier)
console.log(Math.ceil(0));    // Affiche 0 (l'argument est déjà un entier)
console.log(Math.ceil(-3));   // Affiche -3 (l'argument est déjà un entier)
console.log(Math.ceil(NaN));  // Affiche NaN (l'argument n'est pas un nombre)
console.log(Math.ceil(Infinity)); // Affiche Infinity (pas d'arrondi nécessaire)
console.log(Math.ceil(-Infinity));// Affiche -Infinity (pas d'arrondi nécessaire)
// En résumé, Math.ceil() est une fonction JavaScript utilisée pour arrondir un nombre à l'entier supérieur le plus proche. Elle renvoie le plus petit entier supérieur ou égal au nombre donné.