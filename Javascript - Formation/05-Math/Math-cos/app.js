

// La fonction Math.cos() en JavaScript est utilisée pour calculer le cosinus d'un angle donné en radians. Le cosinus est une fonction trigonométrique qui décrit la relation entre les côtés d'un triangle rectangle.


var angleEnRadians = Math.PI / 3; // Angle de 60 degrés en radians
var cosinus = Math.cos(angleEnRadians);

console.log(cosinus); // Affiche le cosinus de l'angle en radians

// Dans cet exemple, nous utilisons Math.cos() pour calculer le cosinus de l'angle de 60 degrés (ou π/3 radians). La fonction renvoie le résultat du cosinus, qui est approximativement égal à 0.5.

// Il est important de noter que Math.cos() prend l'angle en radians comme argument. Si vous avez un angle en degrés, vous devez le convertir en radians avant de l'utiliser avec la fonction Math.cos(). Pour convertir des degrés en radians, vous pouvez utiliser la formule : angleEnRadians = angleEnDegres * (Math.PI / 180).


