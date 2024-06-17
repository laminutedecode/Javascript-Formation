// Les prototypes en JavaScript sont un mécanisme fondamental pour permettre l'héritage et la gestion des propriétés et des méthodes d'objets. Chaque objet en JavaScript possède un prototype qui est utilisé pour rechercher des propriétés et des méthodes lorsque celles-ci ne sont pas directement présentes dans l'objet lui-même.

// Chaque fonction en JavaScript a une propriété spéciale appelée prototype, qui est un objet par défaut. Lorsque cette fonction est utilisée comme constructeur avec le mot-clé new, l'objet créé hérite du prototype de cette fonction constructeur.

// Voici comment les prototypes fonctionnent en pratique :

// Chaque objet possède une référence interne vers son prototype, accessible via la propriété __proto__ (également appelée "dunder proto").
// Lorsque nous essayons d'accéder à une propriété ou à une méthode d'un objet, JavaScript recherche d'abord cette propriété dans l'objet lui-même.
// Si la propriété n'est pas trouvée dans l'objet, JavaScript recherche ensuite dans le prototype de l'objet en utilisant la référence __proto__.
// Ce processus continue jusqu'à ce que la propriété soit trouvée ou que le sommet de la chaîne de prototypes soit atteint (qui est généralement Object.prototype).
// Pour mieux comprendre les prototypes, voici un exemple :

// Définition d'une fonction constructeur
function Personne(nom) {
  this.nom = nom;
}

// Ajout d'une méthode à la fonction constructeur via le prototype
Personne.prototype.saluer = function() {
  console.log(`Bonjour, je m'appelle ${this.nom}.`);
}

// Création d'une instance de Personne
const personne1 = new Personne('Alice');

// Appel de la méthode saluer de l'instance
personne1.saluer(); // Affiche: Bonjour, je m'appelle Alice.


// Dans cet exemple, nous avons une fonction constructeur Personne qui crée des objets représentant des personnes. Nous ajoutons une méthode saluer à la fonction constructeur via son prototype (Personne.prototype). Lorsque nous créons une instance de Personne avec new Personne('Alice'), l'objet créé (personne1) hérite du prototype de Personne et peut donc accéder à la méthode saluer.

// Les prototypes permettent de partager des propriétés et des méthodes communes entre plusieurs objets créés avec une même fonction constructeur. Cela permet d'économiser de la mémoire, car les propriétés et les méthodes communes ne sont pas dupliquées pour chaque instance, mais sont partagées via le prototype.

// Il est important de noter que les prototypes sont une caractéristique inhérente de JavaScript et qu'ils sont utilisés de manière transparente par le langage lui-même. Cependant, il est recommandé de faire preuve de prudence lors de la modification directe du prototype des objets natifs (comme Object.prototype, Array.prototype, etc.), car cela peut avoir des effets indésirables sur tout le code qui les utilise.

