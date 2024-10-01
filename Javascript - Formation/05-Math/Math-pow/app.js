// La fonction Math.pow() en JavaScript est utilisée pour calculer la puissance d'un nombre donné. Elle prend deux arguments : la base et l'exposant, et renvoie la valeur résultante.



console.log(Math.pow(2, 3));   // Affiche 8 (2 élevé à la puissance 3)
console.log(Math.pow(4, 0.5)); // Affiche 2 (racine carrée de 4)
// Dans ces exemples, nous utilisons Math.pow() pour calculer la puissance des nombres donnés. Dans le premier exemple, la fonction renvoie 8, car 2 élevé à la puissance 3 est égal à 8. Dans le deuxième exemple, la fonction renvoie 2, car la racine carrée de 4 est égale à 2.

// Il est important de noter que Math.pow() renvoie toujours un nombre de type number. Si l'exposant est un nombre à virgule flottante (comme dans le deuxième exemple), la fonction effectue un calcul de puissance avec précision. De plus, si l'exposant est 0, la fonction renvoie toujours 1, quelle que soit la base donnée.




console.log(Math.pow(3, 4));   // Affiche 81 (3 élevé à la puissance 4)
console.log(Math.pow(10, -2)); // Affiche 0.01 (10 élevé à la puissance -2)
console.log(Math.pow(0, 5));   // Affiche 0 (0 élevé à la puissance 5)
console.log(Math.pow(-2, 3));  // Affiche -8 (-2 élevé à la puissance 3)
console.log(Math.pow(NaN, 2)); // Affiche NaN (la base n'est pas un nombre)

// En résumé, Math.pow() est une fonction JavaScript utilisée pour calculer la puissance d'un nombre donné. Elle prend une base et un exposant en arguments et renvoie la valeur résultante.