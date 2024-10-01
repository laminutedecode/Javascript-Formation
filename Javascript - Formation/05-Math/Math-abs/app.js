// La fonction Math.abs() en JavaScript est utilisée pour renvoyer la valeur absolue d'un nombre donné, c'est-à-dire la valeur numérique sans tenir compte de son signe.


console.log(Math.abs(5));    // Affiche 5 (la valeur absolue de 5 est 5)
console.log(Math.abs(-7));   // Affiche 7 (la valeur absolue de -7 est 7)
console.log(Math.abs(0));    // Affiche 0 (la valeur absolue de 0 est 0)
console.log(Math.abs(-2.5)); // Affiche 2.5 (la valeur absolue de -2.5 est 2.5)

// Dans ces exemples, nous utilisons Math.abs() pour obtenir la valeur absolue des nombres donnés. La fonction renvoie le résultat en supprimant le signe négatif, s'il existe.

// Il est important de noter que Math.abs() renvoie toujours un nombre de type number. Si l'argument donné est NaN (Not a Number), la fonction renverra également NaN.


console.log(Math.abs(7));        // Affiche 7 (la valeur absolue de 7 est 7)
console.log(Math.abs(-3.14));    // Affiche 3.14 (la valeur absolue de -3.14 est 3.14)
console.log(Math.abs(NaN));      // Affiche NaN (l'argument n'est pas un nombre)
console.log(Math.abs(Infinity)); // Affiche Infinity (la valeur absolue de Infinity est Infinity)
console.log(Math.abs(-Infinity));// Affiche Infinity (la valeur absolue de -Infinity est Infinity)

// En résumé, Math.abs() est une fonction JavaScript utilisée pour renvoyer la valeur absolue d'un nombre donné. Elle supprime le signe négatif et renvoie la valeur numérique sans considérer le signe.