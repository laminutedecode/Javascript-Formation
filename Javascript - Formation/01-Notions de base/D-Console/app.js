// La console en JavaScript est un outil de débogage puissant qui permet d'afficher des informations et de tester des fonctionnalités dans le navigateur ou dans l'environnement d'exécution côté serveur.

// console.log : Cette méthode est utilisée pour afficher des messages informatifs dans la console. Elle est couramment utilisée pour afficher des valeurs, des variables ou des informations de débogage.
console.log("Bonjour, monde !");


// console.error : Cette méthode est utilisée pour afficher des erreurs dans la console. Elle est utilisée pour signaler des erreurs critiques ou des problèmes qui doivent être résolus. 
console.error("Une erreur s'est produite !");


// console.warn : Cette méthode est utilisée pour afficher des avertissements dans la console. Elle est généralement utilisée pour signaler des problèmes potentiels ou des erreurs non critiques. 
console.warn("Attention ! Cette action n'est pas recommandée !");



// console.info : Cette méthode est utilisée pour afficher des informations supplémentaires dans la console. Elle est similaire à console.log, mais est spécifiquement utilisée pour fournir des informations supplémentaires ou des détails spécifiques. 
console.info("Voici une information supplémentaire.");


// console.clear(): La méthode console.clear() est utilisée pour effacer le contenu de la console.
// console.clear();


// console.table():
// La méthode console.table() est utilisée pour afficher un tableau sous forme tabulaire dans la console.

const fruits = [
  { nom: "Pomme", couleur: "Rouge" },
  { nom: "Banane", couleur: "Jaune" },
  { nom: "Orange", couleur: "Orange" }
];

console.table(fruits);
// Affiche le tableau des fruits sous forme tabulaire dans la console
// Ces méthodes sont seulement quelques-unes parmi les nombreuses méthodes disponibles dans l'objet console de JavaScript. Elles sont utiles pour afficher des informations, des erreurs, des avertissements, des tableaux, etc., dans la console pour le débogage et la vérification de votre code.



//  Ajouter de la couleur
console.log("%c Hello",
"color: red")


// Faire des groupe
console.group('Mon groupe');
console.log('Item 1');
console.log('Item 2');
console.log('Item 3');
console.groupEnd();

console.groupCollapsed('Mon Collapse');
console.log('Item 1');
console.log('Item 2');
console.log('Item 3');
