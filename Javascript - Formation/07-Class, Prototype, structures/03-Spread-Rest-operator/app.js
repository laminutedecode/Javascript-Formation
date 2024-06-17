// Le spread operator et le reste operator sont deux fonctionnalités liées de JavaScript qui utilisent la même syntaxe des trois points de suspension (...), mais ils ont des utilisations différentes.

// Spread Operator (Opérateur de propagation) :
// Le spread operator est utilisé pour décomposer des éléments (tableaux, objets) en plusieurs éléments individuels. Il permet de copier les valeurs d'un tableau ou les propriétés d'un objet dans un nouvel emplacement. Il peut être utilisé dans différents contextes.
// Copier les éléments d'un tableau :

const tableau1 = [1, 2, 3];
const tableau2 = [...tableau1];

console.log(tableau2); // Affiche: [1, 2, 3]

// Fusionner plusieurs tableaux en un seul :

const myTab1 = [1, 2, 3];
const myTab2 = [4, 5, 6];
const tableauFusionne = [...myTab1, ...myTab2];

console.log(tableauFusionne); // Affiche: [1, 2, 3, 4, 5, 6]


// Copier les propriétés d'un objet dans un nouvel objet :

const objet1 = { prop1: 'valeur1', prop2: 'valeur2' };
const objet2 = { ...objet1 };

console.log(objet2); // Affiche: { prop1: 'valeur1', prop2: 'valeur2' }

// Fusionner plusieurs objets en un seul :

const myObj1 = { prop1: 'valeur1' };
const myObj2 = { prop2: 'valeur2' };
const objetFusionne = { ...myObj1, ...myObj2 };

console.log(objetFusionne); // Affiche: { prop1: 'valeur1', prop2: 'valeur2' }


// Rest Parameter (Paramètre rest) :
// Le reste operator est utilisé dans la déclaration d'une fonction pour représenter un nombre variable d'arguments en tant que tableau. Cela permet de traiter un nombre indéfini d'arguments de manière plus flexible. Voici un exemple :

function maFonction(param1, param2, ...autresParametres) {
  console.log(param1);
  console.log(param2);
  console.log(autresParametres);
}

maFonction(1, 2, 3, 4, 5);
// Dans cet exemple, les paramètres param1 et param2 reçoivent les deux premiers arguments, puis le reste des arguments (3, 4, 5) est rassemblé dans le tableau autresParametres. Ainsi, les valeurs supplémentaires peuvent être traitées dans le corps de la fonction.

// Le spread operator et le reste operator sont des fonctionnalités puissantes qui permettent une manipulation flexible des éléments. Ils améliorent la lisibilité et la concision du code en évitant des constructions plus complexes. Il est important de comprendre leur différence et d'utiliser chaque opérateur dans le bon contexte.

