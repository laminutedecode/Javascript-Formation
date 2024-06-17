// La méthode join() est utilisée pour créer une chaîne de caractères en concaténant tous les éléments d'un tableau. Elle renvoie cette chaîne de caractères résultante.

// La syntaxe de join() est la suivante : array.join(separator), où separator est une chaîne de caractères optionnelle qui spécifie le séparateur à utiliser entre les éléments du tableau lors de la création de la chaîne. Par défaut, le séparateur est une virgule (,).

// Exemple 1 :

let fruits = ['pomme', 'banane', 'orange'];
let fruitsString = fruits.join();
console.log(fruitsString);  // affiche 'pomme,banane,orange'
// Dans cet exemple, la méthode join() est utilisée sans spécifier de séparateur. Les éléments du tableau fruits sont concaténés en utilisant une virgule comme séparateur par défaut, ce qui crée une chaîne de caractères fruitsString contenant tous les éléments du tableau séparés par des virgules.

// Exemple 2 :


let numbers = [1, 2, 3];
let numbersString = numbers.join('-');
console.log(numbersString);  // affiche '1-2-3'
// Dans cet exemple, la méthode join('-') est utilisée en spécifiant un tiret (-) comme séparateur. Les éléments du tableau numbers sont concaténés en utilisant un tiret comme séparateur, créant ainsi une chaîne de caractères numbersString avec les éléments du tableau séparés par des tirets.

// La méthode join() est utile lorsque vous souhaitez transformer un tableau en une chaîne de caractères, en utilisant un séparateur spécifique si nécessaire.