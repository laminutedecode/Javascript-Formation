// La fonction Math.tan() en JavaScript est utilisée pour calculer la tangente d'un angle donné en radians. La tangente est une fonction trigonométrique qui relie les rapports entre les côtés d'un triangle rectangle.




var angleEnRadians = Math.PI / 4; // Angle de 45 degrés en radians
var tangente = Math.tan(angleEnRadians);

console.log(tangente); // Affiche la tangente de l'angle en radians

// Dans cet exemple, nous utilisons Math.tan() pour calculer la tangente de l'angle de 45 degrés (ou π/4 radians). La fonction renvoie le résultat de la tangente, qui est approximativement égal à 1.

// Il est important de noter que Math.tan() prend l'angle en radians comme argument. Si vous avez un angle en degrés, vous devez le convertir en radians avant de l'utiliser avec la fonction Math.tan(). Pour convertir des degrés en radians, vous pouvez utiliser la formule : angleEnRadians = angleEnDegres * (Math.PI / 180).

// Voici quelques exemples supplémentaires pour illustrer le comportement de Math.tan() :


var angleEnRadians = Math.PI / 3; // Angle de 60 degrés en radians
var tangente = Math.tan(angleEnRadians);
console.log(tangente); // Affiche la tangente de l'angle en radians

var angleEnRadians = Math.PI / 2; // Angle de 90 degrés en radians
var tangente = Math.tan(angleEnRadians);
console.log(tangente); // Affiche Infinity (tangente d'un angle de 90 degrés)

var angleEnRadians = 0; // Angle de 0 degré en radians
var tangente = Math.tan(angleEnRadians);
console.log(tangente); // Affiche 0 (tangente d'un angle de 0 degré)


// En résumé, Math.tan() est une fonction JavaScript utilisée pour calculer la tangente d'un angle donné en radians. Elle est utile pour les calculs trigonométriques impliquant des angles.