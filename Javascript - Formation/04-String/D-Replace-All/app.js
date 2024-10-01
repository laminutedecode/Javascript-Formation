// La méthode replaceAll() est une méthode introduite dans ECMAScript 2021 (ES12) pour les chaînes de caractères en JavaScript. Elle permet de remplacer toutes les occurrences d'une sous-chaîne par une autre sous-chaîne dans une chaîne donnée.

// La syntaxe de replaceAll() est la suivante :


// str.replaceAll(searchValue, replaceValue);


// str est la chaîne de caractères sur laquelle la recherche et le remplacement doivent être effectués.
// searchValue est la sous-chaîne que tu souhaites rechercher et remplacer.
// replaceValue est la sous-chaîne par laquelle tu veux remplacer toutes les occurrences de searchValue.
// Voici un exemple pour mieux comprendre son utilisation :


const message = 'Bonjour à tous !';
const newMessage = message.replaceAll('o', 'e');

console.log(newMessage);


// Dans cet exemple, nous avons une chaîne message contenant le texte "Bonjour à tous !". En utilisant replaceAll('o', 'e'), nous remplaçons toutes les occurrences de la lettre 'o' par la lettre 'e'. La sortie affichée sera :

// La méthode replaceAll() effectue une recherche globale dans la chaîne, ce qui signifie qu'elle remplace toutes les occurrences trouvées. Par défaut, elle est sensible à la casse, ce qui signifie qu'elle fera la distinction entre les lettres majuscules et minuscules lors de la recherche et du remplacement.

// Il est important de noter que la méthode replaceAll() renvoie une nouvelle chaîne de caractères avec toutes les occurrences remplacées. Elle ne modifie pas la chaîne d'origine.

// Cependant, il est à noter que replaceAll() n'est pas pris en charge dans les navigateurs et les environnements plus anciens. Si tu dois prendre en charge des versions antérieures d'ECMAScript, tu peux utiliser des alternatives telles que l'utilisation de l'expression régulière avec la méthode replace() ou l'utilisation de boucles pour effectuer des remplacements multiples.

