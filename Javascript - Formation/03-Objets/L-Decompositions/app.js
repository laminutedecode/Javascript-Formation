// La décomposition, également appelée « destructuring » en anglais, est une fonctionnalité de JavaScript qui permet d'extraire des valeurs d'objets ou de tableaux de manière concise en les assignant à des variables distinctes. Cela facilite l'accès et la manipulation des données contenues dans ces structures.

// La décomposition peut être utilisée avec des objets ou des tableaux. Voici comment elle fonctionne pour chaque cas :

// Décomposition d'objets :

// Lors de la décomposition d'un objet, vous pouvez extraire les valeurs des propriétés de l'objet et les assigner à des variables ayant les mêmes noms que les propriétés. Voici un exemple :


const person = { name: 'John', age: 30, city: 'Paris' };

const { name, age, city } = person;

console.log(name); // Affiche: 'John'
console.log(age); // Affiche: 30
console.log(city); // Affiche: 'Paris'

// Dans cet exemple, les variables name, age et city sont créées et les valeurs correspondantes sont extraites de l'objet person.