// La méthode hasOwnProperty est une méthode disponible pour les objets en JavaScript. Elle permet de vérifier si un objet possède une propriété spécifique en tant que propriété directe, c'est-à-dire qu'elle ne recherche pas la propriété dans la chaîne de prototypage de l'objet.

// La syntaxe de la méthode hasOwnProperty est la suivante :


// object.hasOwnProperty(property)


// object : L'objet sur lequel on souhaite vérifier l'existence de la propriété.
// property : La chaîne de caractères représentant le nom de la propriété à vérifier.
// La méthode hasOwnProperty renvoie une valeur booléenne, true si l'objet possède la propriété spécifiée en tant que propriété directe, et false sinon.

// Voici un exemple d'utilisation de la méthode hasOwnProperty :


const person = {
  name: "John",
  age: 30,
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // true
console.log(person.hasOwnProperty("address")); // false
// Dans cet exemple, l'objet person possède les propriétés name et age. L'appel de person.hasOwnProperty("name") renvoie true car la propriété name est une propriété directe de l'objet person. Cependant, person.hasOwnProperty("address") renvoie false car l'objet person n'a pas de propriété address définie directement sur lui-même.

// Il est important de noter que la méthode hasOwnProperty ne vérifie que les propriétés directes de l'objet. Si une propriété n'est pas trouvée dans l'objet lui-même, la recherche se poursuit dans la chaîne de prototypage de l'objet. Si vous souhaitez vérifier l'existence d'une propriété, y compris celles héritées du prototype, vous pouvez utiliser l'opérateur in en combinaison avec hasOwnProperty, comme ceci :


console.log("name" in person); // true
console.log("toString" in person); // true (hérité du prototype Object)