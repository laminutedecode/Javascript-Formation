// La méthode Math.asin() en JavaScript est utilisée pour calculer l'arc sinus (ou sinus inverse) d'un nombre donné. Elle prend en argument un nombre compris entre -1 et 1, et renvoie l'angle (en radians) dont le sinus est égal à ce nombre.

// Mathématiquement, cela peut être exprimé comme suit : asin(x) - 0 ou 0 est l'angle radian

// . En d'autres termes, si vous avez le sinus d'un angle, la fonction Math.asin() vous donne cet angle.

// Voici un exemple d'utilisation de Math.asin() :

let x = 0.5;
let angle = Math.asin(x);

console.log(angle); // Affiche l'angle en radians dont le sinus est égal à 0.5


// Notez que la valeur fournie en argument doit être comprise entre -1 et 1. Si vous fournissez un nombre en dehors de cette plage, la méthode renverra NaN (Not a Number).

// Il est également important de noter que la valeur renvoyée par Math.asin() est en radians. Si vous souhaitez l'angle en degrés, vous devrez convertir la valeur en multipliant par 
// 180 π divisé par 180 où  π est la constante mathématique Pi.

let y = 0.5;
let angleInRadians = Math.asin(y);
let angleInDegrees = (angleInRadians * 180) / Math.PI;

console.log(angleInDegrees); // Affiche l'angle en degrés dont le sinus est égal à 0.5

// Cela vous donnera l'angle en degrés correspondant au sinus spécifié.
