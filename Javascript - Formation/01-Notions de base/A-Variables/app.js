// En JavaScript, les variables sont utilisées pour stocker des valeurs et les réutiliser ultérieurement dans le code. JavaScript offre trois mots clés pour déclarer des variables : var, let, et const. Cependant, depuis l'introduction d'ES6 (ECMAScript 2015), il est recommandé d'utiliser let et const plutôt que var

//  VAR : la var était le seul moyen de déclarer des variables en JavaScript avant l'introduction d'ES6. La portée des variables déclarées avec var est fonctionnelle ou globale. Cela signifie que la variable existe à l'intérieur de la fonction la plus proche qui l'encadre, ou à l'échelle globale si elle est déclarée en dehors de toutes les fonctions. 

// Une variable var peut être redéclarée et mise à jour à tout moment dans la même portée. Les variables var sont soumises à la "hoisting" (également appelée "élévation"), ce qui signifie que leur déclaration est déplacée en haut de la portée lors de l'exécution du code. Cela signifie que vous pouvez accéder à la variable var avant de l'avoir déclarée explicitement.

var maVariableVar = 10;
console.log(maVariableVar); // Affiche 10

// Porté
function exemple() {
  var maVariableVar2 = 20;
  console.log(maVariableVar2); // Affiche 20
}

exemple()

// console.log(maVariableVar2); // Erreur : la variable n'est pas défini (en dehors de la portée)

// Réasigniation
maVariableVar = 200;
console.log(maVariableVar);


// Déclaration sans valeurs
// var maVariableVar;


// LET : les let a été introduit avec ES6 pour résoudre certains problèmes liés à la portée des variables var. La portée des variables déclarées avec let est de bloc. Cela signifie que la variable existe uniquement à l'intérieur du bloc le plus proche qui l'encadre (par exemple, une fonction, une boucle for, une instruction if, etc.). Une variable let peut être mise à jour, mais elle ne peut pas être redéclarée dans la même portée. Les variables let ne sont pas soumises à la "hoisting". Vous devez les déclarer avant de les utiliser.


let maVariableLet = 10;
console.log(maVariableLet); // Affiche 10

// Porté
if (true) {
  let maVariableLet2 = 20;
  console.log(maVariableLet2); // Affiche 20
}

// console.log(variableLet2); // Erreur : la variable n'est pas défini (en dehors de la portée)

// Réasigniation
maVariableLet = 100;
console.log(maVariableLet);

// Déclaration sans valeurs
let maVariableLet3 ; 


// CONST : les const est également apparu avec ES6 et est utilisé pour déclarer des variables dont la valeur ne peut pas être réassignée. Comme let, la portée des variables const est de bloc. Une variable const doit être initialisée lors de sa déclaration et ne peut pas être réassignée par la suite. Les variables const ne sont pas soumises à la "hoisting" et doivent être déclarées avant d'être utilisées.


// Porté
const maVariableConst = 10;
console.log(maVariableConst); // Affiche 10

if (true) {
  const maVariableConst2 = 20;
  console.log(maVariableConst2); // Affiche 20
}

// console.log(maVariableConst2); //  Erreur : y n'est pas défini (en dehors de la portée)


// Réasigniation
// maVariableConst = 5; // Erreur : La réaffectation de la variable constante génère une erreur

//  Attention si la variable est un objet

const myObj = { a: 5}
// myObjt = {b: 2} //Erreur La const n'est pas réasigniable
myObj = {a : 2} // Aucune erreur car ici nous changons l'objets et non la variable


// Déclaration sans valeur
// const z; // Erreur : La constante doit être initialisée lors de la déclaration






// En résumé, var est obsolète et il est préférable d'utiliser let pour déclarer des variables qui doivent être réassignées, et const pour les variables dont la valeur doit rester constante tout au long du programme. L'utilisation de let et const permet une meilleure gestion des portées et contribue à éviter les erreurs liées aux redéclarations et aux réaffectations accidentelles.









