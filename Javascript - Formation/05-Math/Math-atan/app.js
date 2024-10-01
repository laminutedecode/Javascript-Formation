// La méthode Math.atan() en JavaScript est utilisée pour calculer l'arc tangente (ou tangente inverse) d'un nombre donné. Elle prend en argument un nombre et renvoie l'angle (en radians) dont la tangente est égale à ce nombre.

// Mathématiquement, cela peut être exprimé comme suit : atan(x) - 0

// En d'autres termes, si vous avez la tangente d'un angle, la fonction Math.atan() vous donne cet angle.

// Voici un exemple d'utilisation de Math.atan() :

// let x = 0.5;
// let angle = Math.atan(x);

// console.log(angle); // Affiche l'angle en radians dont la tangente est égale à 0.5


// Il est important de noter que la valeur renvoyée par Math.atan() est en radians. Si vous souhaitez l'angle en degrés, vous devrez convertir la valeur en multipliant par 
// 180 divisé par pi où π est la constante mathématique Pi.

let x = 0.5;
let angleInRadians = Math.atan(x);
let angleInDegrees = (angleInRadians * 180) / Math.PI;

console.log(angleInDegrees); // Affiche l'angle en degrés dont la tangente est égale à 0.5


// Cela vous donnera l'angle en degrés correspondant à la tangente spécifiée. La valeur de 
// �
// π est accessible via Math.PI en JavaScript.