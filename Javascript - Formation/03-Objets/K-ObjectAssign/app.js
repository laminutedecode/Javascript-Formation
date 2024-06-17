// La méthode Object.assign() est une méthode statique de l'objet Object en JavaScript. Elle permet de copier les valeurs de toutes les propriétés énumérables de un ou plusieurs objets source vers un objet cible. Elle peut également être utilisée pour fusionner plusieurs objets en un seul.

// La syntaxe de la méthode Object.assign() est la suivante :

// Object.assign(target, ...sources)
// target : L'objet cible où les propriétés des objets sources seront copiées.
// sources : Un ou plusieurs objets source dont les propriétés seront copiées vers l'objet cible.


// La méthode Object.assign() retourne l'objet cible avec les propriétés des objets sources copiées. L'objet cible est donc modifié directement.

// Voici un exemple d'utilisation de la méthode Object.assign() :


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj);
// Résultat : { a: 1, b: 2, c: 3, d: 4 }
// Dans cet exemple, les propriétés de obj1 et obj2 sont copiées dans un nouvel objet vide en utilisant Object.assign(). L'objet cible {} est fourni en premier argument, suivi des objets sources obj1 et obj2. Le résultat est un nouvel objet mergedObj qui contient les propriétés de obj1 et obj2 combinées.

// Si plusieurs objets sources ont des propriétés avec les mêmes noms, la dernière valeur affectée écrasera les précédentes. Voici un exemple :


const obj3 = { a: 1, b: 2 };
const obj4 = { b: 3, c: 4 };

const mergedObj2 = Object.assign({}, obj3, obj4);

console.log(mergedObj2);
// Résultat : { a: 1, b: 3, c: 4 }
// Dans cet exemple, la propriété b de obj2 écrase la valeur précédente de b provenant de obj1 dans l'objet cible mergedObj.

// Il est important de noter que Object.assign() effectue une copie superficielle (shallow copy), ce qui signifie que les valeurs des propriétés qui sont des objets seront référencées et non clonées. Si vous souhaitez effectuer une copie en profondeur (deep copy), vous devrez utiliser d'autres méthodes ou techniques appropriées.

// En résumé, Object.assign() est une méthode pratique pour copier les propriétés d'objets sources vers un objet cible ou pour fusionner plusieurs objets en un seul.