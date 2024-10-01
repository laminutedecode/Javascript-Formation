// La fonction Math.floor() en JavaScript est utilisée pour arrondir un nombre à l'entier inférieur le plus proche. Elle renvoie la plus grande valeur entière inférieure ou égale à un nombre donné.


var nombre = 3.14159;
var entierInferieur = Math.floor(nombre);

console.log(entierInferieur); // Affiche 3
// Dans cet exemple, nous utilisons Math.floor() pour arrondir le nombre 3.14159 à l'entier inférieur le plus proche, qui est 3. La fonction renvoie toujours un nombre entier, que l'entrée soit positive ou négative.

// Il est important de noter que Math.floor() ne modifie pas le nombre original, elle renvoie simplement le résultat de l'arrondi. De plus, si le nombre donné est déjà un entier, il est renvoyé tel quel sans modification.

// Voici quelques exemples supplémentaires pour illustrer le comportement de Math.floor() :


console.log(Math.floor(5.7));   // Affiche 5
console.log(Math.floor(10.1));  // Affiche 10
console.log(Math.floor(-2.8));  // Affiche -3
console.log(Math.floor(-7.2));  // Affiche -8
console.log(Math.floor(0));     // Affiche 0

// En résumé, Math.floor() est une fonction JavaScript utilisée pour arrondir un nombre à l'entier inférieur le plus proche.