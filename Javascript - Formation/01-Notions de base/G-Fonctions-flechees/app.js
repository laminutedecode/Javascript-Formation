// En JavaScript, les fonctions fléchées, également appelées "fonctions arrow", sont une autre syntaxe pour déclarer des fonctions. Elles ont été introduites avec ES6 (ECMAScript 2015) et offrent une syntaxe plus concise et une gestion simplifiée du contexte this


// ###########  Syntaxe de base :
// La syntaxe d'une fonction fléchée est plus courte et plus concise que celle des fonctions classiques. Elle se compose d'un ensemble de paramètres entre parenthèses, suivis d'une flèche (=>), et enfin du corps de la fonction entre accolades si nécessaire.

const afficherMessage = () => {
  console.log("Bonjour, bienvenue !");
};

afficherMessage()


// ########### Paramètres de la fonction :
// Les paramètres d'une fonction fléchée sont spécifiés entre parenthèses, tout comme pour les fonctions classiques. Si la fonction ne prend qu'un seul paramètre, les parenthèses peuvent être omises. Si la fonction ne prend aucun paramètre, les parenthèses vides () sont utilisées.

const addition = (a, b) => {
  return a + b;
};

const multiplication = (a, b) => a * b;


const afficherNom = nom => console.log(`Bonjour, ${nom} !`);

afficherNom('Jonathan')



//  ########## Valeur de retour implicite :
// Si le corps d'une fonction fléchée ne contient qu'une seule expression, la valeur de retour peut être implicite. Dans ce cas, les accolades et le mot clé return peuvent être omis.

const myFunc = (a, b) => a * b;

console.log(myFunc(2,2));


// ####### Utilisation du this :
// Les fonctions fléchées n'ont pas leur propre contexte this. À la place, elles conservent le contexte this du contexte entourant dans lequel elles sont définies. Cela évite les problèmes courants liés au changement du contexte this dans les fonctions classiques.

const obj = {

  nom: 'Jonathan',
  
  // Le contexte this en JavaScript fait référence à l'objet sur lequel une méthode est appelée ou à l'objet global (l'objet window dans un navigateur) lorsque this est utilisé en dehors de toute méthode. Le contexte this est dynamique et dépend de la façon dont une fonction est appelée.

  // Dans les fonctions classiques, le contexte this peut varier en fonction de la manière dont la fonction est appelée. Lorsqu'une fonction classique est appelée directement, sans contexte spécifique, le contexte this fait référence à l'objet global (window dans un navigateur, ou global dans Node.js).
  myFunc: function(){console.log(`Je suis ${this.nom}`);},


  // Contrairement aux fonctions classiques, les fonctions fléchées n'ont pas leur propre contexte this. Au lieu de cela, elles conservent le contexte this du contexte englobant dans lequel elles sont définies. Cela peut être utile pour éviter les problèmes liés au changement du contexte this dans les fonctions classiques.
  myFunc2: () => {console.log(`Je suis ${this.nom}`);},

};

obj.myFunc(); // Undefined : les fonction flechée non pas accès au context this

obj.myFunc2() // Les fonctions classique ont accès au contexte this



// Pour utiliser le  mot clé this dans une fonction fléchée
const personne = {
  nom: "John",
  afficherNom: function() {
    setTimeout(() => {
      console.log(this.nom);
    }, 1000);
  }
};

personne.afficherNom(); // Affiche "John" après une seconde




// Avantages des fonctions fléchées :
// Les fonctions fléchées présentent plusieurs avantages par rapport aux fonctions classiques :

// Syntaxe plus concise et lisible.
// Pas de liens au contexte this, ce qui évite les erreurs courantes.
// Pas besoin d'utiliser le mot clé function pour déclarer une fonction.
// Utiles pour les fonctions courtes et les fonctions de rappel (callback functions).
// Cependant, il convient de noter que les fonctions fléchées ne conviennent pas à toutes les situations. Elles ne peuvent pas être utilisées comme constructeurs d'objets et ne disposent pas de certaines fonctionnalités avancées des fonctions classiques, comme le mot clé arguments.