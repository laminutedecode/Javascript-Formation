// La méthode replace() est une méthode intégrée aux objets de type chaîne de caractères (String) en JavaScript. Elle est utilisée pour rechercher une partie d'une chaîne de caractères et la remplacer par une nouvelle sous-chaîne.

// Voici la syntaxe générale de la méthode replace() :


// string.replace(searchValue, newValue);

// string est la chaîne de caractères sur laquelle la recherche et le remplacement doivent être effectués.
// searchValue est la valeur ou le motif de recherche. Cela peut être une chaîne de caractères ou une expression régulière.
// newValue est la nouvelle sous-chaîne qui remplacera la partie correspondante de la chaîne de caractères.
// La méthode replace() ne modifie pas la chaîne de caractères d'origine, mais renvoie une nouvelle chaîne de caractères résultante avec les modifications appliquées. Si le motif de recherche est trouvé, seule la première occurrence sera remplacée par défaut. Pour remplacer toutes les occurrences, on peut utiliser une expression régulière avec le drapeau global (g).

// Voici quelques exemples d'utilisation de la méthode replace() :


const str = 'Bonjour, monde!';

const newStr = str.replace('monde', 'John');
console.log(newStr); // Affiche: Bonjour, John!

const str2 = 'ABC ABC ABC';
const newStr2 = str2.replace(/ABC/g, 'XYZ');
console.log(newStr2); // Affiche: XYZ XYZ XYZ

// Dans le premier exemple, la méthode replace() est utilisée pour remplacer la sous-chaîne "monde" par "John" dans la chaîne de caractères "Bonjour, monde!". Le résultat est "Bonjour, John!".

// Dans le deuxième exemple, une expression régulière /ABC/g est utilisée comme motif de recherche pour trouver toutes les occurrences de "ABC" dans la chaîne de caractères "ABC ABC ABC". Chaque occurrence de "ABC" est remplacée par "XYZ", donnant le résultat "XYZ XYZ XYZ".

// La méthode replace() peut également utiliser des fonctions de rappel pour effectuer des remplacements plus complexes. Cette fonction de rappel est appelée pour chaque correspondance trouvée et permet de manipuler la sous-chaîne correspondante avant de la remplacer.


const str3 = 'Hello, World!';

const newStr3 = str3.replace('World', function(match) {
  return match.toUpperCase();
});

console.log(newStr2); // Affiche: Hello, WORLD!
// Dans cet exemple, la fonction de rappel est utilisée pour convertir la sous-chaîne correspondante "World" en majuscules avant de la remplacer.

// La méthode replace() offre une grande flexibilité pour effectuer des remplacements dans les chaînes de caractères, que ce soit avec une valeur simple, une expression régulière ou une fonction de rappel.
