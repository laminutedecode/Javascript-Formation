// Les modules sont une fonctionnalité du langage JavaScript introduite dans ECMAScript 2015 (ES6) qui permet d'organiser et de structurer le code en séparant les fonctionnalités en différents fichiers. Les modules offrent une approche modulaire pour le développement d'applications JavaScript, ce qui facilite la gestion des dépendances et la réutilisation du code.

import { sum, multiply } from './myModule.js';

console.log(sum(2, 3)); // Affiche: 5
console.log(multiply(2, 3)); // Affiche: 6


// Dans cet exemple, nous exportons les fonctions sum et multiply depuis le module math.js. Ensuite, nous les importons dans le module app.js en utilisant la déclaration import. Cela nous permet d'utiliser les fonctions sum et multiply dans le module app.js pour effectuer des calculs.

// Les modules JavaScript offrent une manière efficace et structurée d'organiser le code et de gérer les dépendances dans les applications JavaScript. Ils sont largement utilisés dans le développement moderne d'applications front-end et back-end.