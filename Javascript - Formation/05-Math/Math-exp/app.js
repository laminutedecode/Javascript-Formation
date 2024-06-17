// La fonction Math.exp() en JavaScript est utilisée pour calculer l'exponentielle d'un nombre donné. Elle renvoie la valeur de l'exponentielle élevée à la puissance du nombre donné.


console.log(Math.exp(1));   // Affiche environ 2.718281828459045 (e^1)
console.log(Math.exp(2));   // Affiche environ 7.3890560989306495 (e^2)
console.log(Math.exp(0));   // Affiche 1 (e^0)
console.log(Math.exp(-1));  // Affiche environ 0.36787944117144233 (e^-1)

// Dans ces exemples, nous utilisons Math.exp() pour calculer l'exponentielle des nombres donnés. La fonction renvoie le résultat de l'exponentielle élevée à la puissance du nombre.

// La constante e (environ 2.718281828459045) est la base de l'exponentielle naturelle. Lorsque nous passons un nombre à la fonction Math.exp(), elle calcule e élevé à la puissance de ce nombre.

// Il est important de noter que Math.exp() renvoie toujours un nombre de type number. Si l'argument donné est NaN (Not a Number), la fonction renverra également NaN.


console.log(Math.exp(3));        // Affiche environ 20.085536923187668 (e^3)
console.log(Math.exp(-0.5));     // Affiche environ 0.6065306597126334 (e^-0.5)
console.log(Math.exp(10));       // Affiche environ 22026.465794806718 (e^10)
console.log(Math.exp(NaN));      // Affiche NaN (l'argument n'est pas un nombre)
console.log(Math.exp(Infinity)); // Affiche Infinity (elevé à une puissance infinie)
// En résumé, Math.exp() est une fonction JavaScript utilisée pour calculer l'exponentielle d'un nombre donné. Elle renvoie la valeur de l'exponentielle élevée à la puissance du nombre.