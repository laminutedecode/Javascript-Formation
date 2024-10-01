// La fonction Math.round() en JavaScript est utilisée pour arrondir un nombre à l'entier le plus proche. Elle renvoie la valeur entière la plus proche du nombre donné, arrondie vers le haut ou vers le bas en fonction de la décimale suivante.

var nombre = 3.6;
var entierArrondi = Math.round(nombre);

console.log(entierArrondi); // Affiche 4

// Dans cet exemple, nous utilisons Math.round() pour arrondir le nombre 3.6 à l'entier le plus proche, qui est 4. Si la décimale suivante est de 5 ou plus, la valeur est arrondie vers le haut. Sinon, elle est arrondie vers le bas.

// Voici quelques exemples supplémentaires pour illustrer le comportement de Math.round() :

console.log(Math.round(4.1));   // Affiche 4
console.log(Math.round(7.9));   // Affiche 8
console.log(Math.round(-2.4));  // Affiche -2
console.log(Math.round(-7.6));  // Affiche -8
console.log(Math.round(0));     // Affiche 0

// En résumé, Math.round() est une fonction JavaScript utilisée pour arrondir un nombre à l'entier le plus proche. Si la décimale suivante est de 5 ou plus, la valeur est arrondie vers le haut. Sinon, elle est arrondie vers le bas.