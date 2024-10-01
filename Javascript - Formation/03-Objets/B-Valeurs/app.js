// En JavaScript, les valeurs primitives et les valeurs de référence sont deux types de données utilisés pour stocker des informations.

// Valeurs primitives :
// Les valeurs primitives sont des données immuables, ce qui signifie qu'elles ne peuvent pas être modifiées une fois qu'elles sont créées. En JavaScript, il existe six types de valeurs primitives :
// Number : représente les nombres, qu'ils soient entiers ou à virgule flottante.
// String : représente une séquence de caractères entourée de guillemets simples ('') ou doubles ("").
// Boolean : représente une valeur de vérité, soit vrai (true) ou faux (false).
// Null : représente une valeur nulle, indiquant l'absence de valeur.
// Undefined : représente une variable non initialisée ou une propriété non définie.
// Symbol : représente une valeur unique et immuable qui peut être utilisée comme identifiant pour les propriétés des objets.
// Voici un exemple d'utilisation de valeurs primitives en JavaScript :


let numberValue = 42;
let stringValue = "Hello, world!";
let booleanValue = true;
let nullValue = null;
let undefinedValue = undefined;
let symbolValue = Symbol("mySymbol");


// Valeurs de référence :
// Les valeurs de référence sont des objets en JavaScript. Contrairement aux valeurs primitives, les valeurs de référence sont mutables, ce qui signifie qu'elles peuvent être modifiées après leur création. Les valeurs de référence sont stockées par référence et non par valeur. Les types de valeurs de référence comprennent :
// Object : représente une collection de propriétés clé-valeur.
// Array : représente une liste ordonnée d'éléments.
// Function : représente une fonction, qui est en réalité un objet de type Function.
// Date : représente une date et une heure spécifiques.
// Et d'autres types d'objets personnalisés créés par les développeurs.
// Voici un exemple d'utilisation de valeurs de référence en JavaScript :


let objectValue = { name: "John", age: 25 };
let arrayValue = [1, 2, 3, 4];
let functionValue = function() {
  console.log("Hello, world!");
};
let dateValue = new Date();
// Lorsque vous utilisez des valeurs de référence, vous travaillez avec une référence à l'objet plutôt qu'avec la valeur réelle. Cela signifie que si vous affectez une variable contenant une valeur de référence à une autre variable, les deux variables pointeront vers le même objet en mémoire. Toute modification apportée à l'un des objets affectera également l'autre.