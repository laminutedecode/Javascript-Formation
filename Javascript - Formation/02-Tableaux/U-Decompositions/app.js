// La décomposition, également appelée « destructuring » en anglais, est une fonctionnalité de JavaScript qui permet d'extraire des valeurs d'objets ou de tableaux de manière concise en les assignant à des variables distinctes. Cela facilite l'accès et la manipulation des données contenues dans ces structures.


// Décomposition de tableaux :

// Lors de la décomposition d'un tableau, vous pouvez extraire les éléments du tableau et les assigner à des variables individuelles. Voici un exemple :

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Affiche: 1
console.log(second); // Affiche: 2
console.log(rest); // Affiche: [3, 4, 5]
// Dans cet exemple, les variables first et second reçoivent respectivement les deux premiers éléments du tableau numbers. La syntaxe ...rest permet de créer un tableau contenant le reste des éléments du tableau d'origine.

// La décomposition est un moyen puissant de travailler avec des structures de données complexes et d'accéder facilement à leurs éléments. Elle peut être utilisée dans les déclarations de variables ou lors de l'assignation de valeurs.

