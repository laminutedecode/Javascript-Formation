// Les paramètres par défaut (default parameters) sont une fonctionnalité introduite dans ECMAScript 2015 (ES6) qui permet de spécifier des valeurs par défaut pour les paramètres d'une fonction. Cela signifie que si aucun argument n'est passé à la fonction pour un paramètre donné, la valeur par défaut sera utilisée à la place.

// Voici un exemple d'utilisation des paramètres par défaut :


function maFonction(param1, param2 = 'valeur par défaut') {
  console.log(param1);
  console.log(param2);
}

maFonction('valeur 1'); // Affiche: "valeur 1" suivi de "valeur par défaut"
maFonction('valeur 1', 'valeur 2'); // Affiche: "valeur 1" suivi de "valeur 2"

// Dans cet exemple, nous définissons une fonction maFonction avec deux paramètres : param1 et param2. Le paramètre param2 est affecté à la valeur par défaut 'valeur par défaut'.

// Lorsque nous appelons maFonction avec un seul argument ('valeur 1'), la valeur par défaut est utilisée pour param2, car aucun argument n'est fourni pour ce paramètre. Ainsi, 'valeur par défaut' est affiché dans la console pour param2.

// Lorsque nous appelons maFonction avec deux arguments ('valeur 1' et 'valeur 2'), les valeurs fournies sont utilisées pour param1 et param2. Donc, 'valeur 1' est affiché pour param1 et 'valeur 2' est affiché pour param2.

// Les paramètres par défaut peuvent également être utilisés avec des expressions plus complexes, y compris des appels de fonction ou des opérations arithmétiques. Par exemple :


function multiplier(a, b = 2) {
  return a * b;
}

console.log(multiplier(3)); // Affiche: 6 (3 * 2)
console.log(multiplier(3, 4)); // Affiche: 12 (3 * 4)
// Dans cet exemple, le paramètre b est défini avec une valeur par défaut de 2. Si aucun argument n'est passé pour b, la valeur par défaut de 2 est utilisée. Ainsi, lors de l'appel à multiplier(3), la valeur de retour est 6 (3 * 2).

// Les paramètres par défaut offrent une manière pratique de spécifier des valeurs par défaut pour les paramètres de fonction, évitant ainsi d'avoir à vérifier si les arguments ont été fournis ou non. Cela améliore la lisibilité et la simplicité du code.