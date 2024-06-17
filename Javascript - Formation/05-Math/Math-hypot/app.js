// La fonction Math.hypot() en JavaScript renvoie la racine carrée de la somme des carrés de ses arguments. Elle est souvent utilisée pour calculer la longueur de l'hypoténuse d'un triangle à partir des longueurs de ses côtés.

// Mathématiquement, si vous avez deux nombres  x et y la fonction hypot renverr la racine carré de x a au carré + y au carré
//  Elle peut également accepter plus de deux arguments, et dans ce cas, elle renverra la racine carrée de la somme des carrés de tous les arguments fournis.

//  exemple:

 let x = 3;
let y = 4;
let hypotenuse1 = Math.hypot(x, y);

console.log(hypotenuse1); // Affiche la longueur de l'hypoténuse du triangle avec les côtés x et y

// Vous pouvez également utiliser Math.hypot() avec plus de deux arguments :

let side1 = 3;
let side2 = 4;
let side3 = 5;
let hypotenuse2 = Math.hypot(side1, side2, side3);

console.log(hypotenuse2); // Affiche la longueur de l'hypoténuse du triangle avec les côtés side1, side2, et side3

// Cette fonction est utile dans divers contextes, notamment pour calculer des distances dans des espaces à plusieurs dimensions, comme dans la géométrie tridimensionnelle.