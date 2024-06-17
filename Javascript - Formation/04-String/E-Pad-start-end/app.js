// Les méthodes padStart() et padEnd() sont des méthodes de chaîne de caractères en JavaScript qui permettent de remplir une chaîne avec des caractères supplémentaires à gauche ou à droite jusqu'à une longueur cible spécifiée.

// La méthode padStart() est utilisée pour remplir une chaîne avec des caractères supplémentaires à gauche jusqu'à atteindre la longueur cible spécifiée. Voici la syntaxe de padStart() :


// str.padStart(targetLength [, padString]);
// str est la chaîne de caractères à remplir.
// targetLength est la longueur cible de la chaîne résultante après remplissage.
// padString (optionnel) est la chaîne de caractères utilisée pour le remplissage. Par défaut, il s'agit d'un espace.


const str = 'hello';
const paddedStr = str.padStart(10, 'x');

console.log(paddedStr); // Affiche: "xxxxxhello"
// Dans cet exemple, la chaîne str est remplie avec des caractères 'x' à gauche jusqu'à atteindre une longueur de 10 caractères. La valeur de paddedStr sera "xxxxxhello".

// La méthode padEnd() est similaire à padStart(), mais elle remplit la chaîne avec des caractères supplémentaires à droite jusqu'à atteindre la longueur cible spécifiée. Voici la syntaxe de padEnd() :


// str.padEnd(targetLength [, padString]);
// str est la chaîne de caractères à remplir.
// targetLength est la longueur cible de la chaîne résultante après remplissage.
// padString (optionnel) est la chaîne de caractères utilisée pour le remplissage. Par défaut, il s'agit d'un espace.



const str2 = 'hello';
const paddedStr2 = str2.padEnd(10, 'x');

console.log(paddedStr); // Affiche: "helloxxxxx"
// Dans cet exemple, la chaîne str est remplie avec des caractères 'x' à droite jusqu'à atteindre une longueur de 10 caractères. La valeur de paddedStr sera "helloxxxxx".

// Les méthodes padStart() et padEnd() sont souvent utilisées pour formater les chaînes de caractères avec une longueur fixe, en ajoutant des espaces ou d'autres caractères de remplissage pour aligner le contenu.

