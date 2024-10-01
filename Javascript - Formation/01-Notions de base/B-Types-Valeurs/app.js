// En JavaScript, il existe plusieurs types de valeurs. Voici les principaux types de valeurs en JavaScript, accompagnés d'exemples de code :

// Nombre (Number) : Les nombres sont des valeurs numériques. Ils peuvent être des entiers ou des nombres à virgule flottante.

let x = 5; // Nombre entier
let y = 3.14; // Nombre à virgule flottante

// Chaîne de caractères (String) : Les chaînes de caractères sont des séquences de caractères, entourées par des guillemets simples (' ') ou doubles (" ").

let message = "Bonjour !"; // Chaîne de caractères avec des guillemets doubles
let name = 'John'; // Chaîne de caractères avec des guillemets simples
let str = `${message} je suis ${nom}`

// Booléen (Boolean) : Les valeurs booléennes représentent soit Vrai (true) soit Faux (false). Elles sont souvent utilisées dans les conditions et les instructions de contrôle.

let isTrue = true; // Vrai
let isFalse = false; // Faux

// Null : Null est une valeur spéciale qui représente l'absence de valeur ou l'intentionnelle de l'absence de valeur.

let data = null; // Valeur null

// Indéfini (Undefined) : Undefined est une valeur spéciale qui est assignée à une variable lorsqu'aucune valeur n'est assignée à cette variable.

let undefinedVariable; // Indéfini


// Objet (Object) : Les objets sont des collections de propriétés, où chaque propriété est une paire clé-valeur. Les objets peuvent contenir des fonctions, des tableaux et d'autres objets.

let person = {
  name: 'John',
  age: 30,
  sayHello: function() {
    console.log('Bonjour !');
  }
};
// Tableau (Array) : Les tableaux sont des listes ordonnées d'éléments. Les éléments d'un tableau peuvent être de différents types.

let numbers = [1, 2, 3, 4, 5]; // Tableau de nombres
let fruits = ['Apple', 'Banana', 'Orange']; // Tableau de chaînes de caractères

// Fonction (Function) : Les fonctions sont des blocs de code réutilisables qui effectuent une tâche spécifique. Elles peuvent être définies de manière déclarative ou sous forme d'expressions.

function add(a, b) {
  return a + b;
}

let multiply = function(a, b) {
  return a * b;
};
