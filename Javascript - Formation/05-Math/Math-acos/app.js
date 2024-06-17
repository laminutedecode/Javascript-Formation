// La méthode Math.acos() en JavaScript est une fonction qui renvoie l'arc cosinus (ou cosinus inverse) d'un nombre. En d'autres termes, elle prend un nombre en argument, qui doit être compris entre -1 et 1, et renvoie l'angle dont le cosinus est le nombre fourni.

// Voici un exemple simple d'utilisation de Math.acos() :


let cosValue1 = 0.5;
let angle = Math.acos(cosValue1);

console.log(angle); // Affiche l'angle en radians dont le cosinus est 0.5
// Dans cet exemple, Math.acos(0.5) renvoie l'angle en radians dont le cosinus est égal à 0.5. Notez que la valeur fournie en argument doit être comprise entre -1 et 1. Si vous fournissez un nombre en dehors de cette plage, la méthode renverra NaN (Not a Number).

// Il est important de noter que la valeur renvoyée par Math.acos() est en radians. Si vous souhaitez l'angle en degrés, vous devrez convertir la valeur en multipliant par (180 / Math.PI).


let cosValue2 = 0.5;
let angleInRadians = Math.acos(cosValue2);
let angleInDegrees = (angleInRadians * 180) / Math.PI;

console.log(angleInDegrees); // Affiche l'angle en degrés dont le cosinus est 0.5
// Cela vous donnera l'angle en degrés correspondant au cosinus spécifié.