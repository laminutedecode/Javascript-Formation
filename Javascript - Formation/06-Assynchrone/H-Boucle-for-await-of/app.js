// La boucle for await est une extension de la boucle for introduite avec ECMAScript 2018 (ES9) pour itérer de manière asynchrone sur des objets itérables contenant des promesses. Elle est conçue spécifiquement pour travailler avec async/await et simplifier la gestion d'opérations asynchrones dans les boucles.

// La syntaxe de la boucle for await est la suivante :


for await (variable of itérable) {
  // Corps de la boucle
}

// L'expression itérable dans la boucle for await doit être un objet itérable contenant des promesses (ou des objets pouvant être résolus en tant que promesses). La boucle itérera sur chaque élément de l'itérable de manière asynchrone, en attendant que chaque promesse soit résolue avant de passer à l'itération suivante.

// Voici un exemple pour illustrer son utilisation :


const promesses = [
  new Promise((resolve) => setTimeout(() => resolve("Résultat 1"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve("Résultat 2"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Résultat 3"), 3000)),
];

async function itérerPromesses() {
  for await (const résultat of promesses) {
    console.log("Résultat :", résultat);
  }
}

itérerPromesses();
// Dans cet exemple, nous avons un tableau promesses qui contient trois promesses représentant des opérations asynchrones simulées avec différents délais. Nous utilisons ensuite la boucle for await pour itérer de manière asynchrone sur chaque promesse du tableau.

// À chaque itération de la boucle, la variable résultat contient la valeur résolue de la promesse correspondante. Le corps de la boucle affiche simplement le résultat dans la console.

// La boucle for await s'arrête automatiquement lorsque toutes les promesses de l'itérable sont résolues. Si une ou plusieurs des promesses sont rejetées, une exception sera levée, et le bloc catch le plus proche autour de la boucle for await (ou une fonction appelante) pourra la capturer.

// La boucle for await est particulièrement utile lorsque tu as besoin d'itérer sur plusieurs opérations asynchrones en parallèle et d'attendre leur achèvement. Elle facilite la gestion des promesses dans les boucles, en évitant d'avoir à utiliser des constructions plus complexes avec Promise.all ou des boucles manuelles avec await.