// Les opérateurs en JavaScript sont utilisés pour effectuer des opérations sur des valeurs, telles que l'addition, la soustraction, la comparaison, etc. Voici quelques-uns des opérateurs les plus couramment utilisés :

// Opérateurs arithmétiques :
// Les opérateurs arithmétiques sont utilisés pour effectuer des opérations mathématiques de base.


let x = 5;
let y = 3;

let addition = x + y;
console.log(addition);  // Affiche 8

let soustraction = x - y;
console.log(soustraction);  // Affiche 2

let multiplication = x * y;
console.log(multiplication);  // Affiche 15

let division = x / y;
console.log(division);  // Affiche 1.6666666666666667

let modulo = x % y;
console.log(modulo);  // Affiche 2

// Opérateurs d'affectation :
// Les opérateurs d'affectation sont utilisés pour attribuer une valeur à une variable.



x += 3;  // Équivalent à x = x + 3
console.log(x);  // Affiche 8

x -= 2;  // Équivalent à x = x - 2
console.log(x);  // Affiche 6

x *= 4;  // Équivalent à x = x * 4
console.log(x);  // Affiche 24

x /= 3;  // Équivalent à x = x / 3
console.log(x);  // Affiche 8

x %= 5;  // Équivalent à x = x % 5
console.log(x);  // Affiche 3

// Opérateurs de comparaison :
// Les opérateurs de comparaison sont utilisés pour comparer des valeurs.


console.log(x > y);   // Affiche true
console.log(x < y);   // Affiche false
console.log(x >= y);  // Affiche true
console.log(x <= y);  // Affiche false
console.log(x === y); // Affiche false (égalité stricte)
console.log(x !== y); // Affiche true (différence stricte)


let condition1 = x > 0 && y > 0;   // ET logique
console.log(condition1);  // Affiche true

let condition2 = x > 0 || y > 0;   // OU logique
console.log(condition2);  // Affiche true

let condition3 = !(x > 0);   // NON logique
console.log(condition3);  // Affiche false