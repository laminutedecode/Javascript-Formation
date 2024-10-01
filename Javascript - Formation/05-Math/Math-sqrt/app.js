// La fonction Math.sqrt() en JavaScript est utilisée pour calculer la racine carrée d'un nombre donné. Elle renvoie la valeur numérique de la racine carrée, c'est-à-dire le nombre qui, multiplié par lui-même, donne le nombre donné en argument.


var nombre = 16;
var racineCarree = Math.sqrt(nombre);

console.log(racineCarree); // Affiche 4 (racine carrée de 16)

// Dans cet exemple, nous utilisons Math.sqrt() pour calculer la racine carrée du nombre 16. La fonction renvoie la valeur numérique de la racine carrée, qui est 4.

// Il est important de noter que Math.sqrt() renvoie toujours un nombre de type number. Si l'argument donné est négatif, la fonction renverra NaN (Not a Number), car la racine carrée des nombres négatifs n'est pas définie dans le domaine des nombres réels. Si l'argument est NaN, la fonction renverra également NaN.


console.log(Math.sqrt(9));      // Affiche 3 (racine carrée de 9)
console.log(Math.sqrt(2));      // Affiche environ 1.4142135623730951 (racine carrée de 2)
console.log(Math.sqrt(0));      // Affiche 0 (racine carrée de 0)
console.log(Math.sqrt(-16));    // Affiche NaN (racine carrée d'un nombre négatif)
console.log(Math.sqrt(NaN));    // Affiche NaN (racine carrée de NaN)

// En résumé, Math.sqrt() est une fonction JavaScript utilisée pour calculer la racine carrée d'un nombre. Elle renvoie la valeur numérique de la racine carrée.