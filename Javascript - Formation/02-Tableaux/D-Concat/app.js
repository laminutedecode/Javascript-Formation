// La méthode concat() est utilisée pour fusionner deux ou plusieurs tableaux en créant un nouveau tableau. Elle ne modifie pas les tableaux d'origine, mais renvoie un nouveau tableau contenant les éléments combinés.

// La syntaxe de concat() est la suivante : array.concat(array1, array2, ..., arrayN), où array1, array2, ..., arrayN sont les tableaux ou les éléments individuels à concaténer avec le tableau d'origine.

// Exemple 1 :


let fruits1 = ['pomme', 'banane'];
let fruits2 = ['orange', 'kiwi'];
let fruitsConcat = fruits1.concat(fruits2);

console.log(fruitsConcat);  // affiche ['pomme', 'banane', 'orange', 'kiwi']
// Dans cet exemple, les tableaux fruits1 et fruits2 sont concaténés en utilisant la méthode concat(), créant ainsi un nouveau tableau fruitsConcat qui contient tous les éléments des deux tableaux d'origine.

// Exemple 2 :

let numbers = [1, 2, 3];
let moreNumbers = numbers.concat(4, 5, 6);
console.log(moreNumbers);  // affiche [1, 2, 3, 4, 5, 6]
// Dans cet exemple, la méthode concat() est utilisée pour fusionner le tableau numbers avec les éléments individuels 4, 5 et 6. Le résultat est un nouveau tableau moreNumbers contenant tous les éléments combinés.

// La méthode concat() peut être utilisée avec plusieurs tableaux ou des éléments individuels à concaténer. Elle permet de créer facilement un nouveau tableau qui combine les éléments de plusieurs sources sans modifier les tableaux d'origine.